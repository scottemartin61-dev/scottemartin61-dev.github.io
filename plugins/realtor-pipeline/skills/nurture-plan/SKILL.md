---
name: nurture-plan
description: Builds a follow-up / drip sequence for warm or cold residential real estate leads. Use when the user says "nurture plan", "drip campaign", "follow-up sequence", "keep this lead warm", "what should I send…", or asks for check-in emails or texts for a buyer or seller who isn't ready yet.
argument-hint: "<lead name, record path, or segment description>"
model: inherit
---

# Nurture plan

Use the `realtor-pipeline:lead-playbook` skill for cadence and guardrails; load it now if it is not already in context.

## Step 1 — Pick the target

Resolve the argument to one lead record in `leads/`, or to a segment (e.g. "all cold buyers in Westside") by reading record frontmatter. Skip any record with `represented: yes-exclusive` or `status: lost`, and tell the user which were skipped. An `unscored` lead → run `/realtor-pipeline:qualify-lead` first.

Done when: the target record list is final.

## Step 2 — Write the plan

Dispatch `realtor-pipeline:nurture-writer` — one dispatch per lead, in parallel, or one dispatch for a segment plan. Include the agent profile from `leads/agent-profile.md` in the prompt if it exists. Show each returned plan's schedule table and saved path; show full drafts when the user asks.

Done when: each target has a saved plan under `leads/nurture/` and its record's `next_action` points to touch 1.

## Step 3 — Stage the first touches

Offer, and do only on the user's go-ahead:
- Gmail available → create **drafts** (never send) for touches due in the next 7 days.
- Google Calendar available → create reminder events for each touch date in the plan, titled "Nurture: <name> — touch <n> (<channel>)".

Done when: the user has declined staging or every touch due in the next 7 days is drafted and every touch date has a reminder.
