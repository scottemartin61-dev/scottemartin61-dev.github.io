## Step — Under contract: 1402 Oak Bend Dr (buyer side)
**Date:** 2026-11-02 · **Command:** `/realtor-pipeline:under-contract` · **Agents dispatched:** realtor-pipeline:deadline-tracker

## What happened
- Created `transactions/1402-oak-bend-dr/contract.md` from the executed terms only. Every date and dollar amount was read back, and Sam confirmed them. Remaining blanks are listed: seller name(s), HOA fee, title objection days.
- Linked the client. The lead record is now `status: under-contract`, and the accepted offer is logged in `search.md`.
- **deadline-tracker** wrote `timeline.md`. Earnest money and option fee are due 11/5, the option period ends 11/9 at 5:00 p.m., survey/T-47 and Subdivision Information are due 11/7 (a Saturday), TPFA approval and title commitment are due 11/23, and closing is 12/4.
- Added the `## Parties and kickoff` checklist. The kickoff email to Carlos and the title/lender emails would be staged as Gmail drafts only (no connector). Calendar reminders for the option deadline (2 business days before, plus the morning of) would be staged only on Sam's go-ahead.

## Key output
```
| Due | Deadline | Who | Status | Basis / evidence |
|---|---|---|---|---|
| 10/30 | Seller's Disclosure | Seller | MET | Received 10/30, before signing. No 7-day termination right. |
| 11/2 | MUD notice | Seller | MET | Received 11/2, signed with contract. |
| 11/5 Thu | Earnest money $5,000 to Hill Country Title | Buyer | DUE | 11/2 + 3 days. No receipt yet. At risk from 11/3. |
| 11/5 Thu | Option fee $300 to Hill Country Title | Buyer | DUE | Same 3-day rule. Late delivery can void the option. |
| 11/6 Fri | Target: signed repair Amendment | Buyer / agent | DUE | At least 1 business day before the option deadline. |
| 11/7 Sat | Survey + T-47 | Seller | DUE, weekend | Day 5 is Sat 11/7. If it rolls, Mon 11/9. Confirm with broker. |
| 11/7 Sat | Subdivision Information | Seller | DUE, weekend | Same: 11/7 or 11/9. |
| Receipt + 3 days | Termination window on Subdivision Information | Buyer | NOT STARTED | If received 11/9, ends 11/12. Never delivered → any time before closing. |
| 11/9 Mon 5:00 pm | Option period ends | Buyer | DUE | 11/2 + 7 days. Treat as absolute. |
| 11/23 Mon | Title commitment | Title co. | DUE | 20 days after title received contract (11/3). Confirm per form. |
| 11/23 Mon | Financing approval (TPFA) | Buyer / lender | DUE | 11/2 + 21 days. Track separately from option. |
| 12/4 Fri | Closing and possession | All | DUE | |

Kickoff email to Carlos (staged as draft only), excerpt:
  Next: deliver $5,000 earnest money and $300 option fee to Hill Country Title by Thu 11/5. Book the
  inspection this week; the option period ends Mon 11/9 at 5:00 p.m. Lender approval is due 11/23.
  Closing is Fri 12/4.
  "We will never email you wiring instructions or changes to them. Before wiring any money, call the
  title company at a phone number you looked up yourself — not one from an email — to confirm the
  instructions."
```

## Compliance and judgment catches
- **Fill only from the executed contract:** No date or number was guessed. Every figure was read back and confirmed. Earnest money is recorded as $5,000 per the executed contract, not the $4,800 offer. Blanks are listed instead of filled.
- **Texas option period:** Day 1 is the day after the effective date, and the deadline is 5:00 p.m. on day 7 (11/9). No weekend extension applies, and it is treated as absolute. The signed Amendment target is at least 1 business day earlier.
- **Earnest money and option fee within 3 days:** Flagged at risk from 11/3. Late option-fee delivery can void the option.
- **Statutory notices:** The Seller's Disclosure arrived before signing, so there is no 7-day termination right. The MUD notice was signed with the contract. The Subdivision Information termination window (3 days after receipt) is tracked separately.
- **Weekend deadline:** The 5-day seller items fall on a Saturday. Both dates are shown and the question goes to the broker, rather than guessing a rollover.
- **Financing deadline:** TPFA approval (11/23) is tracked separately from the option deadline.
- **Wire fraud:** The kickoff draft uses the transaction-playbook warning verbatim and contains no wiring details. The title company's phone number is left as "look up independently".
- **Drafts only:** No emails were sent and no calendar events were created.
- **Tracker flag judged a non-issue:** The tracker questioned the title company receiving the contract on 11/3, after today's 11/2. That date comes from Sam's confirmed terms, so it was kept.

## Files
- Created: `transactions/1402-oak-bend-dr/contract.md`
- Created: `transactions/1402-oak-bend-dr/timeline.md`
- Changed: `leads/2026-09-14-carlos-mendez.md` (status under-contract, log)
- Changed: `buyers/2026-09-14-carlos-mendez/search.md` (accepted offer)
- Created: `showcase-log/17-under-contract.md`
