---
name: qualify-lead
description: Prepares for and scores a residential real estate qualification conversation. Use when the user says "qualify this lead", "I'm about to call…", "give me a call script", "just talked to…", "score this lead", "is this lead hot", or pastes call notes or a text thread with a buyer or seller prospect.
argument-hint: "<lead name or record path> [call notes]"
model: inherit
---

# Qualify lead

Two modes: **before the call** (script) and **after the call** (score). Use the `realtor-pipeline:lead-playbook` skill for the rubric and guardrails; load it now if it is not already in context.

## Step 1 — Find the record

Locate the lead in `leads/` by name, email, or phone. No record → offer to create one with `/realtor-pipeline:new-lead` first. Decide the mode: notes or a transcript supplied → after; otherwise → before.

Done when: one record is selected and the mode is set.

## Step 2a — Before the call: build the script

Read the record and write a one-screen call guide:

1. **Opener** referencing how they reached out.
2. **Questions only for the unknowns** in the record, in this order, phrased conversationally:
   - Representation: "Are you already working with an agent?" (ask first — if yes and exclusive, thank them and end the call)
   - Motivation: what's prompting the move?
   - Timeline: when would you ideally like to be moved in / sold?
   - Financing (buyers): have you talked with a lender yet? Pre-approved? / (sellers) do you need to buy after selling?
   - Must sell first, price range, areas, must-haves.
3. **Close** for the appointment: buyer consultation (mention a written buyer agreement is required before touring) or listing appointment.
4. **Avoid** reminder: one line from the Fair Housing guardrail.

Tell the user to come back with notes afterward ("just paste them here").

Done when: the guide is shown and asks only questions the record cannot already answer.

## Step 2b — After the call: score

Dispatch the `realtor-pipeline:lead-qualifier` agent with the record path and the full notes. Show its return verbatim. Then route:

- **Hot** → offer to draft the appointment confirmation email, and (Google Calendar available) a calendar hold for the consultation or listing appointment — create only on the user's go-ahead.
- **Warm / Cold** → offer `/realtor-pipeline:nurture-plan` for this lead.
- **Lost (represented)** → confirm no further outreach.

Done when: the record shows a score or `unscored` with the reason, a next action with a due date, and the user has chosen a route.
