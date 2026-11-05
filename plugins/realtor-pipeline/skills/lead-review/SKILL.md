---
name: lead-review
description: Reviews the residential real estate lead pipeline and produces today's call and follow-up list. Use when the user says "lead review", "who should I call today", "what follow-ups are due", "pipeline review", "morning lead check", "stale leads", or asks how many hot, warm, or cold leads they have.
argument-hint: "[today | week]"
model: inherit
---

# Lead review

Use the `realtor-pipeline:lead-playbook` skill for statuses and cadence; load it now if it is not already in context.

## Step 1 — Load the pipeline

Read the frontmatter of every `leads/*.md` file (skip `leads/agent-profile.md` and `leads/nurture/`). No `leads/` folder → tell the user to start with `/realtor-pipeline:new-lead` and stop.

Done when: every record is loaded, and any record whose frontmatter fails to parse is listed for the user.

## Step 2 — Re-score what's stale

Find records that are `unscored` with log entries beyond the first reply, or whose last log entry is newer than their last "Scored" log line. Dispatch `realtor-pipeline:lead-qualifier` for each, in parallel, then reload them.

Done when: no record with qualifying evidence remains unscored or stale.

## Step 3 — Build the list

Bucket open leads (exclude `lost` and `agreement-signed`), most urgent first:

1. **Uncontacted** — `status: new` (show hours since `created`).
2. **Overdue** — `next_action_due` before today.
3. **Due today** (or this week, if the argument is `week`).
4. **Hot without an appointment** — `temperature: hot` and status before `appointment-set`.
5. **Gone quiet** — warm with `last_contact` over 30 days ago, cold over 90 days.

For each lead show one line: name, temperature, type, next action, due date, best channel allowed by consent, record path.

Then a one-line pipeline count: new / hot / warm / cold / appointment-set / agreement-signed, and leads by source.

Done when: every open lead appears in exactly one bucket or is counted as "on track".

## Step 4 — Offer to act

Offer, per bucket: `/realtor-pipeline:new-lead` replies for uncontacted leads, `/realtor-pipeline:qualify-lead` scripts for hot leads, `/realtor-pipeline:nurture-plan` for gone-quiet leads, and (Google Calendar available) time blocks for today's calls. Act only on what the user picks.

Done when: the user has picked actions or declined.
