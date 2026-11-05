## Step — Qualify lead: Carlos Mendez (pre-call script + scoring)
**Date:** 2026-09-14 · **Command:** `/realtor-pipeline:qualify-lead` · **Agents dispatched:** realtor-pipeline:lead-qualifier

## What happened
- **Before the call:** built a one-screen call guide that asked only about fields still unknown on the record. Representation came first, then motivation, timeline, financing, must-sell-first, price/areas, and text consent.
- **After the call:** sent Sam's notes to lead-qualifier. The representation gate passed: he is not working with an agent.
- Scored **9/11 → HOT**. Record set to `status: qualified`, `financing: pre-approved`, `represented: no`, and `consent.sms: yes`, with the verbal consent documented in the log.
- Next action: call to book the buyer consultation, due 2026-09-14, then every 1–2 days until it is booked.
- Hot route: offered an appointment-confirmation email and a calendar hold, either of which would be staged as a draft only (no connectors). Assumed: Sam books the consult by phone for 2026-09-17, which is Step 13.

## Key output
```
Call guide (pre-call)
1. Opener: "Hi Carlos, Sam Rivera with Lakeside Realty, following up on your Zillow question about 1402 Oak Bend Dr and seeing it Saturday..."
2. Questions: agent already? (first; if exclusive, end call) · what's prompting the move · ideal move-in date · lender / pre-approved · need to sell first · price range, areas, must-haves · OK to text?
3. Close: buyer consultation — "Texas requires a written buyer agreement before I can show you any home."
4. Avoid: no opinions on safety, schools, or who lives there; point to objective sources.

### Carlos Mendez — HOT (9/11)
| Factor | Points | Evidence |
|---|---|---|
| Motivation | 3 | Relocating from Houston for a new job starting Jan 5, which is an urgent reason with a date. |
| Timeline | 2 | "Close by mid-December." ~3 months and 1 day → 3-6 month band (conservative; 3 if counted under 3 months → 10). Hot either way. |
| Financial readiness | 2 | Pre-approved for $510k with First Federal, conventional, 10% down. |
| Engagement | 2 | Texted back within minutes and answered every question. |

Representation gate: passed (represented: no).
Next action: Phone call to book a buyer consultation; buyer representation agreement signed before any showing. Due 2026-09-14. Call 9am–9pm (Texas hours; noon–9pm Sunday).
Ask next time: Houston home to sell first? · consult this week to sign agreement before Saturday? · must-haves beyond 3+ bed/garage; OK with calls as well as texts?
```

## Compliance and judgment catches
- **Representation gate (NAR Article 16):** Checked first, before scoring.
- **Scoring on evidence only:** Must-sell-first was not discussed, so it stays `unknown` and becomes a question for next time. Timeline was scored at the conservative band.
- **Texas text rules (SB 140):** Recorded `consent.sms: yes` only after his verbal OK on the call, with a dated log entry. STOP must be honored.
- **Texas calling hours:** 9am–9pm Mon–Sat, noon–9pm Sun.
- **SB 1968:** The Saturday showing stays blocked until a written agreement (TXR 1501, or a showing-only form) is signed. The agent does not draft agreement terms.
- **Fair Housing:** The open safety/schools question is answered with objective sources only.
- **IABS:** Already provided 2026-09-14, not repeated.

## Files
- Changed: `leads/2026-09-14-carlos-mendez.md` (score, temperature, consent, criteria, log)
- Created: `showcase-log/12-qualify-lead.md`
