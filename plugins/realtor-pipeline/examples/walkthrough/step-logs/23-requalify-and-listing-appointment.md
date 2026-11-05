## Step — Dan wants to list ASAP: re-qualify, then prepare the listing appointment
**Date:** 2026-09-25 · **Command:** `/realtor-pipeline:qualify-lead` + `/realtor-pipeline:listing-appointment` · **Agents dispatched:** realtor-pipeline:lead-qualifier, realtor-pipeline:cma-analyst

## What happened
- Dan's "we bought in Dallas, want to list ASAP" email moved him from cold to **hot**. The qualifier scored 8/11. The phone number and **call** consent were recorded; SMS consent stays unknown because he did not give text permission.
- Hot route: a call to book the appointment, set for Tue 2026-09-29 (**assumed** date; the script says "next week"). The confirmation email would be staged as a Gmail draft only, and the calendar hold would be created only on Sam's go-ahead. The nurture plan was retired.
- Opened `listings/214-ridge-rd/` with the CAD-sourced facts and seller-confirmed included and excluded items, and saved the MLS comps to `comps-raw.md`.
- **Data catch:** the comps file lists 509 Ridge Rd as closed on 2026-10-03, after this step's date. It was excluded as a closed comp, so the CMA doesn't use information Sam couldn't have had on 09-25.
- The cma-analyst bracketed the home between comps (no invented adjustments) and recommended a **$449,000** list price. After the CMA showed equity, the orchestrator raised Financial readiness 0 → 3, for a final score of 11/11.
- Wrote an 8-section `presentation.md` with a placeholder list for Sam.

## Key output
```
### Dan Okafor — HOT (8/11 from qualifier → 11/11 after CMA showed equity)
| Factor | Points | Evidence |
|---|---|---|
| Motivation | 3 | "we bought in Dallas and want to list ASAP" — urgent, asked for a visit next week |
| Timeline | 3 | "list ASAP" / "come by next week" → under 3 months |
| Financial readiness | 0 → 3 | payoff ~$231k vs CMA most-likely ~$449k; no sale contingency |
| Engagement | 2 | answered, gave phone + call permission, asked to meet |

CMA — 214 Ridge Rd — 2026-09-25
| 198 Ridge Rd | 2026-09-14 | $438,000 (MLS) | 3/2 | 1,720 | $254.65 | 12 | similar/slightly inferior |
| 31 Hilltop Ct | 2026-08-02 | $472,500 (MLS) | 3/2.5 | 1,850 | $255.41 | 6 | Superior: updated kitchen |
| 77 Aspen Way | 2026-07-21 | $419,000 (MLS) | 3/1.5 | 1,640 | $255.49 | 21 | Inferior: needs roof, 1-car |
Rejected: 12 Brookside Ln (3,050 sqft); 509 Ridge Rd (closed 2026-10-03, after CMA date)
Market: 3.1 months of inventory (balanced) · median DOM 12
Low $438,000 · Most likely $449,000 · High $460,000
Recommended list price: $449,000 — most-likely value, just under the $450k search
bracket; above 220 Ridge Rd ($435k, smaller), close to 88 Aspen Way (pending in 15
days at $444,900), well below 31 Hilltop Ct ($472,500, updated).
"This is a comparative market analysis prepared by a real estate licensee, not an appraisal."
```

## Compliance and judgment catches
- **TCPA / Texas telemarketing:** a call is allowed now (consent yes, Texas hours of 9am-9pm). No texts, because SMS consent was never given.
- **Texas non-disclosure:** the comps are labeled MLS closed prices, not portal data, and the CMA warns not to publish other homes' sold prices in public ads.
- **No invented adjustments:** the profile has no `adjustments:` values, so the CMA brackets between comps and says no line-item adjustments were made.
- **Date integrity:** a comp that closed after the scenario date was excluded.
- **Not an appraisal / no promised price:** the CMA includes the disclaimer, and the list price is Dan's decision.
- **Sqft source:** "per Williamson CAD, buyer to verify".
- **Texas seller paperwork in the presentation:** IABS (already given 09-01), the TXR 1101 listing agreement with compensation "negotiable, not set by law", a Seller's Disclosure Notice Dan completes himself, a lead-paint addendum NOT required (built 1994), MUD/PID check, T-47/survey, intermediary consent, and a title-company net sheet.
- **MLS Clear Cooperation:** check before any sign or "coming soon" post. **Stay in lane:** questions about carrying two homes or taxes go to a CPA or attorney.
- **Scoring on evidence:** equity was credited only after the CMA, and the log notes it is an estimate, not a net sheet.

## Files
- Changed `leads/2026-09-01-dan-okafor.md` (phone, calls consent, hot 11/11, appointment-set, client_folder, nurture retired)
- Created `listings/214-ridge-rd/listing.md`, `comps-raw.md`, `cma.md`, `presentation.md`
- Created `showcase-log/23-requalify-and-listing-appointment.md`
