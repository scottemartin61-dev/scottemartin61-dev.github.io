# Realtor Pipeline

A Claude plugin that gives a residential real estate agent assistant agents along the pipeline. Covered so far: **lead generation & first contact**, **qualification & nurture**, **consultation**, and **active search / active marketing**. Offers, escrow, and closing are planned.

## Install

In Claude Code (or Cowork):

```
/plugin marketplace add scottemartin61-dev/scottemartin61-dev.github.io
/plugin install realtor-pipeline@scottemartin-realty
```

Work in a dedicated folder for your business — the plugin keeps records there in `leads/`, `buyers/`, and `listings/`.

## New to this? Start here

Say **"Help, I'm new"** and the assistant sets you up and shows what it can do. Every morning, say **"What should I do today?"**. After anything happens, tell it in your own words; you never need to type a command. A beginner's guide with a "what do I say when…" picker, a personalization worksheet, and practice exercises is in `guide/index.html`.

## What's inside

### Stages 1-2 — Leads

| Command | What it does |
|---|---|
| `/realtor-pipeline:start-here` | Plain-language front door: first-time setup, personalization ("make it sound like me"), "what can you do?", and "what's next with <client>?" — it picks and runs the right assistant. |
| `/realtor-pipeline:my-day` | One short, prioritized to-do list across deadlines, offers, new leads, client updates, and follow-ups, with what to say for each. |
| `/realtor-pipeline:followupboss` | Imports a Follow Up Boss contact export, lists ready-to-paste updates for Follow Up Boss, and builds an import CSV of changed contacts. |
| `/realtor-pipeline:rentals` | Leasing work: tenant rental searches, landlord rental listings with written screening criteria, and comparing RentSpree application summaries against those criteria only. |
| `/realtor-pipeline:new-lead` | Paste an inquiry (or "from gmail") → lead record + text/email/call drafts in minutes, staged as a Gmail draft and calendar follow-up on approval. |
| `/realtor-pipeline:qualify-lead` | Before a call: a script that asks only what you don't know yet. After: paste notes → hot/warm/cold score with evidence and next action. |
| `/realtor-pipeline:nurture-plan` | A dated 90-day (warm) or 6-month (cold) drip of useful touches, saved to `leads/nurture/`, with drafts and reminders staged on approval. |
| `/realtor-pipeline:lead-review` | Today's list: uncontacted, overdue, due, hot-without-appointment, gone-quiet — plus pipeline counts by temperature and source. |

### Stages 3-4 — Buyers

| Command | What it does |
|---|---|
| `/realtor-pipeline:buyer-consult` | Before: a consultation packet (process, buyer agreement walkthrough, financing, market snapshot, needs worksheet). After: paste notes → saved search criteria. |
| `/realtor-pipeline:home-search` | Searches listings against the buyer's criteria, scores a shortlist, builds a routed tour sheet, and logs tour feedback. |

### Stages 3-4 — Sellers

| Command | What it does |
|---|---|
| `/realtor-pipeline:listing-appointment` | Pulls property facts and comps, runs a CMA with a value range and recommended list price, and outlines the listing presentation. |
| `/realtor-pipeline:listing-launch` | Dated prep checklist, Fair-Housing-checked MLS remarks and marketing copy, and launch tasks staged on approval. |
| `/realtor-pipeline:showing-report` | Logs showing feedback and writes the weekly seller report with price-review signals; refreshes the CMA when signals fire. |

### Stages 5-6 — Offers and under contract

| Command | What it does |
|---|---|
| `/realtor-pipeline:offer-prep` | Buyer side: checks readiness (agreement, pre-approval), runs a value check, and recommends price and terms as a terms sheet for the contract. Handles counters. |
| `/realtor-pipeline:review-offers` | Listing side: logs offers, compares them on estimated net to seller and certainty to close, and stages highest-and-best or counter emails. |
| `/realtor-pipeline:under-contract` | Turns the executed contract into a confirmed summary, a full deadline calendar, a parties checklist, and client kickoff emails with the wire-fraud warning. |
| `/realtor-pipeline:repair-request` | Sorts inspection findings into safety / systems / defects / cosmetic, recommends repair, credit, or price reduction per item, and times it to the option or inspection deadline. |
| `/realtor-pipeline:transaction-status` | Daily board across all pending deals: missed, at risk, due this week, input needed, closing soon — plus optional client updates. |

Behind the commands:

