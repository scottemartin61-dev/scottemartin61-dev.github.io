---
name: transaction-status
description: Checks every residential transaction under contract and produces today's deadline and to-do list, plus optional client status updates. Use when the user says "transaction status", "what's due on my pendings", "escrow check", "contract deadlines", "anything at risk", "update my clients on their deals", or asks about a specific pending transaction.
argument-hint: "[property address | all] [update-clients]"
model: inherit
---

# Transaction status

Load `realtor-pipeline:transaction-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook`.

## Step 1 — Refresh timelines

List `transactions/*/contract.md` with `status: active` (or just the one named). Dispatch `realtor-pipeline:deadline-tracker` for each, in parallel. Ask the user first whether anything was completed since the last check (earnest money receipt, inspection done, loan approval, documents received) and record those as evidence in `timeline.md` before dispatching.

Done when: every active transaction has a `timeline.md` checked today.

## Step 2 — Today's board

Show, across all transactions, most urgent first:
1. **Missed** — with the consequence and the decision needed now.
2. **At risk** — due within 2 business days and not yet met.
3. **Due this week.**
4. **Input needed** — blank contract fields blocking a deadline.
5. **Closing soon** — closings in the next 7 days with the walkthrough and wire-fraud reminder.

One line each: address, side, deadline, due, status, next step.

Done when: every active transaction appears on the board or is listed as "on track".

## Step 3 — Client updates (optional)

If the argument includes `update-clients` or the user asks, write `transactions/<slug>/status/<today>.md` per transaction: plain-language progress, what's next with dates, what we need from the client, and — within 7 days of closing — the wire-fraud warning. Offer Gmail drafts (never send). Intermediary deals: each party's update contains nothing confidential about the other.

Done when: each requested update is saved and staged or declined. When a deal closes, set `contract.md` `status: closed`, the lead record's `status: closed` with a log line, and note that stage 7-8 tooling (closing and after) is next on the roadmap.
