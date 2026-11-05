# Realtor Pipeline

A Claude plugin that gives a residential real estate agent assistant agents along the pipeline. Covered so far: **lead generation & first contact**, **qualification & nurture**, **consultation**, and **active search / active marketing**. Offers, escrow, and closing are planned.

## Install

In Claude Code (or Cowork):

```
/plugin marketplace add scottemartin61-dev/scottemartin61-dev.github.io
/plugin install realtor-pipeline@scottemartin-realty
```

Work in a dedicated folder for your business — the plugin keeps records there in `leads/`, `buyers/`, and `listings/`.

## What's inside

### Stages 1-2 — Leads

| Command | What it does |
|---|---|
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

Behind the commands:

- **Agents** — `lead-responder`, `lead-qualifier`, `nurture-writer`, `cma-analyst`, `listing-writer`, `feedback-reporter`. Each runs in its own context and is limited to reading and writing files; the commands handle connectors, always as drafts you approve.
- **Playbooks** — `lead-playbook` (lead record format, agent profile, scoring rubric, cadences, compliance guardrails) and `client-playbook` (client folders, CMA method, listing advertising rules, showing feedback format, price-review signals). Edit these two files to match your brokerage's standards.

## Texas agents

Set `state: TX` in `leads/agent-profile.md` (the plugin asks on first use) and add your TREC-registered `broker_name`, any registered `team_name`, and `iabs_url`. The `texas-playbook` skill then applies across every command:

- **IABS notice** in the body of the first reply about a specific property, with delivery logged (Occ. Code §1101.558, TREC Rule 531.20).
- **SB 1968 buyer agreements** (effective Jan 1, 2026): tours are blocked until a written representation agreement or a 14-day showing-only agreement is on file; consultation packets explain the required terms.
- **Intermediary** flags for in-house listings — Texas has no dual agency.
- **TREC advertising** (Rule 535.155): broker name on every ad at half the size of the largest agent/team contact info; IABS and Consumer Protection Notice links on websites and profiles.
- **Non-disclosure state** CMA handling: portal sold prices marked unverified; MLS closed data required before a CMA goes to a seller; square footage cited to the appraisal district.
- **Seller disclosures** in the launch checklist: Seller's Disclosure Notice, lead paint, HOA/MUD/PID notices, T-47.
- **Calls and texts**: Texas calling hours (9am-9pm Mon-Sat, noon-9pm Sun) and SB 140 text-message rules.

TREC rules and forms change — confirm exact wording and form versions on trec.texas.gov or with your broker.

## Connectors (optional)

Works with plain files alone. If connected, it also uses **Gmail** (find portal leads, create drafts — never sends), **Google Calendar** (reminders, appointments, tour holds), and **Zillow** (property details, comps, active-listing search). Your own MLS data beats portal data — paste an export whenever you have one.

## Try it

- Leads: copy a sample from `examples/sample-leads.md` into `/realtor-pipeline:new-lead`.
- Sellers: copy `examples/sample-listing/` into `listings/`, then run `/realtor-pipeline:listing-appointment 214 Ridge Rd` and `/realtor-pipeline:showing-report 214 Ridge Rd report`.

## Disclaimer

Drafts and analyses are suggestions for a licensed agent to review. A CMA is not an appraisal. The guardrails are general U.S. guidance, not legal advice — your broker and state law take precedence.
