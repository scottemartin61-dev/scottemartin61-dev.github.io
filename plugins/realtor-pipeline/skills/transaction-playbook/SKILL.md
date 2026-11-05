---
name: transaction-playbook
description: Reference playbook for residential offers and contract-to-close work — offer terms, multiple-offer handling, net-sheet math, transaction folder and contract summary format, deadline rules, inspection repair categories, appraisal gaps, and wire-fraud safeguards. Use when writing or comparing offers, countering, opening escrow, tracking contract deadlines, negotiating repairs, or reporting transaction status.
model: inherit
---

# Transaction playbook

Stages 5-6: offer and negotiation, then under contract. Builds on `realtor-pipeline:lead-playbook` and `realtor-pipeline:client-playbook`; Texas agents (`state: TX`) also follow the contracts section of `realtor-pipeline:texas-playbook`, which wins where stricter. Load those if not in context.

## The line not to cross

Agents produce **terms sheets, comparisons, deadline calendars, and request lists** — never contract language. The licensed agent puts terms into the brokerage's or state's required forms. Anything that changes a party's legal rights in a way the forms don't cover → "talk to a real estate attorney". No tax, legal, lending, or inspection-interpretation advice; no promises about appraisals, loan approval, or closing dates.

## Offers

An offer terms sheet covers: price; earnest money (amount, holder, delivery deadline); financing (type, down payment, loan amount, approval contingency days); appraisal terms (contingency, waiver, or gap coverage amount); inspection / option terms; seller concessions (closing costs, repairs, home warranty); closing date and possession (including any leaseback); title and survey choices; contingencies (sale of buyer's home, HOA review); included and excluded items; offer expiration.

Strength levers, in rough order of seller impact: price; financing certainty (cash > conventional with a large down payment > FHA/VA); appraisal gap coverage; shorter contingency periods; flexible closing or possession; fewer concessions. Recommend levers the buyer can actually afford — confirm cash reserves before suggesting appraisal gap coverage.

**No buyer "love letters"** or photos of the buyers to sellers — they invite fair-housing claims. Offer a factual cover note about terms instead.

## Multiple offers (listing side)

- Present every offer to the seller promptly and objectively, and keep presenting backup offers until closing unless the seller has waived that in writing (confirm your state and broker rules).
- Treat every buyer agent alike: if you call for "highest and best", tell every party, with the same deadline, at the same time. Never reveal one offer's terms to another buyer without the seller's written instruction.
- Compare on **net to seller and certainty to close**, not price alone.

## Net sheet (estimate)

Net to seller ≈ price − payoff of liens (seller supplies) − listing and buyer-agent compensation as agreed − seller-paid closing costs and concessions − title policy and escrow fees (title company quote, else `[placeholder]`) − prorated property taxes and HOA − repair credits. Label every net sheet "Estimate — the title company's settlement statement controls." Never invent payoff or title figures.

## Transaction folder

```
transactions/<street-slug>/
  contract.md     contract summary (below) — the source for every deadline
  timeline.md     generated deadline calendar
  inspection.md   inspection findings and the repair request
  amendments.md   log of agreed changes (date, what changed, signed by)
  status/<date>.md  status reports
```

`contract.md` frontmatter, filled **only from the fully executed contract** (ask for any blank — never guess a date or number):

```yaml
address:
status: active              # active | closed | terminated
side: buyer                 # buyer | seller | both (intermediary)
client:                     # lead record path
effective_date:             # date the last party signed and it was delivered
price:
earnest_money:
earnest_money_due:          # date
option_fee:                 # Texas; blank elsewhere
option_days:                # Texas
inspection_days:            # non-Texas inspection contingency
financing_type:             # cash | conventional | FHA | VA | USDA | other
financing_approval_days:
appraisal_terms:            # contingency | waiver | gap $X
title_company:
escrow_officer:
lender:
loan_officer:
other_agent:
closing_date:
possession:
contingencies: []           # e.g. sale of buyer's home, HOA documents
documents_due: []           # - {item: Seller's disclosure, due: 2026-12-02, received: }
```

Record every change in `amendments.md` and update `contract.md` to match; the original value stays in the amendment log.

## Deadline rules

- Day counts run from the effective date per the contract's own counting rules; the deadline tracker states the rule it used for every date.
- When a deadline falls on a weekend or holiday, apply only what the contract says; if unsure, show both dates and flag it for the agent.
- Treat a deadline as **at risk** 2 business days before it is due and nothing shows it met; **missed** the moment it passes.
- Termination and contingency deadlines are the ones that cost clients money. Never describe a deadline as flexible.

## Repair requests

Sort inspection findings into four groups and ask accordingly:

| Group | Examples | Typical ask |
|---|---|---|
| Safety | gas leak, exposed wiring, missing GFCI near water, failed smoke/CO detectors, structural hazard | repair by a licensed professional before closing |
| Systems at end of life or failing | roof, HVAC, water heater, foundation, plumbing leaks | repair, credit, or price reduction backed by a contractor estimate |
| Material defects | drainage, wood rot, active pests | repair or credit |
| Cosmetic / maintenance | paint, caulk, minor wear | usually don't ask — weakens the request |

Every loan type caps seller credits — conventional (by down payment and occupancy), FHA, VA, and USDA alike — and a credit can never exceed the buyer's actual closing costs and prepaids. Never say a loan type has no cap; tell the agent to confirm the cap with the lender before choosing a credit over a price reduction. Use contractor estimates when supplied; otherwise `[estimate needed]`, never an invented number.

## Appraisal gap

If the appraisal comes in below the price: options are the seller reduces the price, the buyer covers the gap in cash, they split it, the buyer challenges the appraisal with better comps (reconsideration of value through the lender), or a party terminates if the contract allows. Show the cash math for each.

## Wire fraud

Every client gets this, in the first under-contract message and again before closing: **"We will never email you wiring instructions or changes to them. Before wiring any money, call the title company at a phone number you looked up yourself — not one from an email — to confirm the instructions."** Never put wiring details in any draft.
