---
name: texas-updates
description: Plain-English log of approved changes to the Texas real estate rules this assistant follows (TREC rules and forms, Texas laws), newest first. Use when the user asks "what's new with TREC", "any Texas law changes", "rule updates", "what changed", or when my-day checks for updates she hasn't seen.
model: inherit
---

# Texas rule updates

Each entry below was found by the daily TREC check and approved before it reached this assistant. When showing an entry, keep its plain wording, add one line on how it changes what the assistant does for her, and remind her to confirm details with her broker. After showing new entries, set `rules_seen: <today>` in `leads/agent-profile.md`.

If she asks about a change not listed here, say the daily check hasn't reported it yet and suggest asking her broker or checking trec.texas.gov.

<!-- New entries go directly below this line, newest first. Format:
## YYYY-MM-DD — Short title
**What changed:** one or two sentences.
**What it means for you:** one or two sentences, plain English.
**What to do:** a concrete step, or "Nothing — the assistant already follows the new rule."
**Effective:** date · **Source:** link
-->

## 2026-11-05 — Daily TREC check is on
**What changed:** The assistant now gets a daily check of TREC news, rule changes, forms, and new Texas laws that affect real estate.
**What it means for you:** When something changes, you'll get an email, and after Scott approves the update, a note here and at the top of "What should I do today?".
**What to do:** Nothing. When a note appears, read it and ask your broker if anything is unclear.
**Effective:** 2026-11-05 · **Source:** realtor-pipeline plugin
