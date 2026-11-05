---
name: offer-prep
description: Prepares a buyer's offer on a residential property — value check, recommended terms, and a terms sheet for the contract. Use when the user says "write an offer", "my buyers want to offer on…", "what should we offer", "offer strategy", "make an offer", "multiple offers on this one", or "they countered".
argument-hint: "<buyer name> <property address> [counter details]"
model: inherit
---

# Offer prep (buyer side)

Load `realtor-pipeline:transaction-playbook`, `realtor-pipeline:client-playbook`, and `realtor-pipeline:lead-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook`.

## Step 1 — Check readiness

Find the buyer's `search.md` and lead record. Stop and say what is missing if: no signed representation agreement (`agreement_signed: yes` — in Texas a showing-only agreement does not allow offer advice); no pre-approval or proof of funds; or, in Texas, `iabs_provided` is blank. Ask for the buyer's maximum price, cash available for down payment plus reserves, and must-have terms (closing date, possession, contingencies).

Done when: agreement, financing proof, and the buyer's limits are confirmed, or the blocker is reported.

## Step 2 — Value and competition

Reuse `buyers/<stem>/cma-<street-slug>.md` if it exists and is under 30 days old. Otherwise gather comps for the address (Zillow connector or pasted MLS data; Texas portal prices marked unverified) and dispatch `realtor-pipeline:cma-analyst` for a buyer offer check with target `buyers/<stem>/cma-<street-slug>.md`. Ask the user what they know from the listing agent: other offers, seller priorities, preferred title company, closing timing.

Done when: a CMA for the address exists and competition notes are recorded.

## Step 3 — Terms

Dispatch `realtor-pipeline:offer-analyst` with `mode: buyer`, the paths to `search.md`, the lead record, the CMA, the agent profile, and the buyer's limits and competition notes. For a counter, include the counter terms and ask for options. Show the terms sheet.

Done when: `buyers/<stem>/offers/<street-slug>.md` exists and the user has reviewed the recommended price and terms.

## Step 4 — Hand off to the contract

Remind the user to enter the agreed terms into the required contract forms (Texas: TREC One to Four Family Residential Contract and the addenda the terms call for — e.g. Third Party Financing Addendum, Subdivision Information addendum, Sale of Other Property). Offer a Gmail draft (draft only) to the listing agent with a short factual cover note — no buyer letter or photos — and a reminder to attach the pre-approval or proof of funds. Log the offer on the lead record and in `search.md`.

Done when: the offer is logged with its date, price, and expiration. When the contract is fully executed, point to `/realtor-pipeline:under-contract`.
