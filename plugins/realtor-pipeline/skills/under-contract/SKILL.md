---
name: under-contract
description: Opens a residential transaction once the contract is fully executed — contract summary, deadline calendar, parties checklist, and client kickoff messages. Use when the user says "we're under contract", "offer accepted", "contract executed", "open escrow", "pending", "ratified", or sends an executed contract.
argument-hint: "<property address> [executed contract file or key terms]"
model: inherit
---

# Under contract

Load `realtor-pipeline:transaction-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook`.

## Step 1 — Contract summary

Create `transactions/<street-slug>/contract.md`. Read the executed contract if the user provides the file (PDF or text); otherwise ask for each frontmatter field. Fill only from the executed contract — read back every date and dollar amount to the user for confirmation, because one wrong digit moves a termination deadline. Link the client: put the lead record path in `client:` and set that record's `status: under-contract`; on the listing side set `listing.md` `status: pending`, on the buyer side log the accepted offer in `search.md`.

Done when: `contract.md` has effective date, price, earnest money, closing date, and the side, all confirmed by the user, and every other blank is listed.

## Step 2 — Deadlines

Dispatch `realtor-pipeline:deadline-tracker` with the transaction folder path. Show the timeline and the "Needs action now" list. Offer calendar events (Google Calendar if connected) for every deadline: the option or inspection deadline gets a reminder 2 business days before plus one the morning of — create only on the user's go-ahead.

Done when: `timeline.md` exists and the user has chosen whether to calendar the dates.

## Step 3 — Parties and kickoff

Write a `## Parties and kickoff` checklist in `contract.md`: contract sent to title/escrow, lender, and the other agent; earnest money (and Texas option fee) receipt from the title company; inspection scheduled inside the option or inspection period; appraisal ordered; HOA or subdivision documents requested; survey or T-47 status; homeowner's insurance quote (buyer side); seller payoff request (seller side).

Then stage, on the user's go-ahead, Gmail drafts (never send):
- **Client kickoff:** what happens next with dates from the timeline, what they need to do, and the transaction-playbook wire-fraud warning verbatim.
- **Title / escrow and lender:** executed contract attached, parties' contacts, and requested receipts.

Done when: the checklist exists and the kickoff drafts are staged or declined. Point to `/realtor-pipeline:repair-request` once the inspection report arrives and `/realtor-pipeline:transaction-status` for daily checks.
