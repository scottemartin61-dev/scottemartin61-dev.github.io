## Step — Buyer consultation: Carlos Mendez (prep + record)
**Date:** 2026-09-17 · **Command:** `/realtor-pipeline:buyer-consult` · **Agents dispatched:** none (this skill dispatches no agent)

## What happened
- The representation gate passed (`represented: no`). Created `buyers/2026-09-14-carlos-mendez/` and linked it from the lead record.
- **Prep:** wrote `consult.md` with all eight sections. Its "Fill before meeting" list covers the market snapshot (no MLS connector), the pre-approval expiry, an intermediary check, and printed forms. The meeting confirmation would be staged as a Gmail draft only.
- **Record:** wrote `search.md` from the meeting notes. Max $500k, 3+ bed / 2+ bath, garage, three Round Rock ZIPs, nice-to-haves, deal-breakers. `agreement_signed: yes`, expires 2027-01-31.
- Lead record set to `status: agreement-signed`. Meeting logged, next action is the first home search, due 2026-09-20.

## Key output
```
## 4. The buyer agreement and IABS
- IABS: provided 2026-09-14 (link in email body). Bring a printed copy and review it again today.
- SB 1968 (Occ. Code §1101.563): Texas requires a written agreement before I show you any home, including Oak Bend.
- Option A: representation agreement (brokerage's TXR 1501): specific end date, exclusive or
  non-exclusive, services, specific compensation amount or rate, and, conspicuously, that
  compensation is not set by law and is fully negotiable. Covers full advice.
- Option B: showing-only agreement (§1101.562): non-exclusive, 14 days max. Access only; no advice,
  price opinions, or negotiation.
- Bring the brokerage's blank forms. Do not draft or fill in terms beyond factual blanks.
- Intermediary: a Lakeside Realty LLC listing requires written consent + appointed license holders.

search.md frontmatter:
price_max: 500000
beds_min: 3
baths_min: 2
areas: [Round Rock 78664, Round Rock 78681, Round Rock 78665]
must_haves: [garage]
nice_to_haves: [updated kitchen, yard]
deal_breakers: [carport only, HOA over $100/mo]
pre_approval_amount: 510000
agreement_signed: yes
agreement_type: TXR 1501 buyer representation, exclusive
agreement_expires: 2027-01-31
agreement_compensation: "2.5% (as stated in agreement; negotiable, not set by law)"
```

## Compliance and judgment catches
- **SB 1968:** The packet explains the representation agreement against the 14-day showing-only agreement. Tours are unblocked only because the notes say TXR 1501 was signed, and `agreement_signed: yes` was set on that evidence.
- **No contract drafting:** The packet says to bring the brokerage's blank forms. The agent did not draft agreement terms; the 2.5% figure is recorded as "stated in agreement".
- **Compensation:** Recorded as negotiable and not set by law. The packet never calls it standard or fixed.
- **IABS:** `iabs_provided` was checked (2026-09-14). It was reviewed again in person and logged.
- **Lender choice:** Two lenders are listed (First Federal, Hill Country Mortgage), and the packet says none is required. No rate or loan advice.
- **Stay in lane:** Inspection and appraisal are explained in plain terms only, with referrals to an inspector and the lender.
- **Intermediary:** The packet flags in advance that a Lakeside listing (31 Prairie Wind Ct shows up later) needs written consent.
- **Open question:** Must-sell-first (a Houston home?) is still undiscussed. Assumed: no sale contingency is needed; Step 16 later confirms this.

## Files
- Created: `buyers/2026-09-14-carlos-mendez/consult.md`
- Created: `buyers/2026-09-14-carlos-mendez/search.md`
- Changed: `leads/2026-09-14-carlos-mendez.md` (status, client_folder, criteria, log)
- Created: `showcase-log/13-buyer-consult.md`
