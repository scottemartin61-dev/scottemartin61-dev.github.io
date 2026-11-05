---
name: buyer-consult
description: Prepares and records a residential buyer consultation. Use when the user says "buyer consultation", "buyer consult", "buyer presentation", "meeting with new buyers", "prep for my buyer appointment", "buyer agreement", or has just met with buyers and wants to set up their search.
argument-hint: "<lead name or record path> [meeting notes]"
model: inherit
---

# Buyer consultation

Two modes: **prep** (packet before the meeting) and **record** (after the meeting, set up the search). Load the `realtor-pipeline:client-playbook` and `realtor-pipeline:lead-playbook` skills if they are not in context.

## Step 1 — Find the buyer

Locate the lead record in `leads/`. Stop if `represented: yes-exclusive`. Create `buyers/<lead-file-stem>/` if missing and set `client_folder:` on the lead record. Mode: meeting notes supplied → record; otherwise → prep.

Done when: the record and buyer folder exist and the mode is set.

## Step 2a — Prep: write the consultation packet

Write `buyers/<stem>/consult.md` with these sections, filled from the lead record and agent profile, placeholders for anything unknown:

1. **Agenda** (45-60 minutes).
2. **Their goals** — what we know; questions for what we don't.
3. **How buying works here** — the stages from consultation to closing with typical timeframes; the earnest money, inspection, appraisal, and financing contingencies in plain language.
4. **The buyer agreement** — required in writing before touring; walk through term, scope, and compensation, which is negotiable; any state agency disclosure form. Bring the brokerage's form — never draft agreement terms.
5. **Financing** — pre-approval status; if not pre-approved, give at least two lender options from the agent profile (`lenders:`) or a placeholder — never a single required lender.
6. **Market snapshot** — if a Zillow connector is available, search active and recently sold homes matching their price range and areas and summarize counts, price spread, and days on market. Otherwise leave a placeholder.
7. **Needs worksheet** — must-haves, nice-to-haves, deal-breakers, commute, timeline.
8. **Next steps** — sign agreement, pre-approval, saved search, first tour.

Show the packet and offer to stage a Gmail draft of a meeting confirmation (draft only).

Done when: `consult.md` exists with all eight sections and the "Fill before meeting" placeholders are listed for the user.

## Step 2b — Record: set up the search

From the notes:
1. Write `buyers/<stem>/search.md` per the client-playbook (criteria frontmatter, empty `## Shortlist` and `## Tour log`). Leave `agreement_signed: no` unless the notes say it was signed.
2. Update the lead record: `status: agreement-signed` only if the agreement was signed, otherwise keep status and set `next_action: Get buyer agreement signed`; log the meeting.
3. Offer `/realtor-pipeline:home-search` to run the first search.

Done when: `search.md` holds the criteria from the notes and the lead record's status and next action match whether the agreement was signed.
