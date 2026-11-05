---
name: my-day
description: Builds a short, prioritized to-do list for a residential real estate agent's day across leads, clients, listings, and deals under contract. Use when the user says "what should I do today", "my day", "start my day", "good morning", "today's plan", "what's on my plate", "what's urgent", or "what did I miss".
model: inherit
---

# My day

One short list, most urgent first, in plain language. Load `realtor-pipeline:lead-playbook`, `realtor-pipeline:client-playbook`, and `realtor-pipeline:transaction-playbook` if not in context (plus `realtor-pipeline:texas-playbook` for `state: TX`). No `leads/agent-profile.md` → run `realtor-pipeline:start-here` first.

## Step 1 — Gather

1. **Deals under contract:** run the `realtor-pipeline:transaction-status` skill's Steps 1-2 (refresh timelines with the deadline tracker) for every active transaction. Skip its client-update step.
2. **Leads:** run the `realtor-pipeline:lead-review` skill's Steps 1-3 (load, re-score stale, bucket). Skip its offer-to-act step.
3. **Listings:** for each `listings/*/listing.md` with `status: active`, note if today is the profile's `seller_update_day` (default Friday) or the newest file in `reports/` is more than 7 days old (weekly seller update due), and any offer in `offers/` with an expiration today or tomorrow.
4. **Buyers:** for each `buyers/*/search.md` with `agreement_signed: yes`, note if no search has been run in 7 days, and any `agreement_expires` or `showing_agreement_expires` within 14 days.
5. **Nurture:** touches in `leads/nurture/` dated today or earlier that are not marked sent.
6. **Rentals:** lease listings with complete applications not yet compared, and tenants with a move-in date within 30 days and no application submitted.
7. **Follow Up Boss tasks** (connected only): `fub_list_tasks` due today or earlier — fold them into the list, de-duplicated against items already found.
8. **Follow Up Boss updates** (`crm: followupboss`): count lead records changed since their last "Follow Up Boss updated" log line; if any, the last list item is *Say: "What do I update in Follow Up Boss?"*

Done when: every source above has been checked, or reported empty.

## Step 2 — The list

Show at most 7 items, numbered in this order: missed or due-today contract deadlines → offers expiring → new leads not yet answered → hot leads without an appointment → client updates due → follow-ups and nurture touches → everything else. For each item, one line: **what to do · who · why now**, then the next move. When the assistant can do the work, write *Say: "Write the weekly report for 214 Ridge Rd."* When only she can do it (sending an email, making a call, getting a signature), write *You: send the drafted note to J. Park, then say "Sent."* The assistant never sends anything, so a Say: line never asks it to send.

If there's more than 7, add "Plus n smaller items — say 'show the rest' to see them."

If nothing is due: say so, then suggest one growth task (call three past clients or sphere contacts, or ask for a referral).

Skip suggesting calls on the profile's `days_off`, and time suggested calls inside `work_hours`.

Done when: the list is shown with a "Say:" or "You:" line on each item.

## Step 3 — Start

Ask: "Want me to start on #1?" On yes, run the matching skill. After each item is done, offer the next one.

Done when: she has started an item or declined.
