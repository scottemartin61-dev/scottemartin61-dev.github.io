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
source: zillow            # zillow | har | realtor-com | loopnet | crexi | rentspree | followupboss | website | referral | open-house | sign-call | social | sphere | fsbo | expired | other
referred_by:              # name, if a referral
type: buyer               # buyer | seller | both | tenant | landlord | commercial
status: new               # new | contacted | qualified | appointment-set | nurture | agreement-signed | under-contract | closed | lost
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
iabs_provided:            # Texas only: date the IABS notice was given
crm_id:                   # the person's Follow Up Boss link or ID, if known
client_folder:            # buyers/<stem>/ or listings/<street-slug>/ once a client (see client-playbook)
---

## Summary
One or two sentences: who they are and what they want.

## Log
- 2026-11-05 — Lead received via Zillow inquiry on 123 Main St.
```

Keep the frontmatter current on every touch: update `status`, `last_contact`, `next_action`, `next_action_due`, and append a dated line to `## Log`. Log facts the client said, not guesses; mark inferences as such.

## Agent profile

`leads/agent-profile.md` holds the agent's details in frontmatter, collected once and reused by every skill: `name`, `brokerage`, `brokerage_address`, `phone`, `email`, `license`, `state` (two-letter code of the agent's license; `TX` turns on the `realtor-pipeline:texas-playbook` rules and its extra profile fields), and optionally `mls_remarks_limit` (default 1000), `lenders` (list of names for referrals), and `adjustments` (local CMA values, e.g. `bath: 10000`, `garage_bay: 8000`). Ask for a missing field when a task needs it and save the answer.

**Personalization (all optional)** — `voice` (3-5 words on how she wants to come across, e.g. "warm, upbeat, straightforward"), `sign_off` (e.g. "Talk soon, Danielle"), `sample_writing` (a message she wrote and likes), `avoid_words`, `languages`, `service_areas` (cities, neighborhoods, ZIPs), `specialties` (e.g. first-time buyers, relocation, VA buyers), `price_range`, `website`, `social`, `bio` (2-3 sentences about her), `title_companies`, `inspectors`, `broker_contact` (who she asks when unsure), `mls_name` (e.g. HAR), `crm` (e.g. followupboss), `crm_stages` (her CRM's stage names, in order), `tools` (other sites she uses, e.g. HAR.com, LoopNet, Crexi, RentSpree), `work_hours`, `days_off`, `seller_update_day` (default Friday). Use them this way:

- Every draft follows `voice`, matches the tone and length of `sample_writing` (never copies it), avoids `avoid_words`, and ends with `sign_off` above the signature block. Offer a translated draft when a client writes in one of her `languages`.
- `bio`, `specialties`, and `service_areas` feed buyer packets and listing presentations. Never invent sales numbers, awards, years of experience, or designations she didn't list — a new agent's honesty is her selling point.
- Vendor lists (`lenders`, `title_companies`, `inspectors`) are always offered as two or more options, never as required.
- Suggest call and reminder times inside `work_hours` (and inside the legal calling hours), never on `days_off`.
- When the profile has no `voice`, write warm, plain, and brief.

## Her other tools

The profile's `tools` field lists what she uses (e.g. `crm: followupboss`, `mls_name: HAR`, `tools: [HAR.com, LoopNet, Crexi, RentSpree]`). None of these connect to Claude directly; work alongside them:

- **Lead notifications** from HAR.com, Zillow, LoopNet, Crexi, RentSpree, and Follow Up Boss arrive by email. Treat a pasted or Gmail-found notification from any of them as a new lead and set `source` to match.
- **Follow Up Boss is her system of record** when `crm: followupboss`. The files here are the assistant's working copy. Every skill that creates a lead or changes a lead's `status`, `temperature`, or next action ends with a **"For Follow Up Boss"** block she can paste — stage (from her `crm_stages` list; if she hasn't set one, the status in plain words and a reminder to pick the matching stage), tags (source, type, temperature), a 1-3 line note in her voice, and the next task with its due date. Never claim Follow Up Boss was updated; she does that.
- **HAR MLS data**: when a step needs comps or listings and no connector supplies them, ask her to paste a HAR MLS search or export. HAR data is MLS data — fine for client CMAs, but other homes' sold prices stay out of public advertising.
- **RentSpree** handles rental applications and screening; the `realtor-pipeline:rentals` skill covers leasing work around it.
- **LoopNet and Crexi** are commercial listing sites; see commercial leads below.

## Rentals and commercial leads

Lease and commercial leads use the same record, with `type: tenant | landlord | commercial`, and these scoring changes:

- **Tenant:** Motivation = reason to move; Timeline = move-in date (under 30 days scores 3); Financial readiness = stated income about 3× the rent or more, plus ability to pay deposit and first month (3), partial (1-2), unknown (0). Hot = score 8+ and move-in within 45 days.
- **Landlord:** Motivation = vacancy or lease end date; Timeline = when the unit is ready; Financial readiness = property ready to show and owner decision-maker identified. Hot = unit ready within 30 days.
- **Commercial (LoopNet, Crexi, other):** Motivation = clear business use or investment goal; Timeline = occupancy or closing target; Financial readiness = proof of funds, SBA or commercial pre-qualification, or stated budget/cap rate. Score as usual, then tell her: commercial deals use different contracts (not the TREC residential forms) and her broker should be involved from the first meeting. The plugin's offer, contract, and repair tools are built for residential homes — for commercial, help only with replies, qualification, follow-up, and organizing information.

Fair housing rules apply fully to rentals (housing); never screen, steer, or describe based on protected classes.

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

These are compliance rules agents are tempted to bend to sound helpful. Hold them. They are the U.S. baseline: when the profile's `state` is `TX`, the `realtor-pipeline:texas-playbook` rules also apply and win where stricter (IABS notice, SB 1968 buyer agreements, TREC advertising, Texas calling hours and text rules).

- **Fair Housing.** Never steer, and never describe neighborhoods, schools, or buyers by race, color, religion, sex (including orientation and gender identity), disability, familial status, national origin, or state-protected classes. "Is it a safe area?" / "good schools?" / "who lives there?" → point to objective sources (police crime maps, state school report cards, census data) and let the client decide. Don't write "perfect for young families", "exclusive", "walking distance" to a church, or similar coded phrases.
- **Consent before texts and calls (TCPA / Do-Not-Call).** Text or auto-dial only leads with `consent.sms: yes` or who contacted the agent by text first. Honor STOP and unsubscribe immediately and record it. Cold calls to FSBO / expired leads require a DNC registry check first. Call only 8am-9pm in the lead's local time.
- **Email (CAN-SPAM).** Nurture emails identify the agent and brokerage, include the brokerage's physical address and a working unsubscribe line, and use honest subject lines.
- **Buyer agreements (2024 NAR settlement).** A written buyer agreement is required before touring a home with a buyer. Compensation is negotiable — never say commission is fixed, standard, or "free to the buyer".
- **Stay in lane.** No legal, tax, lending, or inspection advice; refer to an attorney, CPA, lender, or inspector. Never promise rates, values, or outcomes.
- **Drafts, not sends.** Agents draft messages; the human agent approves before anything is sent, posted, or scheduled.
