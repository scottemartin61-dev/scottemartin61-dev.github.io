---
name: texas-playbook
description: Texas-specific real estate rules for license holders — TREC advertising and IABS notice requirements, SB 1968 written buyer agreements and 14-day showing agreements, Texas non-disclosure and CMA data, seller disclosure forms, Texas telemarketing/text rules, and TREC contract rules (promulgated forms, option period, earnest money, amendments, statutory termination notices), and Texas leasing and commercial basics. Use whenever the agent profile says state TX, or the user mentions Texas, TREC, IABS, TXR forms, option period, option fee, or a Texas city or property.
model: inherit
---

# Texas playbook

Applies when `state: TX` in `leads/agent-profile.md`. Approved changes to these rules are logged in plain English in `realtor-pipeline:texas-updates`; the daily TREC check proposes edits here and adds an entry there. Adds to the `realtor-pipeline:lead-playbook` and `realtor-pipeline:client-playbook` skills; where a rule here is stricter, this file wins. Rules cite their source so the agent and broker can check them — TREC rules and forms change, so when a step depends on exact wording or a form version, tell the user to confirm on trec.texas.gov or with their broker. Never present this as legal advice.

## Agent profile (Texas fields)

Add to `leads/agent-profile.md`: `state: TX`, `broker_name` (exactly as registered with TREC — license name, registered alternate name, or assumed business name), `team_name` (if any; must be TREC-registered and end in "team" or "group"), `iabs_url` (link to the brokerage's completed IABS form), `license` (TREC license number).

## IABS notice — first substantive communication

TREC's Information About Brokerage Services notice (Occ. Code §1101.558; 22 TAC §531.20) must be given at the first substantive communication with a party about specific real property.

- A first reply that discusses a specific property (price, features, showing it) is substantive: include the brokerage's completed IABS form — attach it or put the `iabs_url` link in the **body** of the email with a sentence saying what it is. A link only in an email signature block does not satisfy the rule.
- A text reply about a specific property: send the IABS by email the same day, or include the link with a one-line explanation in the text, and log which.
- Log delivery on the lead record: `- <date> — IABS provided via <email attachment / link in body / in person>.` Set `iabs_provided: <date>` in frontmatter.
- Never edit the IABS text; only the broker contact section may be prefilled. A Spanish version exists for Spanish-speaking clients.

## Buyer agreements — SB 1968 (effective January 1, 2026)

Occ. Code §1101.563 requires a **written agreement before showing any residential property** to a prospective buyer — or, if nothing is shown, before presenting an offer for them. Residential means 1-4 family homes and condominium units. Failing to have one is grounds for TREC discipline. This replaces the generic NAR guidance in lead-playbook for Texas.

- **Representation agreement** (e.g. TXR 1501) must state, at minimum: the term with a specific end date; whether it is exclusive or non-exclusive; the services; the broker's compensation as a specific amount or rate (never "TBD"); and, conspicuously, that the compensation is **not set by law and is fully negotiable**.
- **Showing-only, non-representation agreement** (Occ. Code §1101.562): non-exclusive, 14 days maximum. Under it the agent provides access only — no advice, opinions, price guidance, or negotiation. If the buyer wants any of that, a representation agreement comes first.
- Never draft agreement terms; use the brokerage's TREC/Texas REALTORS® forms.
- Tours and showing requests stay blocked until `search.md` shows `agreement_signed: yes` (representation) or `showing_agreement_expires:` is a future date (showing-only, which then forbids advice in tour notes).

## Intermediary, not dual agency

Texas has no dual agency. If a buyer client wants a home listed by the same brokerage, the broker can act only as an **intermediary**, with written consent from both parties (usually in the listing and buyer agreements) and appointed license holders. When a shortlisted home is the brokerage's own listing, flag it: "In-house listing — intermediary consent and appointments required before advising on this home."

## Advertising — TREC Rule 535.155

Every advertisement, including social posts, email blasts, flyers, signs, and online listings the agent controls:

- Shows the **broker's name** (`broker_name`) in a readily noticeable spot, at least **half the size** of the largest contact information for any agent or team name in the ad. In plain-text posts, put the broker name in the text, not just in an image.
- Uses a team name only if registered, ending in "team" or "group", and never implies the team is a separate brokerage.
- Is not misleading — accurate price, status, and features; no "sold" claims for others' sales; virtually staged photos disclosed.
- Business websites and social profiles the agent controls need homepage/profile links labeled "TREC Information About Brokerage Services" and "TREC Consumer Protection Notice" (22 TAC §531.20, §531.18). Remind the agent when setting up a profile; this is per site, not per ad.

## CMA data — Texas is a non-disclosure state

Sale prices are not public record in Texas. Portal "sold" prices (Zillow and similar) may be missing or estimated.

- Treat portal sold prices as **unverified**; label them so in `comps-raw.md` and the CMA, and ask for an MLS closed-sales export before the CMA is shown to a seller.
- Follow the local MLS's rules on sharing sold prices — fine inside a CMA for a client; do not publish other properties' sold prices in public advertising unless MLS rules allow it.
- Square footage usually comes from the county appraisal district (CAD); write "per <county> CAD, buyer to verify".
- A CMA or broker price opinion must not be called an appraisal (keep the client-playbook disclaimer).

## Seller disclosures and listing paperwork

For listing launch checklists in Texas:

- **Seller's Disclosure Notice** (Property Code §5.008; TREC OP-H or Texas REALTORS® TXR 1406), required for most 1-4 family resales — includes flood history and floodplain questions. Get it completed by the seller before or at listing; never fill it in for them.
- Lead-based paint addendum for homes built before 1978.
- HOA, MUD, PID, and other statutory notices as applicable; existing survey and T-47 residential real property affidavit if a survey will be reused.
- Listing agreement on the brokerage's form (e.g. TXR 1101); compensation negotiable.
- Seller estimated net sheet from the title company or brokerage.

## Calls and texts — Texas telemarketing law

On top of federal TCPA / Do-Not-Call rules in lead-playbook:

- Texas law (Bus. & Com. Code ch. 301-305) limits telephone solicitation to **9am-9pm Monday-Saturday and noon-9pm Sunday**, lead's local time — stricter than the federal 8am-9pm, so use these hours.
- SB 140 (effective September 1, 2025) extended Texas telephone solicitation law to **text messages**, with private lawsuits available under the DTPA. Text only leads who texted first or gave documented consent, record that consent on the lead record, and honor STOP immediately. Reported guidance says consent-based texts are exempt from Texas telemarketing registration; cold marketing texts are not. Cold texting FSBO or expired leads → don't; tell the agent to check with their broker.
- Cold calls: check the national Do-Not-Call registry and the Texas no-call list first.

## Fair housing in Texas

The Texas Fair Housing Act (Property Code ch. 301) protects the same classes as federal law. Several Texas cities add more (for example sexual orientation, gender identity, age, veteran status, or source of income in some cities) — apply the strictest rule for the property's city and, if unsure which local classes apply, follow the broader list in lead-playbook.

## Contracts and escrow (stages 5-6)

- **Promulgated forms only.** Texas license holders must use TREC-promulgated contract forms and addenda where one exists (TREC Rule 537.11) and may only fill in blanks with factual business details — never write clauses that change the parties' rights. Typical set: One to Four Family Residential Contract (Resale), Third Party Financing Addendum, Addendum for Property Subject to Mandatory Membership in a Property Owners Association (Subdivision Information), Seller's Disclosure Notice, lead-based paint addendum, Addendum for Sale of Other Property by Buyer, Amendment, Notice of Buyer's Termination of Contract. Use the current version from TREC or the brokerage's forms software.
- **Option period.** For the option fee, the buyer gets an unrestricted right to terminate within the agreed number of days. Day 1 is the day after the effective date; notice of termination must be given by **5:00 p.m. local time** on the last day. Option fee is not refunded on termination (it is credited to the price at closing). Treat the deadline as absolute — no weekend extension unless the agent confirms the current form says otherwise.
- **Earnest money and option fee** are delivered to the title company (escrow agent) within **3 days after the effective date**; get the title company's receipt and log it. Late option-fee delivery can void the option.
- **Repairs belong in the option period.** Repair requests and price or credit changes are agreed on a TREC Amendment signed before the option period ends; after it ends the buyer loses the unrestricted right to terminate. Build the repair-request timeline so the signed Amendment lands at least 1 business day before the option deadline.
- **Financing.** With a Third Party Financing Addendum, the buyer can terminate if they cannot obtain buyer approval within the days stated — track that date separately from the option deadline.
- **Title and survey.** The title company delivers the commitment within the period the contract states (20 days after receiving the contract on the current form); buyer objections run from receipt of the commitment, exception documents, and survey. If an existing survey is used, the seller provides it with a T-47 residential real property affidavit by the contract's deadline.
- **Statutory notices with termination rights.** Seller's Disclosure Notice not delivered before signing → buyer may terminate within **7 days after receiving it**. Subdivision Information under the POA addendum → buyer may terminate within **3 days after receiving it** (or any time before closing if never delivered). The MUD notice (Water Code §49.452) must be given **before the buyer signs** the contract; a missing one gives the buyer termination rights. Track these on `documents_due` with their termination windows.
- **Intermediary deals** (`side: both`): appointed license holders only; neither may disclose one party's confidential information (price flexibility, motivation) to the other.
- **Wire fraud.** Texas title companies typically require verbal verification of wiring instructions; reinforce the transaction-playbook warning with each client.

## Leasing (rentals)

- **IABS** applies to leasing too: give it at the first substantive talk about a specific rental.
- **Representation:** use the brokerage's tenant representation agreement (Texas REALTORS® Residential Buyer/Tenant Representation Agreement) before showing rentals. Whether SB 1968's written-agreement rule covers tenants as well as buyers is not confirmed here — default to getting it signed and tell her to confirm with her broker.
- **Forms:** Texas REALTORS® Residential Lease, Residential Lease Application, and related addenda (TREC promulgates no lease forms). Never draft lease terms.
- **Tenant selection criteria (Property Code §92.3515):** the landlord must make written selection criteria available to applicants; if an applicant is rejected without that notice having been available, the application fee and deposit must be refunded. Before sending a RentSpree link for a landlord client, confirm written criteria exist and are shared.
- **Fair housing in rentals:** apply the same written criteria to every applicant, in the order applications are complete. No blanket criminal-history bans (HUD guidance calls for individual assessment). Assistance animals are not pets — no pet fees or breed limits for them, and accommodation requests go to the broker. Never mention or weigh protected traits; check the property's city for extra protected classes.
- **Security deposit:** refund or written itemized deductions within 30 days after the tenant surrenders the unit (Property Code §92.103) — tell landlord clients this at listing.

## Commercial (LoopNet, Crexi)

- IABS still applies to commercial prospects.
- SB 1968's buyer-agreement rule covers residential property; commercial representation and contracts use Texas REALTORS® commercial forms or attorney-drafted documents, not TREC residential forms.
- A new license holder should work commercial deals with her broker's direct supervision — say so whenever a commercial lead moves past first contact.
