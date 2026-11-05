#!/usr/bin/env node
// Follow Up Boss connector for the realtor-pipeline plugin.
// A dependency-free MCP server over stdio (newline-delimited JSON-RPC 2.0).
// Auth: the agent's personal Follow Up Boss API key (HTTP Basic, key as username).
// Writes are gated twice: the plugin's PreToolUse hook makes Claude Code ask the
// user, and the skills show a preview before calling a write tool.

import { createInterface } from "node:readline";

const API_KEY = (process.env.FUB_API_KEY || "").trim();
const BASE = (process.env.FUB_BASE_URL || "https://api.followupboss.com/v1").replace(/\/$/, "");
const SYSTEM = process.env.FUB_SYSTEM || "realtor-pipeline";
const SYSTEM_KEY = process.env.FUB_SYSTEM_KEY || "";
const VERSION = "0.7.0";

const NOT_CONNECTED =
  "Follow Up Boss isn't connected yet. In Follow Up Boss, go to Admin → API, create an API key, " +
  "then turn the realtor-pipeline plugin off and on again (or reinstall it) and paste the key when asked. " +
  "Until then, use the copy-and-paste updates.";

async function fub(method, path, { query, body } = {}) {
  if (!API_KEY || API_KEY.startsWith("${")) throw new UserError(NOT_CONNECTED);
  const url = new URL(BASE + path);
  for (const [k, v] of Object.entries(query || {})) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  const headers = {
    Authorization: "Basic " + Buffer.from(API_KEY + ":").toString("base64"),
    Accept: "application/json",
    "X-System": SYSTEM,
  };
  if (SYSTEM_KEY) headers["X-System-Key"] = SYSTEM_KEY;
  if (body) headers["Content-Type"] = "application/json";
  let res;
  try {
    res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(20000) });
  } catch (e) {
    throw new UserError(`Couldn't reach Follow Up Boss (${e.name === "TimeoutError" ? "timed out" : e.message}). Check the internet connection and try again.`);
  }
  const text = await res.text();
  let data; try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  if (res.status === 401) throw new UserError("Follow Up Boss rejected the API key. It may have been deleted or mistyped. Create a new key in Follow Up Boss (Admin → API) and re-enter it.");
  if (res.status === 403) throw new UserError("Follow Up Boss says this API key isn't allowed to do that. Danielle's account role may not have permission; ask her broker or team admin.");
  if (res.status === 429) throw new UserError("Follow Up Boss is limiting requests right now. Wait a minute and try again.");
  if (!res.ok) throw new UserError(`Follow Up Boss returned an error (${res.status}): ${data.errorMessage || data.message || text.slice(0, 300)}`);
  return data;
}

class UserError extends Error {}

const slimPerson = (p) => p && ({
  id: p.id, name: p.name || [p.firstName, p.lastName].filter(Boolean).join(" "),
  stage: p.stage, source: p.source, tags: p.tags,
  emails: (p.emails || []).map((e) => e.value), phones: (p.phones || []).map((x) => x.value),
  assignedTo: p.assignedTo, lastActivity: p.lastActivity, created: p.created,
});
const today = () => new Date().toISOString().slice(0, 10);

