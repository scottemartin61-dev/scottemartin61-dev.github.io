---
name: followupboss
description: Keeps Follow Up Boss and the assistant in step — imports a Follow Up Boss contact export, lists the updates to make in Follow Up Boss today, and builds a CSV of changed contacts to import back. Use when the user says "Follow Up Boss", "FUB", "my CRM", "import my contacts", "here's my Follow Up Boss export", "what do I update in Follow Up Boss", or "export for Follow Up Boss".
argument-hint: "[import <file> | updates | export]"
model: inherit
---

# Follow Up Boss

Follow Up Boss is her main client list; the files in `leads/` are the assistant's working copy. Nothing here connects to Follow Up Boss directly — she moves information with copy-paste and CSV files. Load `realtor-pipeline:lead-playbook` if not in context. Speak plainly; she may not be technical.

Pick the mode from what she says: a file or pasted rows → **import**; "what do I update" → **updates**; "export" → **export**. If unclear, ask which of the three.

## Import

1. If she has no file yet, tell her how to get one, in short steps: in Follow Up Boss, open People, select the contacts (or all), and choose the export option to download a CSV; then attach or paste it here.
2. Read the CSV. Map columns by meaning, not exact header names: name, email, phone, stage, source, tags, assigned agent, last activity or communication date, notes, and the person's ID or link if present. Show her the mapping in a short table and ask her to confirm it.
3. For each row: match an existing lead record by email or phone. Match → update `crm_id`, stage, and anything newer, and log it. No match → create a record per the lead-playbook format with `status` from her stage (ask her once how her stages map to the plugin's statuses, and save the answer as `crm_stages` in the profile). Set `temperature: unscored` unless notes give evidence for scoring. Record only consent the export shows; otherwise `unknown`.
4. Skip rows with no name and no contact method; skip anyone tagged or staged as trash, do-not-contact, or similar — and record do-not-contact as `consent.calls: dnc`, `consent.sms: stop` and `consent.email: unsubscribed` on any matching record.

Done when: every row is created, updated, or listed as skipped with a reason, and she has seen the counts.

## Updates

List every lead record whose log has entries since her last "Follow Up Boss updated" log line (or the last 7 days if none). For each, give the **For Follow Up Boss** block from the lead-playbook, ready to copy. Group them by client. When she says she's done, append `- <date> — Follow Up Boss updated.` to each record's log.

Done when: each changed client has a block, or she's told nothing changed.

## Export

Write `exports/followupboss-<date>.csv` with one row per new or changed lead record since the last export: First Name, Last Name, Email, Phone, Stage, Source, Tags, Note. Tell her: in Follow Up Boss, use the import option, upload the file, and match each column when asked. Remind her that importing may not change the stage of people already in Follow Up Boss, so she may need to update those by hand from the Updates list.

Done when: the CSV exists and she has the import steps.
