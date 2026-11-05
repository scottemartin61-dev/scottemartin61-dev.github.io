# Pipeline walkthrough

A real run of the plugin on a fictional Round Rock, Texas scenario: agent Sam Rivera, buyer Carlos Mendez (Zillow inquiry → under contract → repair request) and seller Dan Okafor (cold web lead → listing → three offers).

- `scenario/` — the run rules, buyer and seller scripts, agent profile, and input data (MLS-style comps, search results, showings, offers, inspection).
- `step-logs/` — one log per command: what happened, verbatim key output, compliance catches, files.
- `index.html` — the interactive walkthrough page built from the logs.

To rebuild the page after a new run:

```bash
python3 build.py step-logs template.html index.html "<run date>"
```

To re-run the scenario, make an empty business folder with `leads/agent-profile.md` and `inputs/` copied from `scenario/`, then give Claude Code (with this plugin loaded) the prompt: "Read inputs/RULES.md, then run every step in inputs/BUYER-SCRIPT.md in order" — and the same for `SELLER-SCRIPT.md`.
