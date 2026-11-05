# Realtor Pipeline

A Claude plugin that gives a residential real estate agent assistant agents for the front of the pipeline: **lead generation & first contact** and **qualification & nurture**. Later stages (consultation, marketing, offers, escrow, closing) are planned.

## Install

In Claude Code (or Cowork):

```
/plugin marketplace add scottemartin61-dev/scottemartin61-dev.github.io
/plugin install realtor-pipeline@scottemartin-realty
```

Work in a dedicated folder for your business — the plugin keeps lead records in `leads/` there.

## What's inside

| Command | What it does |
|---|---|
| `/realtor-pipeline:new-lead` | Paste an inquiry (or "from gmail") → lead record + text/email/call drafts in minutes, staged as a Gmail draft and calendar follow-up on approval. |
| `/realtor-pipeline:qualify-lead` | Before a call: a script that asks only what you don't know yet. After: paste notes → hot/warm/cold score with evidence and next action. |
| `/realtor-pipeline:nurture-plan` | A dated 90-day (warm) or 6-month (cold) drip of useful touches, saved to `leads/nurture/`, with drafts and reminders staged on approval. |
| `/realtor-pipeline:lead-review` | Today's list: uncontacted, overdue, due, hot-without-appointment, gone-quiet — plus pipeline counts by temperature and source. |

Behind the commands:

- **Agents** — `lead-responder` (first replies), `lead-qualifier` (scoring), `nurture-writer` (sequences). Each runs in its own context and is limited to reading and writing files.
- **`lead-playbook` skill** — the record format, the 0-11 scoring rubric, follow-up cadences, and compliance guardrails (Fair Housing, TCPA/DNC, CAN-SPAM, 2024 NAR buyer-agreement rules). Edit this one file to match your brokerage's standards.

## Connectors (optional)

Works with plain files alone. If connected, it also uses **Gmail** (find portal leads, create drafts — never sends), **Google Calendar** (follow-up reminders), and **Zillow** (property details for inquiry replies).

## Try it

Copy a sample from `examples/sample-leads.md` and run `/realtor-pipeline:new-lead` with it.

## Disclaimer

Drafts are suggestions for a licensed agent to review. The guardrails are general U.S. guidance, not legal advice — your broker and state law take precedence.
