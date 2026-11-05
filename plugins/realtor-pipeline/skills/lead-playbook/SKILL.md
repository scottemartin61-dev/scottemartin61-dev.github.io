---
name: lead-playbook
description: Reference playbook for residential real estate lead work — the lead record format, the hot/warm/cold scoring rubric, follow-up cadences, and Fair Housing / TCPA / CAN-SPAM / NAR guardrails. Use when creating, scoring, contacting, or nurturing a buyer or seller lead, or when asked how leads should be scored or what may be said to a prospect.
model: inherit
---

# Lead playbook

The single source of truth for every `realtor-pipeline` skill and agent. When a rule here conflicts with the agent's broker or state law, the broker and state law win — say so and defer.

## Lead records

One markdown file per lead in a `leads/` folder at the root of the working folder: `leads/<created-date>-<first-last>.md` (e.g. `leads/2026-11-05-jane-doe.md`). Create `leads/` if it does not exist. Never delete a record — set `status: lost` and note why.

```markdown
---
name: Jane Doe
phone: "+1 555 010 0000"
email: jane@example.com
source: zillow            # zillow | realtor-com | website | referral | open-house | sign-call | social | sphere | fsbo | expired | other
referred_by:              # name, if a referral
type: buyer               # buyer | seller | both
status: new               # new | contacted | qualified | appointment-set | nurture | agreement-signed | lost
temperature: unscored     # hot | warm | cold | unscored
score:                    # 0-11, see rubric
timeline:                 # e.g. "60-90 days"
price_range:
areas:
property_of_interest:     # address or MLS #, if they inquired about one
financing: unknown        # unknown | cash | pre-approved | pre-qualified | not-started
must_sell_first: unknown  # yes | no | unknown
represented: unknown      # unknown | no | yes-exclusive | yes-nonexclusive
consent:
  email: unknown          # yes | no | unknown | unsubscribed
  sms: unknown            # yes | no | unknown | stop
  calls: unknown          # yes | no | unknown | dnc
created: 2026-11-05
last_contact:
next_action:
next_action_due:
---

## Summary
One or two sentences: who they are and what they want.

## Log
- 2026-11-05 — Lead received via Zillow inquiry on 123 Main St.
```

Keep the frontmatter current on every touch: update `status`, `last_contact`, `next_action`, `next_action_due`, and append a dated line to `## Log`. Log facts the client said, not guesses; mark inferences as such.

## Scoring rubric

Score only on evidence in the record. Missing information scores 0 and becomes a question for the next conversation.

| Factor | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Motivation | none stated / "just looking" | vague want | clear reason (job, family, lease ending) | urgent reason with a date |
| Timeline | 12+ months or unknown | 6-12 months | 3-6 months | under 3 months |
| Financial readiness | unknown | pre-qualified or "talking to a lender" | pre-approved | cash with proof, or seller with equity and no sale contingency |
| Engagement (max 2) | no reply | replies slowly | answers questions, books time | — |

**Gate — representation first.** If `represented: yes-exclusive`, stop: do not solicit their business, score, or nurture them (NAR Code of Ethics Article 16). Set `status: lost`, log "represented by another agent", and tell the agent.

Temperature from total score (0-11), with the timeline override applied last:

- **Hot** — score 8+ **and** timeline under 6 months.
- **Warm** — score 5-7, or score 8+ with timeline 6+ months.
- **Cold** — score 0-4, or timeline 12+ months.

## Follow-up cadence

| Temperature | Next action | Cadence |
|---|---|---|
| New (unscored) | First reply | within 5 minutes during business hours; first thing next business morning otherwise |
| Hot | Phone call to set a buyer consultation or listing appointment | due same day; then every 1-2 days until an appointment is set |
| Warm | Value touch (listings, market update, check-in) | every 2 weeks; re-qualify every 60 days |
| Cold | Monthly market email; quarterly personal check-in | monthly; re-qualify every 6 months |

Every touch should give something (a listing, a number, an answer) — never a bare "just checking in".

## Guardrails

These are compliance rules agents are tempted to bend to sound helpful. Hold them.

- **Fair Housing.** Never steer, and never describe neighborhoods, schools, or buyers by race, color, religion, sex (including orientation and gender identity), disability, familial status, national origin, or state-protected classes. "Is it a safe area?" / "good schools?" / "who lives there?" → point to objective sources (police crime maps, state school report cards, census data) and let the client decide. Don't write "perfect for young families", "exclusive", "walking distance" to a church, or similar coded phrases.
- **Consent before texts and calls (TCPA / Do-Not-Call).** Text or auto-dial only leads with `consent.sms: yes` or who contacted the agent by text first. Honor STOP and unsubscribe immediately and record it. Cold calls to FSBO / expired leads require a DNC registry check first. Call only 8am-9pm in the lead's local time.
- **Email (CAN-SPAM).** Nurture emails identify the agent and brokerage, include the brokerage's physical address and a working unsubscribe line, and use honest subject lines.
- **Buyer agreements (2024 NAR settlement).** A written buyer agreement is required before touring a home with a buyer. Compensation is negotiable — never say commission is fixed, standard, or "free to the buyer".
- **Stay in lane.** No legal, tax, lending, or inspection advice; refer to an attorney, CPA, lender, or inspector. Never promise rates, values, or outcomes.
- **Drafts, not sends.** Agents draft messages; the human agent approves before anything is sent, posted, or scheduled.
