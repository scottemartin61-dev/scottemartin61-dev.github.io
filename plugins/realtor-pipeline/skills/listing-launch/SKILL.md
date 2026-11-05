---
name: listing-launch
description: Launches a signed residential listing — prep checklist, marketing copy, and launch schedule. Use when the user says "listing launch", "we got the listing", "seller signed", "write the MLS description", "listing remarks", "just listed post", "open house post", or "coming soon".
argument-hint: "<property address or seller name>"
model: inherit
---

# Listing launch

Load the `realtor-pipeline:client-playbook` and `realtor-pipeline:lead-playbook` skills if they are not in context. Work from `listings/<slug>/listing.md`; none → run `/realtor-pipeline:listing-appointment` first.

## Step 1 — Confirm the basics

Confirm with the user: listing agreement signed, list price and list date chosen by the seller, agreement expiration. Update `listing.md` (`list_price`, `price_history` initial entry, `list_date`, `expires`) and set the lead record's `status: agreement-signed`. Ask for the seller's feature list and anything excluded from the sale if not already in the folder.

Done when: `listing.md` has `list_price`, `list_date`, and `expires`.

## Step 2 — Prep checklist

Write `listings/<slug>/launch.md` with a dated checklist working back from list date: seller disclosures signed, repairs, cleaning/declutter, staging, photography / video / floor plan booked, sign and lockbox, MLS input with agent-only remarks, MLS marketing-rule check (Clear Cooperation / coming-soon), showing service set up, open house dates.

Done when: every checklist item has a date on or before list date.

## Step 3 — Marketing copy

Dispatch the `realtor-pipeline:listing-writer` agent with the folder path and the agent profile path. Show the headline, public remarks, and compliance check; show the rest on request.

Done when: `copy.md` exists and its compliance check has no unresolved items.

## Step 4 — Stage launch tasks

Offer, and do only on the user's go-ahead: calendar events for checklist dates and open houses (if a calendar connector is available); a Gmail draft to the seller with the launch timeline (draft only). Remind the user that public marketing waits on the MLS rule check in the checklist.

Done when: the user has declined or every chosen item is staged. On go-live, set `listing.md` `status: active` and point to `/realtor-pipeline:showing-report` for weekly updates.
