---
name: review-offers
description: Compares offers received on a residential listing and plans the seller's response. Use when the user says "we got an offer", "multiple offers", "compare these offers", "net sheet", "highest and best", "should we counter", or pastes offer terms from buyer agents.
argument-hint: "<property address> [pasted offer terms]"
model: inherit
---

# Review offers (listing side)

Load `realtor-pipeline:transaction-playbook`, `realtor-pipeline:client-playbook`, and `realtor-pipeline:lead-playbook` if not in context; for `state: TX`, also `realtor-pipeline:texas-playbook`.

## Step 1 — Log the offers

For each offer, write `listings/<slug>/offers/<date>-<buyer-agent-last-name>.md` with the terms in the transaction-playbook terms-sheet fields, the buyer agent's contact, the expiration, and which documents came with it (pre-approval, proof of funds). Ask for anything missing that the comparison needs. Log each offer's receipt on the seller's lead record.

Done when: every offer received has a file and its expiration is shown to the user, soonest first.

## Step 2 — Seller costs

Ask for (or read from `listing.md`) the seller's loan payoff estimate, agreed compensation, and any title or escrow quote. Unknowns stay as labeled placeholders.

Done when: each net-sheet input is either a supplied number or a labeled placeholder.

## Step 3 — Compare

Dispatch `realtor-pipeline:offer-analyst` with `mode: seller`, the listing folder path, the seller's lead record, and the cost inputs. Show the comparison table, ranking, and counter options.

Done when: `offers/comparison-<date>.md` exists and is shown.

## Step 4 — Respond

Ask the seller's decision (accept, counter one or several, highest and best). Then, on the user's go-ahead, stage Gmail drafts (never send):
- **Highest and best:** one identical message per buyer agent, same deadline, no other offer's terms.
- **Counter:** a cover note to that buyer agent; the counter terms themselves go on the required form (Texas: TREC counteroffer process via the contract form or brokerage's process).
- **Not chosen:** a courteous note, and ask whether the buyer wants to be a backup.

Log decisions in each offer file. Remind the user that backup offers keep being presented until closing unless the seller waived that in writing.

Done when: every offer has a recorded outcome or pending status. When a contract is fully executed, point to `/realtor-pipeline:under-contract`.