const TOOLS = [
  {
    name: "fub_status", write: false,
    description: "Check whether Follow Up Boss is connected and whose account the API key belongs to. Call this first if unsure.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: async () => { const me = await fub("GET", "/me"); return { connected: true, user: me.name || [me.firstName, me.lastName].filter(Boolean).join(" "), email: me.email, role: me.role }; },
  },
  {
    name: "fub_find_people", write: false,
    description: "Find people (contacts) in Follow Up Boss by name, email, phone, stage, or tag. Returns a short list with each person's id, stage, tags, and contact info.",
    inputSchema: { type: "object", additionalProperties: false, properties: {
      name: { type: "string" }, email: { type: "string" }, phone: { type: "string" },
      stage: { type: "string" }, tag: { type: "string" },
      limit: { type: "integer", minimum: 1, maximum: 100, default: 25 },
    } },
    run: async (a) => {
      const d = await fub("GET", "/people", { query: { name: a.name, email: a.email, phone: a.phone, stage: a.stage, tags: a.tag, limit: a.limit || 25, sort: "-lastActivity" } });
      return { total: d._metadata?.total, people: (d.people || []).map(slimPerson) };
    },
  },
  {
    name: "fub_get_person", write: false,
    description: "Get one Follow Up Boss person by id, with their recent notes and open tasks.",
    inputSchema: { type: "object", required: ["person_id"], additionalProperties: false, properties: { person_id: { type: "integer" } } },
    run: async (a) => {
      const [p, notes, tasks] = await Promise.all([
        fub("GET", `/people/${a.person_id}`),
        fub("GET", "/notes", { query: { personId: a.person_id, limit: 10, sort: "-created" } }).catch(() => ({ notes: [] })),
        fub("GET", "/tasks", { query: { personId: a.person_id, isCompleted: false, limit: 20 } }).catch(() => ({ tasks: [] })),
      ]);
      return { person: slimPerson(p), notes: (notes.notes || []).map((n) => ({ created: n.created, subject: n.subject, body: n.body })), openTasks: (tasks.tasks || []).map((t) => ({ id: t.id, name: t.name, type: t.type, dueDate: t.dueDate })) };
    },
  },
  {
    name: "fub_list_stages", write: false,
    description: "List the stage names set up in this Follow Up Boss account, in order.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: async () => { const d = await fub("GET", "/stages", { query: { limit: 100 } }); return { stages: (d.stages || []).map((s) => s.name) }; },
  },
  {
    name: "fub_list_tasks", write: false,
    description: "List open (not completed) Follow Up Boss tasks, optionally only those due on or before a date (YYYY-MM-DD).",
    inputSchema: { type: "object", additionalProperties: false, properties: { due_by: { type: "string", description: "YYYY-MM-DD" }, limit: { type: "integer", minimum: 1, maximum: 100, default: 50 } } },
    run: async (a) => {
      const d = await fub("GET", "/tasks", { query: { isCompleted: false, limit: a.limit || 50, sort: "dueDate" } });
      let tasks = (d.tasks || []).map((t) => ({ id: t.id, personId: t.personId, name: t.name, type: t.type, dueDate: t.dueDate }));
      if (a.due_by) tasks = tasks.filter((t) => !t.dueDate || t.dueDate.slice(0, 10) <= a.due_by);
      return { tasks };
    },
  },
  {
    name: "fub_add_lead", write: true,
    description: "WRITE: Add a new lead to Follow Up Boss (sent as a lead event so Follow Up Boss de-duplicates and runs its normal new-lead automations). Only call after the user approved the preview.",
    inputSchema: { type: "object", required: ["first_name", "source"], additionalProperties: false, properties: {
      first_name: { type: "string" }, last_name: { type: "string" },
      email: { type: "string" }, phone: { type: "string" },
      source: { type: "string", description: "Where the lead came from, e.g. HAR.com, Zillow, LoopNet" },
      type: { type: "string", enum: ["Inquiry", "Registration", "Property Inquiry", "Seller Inquiry", "General Inquiry"], default: "Inquiry" },
      message: { type: "string", description: "The lead's own message, if any" },
      tags: { type: "array", items: { type: "string" } },
    } },
    run: async (a) => {
      const person = { firstName: a.first_name, lastName: a.last_name, tags: a.tags };
      if (a.email) person.emails = [{ value: a.email }];
      if (a.phone) person.phones = [{ value: a.phone }];
      const d = await fub("POST", "/events", { body: { source: a.source, system: SYSTEM, type: a.type || "Inquiry", message: a.message, person } });
      return { added: true, person: slimPerson(d.person || d) };
    },
  },
  {
    name: "fub_update_person", write: true,
    description: "WRITE: Change a Follow Up Boss person's stage and/or add tags (existing tags are kept). Only call after the user approved the preview.",
    inputSchema: { type: "object", required: ["person_id"], additionalProperties: false, properties: {
      person_id: { type: "integer" }, stage: { type: "string" }, add_tags: { type: "array", items: { type: "string" } },
    } },
    run: async (a) => {
      const body = {};
      if (a.stage) body.stage = a.stage;
      if (a.add_tags?.length) body.tags = a.add_tags;
      if (!Object.keys(body).length) throw new UserError("Nothing to change: give a stage or tags to add.");
      const d = await fub("PUT", `/people/${a.person_id}`, { query: { mergeTags: "true" }, body });
      return { updated: true, person: slimPerson(d) };
    },
  },
  {
    name: "fub_add_note", write: true,
    description: "WRITE: Add a note to a Follow Up Boss person. Only call after the user approved the preview.",
    inputSchema: { type: "object", required: ["person_id", "body"], additionalProperties: false, properties: {
      person_id: { type: "integer" }, subject: { type: "string" }, body: { type: "string" },
    } },
    run: async (a) => { const d = await fub("POST", "/notes", { body: { personId: a.person_id, subject: a.subject || "Update", body: a.body, isHtml: false } }); return { added: true, noteId: d.id }; },
  },
  {
    name: "fub_create_task", write: true,
    description: "WRITE: Create a follow-up task on a Follow Up Boss person. Only call after the user approved the preview.",
    inputSchema: { type: "object", required: ["person_id", "name"], additionalProperties: false, properties: {
      person_id: { type: "integer" }, name: { type: "string" },
      type: { type: "string", enum: ["Follow Up", "Call", "Email", "Text", "Showing", "Closing", "Open House", "Thank You"], default: "Follow Up" },
      due_date: { type: "string", description: "YYYY-MM-DD; defaults to today" },
    } },
    run: async (a) => { const d = await fub("POST", "/tasks", { body: { personId: a.person_id, name: a.name, type: a.type || "Follow Up", dueDate: a.due_date || today() } }); return { created: true, taskId: d.id, dueDate: d.dueDate }; },
  },
];

