---
name: home-search
description: Runs and tracks a residential buyer's home search — finds listings matching their saved criteria, scores the shortlist, plans tours, and logs tour feedback. Use when the user says "find homes for…", "run my buyer's search", "new listings for…", "shortlist", "plan a showing tour", "we toured…", or "compare these homes".
argument-hint: "<buyer name> [search | tour-plan | tour-notes <notes>]"
model: inherit
---

# Home search

Load the `realtor-pipeline:client-playbook` and `realtor-pipeline:lead-playbook` skills if they are not in context. Work from `buyers/<stem>/search.md`; no search file → run `/realtor-pipeline:buyer-consult` first.

## Step 1 — Load the buyer

Read `search.md` and the lead record. If `agreement_signed` is not `yes`, warn that tours require a signed written buyer agreement and keep going for search only. Pick the mode from the arguments; default `search`.

Done when: criteria are loaded and the mode is set.

## Step 2 — Search mode

1. With a Zillow connector, call the property search with the saved criteria: areas as regions, price max, beds/baths minimums, and must-haves that map to filters. Send only criteria the buyer stated — never add filters for neighborhood demographics or anything tied to a protected class. Without a connector, ask the user to paste listings or an MLS export.
2. Score each result: must-haves met (any miss = drop, listed separately), nice-to-haves met, price vs. pre-approval (flag anything over 95% of the pre-approval amount), days on market.
3. Add the top matches to `## Shortlist` in `search.md` as `- [ ] <address> — $price — beds/baths/sqft — score n — <why> — <link>`, skipping addresses already listed. Mark price changes on existing entries.

Show the new matches table and offer to draft an email to the buyer with them (Gmail draft only).

Done when: the shortlist holds every new match that passed the must-haves, and the dropped near-misses are shown.

## Step 3 — Tour-plan mode

From the checked or user-named shortlist homes: order them by geography for one route, 30-45 minutes per home plus drive time, and list per home what to look at (the buyer's must-haves and any listing concerns). Remind the user to request showings through the listing agents or showing service; never contact listing agents yourself. Offer calendar holds only on the user's go-ahead.

Done when: a timed tour sheet is shown and saved under `## Tour plans` in `search.md`.

## Step 4 — Tour-notes mode

Append each home's reactions to `## Tour log` (date, address, rating 1-5, liked, disliked, would-offer). Update the shortlist: drop rejects (keep the reason), star favorites. If a home is a likely offer, say stage 5 tooling will cover offer preparation and offer the `realtor-pipeline:cma-analyst` agent for a value check on that address now.

Done when: every toured home in the notes has a log entry and its shortlist line is updated.
