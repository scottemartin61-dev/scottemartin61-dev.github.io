## Step — Offer prep: Carlos Mendez on 1402 Oak Bend Dr (offer + counter)
**Date:** 2026-10-29 · **Command:** `/realtor-pipeline:offer-prep` · **Agents dispatched:** realtor-pipeline:cma-analyst, realtor-pipeline:offer-analyst

## What happened
- **Readiness passed:** a TXR 1501 representation agreement is signed, he is pre-approved for $510k (First Federal), and `iabs_provided` is 2026-09-14. Carlos's limits: $490k max, $60k cash total, close by 2026-12-11, no sale contingency.
- **cma-analyst** built a buyer CMA from the MLS comps. Value range $478k–$491.5k, most likely $485k. The home has sat 40–45 days in a balanced market (3.6 months of inventory). No line-item adjustments were made because no local values exist.
- **offer-analyst** wrote the terms sheet: open at $480,000 with standard appraisal protection and no gap coverage, because he only has about $11–12k cash after the down payment.
- **Counter:** the seller countered at $485k with $300 / 7 days. The analyst laid out accept, counter, and walk options. Carlos countered at $482,000, which matches the price-per-sqft check, and the seller accepted. These are agreed terms only, not yet a fully signed contract.
- The cover note to Pat Morgan (terms only, pre-approval attached) would be staged as a Gmail draft only. The offer and counter are logged on the lead record and in `search.md`.

## Key output
```
**Walk-away max:** $490,000 (lower if cash can't cover closing) · **Recommended price:** $480,000 — 1.8% under list, inside CMA supported range $478k–$485k

| Term | Recommendation | Why |
|---|---|---|
| Price | $480,000 open; $485k is the target the data supports; $490k max | CMA range + Carlos's limit |
| Earnest money | $4,800 to Hill Country Title within 3 days | Texas 3-day rule; 1% custom (Sam to confirm) |
| Option fee / days (TX) | $250 / 10 days, fallback 7 | 2004 build, so inspect roof/HVAC; repairs on a signed TREC Amendment within option; 5:00 p.m. deadline |
| Financing | Conventional 10% down; TPFA, approval days to be confirmed with Lee Wong | Pre-approved $510k First Federal |
| Appraisal | Standard protection; no gap coverage, no waiver | ~$11–12k cash left after down payment |
| Title / survey | Hill Country Title (seller's choice); seller pays owner's policy; existing survey + T-47 | Seller's preference, costs Carlos nothing |
| Seller concessions | None in opening | Credit only if the lender shows a shortfall, within lender cap |
| Closing / possession | ~2026-12-04 (≤ 12-11); possession at funding | Carlos's deadline + seller wants to close before Christmas |
| Contingencies | Option; TPFA; HOA addendum if HOA; no sale contingency | HOA unknown; > $100/mo is a deal-breaker |
| Expiration | ~24 hours | Another showing this week |

Counter: seller $485k, $300 / 7 days
- Accept: $485k is the CMA's most-likely value; ~$11.5k left for closing
- Counter $482k on seller's option terms: matches $/sqft check; ~$11.8k left; risk the seller holds out for the other showing
- Walk: not supported unless HOA, cash check, or another open item kills it
Outcome: Carlos countered $482,000 / $300 / 7 days → seller accepted. Agreed terms, not a contract.
Effective date blank until fully executed on TREC forms.
```

## Compliance and judgment catches
- **No contract drafting (TREC Rule 537.11):** The output is a terms sheet only. Sam enters the terms on the TREC One to Four Family Residential Contract (Resale), the Third Party Financing Addendum, and the HOA addendum if one applies.
- **Texas non-disclosure:** The MLS sold prices are used in the client CMA only, never in public material. Square footage is flagged for Williamson CAD verification. The CMA says it is "not an appraisal".
- **Option period:** The deadline is 5:00 p.m. on the last day, and repairs must be on a signed TREC Amendment inside the window. The plan is to book the inspector on day 1–2.
- **Earnest money and option fee:** Delivered to the title company within 3 days of the effective date. No deadline was computed until the effective date exists.
- **Affordability:** Appraisal gap coverage was not recommended because his reserves can't fund it. The seller-credit caps are to be confirmed with the lender.
- **No buyer love letter:** The cover note to the listing agent is factual only.
- **Wire-fraud warning:** Added to the terms file for Carlos.
- **Data conflicts flagged, not guessed:** $490k max against `price_max` $500k (recorded as the max for this property), 40 vs. 45 DOM, HOA unknown. Assumed: the offer expired about 24 hours later (2026-10-30), and earnest money in the counter was unchanged until the executed contract.

## Files
- Created: `buyers/2026-09-14-carlos-mendez/cma-1402-oak-bend-dr.md`
- Created: `buyers/2026-09-14-carlos-mendez/offers/1402-oak-bend-dr.md`
- Changed: `buyers/2026-09-14-carlos-mendez/search.md` (Offers section)
- Changed: `leads/2026-09-14-carlos-mendez.md` (next action, log)
- Created: `showcase-log/16-offer-prep.md`