const send = (msg) => process.stdout.write(JSON.stringify(msg) + "\n");
const reply = (id, result) => send({ jsonrpc: "2.0", id, result });
const fail = (id, code, message) => send({ jsonrpc: "2.0", id, error: { code, message } });

async function handle(msg) {
  const { id, method, params } = msg;
  if (method === "initialize") {
    return reply(id, {
      protocolVersion: params?.protocolVersion || "2025-06-18",
      capabilities: { tools: {} },
      serverInfo: { name: "followupboss", version: VERSION },
      instructions: "Follow Up Boss tools. Read tools are safe. Write tools (fub_add_lead, fub_update_person, fub_add_note, fub_create_task) change the agent's real CRM: show the user exactly what will change and get a yes first. Never put wiring details, SSNs, or financial account numbers in notes.",
    });
  }
  if (method === "ping") return reply(id, {});
  if (method === "tools/list") {
    return reply(id, { tools: TOOLS.map(({ name, description, inputSchema, write }) => ({ name, description, inputSchema, annotations: { readOnlyHint: !write, destructiveHint: false } })) });
  }
  if (method === "tools/call") {
    const tool = TOOLS.find((t) => t.name === params?.name);
    if (!tool) return fail(id, -32602, `Unknown tool: ${params?.name}`);
    try {
      const out = await tool.run(params.arguments || {});
      return reply(id, { content: [{ type: "text", text: JSON.stringify(out, null, 2) }] });
    } catch (e) {
      const text = e instanceof UserError ? e.message : `Unexpected error: ${e.message}`;
      return reply(id, { content: [{ type: "text", text }], isError: true });
    }
  }
  if (id !== undefined) return fail(id, -32601, `Method not found: ${method}`);
}

const rl = createInterface({ input: process.stdin });
rl.on("line", (line) => {
  if (!line.trim()) return;
  let msg; try { msg = JSON.parse(line); } catch { return fail(null, -32700, "Parse error"); }
  handle(msg).catch((e) => msg.id !== undefined && fail(msg.id, -32603, e.message));
});
