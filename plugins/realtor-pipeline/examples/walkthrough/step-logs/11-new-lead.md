## Step — New lead: Carlos Mendez (Zillow, 1402 Oak Bend Dr)
**Date:** 2026-09-14 · **Command:** `/realtor-pipeline:new-lead` · **Agents dispatched:** realtor-pipeline:lead-responder

## What happened
- Checked `leads/` for an existing record with this email or phone. None found, so created `leads/2026-09-14-carlos-mendez.md` from the Zillow inquiry.
- Consent recorded from evidence only: email yes (he sent an inquiry with an email address); SMS unknown (he did not text first and gave no text opt-in).
- Dispatched lead-responder with the record, the inquiry, and Sam's TX profile. It returned an email and a call opener and declined to draft a text.
- Sam approved the email and confirmed it went out the same day. With no Gmail connector, it would have been staged as a draft only. Record set to `status: contacted`, `last_contact` and `iabs_provided` set to 2026-09-14.
- With no Calendar connector, the "Follow up: Carlos Mendez" reminder would have been staged as an event only. Next step: qualification call.

## Key output
```
Subject: 1402 Oak Bend Dr and your Saturday question

Hi Carlos,

Thanks for asking about 1402 Oak Bend Dr. It is listed at $489,000 with 3 bedrooms and 2 baths. [Availability: confirm status with the listing agent before sending.]

Saturday may work. Texas requires a written agreement between us before I show any home, so we would review that first. Its terms, including compensation, are negotiable.

I can't characterize a neighborhood or its schools. For objective information, try the Round Rock Police Department's crime map and the Texas Education Agency's school report cards.

This is the Texas Information About Brokerage Services notice, which explains how real estate brokers work with buyers and sellers: https://lakesiderealty.example/iabs.pdf

Would a quick call today or tomorrow work to set up Saturday?

Sam Rivera
Lakeside Realty (Lakeside Realty LLC)
TREC #0123456
100 Main St, Austin, TX 78701
(512) 555-0144 | sam@lakesiderealty.example
```
Text: **Not drafted.** SMS consent is unknown, he did not text first, and Texas SB 140 extends solicitation rules to texts.

## Compliance and judgment catches
- **Fair Housing:** The email did not answer "safe neighborhood / good schools" with an opinion. It pointed him to the RRPD crime map and TEA school report cards instead.
- **IABS (22 TAC §531.20):** A reply about a specific property is a substantive communication, so the IABS link went in the email **body** with a sentence explaining it, not only in the signature. Delivery logged and `iabs_provided: 2026-09-14` set.
- **SB 1968:** The email told him a written buyer agreement comes before any showing. No Saturday time was offered.
- **Negotiable compensation:** The email said the agreement terms, including compensation, are negotiable.
- **TCPA / Texas SB 140:** No text was drafted without consent. The call is limited to 9am–9pm Mon–Sat (Texas hours).
- **Accuracy (TREC 535.155):** The email did not claim the home is available; a placeholder kept that open until confirmed. The responder also left out MLS details dated after today.
- **Drafts, not sends:** Nothing was sent until Sam approved. Assumed: Sam confirmed availability with Bluebonnet Realty before sending.

## Files
- Created: `leads/2026-09-14-carlos-mendez.md`
- Created: `showcase-log/11-new-lead.md`
