# Showcase run rules (read first)
You are demonstrating the realtor-pipeline plugin for a walkthrough. The human agent is Sam Rivera (profile in leads/agent-profile.md, Texas).
- Run each step by invoking the named realtor-pipeline skill with the Skill tool, exactly as a user typing the slash command would, and follow the skill fully, including dispatching its agents.
- There are no connectors (no Zillow, Gmail, Calendar). Use the files in inputs/ wherever a step needs data a connector would supply. Where a skill would stage a Gmail draft or calendar event, write the draft text into the log instead and say it would be staged as a draft only.
- Questions a skill would ask the user are answered by the script below. If something is not covered, choose the most reasonable answer, and note it in the log as "assumed".
- Each step has a scenario date. Treat that as "today" for that step (log entries, deadlines).
- After EACH step, write showcase-log/<NN>-<slug>.md containing exactly these sections:
  ## Step — <title>
  **Date:** · **Command:** `/realtor-pipeline:...` · **Agents dispatched:** <names or none>
  ## What happened
  3-6 bullets, plain language.
  ## Key output
  The most important output, VERBATIM excerpt, max 40 lines (drafts, score table, terms table, timeline rows, etc.).
  ## Compliance and judgment catches
  Bullets: every rule the step applied or refused to break (Fair Housing, consent, IABS, SB 1968, TREC advertising, non-disclosure, deadlines, no contract drafting...). "None" if none.
  ## Files
  Files created or changed.
- Do not skip steps. Keep going through every step without stopping for confirmation.
