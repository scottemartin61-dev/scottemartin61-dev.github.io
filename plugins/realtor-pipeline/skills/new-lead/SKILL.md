---
name: new-lead
description: Captures a new residential real estate lead and gets a first reply ready fast. Use when the user says "new lead", "I got a lead", "Zillow/Realtor.com inquiry", "someone called on my sign", "open house sign-ins", "referral from…", or pastes a lead notification email, web form, or voicemail transcript.
argument-hint: "[pasted inquiry, or 'from gmail']"
model: inherit
---

# New lead

Turn a raw inquiry into a lead record and an approved first reply — target: under 5 minutes from paste to send. Follow the `realtor-pipeline:lead-playbook` skill for the record format and guardrails; load it now if it is not already in context.

## Step 1 — Get the inquiry

Use the inquiry in the arguments or the conversation. If the user says "from gmail" (or "check my inbox") and a Gmail connector is available, search recent unread threads for portal lead notifications (Zillow, Realtor.com, Homes.com, Redfin, brokerage website forms) and list them for the user to pick. Several inquiries → run Steps 2-5 for each, dispatching the responders in parallel.

Done when: every inquiry to process is identified.

## Step 2 — Create the record

1. Check `leads/` for an existing record with the same email or phone (Grep). If one exists, append the new inquiry to its `## Log` instead of creating a duplicate, and tell the user.
2. Otherwise create `leads/<today>-<first-last>.md` per the playbook. Fill only what the inquiry states. Set `consent.email: yes` when they emailed or submitted a form with an email address, and `consent.sms: yes` only when they texted first or the form shows explicit text consent.

Done when: exactly one record holds this inquiry.

## Step 3 — Gather context for the reply

- If the lead asked about a specific property and a Zillow or listing connector is available, look up its details (price, beds/baths, status) to pass to the responder.
- Read the agent's name, brokerage, and signature from `leads/agent-profile.md` if it exists. If it doesn't, ask once for name, brokerage, phone, license number, and licensing state, and save them there for next time. For `state: TX`, also ask for the TREC-registered broker name and the IABS link (see `realtor-pipeline:texas-playbook`).

Done when: property details (or "none available") and agent profile are in hand.

## Step 4 — Draft the reply

Dispatch the `realtor-pipeline:lead-responder` agent with the record path, the raw inquiry text, property details, and the agent profile. Show its returned drafts verbatim.

Done when: drafts are shown and the "Fill before sending" list is either empty or presented to the user.

## Step 5 — Approve and stage

Ask which draft to use and accept edits. Then, only on the user's go-ahead:
- Gmail available → create a Gmail **draft** (never send) addressed to the lead, as a reply in the original thread when there is one.
- Google Calendar available → create a reminder event "Follow up: <name>" at the playbook's next-touch time.
- Once the user confirms the message went out, set `status: contacted`, `last_contact: <today>`, and log it. In Texas, when the reply included the IABS, also set `iabs_provided: <today>` and log how it was delivered.

Done when: the user has a staged draft (or copied the text) and the record reflects what was sent. Finish by offering `/realtor-pipeline:qualify-lead` for the first conversation.
