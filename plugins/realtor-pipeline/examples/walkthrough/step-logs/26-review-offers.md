## Step — Three offers on 214 Ridge Rd: compare, decide, respond
**Date:** 2026-11-05 · **Command:** `/realtor-pipeline:review-offers` · **Agents dispatched:** realtor-pipeline:offer-analyst

## What happened
- Filed each offer as its own terms sheet, with expirations listed soonest first: **B (Park, FHA $452k) 11-06 5pm**, **A (Chen, conventional $445k) 11-06 8pm**, **C (Ali, cash $438k) 11-07 noon**. Each receipt is logged on Dan's record.
- Seller costs: $231k payoff, 3% listing and 2.5% buyer-broker compensation. Title/escrow and tax proration are labeled placeholders, not invented.
- The offer-analyst compared **net to seller and certainty to close**, not price alone. B has the highest price but nets only about $3.6k more than C, and only if the FHA appraisal comes in at $452k. Below an appraisal of about $448.2k, B nets less than C. C ranks first on Dan's priorities: certainty, and closing before year-end. The orchestrator re-checked the net math.
- Dan's decision (per the script): **accept C once its proof of funds is verified; ask A to be the back-up; decline B.** Assumed: no back-up invitation to B, since Dan named only A.
- No Gmail connector. In a live run, the three drafts below would be staged as Gmail **drafts only**. Next step once the contract is fully executed: `/realtor-pipeline:under-contract`.

## Key output
```
| | Offer A (Chen) | Offer B (Park) | Offer C (Ali) |
| Price | $445,000 | $452,000 | $438,000 |
| Financing | Conv. 20% down | FHA 3.5% down | Cash, POF not yet verified |
| Appraisal | Contingency | Contingency (FHA MPS) | Waived |
| Option period | 10 days, fee [not stated] | 10 days, fee [not stated] | 5 days, fee [not stated] |
| Concessions | $6,000 | $9,600 | None |
| Closing | 2026-12-15 | 2026-12-30 | 2026-11-25 (+7-day free leaseback option) |
| Est. net (before placeholders) | $183,525 | $186,540 | $182,910 |
| Certainty (1-5) | 3 | 2 | 4 provisional (5 once POF verified) |
Estimate — the title company's settlement statement controls.

DRAFT to M. Ali (Summit Realty), not sent:
  Subject: 214 Ridge Rd — your buyer's offer
  Thank you for the offer on 214 Ridge Rd. My seller intends to accept it as written once
  we verify the proof of funds. Please send (1) the option fee amount and title company for
  the contract, and (2) the name of the institution on the proof of funds; I'll verify by
  calling a number I look up myself. We'll aim to have everything signed before your
  11-07 noon expiration. — Sam Rivera, Lakeside Realty LLC, (512) 555-0144

DRAFT to R. Chen (Keystone Realty), not sent:
  Subject: 214 Ridge Rd — thank you, and a back-up position
  Thank you and your buyers for the offer on 214 Ridge Rd. My seller is moving forward with
  another offer, but would welcome your buyers as the back-up on the TREC back-up addendum.
  Would they be open to that? I can't share the other offer's terms. — Sam Rivera, Lakeside Realty LLC

DRAFT to J. Park (Summit Realty), not sent:
  Subject: 214 Ridge Rd — thank you
  Thank you for presenting your buyers' offer on 214 Ridge Rd. My seller has decided to go
  in another direction, so we won't be accepting it. We appreciate your time and wish your
  buyers the best in their search. — Sam Rivera, Lakeside Realty LLC
```

## Compliance and judgment catches
- **No contract drafting (TREC Rule 537.11):** these are only terms sheets, a comparison, and cover notes. The acceptance and back-up go on the TREC promulgated contract and back-up addendum, with Sam filling factual blanks only.
- **Option fee is blank in all three offers:** it must be stated on the contract before Dan signs, or the option right may not hold. Option fee and earnest money go to the title company within 3 days of the effective date.
- **Proof of funds** is checked before acceptance, by calling the institution at an independently looked-up number (wire-fraud and forged-document safeguard).
- **Fair treatment of buyer agents:** no offer's terms are revealed to another party. B and C come from the same brokerage, so each agent gets a separate message.
- **Back-up offers** keep being presented until closing unless Dan waives that in writing. Sam should check broker rules before any multiple counters (risk of two binding contracts).
- **Net sheet:** no invented title or payoff numbers; every estimate is labeled "title company's settlement statement controls."
- **FHA/loan-type credit caps:** flagged for confirmation with the lenders; no cap stated as fact.
- **Stay in lane:** anything outside the promulgated forms goes to a real estate attorney. The leaseback uses the TREC Seller's Temporary Residential Lease, and Dan may decline it.
- **Drafts, not sends:** all three notes are drafts for Sam to approve.

## Files
- Created `listings/214-ridge-rd/offers/2026-11-04-chen.md`, `2026-11-04-park.md`, `2026-11-05-ali.md` (terms + outcome logs)
- Created `listings/214-ridge-rd/offers/comparison-2026-11-05.md`
- Changed `leads/2026-09-01-dan-okafor.md` (offer receipts, decision, next action)
- Created `showcase-log/26-review-offers.md`
