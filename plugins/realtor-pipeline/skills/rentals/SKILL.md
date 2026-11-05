---
name: rentals
description: Handles residential leasing work for tenants and landlords — finding rentals for a tenant, preparing a landlord's rental listing and screening criteria, and organizing RentSpree applications against the landlord's written criteria. Use when the user says "rental", "lease", "tenant", "landlord", "for rent", "RentSpree", "rental application", "screening report", or "someone wants to rent".
argument-hint: "<client name or property> [tenant | landlord | applications]"
model: inherit
---

# Rentals

Load `realtor-pipeline:lead-playbook` and `realtor-pipeline:client-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook` (its Leasing section governs here). New rental lead with no record → run `realtor-pipeline:new-lead` first. Never draft lease terms; she uses her brokerage's lease forms.

Pick the mode: helping someone **rent** → tenant; helping an owner **rent out** a property → landlord; applications or RentSpree screening results came in → applications.

## Tenant mode

1. Check the tenant has signed the brokerage's tenant representation agreement and has the IABS (Texas). If not, say what's needed before showings.
2. Save `buyers/<lead-file-stem>/search.md` with rental criteria: max monthly rent, move-in date, beds/baths, areas, pets (type and count), parking, lease length, must-haves, deal-breakers.
3. Find rentals: a Zillow connector rental search with only her stated criteria, or ask her to paste a HAR rental search. Shortlist as in `realtor-pipeline:home-search`, flagging rent above one-third of stated monthly income.
4. For a chosen rental, tell her the usual next step: the listing agent or landlord sends an application link (often RentSpree); the tenant applies there. Never ask the tenant to send ID, Social Security numbers, or bank statements through the assistant.

Done when: the search is saved and a shortlist (or the missing paperwork) is shown.

## Landlord mode

1. Create `listings/<street-slug>/listing.md` with `type: lease`, monthly rent, deposit, available date, lease term, pet policy, utilities, and HOA rules. Confirm the representation and listing paperwork is signed on brokerage forms.
2. **Written tenant selection criteria first.** Help the owner write plain criteria: income (for example 3× rent), credit, rental history, eviction history, and how criminal history will be considered individually, never as a blanket ban. Save to `listings/<slug>/criteria.md`. Remind her these must be available to every applicant before they pay a fee.
3. Dispatch `realtor-pipeline:listing-writer` for the rental listing copy (MLS/HAR remarks, social post) with the folder path; it applies the same fair-housing advertising rules.
4. Give her the setup checklist: RentSpree application link with the criteria attached or linked, showing instructions, lockbox, and the deposit-refund timeline for the owner.

Done when: `listing.md`, `criteria.md`, and listing copy exist.

## Applications mode

1. Ask her to paste or attach each applicant's RentSpree **summary** (income, credit range, rental history, eviction results), not full reports with Social Security or account numbers. If full reports are pasted, use only the summary facts and tell her not to paste full reports again.
2. Compare each complete application against `criteria.md` only, in the order applications were completed: meets / doesn't meet / needs more information, item by item. Never mention or weigh anything about protected characteristics (family status, disability, national origin, religion, race, color, sex), and treat assistance-animal requests as accommodations for the broker, not pets.
3. Save `listings/<slug>/applications-<date>.md` and show the comparison. The owner decides; she presents it. If an applicant is denied, remind her the denial should cite the written criteria and that adverse-action notices come from the screening company's process.

Done when: every complete application is compared against the written criteria and the summary is saved.

End every mode with the **For Follow Up Boss** block when `crm: followupboss`.
