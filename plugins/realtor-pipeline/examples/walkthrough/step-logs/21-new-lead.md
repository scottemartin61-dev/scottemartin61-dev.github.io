## Step — New seller lead: Dan Okafor (website form)
**Date:** 2026-09-01 · **Command:** `/realtor-pipeline:new-lead` · **Agents dispatched:** realtor-pipeline:lead-responder

## What happened
- Website contact form from Dan Okafor about selling 214 Ridge Rd, Round Rock "sometime next year" was turned into a new seller lead record (no duplicate found in `leads/`).
- Consent set from the evidence only: email yes (form with email); SMS and calls unknown (no phone given, no text consent).
- The lead-responder agent drafted a first-reply email and a call opener; it declined to draft a text because there is no phone number and no SMS consent.
- Sam approved and sent the email the same day (per script). No Gmail connector — in a live run this would be staged as a Gmail draft only, never auto-sent.
- Record updated: `status: contacted`, `last_contact: 2026-09-01`, `iabs_provided: 2026-09-01`, next action = qualify on reply (due 2026-09-03, assumed).

## Key output
```
Subject: Your question about 214 Ridge Rd

Hi Dan,

Thanks for reaching out about 214 Ridge Rd. Planning ahead is smart, and there's no rush on my end. I'd be glad to put together a home-value review for you, based on recent nearby sales and your home's details, with no obligation.

Because this involves your specific property, Texas asks me to share the TREC Information About Brokerage Services notice, which explains how real estate brokers work with buyers and sellers: https://lakesiderealty.example/iabs.pdf

Would you prefer I send the value review by email, or set up a quick call?

Sam Rivera
Lakeside Realty (Lakeside Realty LLC)
TREC #0123456
100 Main St, Austin, TX 78701
(512) 555-0144 | sam@lakesiderealty.example

Text: Not drafted: no phone number on file and SMS consent is unknown. Do not text this lead.
Fill before sending: None.
```

## Compliance and judgment catches
- **IABS (22 TAC §531.20):** a reply about the seller's own specific property is a first substantive communication — IABS link placed in the email **body** with an explanatory sentence (not just the signature); delivery logged and `iabs_provided` set.
- **TCPA / Texas SB 140:** no text drafted or sent — no phone and no documented SMS consent. Call opener flagged for use only after Dan gives a number and permission, within Texas hours (9am-9pm Mon-Sat, noon-9pm Sun).
- **TREC advertising / identification:** broker name "Lakeside Realty LLC" and TREC license number in the signature.
- **Stay in lane / no promises:** no value, price, or outcome quoted before a CMA.
- **Drafts, not sends:** draft approved by Sam before going out; would be a Gmail draft only.

## Files
- Created `leads/2026-09-01-dan-okafor.md` (record, draft log, send + IABS log)
- Created `showcase-log/21-new-lead.md`
