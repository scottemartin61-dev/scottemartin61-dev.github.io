---
name: listing-appointment
description: Prepares a residential listing appointment — gathers the home's facts and comps, runs a CMA, and builds the listing presentation. Use when the user says "listing appointment", "listing presentation", "price this home", "run a CMA", "comps for…", "what's my seller's home worth", or "prep for a seller meeting".
argument-hint: "<seller name or property address>"
model: inherit
---

# Listing appointment

Load the `realtor-pipeline:client-playbook` and `realtor-pipeline:lead-playbook` skills if they are not in context.

## Step 1 — Set up the listing folder

Find the seller's lead record (create one via `/realtor-pipeline:new-lead` if none). Create `listings/<street-slug>/listing.md` with `status: preparing` and set `client_folder:` on the lead record. Fill facts from the record and, with a Zillow connector, the off-market property details lookup. Record `sqft_source`. Ask the user for anything the seller told them that the data lacks (updates, condition, included items).

Done when: `listing.md` has address, beds, baths, sqft with source, year built, and lot — or the gaps are named to the user.

## Step 2 — Gather comps

With a Zillow connector, run property searches around the subject: recently sold homes (last 6 months, matching area, beds ±1, sqft ±20%), current actives, and pendings. Save the raw results to `listings/<slug>/comps-raw.md` with the pull date. Without a connector, ask for an MLS export or pasted comps. The agent's own MLS data beats portal data when both exist — say which was used.

Done when: `comps-raw.md` holds at least 3 closed sales, or the user has been told comps are thin and chosen to proceed or supply more.

## Step 3 — Run the CMA

Dispatch the `realtor-pipeline:cma-analyst` agent with the paths to `listing.md`, `comps-raw.md`, and `leads/agent-profile.md`, and the target path `listings/<slug>/cma.md`. Show its value conclusion and caveats.

Done when: `cma.md` exists and its conclusion is shown.

## Step 4 — Build the presentation

Write `listings/<slug>/presentation.md`, an outline the agent presents from:

1. About the agent and brokerage (from profile; placeholders otherwise).
2. The market now — market pace from the CMA.
3. Pricing — the CMA range and recommended price; how overpricing costs time and money.
4. Preparing the home — repairs, decluttering, staging, optional pre-listing inspection, tailored to anything noted in Step 1.
5. Marketing plan — photography, video/3D tour, floor plan, MLS and syndication, social, open houses, agent outreach; note the MLS marketing-before-listing rule check.
6. Timeline to launch, and what weekly reporting the seller will get.
7. Listing agreement and disclosures — walk through the brokerage's forms; compensation is negotiable; state seller disclosure forms.
8. Questions and next steps.

Offer to stage a Gmail draft confirming the appointment (draft only).

Done when: `presentation.md` has all eight sections and the user has the placeholder list. After the seller signs, point to `/realtor-pipeline:listing-launch`.
