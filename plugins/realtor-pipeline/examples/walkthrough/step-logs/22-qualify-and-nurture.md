## Step — Qualify Dan Okafor, then build a cold nurture plan
**Date:** 2026-09-03 · **Command:** `/realtor-pipeline:qualify-lead` + `/realtor-pipeline:nurture-plan` · **Agents dispatched:** realtor-pipeline:lead-qualifier, realtor-pipeline:nurture-writer

## What happened
- Dan's email reply was scored "after the call". The representation gate passed: he isn't talking to other agents, so `represented: no`.
- The qualifier scored 3/11. On review the orchestrator corrected Motivation 1 → 2, because the rubric names "family" as a clear reason and Dan stated one (moving closer to grandkids). Final score 4/11, which is **cold** and doesn't change the routing. The qualifier had also left the stated reason out of the log; it is now logged in Dan's words.
- Financial readiness stays at 0. The ~$231k payoff is known, but there is no CMA yet, so equity is unconfirmed.
- The nurture-writer built a 7-touch, email-only monthly plan (no texts or calls, because consent is email only). Touches 1, 4 and 7 ask for a phone number and call permission. Re-qualification is on 2027-03-03.
- Staging: there is no Gmail or Calendar connector. Touch 1 would be staged as a Gmail **draft only** for Sam's approval, and each touch date would get a "Nurture: Dan Okafor — touch n (email)" reminder. **Assumed:** the script doesn't say touch 1 was sent, so the record still shows it as the pending next action.

## Key output
```
### Dan Okafor — COLD (4/11)   [qualifier returned 3/11; Motivation corrected 1 → 2]
| Factor | Points | Evidence |
|---|---|---|
| Motivation | 2 | may move closer to grandkids in Dallas (family reason, no date) |
| Timeline | 1 | "probably spring or summer" (2027), about 6-12 months out |
| Financial readiness | 0 | Owes ~$231k; value unknown (no CMA), equity unconfirmed |
| Engagement | 1 | Replied and answered, but booked no time |

| # | Date | Channel | Purpose |
|---|---|---|---|
| 1 | 2026-09-03 | email | Reply to his note: process, what a CMA is, ask for phone and call permission |
| 2 | 2026-10-03 | email | Monthly Round Rock market update plus what sellers can start on early |
| 3 | 2026-11-03 | email | Explain what goes into a CMA in Texas and offer one, no obligation |
| 4 | 2026-12-03 | email | Quarterly personal check-in, repeat the call-permission ask |
| 5 | 2027-01-03 | email | Monthly update plus planning a sale from a distance (Dallas, payoff, net sheet) |
| 6 | 2027-02-03 | email | Spring-listing preparation timeline |
| 7 | 2027-03-03 | email | Re-qualification: timeline, reason, CMA, phone and call permission |

Touch 1 excerpt:
  "I won't guess at a number by email, because a responsible figure needs the home's
   details and recent comparable sales."
  "If it is fine for me to call, let me know which days and times suit you. If you would
   rather stay with email, that is completely fine and I will not call."
  Footer: Lakeside Realty LLC | TREC #0123456 / 100 Main St, Austin, TX 78701 /
  "To stop receiving emails from me, reply with "unsubscribe" and I will remove you right away."
```

## Compliance and judgment catches
- **Representation gate (NAR Art. 16):** checked first. "Not talking to other agents" means OK to proceed.
- **Scoring on evidence only:** equity is not credited without a value, and the 0 is turned into a CMA offer.
- **Judgment correction:** the qualifier was over-cautious and left out the family reason. Logging a seller's own stated reason for moving is not a Fair Housing problem, and the rubric scores it.
- **TCPA / Texas SB 140:** no texts or calls in the plan, because there is no phone and no consent. The plan asks for permission instead.
- **CAN-SPAM:** every email has the agent and brokerage identity, the physical address, an honest subject, and a working unsubscribe line.
- **TREC Rule 535.155:** broker name "Lakeside Realty LLC" is in each footer. The writer flagged that the broker should confirm the footer format.
- **No value promises / stay in lane:** no number is given by email. Payoff and net figures are deferred to the lender or title company.
- **Drafts, not sends:** each touch needs Sam's approval.

## Files
- Changed `leads/2026-09-01-dan-okafor.md` (status nurture, cold 4/11, represented no, timeline, next action → touch 1, log lines)
- Created `leads/nurture/2026-09-01-dan-okafor.md` (7-touch plan with full drafts)
- Created `showcase-log/22-qualify-and-nurture.md`
