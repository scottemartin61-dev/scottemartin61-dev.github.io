---
name: showing-report
description: Logs showing feedback on a residential listing and produces the weekly seller report. Use when the user says "showing feedback", "log this feedback", "weekly seller report", "seller update", "how is my listing doing", "should we reduce the price", or pastes feedback from a showing agent or ShowingTime.
argument-hint: "<property address> [log <feedback> | report]"
model: inherit
---

# Showing report

Load the `realtor-pipeline:client-playbook` and `realtor-pipeline:lead-playbook` skills if they are not in context. Work from `listings/<slug>/`; mode from the arguments — pasted feedback → log, otherwise → report.

## Step 1 — Log mode

Parse each showing in the pasted feedback into the client-playbook entry format and append it to `showings.md` (create if missing), oldest first, skipping exact duplicates. Strip anything about the buyers' protected characteristics. Show a one-line summary per entry.

Done when: every showing in the paste has exactly one entry in `showings.md`.

## Step 2 — Report mode: gather market changes

Ask the user for this week's online activity numbers (views, saves) if they have them. With a Zillow connector, search the listing's area for new actives, pendings, and sales since the last report within the CMA's comp criteria. Collect these for the reporter.

Done when: market changes are collected or marked "not available".

## Step 3 — Write the report

Dispatch the `realtor-pipeline:feedback-reporter` agent with the folder path and the activity and market data. Show the report.

If any price-review signal fired, offer to dispatch the `realtor-pipeline:cma-analyst` agent for an updated CMA (target `cma.md`, keeping the old one renamed `cma-<date>.md`) before the price conversation.

Done when: `reports/<today>.md` exists and the user has decided on the CMA refresh.

## Step 4 — Send

Offer a Gmail draft to the seller with the report (draft only). On a price change the seller approves, append to `price_history`, update `list_price`, and offer `/realtor-pipeline:listing-launch` Step 3 to refresh the copy.

Done when: the user has a staged draft or declined, and any approved price change is recorded.
