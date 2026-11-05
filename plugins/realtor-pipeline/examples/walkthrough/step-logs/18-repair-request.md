## Step — Repair request: 1402 Oak Bend Dr (buyer side)
**Date:** 2026-11-05 · **Command:** `/realtor-pipeline:repair-request` · **Agents dispatched:** realtor-pipeline:deadline-tracker (refresh), realtor-pipeline:repair-negotiator

## What happened
- **Receipts recorded first:** Hill Country Title's receipts for the $5,000 earnest money and $300 option fee arrived 2026-11-04. Both were due 11/5, so both are met. Recorded in `contract.md` and on the lead record.
- **Deadline first:** `timeline.md` was older than today, so deadline-tracker was re-run. The option period ends Mon 11/9 at 5:00 p.m., with **2 business days left**. The signed Amendment target is Fri 11/6, 1 business day away. The request was kept short and decisive.
- Saved the findings and the buyer's estimates (HVAC $6,800, roof $1,150) to `inspection.md`. The report's two specialist evaluations already have estimates.
- **repair-negotiator** sorted the 10 findings:
  - 3 safety items: repair by licensed pros.
  - 2 systems items: a $7,950 credit.
  - 2 material defects: trade items.
  - 3 cosmetic or monitor items: not requested.

  It also gave a fallback plan and a Monday noon walk-away decision point.
- The request to Pat Morgan, with the estimates attached and a response requested by Fri 11/6 noon, would be staged as a Gmail draft only. Nothing is agreed yet, so `amendments.md` was not created and `contract.md` price is unchanged.

## Key output
```
**Deadline:** Option period ends Mon 2026-11-09, 5:00 p.m. (absolute) · **Send by:** Thu 11/5 (today) · **Seller response by:** Fri 11/6 noon · **Signed by:** Fri 11/6

| # | Finding | Group | Ask | Estimate |
|---|---|---|---|---|
| 3 | Condenser 2009; cooling differential 12°F | Systems | Credit (preferred) or price reduction | $6,800 (HVAC tech) |
| 4 | Lifted shingles north slope; granule loss | Systems | Credit (preferred) or price reduction | $1,150 (roofer) |
| 1 | No GFCI at kitchen counters + exterior | Safety | Repair by licensed electrician, receipt | [estimate needed] |
| 2 | Double-tapped breaker in main panel | Safety | Repair by licensed electrician, receipt | [estimate needed] |
| 5 | Water heater TPR drain line missing | Safety | Repair by licensed plumber, receipt | [estimate needed] |
| 10 | Negative grading NE corner toward foundation | Material defect | Repair or credit (trade item) | [estimate needed] |
| 8 | Wood rot at rear door trim | Material defect | Repair or credit (trade item) | [estimate needed] |

Total requested: repairs on 5 items / credit $7,950 (HVAC + roof) / price-reduction alternative $7,950.
Not requested: #6 slow drain, #7 drywall crack ("monitor"), #9 paint/nail holes.

Recommended ask: safety repairs with receipts + $7,950 credit. A credit cuts Carlos's cash at
closing dollar for dollar. A price cut trims his 10% down payment by only ~$795.
Credit cap check (today): confirm max seller credit with Lee Wong (First Federal); credit can't
exceed actual closing costs + prepaids. Any excess becomes a price reduction.

If the seller says no: drop #8/#10 first; floor = safety repairs + meaningful HVAC/roof concession.
Walk-away decision Mon 11/9 noon: sign best offer · terminate under option by 5:00 p.m. (the $300 fee
is not refunded) · extend option only via a signed Amendment. After 5:00 p.m. 11/9 the unrestricted
right to terminate is gone.
```

## Compliance and judgment catches
- **Order of work:** Receipts were recorded before the analysis, as instructed. The earnest money and option fee deadlines (3 days) are both met, so the option is valid.
- **Option deadline treated as absolute:** 5:00 p.m. Mon 11/9 with no weekend extension. The signed TREC Amendment is targeted 1 business day early. Termination is presented as a real option before the deadline, with the $300 option fee not refundable.
- **Repairs belong in the option period:** All agreed items go on a TREC Amendment signed by all parties before 11/9. The output is a request list only, with no contract language; Sam fills in the promulgated form.
- **No invented numbers:** Only the two buyer-obtained estimates carry dollar figures. Every other item says [estimate needed].
- **Lender credit caps:** The output does not claim the loan has no cap. Sam must confirm the conventional 10%-down cap with the lender, and the credit is limited to actual closing costs and prepaids.
- **Stay in lane:** Findings are quoted in the inspector's words, not interpreted. The drywall crack goes to a structural engineer if Carlos wants it checked, and termination or earnest money questions go to the broker or an attorney. No appraisal promises.
- **Cosmetic items left out:** They weaken a request.
- **Subdivision Information / HOA:** The separate 3-day termination right after receipt is tracked as a wildcard. Carlos's deal-breaker is over $100/mo.
- **Drafts only:** The email to the listing agent was not sent. Nothing was signed, so no amendment was logged.

## Files
- Changed: `transactions/1402-oak-bend-dr/contract.md` (EM + option fee received 2026-11-04, checklist)
- Changed: `transactions/1402-oak-bend-dr/timeline.md` (refreshed 2026-11-05)
- Created: `transactions/1402-oak-bend-dr/inspection.md` (findings, estimates, repair request)
- Changed: `leads/2026-09-14-carlos-mendez.md` (next action, log)
- Created: `showcase-log/18-repair-request.md`