- **Agents** — `lead-responder`, `lead-qualifier`, `nurture-writer`, `cma-analyst`, `listing-writer`, `feedback-reporter`, `offer-analyst`, `deadline-tracker`, `repair-negotiator`. Each runs in its own context and is limited to reading and writing files; the commands handle connectors, always as drafts you approve.
- **Playbooks** — `lead-playbook` (lead record format, agent profile, scoring rubric, cadences, compliance guardrails), `client-playbook` (client folders, CMA method, listing advertising rules, showing feedback format, price-review signals), and `transaction-playbook` (offer terms, multiple offers, net sheets, contract summary, deadline rules, repair categories, wire fraud). Edit these files to match your brokerage's standards.
- **No contract drafting.** The plugin produces terms sheets, comparisons, calendars, and request lists; you put terms into the required forms.

## Texas agents

Set `state: TX` in `leads/agent-profile.md` (the plugin asks on first use) and add your TREC-registered `broker_name`, any registered `team_name`, and `iabs_url`. The `texas-playbook` skill then applies across every command:

- **IABS notice** in the body of the first reply about a specific property, with delivery logged (Occ. Code §1101.558, TREC Rule 531.20).
- **SB 1968 buyer agreements** (effective Jan 1, 2026): tours are blocked until a written representation agreement or a 14-day showing-only agreement is on file; consultation packets explain the required terms.
- **Intermediary** flags for in-house listings — Texas has no dual agency.
- **TREC advertising** (Rule 535.155): broker name on every ad at half the size of the largest agent/team contact info; IABS and Consumer Protection Notice links on websites and profiles.
- **Non-disclosure state** CMA handling: portal sold prices marked unverified; MLS closed data required before a CMA goes to a seller; square footage cited to the appraisal district.
- **Seller disclosures** in the launch checklist: Seller's Disclosure Notice, lead paint, HOA/MUD/PID notices, T-47.
- **Calls and texts**: Texas calling hours (9am-9pm Mon-Sat, noon-9pm Sun) and SB 140 text-message rules.
- **Contracts**: TREC-promulgated forms only; option period ends 5:00 p.m. on its last day; earnest money and option fee to the title company within 3 days; repairs agreed on a TREC Amendment before the option ends; Third Party Financing Addendum, title, survey/T-47, Seller's Disclosure, Subdivision Information, and MUD notice deadlines and termination windows tracked.

TREC rules and forms change — confirm exact wording and form versions on trec.texas.gov or with your broker.

## Follow Up Boss connection (optional)

The plugin includes a small Follow Up Boss connector (`servers/followupboss/`, Node.js, no dependencies). When the plugin is enabled it asks for a Follow Up Boss API key (Admin → API in Follow Up Boss), stored in the system's secure credential store. With it, the assistant can look up people, stages, and tasks, and — after the user clicks **Allow** on a confirmation for each change (enforced by `hooks/confirm-fub-write.mjs`) — add leads, change stages, add tags, notes, and tasks. Leave the key blank to keep using copy-paste updates. Requires Node.js on the computer and a paid Claude plan that includes Claude Code (Pro or higher).

HAR.com, LoopNet, Crexi, and RentSpree have no public API for personal tools, and storing their passwords for automated logins would break their terms (and MLS credential rules), so they stay email- and paste-based.

## Connectors (optional)

Works with plain files alone. Lead emails from HAR.com, Zillow, LoopNet, Crexi, RentSpree, and Follow Up Boss are handled like any other lead; Follow Up Boss stays the system of record, with ready-to-paste updates after every step. LoopNet and Crexi (commercial) leads get first replies, qualification, and follow-up, with a prompt to involve the broker; offer and contract tools are residential only. If connected, it also uses **Gmail** (find portal leads, create drafts — never sends), **Google Calendar** (reminders, appointments, tour holds), and **Zillow** (property details, comps, active-listing search). Your own MLS data beats portal data — paste an export whenever you have one.

## Try it

- Leads: copy a sample from `examples/sample-leads.md` into `/realtor-pipeline:new-lead`.
- Sellers: copy `examples/sample-listing/` into `listings/`, then run `/realtor-pipeline:listing-appointment 214 Ridge Rd` and `/realtor-pipeline:showing-report 214 Ridge Rd report`.
- Offers: also copy `examples/sample-offers/214-ridge-rd/` into `listings/214-ridge-rd/offers/` and run `/realtor-pipeline:review-offers 214 Ridge Rd`.
- Full scenario: see `examples/walkthrough/` for a complete buyer and seller run with an interactive page.
- Under contract (Texas): copy `examples/sample-transaction/` into `transactions/`, then run `/realtor-pipeline:transaction-status` and `/realtor-pipeline:repair-request 1402 Oak Bend Dr`.

## Disclaimer

Drafts and analyses are suggestions for a licensed agent to review. A CMA is not an appraisal. The guardrails are general U.S. guidance, not legal advice — your broker and state law take precedence.
