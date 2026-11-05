#!/usr/bin/env node
// PreToolUse hook: every Follow Up Boss write asks the user first, with a plain summary.
let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let input = {};
  try { input = JSON.parse(raw); } catch {}
  const tool = String(input.tool_name || "").replace(/^.*__fub_/, "");
  const a = input.tool_input || {};
  const what = {
    add_lead: `add ${[a.first_name, a.last_name].filter(Boolean).join(" ") || "a new lead"} as a new lead (source: ${a.source || "?"})`,
    update_person: `update person #${a.person_id}${a.stage ? ` to stage "${a.stage}"` : ""}${a.add_tags?.length ? ` and add tags ${a.add_tags.join(", ")}` : ""}`,
    add_note: `add a note to person #${a.person_id}: "${String(a.body || "").slice(0, 120)}${String(a.body || "").length > 120 ? "…" : ""}"`,
    create_task: `create task "${a.name || ""}" for person #${a.person_id}, due ${a.due_date || "today"}`,
  }[tool] || "change your Follow Up Boss account";
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "ask",
      permissionDecisionReason: `This will ${what} in your real Follow Up Boss account. Allow it?`,
    },
  }));
});
