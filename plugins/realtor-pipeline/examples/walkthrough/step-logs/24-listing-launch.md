## Step — Listing launch: 214 Ridge Rd
**Date:** 2026-10-03 · **Command:** `/realtor-pipeline:listing-launch` · **Agents dispatched:** realtor-pipeline:listing-writer

## What happened
- Confirmed the basics: listing agreement signed (TXR 1101), **$449,000 list price chosen by Dan**, list date Sat 2026-10-10, expires 2027-04-10. `listing.md` was updated and Dan's lead record set to `agreement-signed`.
- Wrote a dated launch checklist working back from the 10-10 list date. It covers Texas seller paperwork, prep, photos, the MLS rule check, the showing service, and the TREC broker-name check on every ad.
- The listing-writer produced the headline, MLS public and agent-only remarks, three social posts, an email blast, and flyer bullets. It **declined Dan's two requested phrases** and gave Sam a plain explanation to pass on, plus compliant alternatives.
- The orchestrator filled the writer's `[phone]` placeholder from the agent profile. The other placeholders (schools, distance, lockbox, offer instructions, unsubscribe link) remain for Sam.
- Staging: no Calendar or Gmail connectors. Checklist and open-house events, and a launch-timeline email to Dan, would be staged on Sam's go-ahead (Gmail **draft only**). Public marketing waits on the 10-07 MLS rule check.

## Key output
```
## Headline
3 Bed, 2 Bath on 0.22 Acres, No HOA, Roof 2021

## MLS public remarks (~500/1000 characters)
Three bedrooms, two baths, and a 0.22-acre lot with no HOA in Round Rock. Built in 1994,
1,780 sq ft per Williamson CAD (buyer to verify). Roof replaced in 2021 and furnace in 2019.
The kitchen is the original oak, not updated, so a buyer can plan their own changes. Fenced
yard with a deck, plus a 2-car attached garage. Refrigerator, washer, and dryer are included;
the dining room chandelier is excluded. Assigned schools: [school names] (buyer to verify).
[Distance, e.g. 0.0 miles to a landmark].

## Compliance check (excerpt)
- Dan's request "perfect for a growing family": not used. It describes who should live in
  the home, which signals a preference for families (familial status, a Fair Housing
  protected class).
- Dan's request "master suite": not used. The playbook requires "primary".
- Plain explanation Sam can pass to Dan: "Fair Housing law bars listings from saying who a
  home is for, such as families. ... We describe the house instead, and buyers decide for
  themselves. 'Master' is also being phased out of listings, so we say 'primary.'"
- Compliant alternatives: "Three bedrooms and a fenced yard with a deck"; "Room to spread
  out on a 0.22-acre lot"; "2-car attached garage"; "Primary bedroom" (only with confirmed details).

## Launch checklist (excerpt)
| 2026-10-04 | Seller's Disclosure Notice (TREC OP-H / TXR 1406) to Dan to complete himself | Dan |
| 2026-10-04 | Lead-based paint addendum: N/A, built 1994 (post-1978) | Sam |
| 2026-10-07 | MLS marketing-rule check (Clear Cooperation / coming-soon). Nothing public until done | Sam |
| 2026-10-08 | TREC advertising check: "Lakeside Realty LLC" on sign and every ad, >= 1/2 size | Sam |
| 2026-10-10 | Go live on MLS; set listing.md status active | Sam |
```

## Compliance and judgment catches
- **Fair Housing (familial status):** refused the seller's "perfect for a growing family" request. Listing copy describes the property, not the people.
- **Fair Housing wording:** "master suite" → "primary" (and only with confirmed details).
- **Accuracy:** the kitchen is described honestly as original and not updated; there is no superlative; sqft is "per Williamson CAD (buyer to verify)"; the excluded chandelier is disclosed everywhere; virtual staging must be disclosed if used.
- **MLS rules:** no contact info, showing instructions, or links in public remarks. The Clear Cooperation / coming-soon check comes before any sign or post.
- **TREC Rule 535.155:** the broker name is in the text of every ad, with the size rule flagged for the designer. The IABS link is in the email and flyer.
- **CAN-SPAM:** the email blast has the physical address, an unsubscribe line, and an honest subject.
- **Texas disclosures:** the seller completes the Seller's Disclosure Notice (the agent never fills it in); lead paint N/A (1994); MUD/PID check; T-47/survey; net sheet; intermediary consent.
- **Seller's price:** $449k is recorded as Dan's choice. Compensation is noted as negotiated, not set by law.
- **Open houses** are marked pending seller approval and aren't published until he approves.

## Files
- Changed `listings/214-ridge-rd/listing.md` (list_price, price_history, list_date, expires, notes)
- Created `listings/214-ridge-rd/launch.md`, `listings/214-ridge-rd/copy.md` (phone placeholder filled by orchestrator)
- Changed `leads/2026-09-01-dan-okafor.md` (agreement-signed, next action, log incl. declined phrases)
- Created `showcase-log/24-listing-launch.md`
