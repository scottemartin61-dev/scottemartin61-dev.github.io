---
name: client-playbook
description: Reference playbook for working signed residential real estate clients — buyer and listing folder layout, CMA method, Fair Housing and MLS advertising rules for listing copy, showing-feedback format, and price-review signals. Use when preparing a buyer consultation or listing appointment, pricing a home, writing listing marketing, searching homes for a buyer, or reporting showing activity to a seller.
model: inherit
---

# Client playbook

Stages 3-4 of the pipeline: consultation, then active search (buyers) or active marketing (sellers). Extends the `realtor-pipeline:lead-playbook` skill, whose record format, `leads/agent-profile.md`, and guardrails still apply — load it too if it is not in context. Broker and state rules win over anything here.

## Folders

Each client gets a folder, linked from their lead record's `client_folder:` field.

```
buyers/<lead-file-stem>/        e.g. buyers/2026-11-05-maria-alvarez/
  consult.md      consultation packet + agreed search criteria
  search.md       criteria, shortlist, tour log
listings/<street-slug>/         e.g. listings/412-birch-ln/
  listing.md      property facts, pricing, dates, status
  cma.md          comparative market analysis
  copy.md         MLS remarks and marketing copy
  showings.md     showing feedback log
  reports/<date>.md   weekly seller reports
```

`listing.md` frontmatter:

```yaml
address: 412 Birch Ln, Springfield, ST 00000
seller: Dan Okafor            # lead record: leads/2026-11-05-dan-okafor.md
status: preparing             # preparing | coming-soon | active | pending | closed | withdrawn | expired
list_price:
price_history: []             # - {date: 2026-11-20, price: 489000, note: "initial list"}
list_date:
beds:
baths:
sqft:                         # above-grade living area
sqft_source:                  # appraisal | assessor | measured | seller — always record it
lot:
year_built:
garage:
hoa:
mls_number:
expires:                      # listing agreement expiration
```

`search.md` keeps criteria in frontmatter (`price_max`, `beds_min`, `baths_min`, `areas`, `must_haves`, `nice_to_haves`, `deal_breakers`, `pre_approval_amount`, `agreement_signed: yes|no`, `agreement_expires`) and a body with `## Shortlist` and `## Tour log`.

## CMA method

1. **Subject facts** — from the listing record, county records, or the off-market property lookup. Note any conflict between sources (especially square footage).
2. **Comps** — closed sales, last 6 months, same neighborhood or within about 1 mile, ±20% square footage, similar age, style, and bed/bath count. Widen one dimension at a time (12 months, 2 miles) only when fewer than 3 qualify, and say which was widened. Also pull current actives (the competition), pendings, and expired/withdrawn listings (what the market rejected).
3. **Adjust** — line-item adjustments (bed, bath, garage, condition, updates, lot) only with values from `adjustments:` in `leads/agent-profile.md` or supplied by the agent. Without local values, bracket the subject between superior and inferior comps and use median sold $/sqft as a cross-check — and say that no line-item adjustments were made. Never invent an adjustment amount.
4. **Market pace** — months of inventory = active listings ÷ average monthly closed sales (under 3 seller's market, 3-6 balanced, over 6 buyer's market); median days on market; sale-to-list ratio.
5. **Conclude** — a low / most-likely / high value range, a recommended list price with reasoning (price within the likely range, below a common search bracket edge like $500k, not above the strongest comp without a reason).

Rules: a Zestimate or other automated estimate is not a comp — if shown at all, quote it verbatim with its disclaimer and call it "what buyers will see online". Every CMA carries: "This is a comparative market analysis prepared by a real estate licensee, not an appraisal." Never promise a sale price.

## Listing copy rules

Describe the property, never the people who should live there.

- **Fair Housing advertising.** No words that state or imply a preference for or against a protected class: "family neighborhood", "perfect for young professionals / empty nesters", "bachelor pad", "mother-in-law suite" (use "accessory suite"), "master bedroom" (use "primary"), "exclusive", "safe", "walking distance" (use "0.3 miles to"), "near St. Mary's church" (naming a landmark for location is acceptable; selling it as a lifestyle is not). No school quality claims — name the assigned schools and say "buyer to verify".
- **MLS rules.** Public remarks contain no agent contact info, showing instructions, or links; those go in agent-only remarks. Respect the character limit (`mls_remarks_limit` in the agent profile; default 1,000). Check your MLS's marketing-before-listing (Clear Cooperation / office-exclusive) rules before any sign, social post, or "coming soon" goes public.
- **Accuracy.** Square footage states its source. No unverifiable superlatives ("best", "nicest in town"). Disclose virtually staged or edited photos. Features must be ones the seller confirmed are included in the sale.

## Showing feedback

Log one entry per showing in `showings.md`:

```markdown
### 2026-11-22 14:00 — <showing agent / brokerage>
- Interest (1-5): 3
- Price: "a little high for the kitchen"
- Condition / layout: ...
- Likely to offer: no
- Source: agent email / ShowingTime survey / phone
```

Record feedback as given; never record anything about the buyers' protected characteristics.

## Price-review signals

Rules of thumb for the weekly seller report — present them as signals for a conversation, never a demand:

| Signal | Suggests |
|---|---|
| Few showings after 2 weeks in a balanced or seller's market | price or online presentation is off — check photos, then price |
| 10+ showings, no offers | price relative to condition — buyers see it and pass |
| Repeated identical objection | fix it (repair, staging, credit) or price for it |
| New competing listing priced below | position against it |
| Days on market above the area median | price review |

A price change recommendation states the comp or market change behind it.
