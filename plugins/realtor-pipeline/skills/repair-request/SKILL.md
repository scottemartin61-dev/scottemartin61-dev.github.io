---
name: repair-request
description: Builds or answers a repair request after a residential home inspection. Use when the user says "inspection report is in", "repair request", "repair amendment", "what should we ask the seller to fix", "seller's response to repairs", "they sent a repair request", or pastes inspection findings.
argument-hint: "<property address> [inspection summary or seller response]"
model: inherit
---

# Repair request

Load `realtor-pipeline:transaction-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook`. Work in `transactions/<street-slug>/`; no `contract.md` → run `/realtor-pipeline:under-contract` first.

## Step 1 — Deadline first

Read `timeline.md` (re-run `realtor-pipeline:deadline-tracker` if older than today) and state the controlling deadline at the top: the Texas option period end (5:00 p.m.) or the inspection contingency end, with business days left. Under 2 business days → tell the user the realistic options now are a short, decisive request or termination before the deadline, and ask which.

Done when: the deadline and days left are shown.

## Step 2 — Findings

Save the inspection summary (or the report text the user provides) to `inspection.md`. Ask for contractor estimates the client already has. If the report recommends specialist evaluations, list them as the first action.

Done when: `inspection.md` holds the findings.

## Step 3 — Analyze

Dispatch `realtor-pipeline:repair-negotiator` with the folder path and the side; include the seller's response if this is a response round. Show the table, totals, and fallback plan.

Done when: the analysis section is saved in `inspection.md` and shown.

## Step 4 — Send and record

The agreed items go on the required form (Texas: TREC Amendment, signed by all parties before the option deadline). On the user's go-ahead, stage a Gmail draft (never send) to the other agent with the request summary and the response deadline. When terms are agreed, append to `amendments.md` (date, items, credit or price change, signed by) and update `contract.md` (e.g. `price`) — then re-run `realtor-pipeline:deadline-tracker` if any date changed.

Done when: the request is staged or declined, and any agreed change is recorded in both `amendments.md` and `contract.md`.
