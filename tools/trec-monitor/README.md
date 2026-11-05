# TREC watch

A daily scheduled Claude task checks Texas real estate sources, compares what it finds with the plugin's Texas rules, and when something changes:

1. opens a pull request that updates `plugins/realtor-pipeline/skills/texas-playbook/SKILL.md`, adds a plain-English entry to `plugins/realtor-pipeline/skills/texas-updates/SKILL.md`, and bumps the plugin's patch version;
2. emails Danielle a plain-English summary (marked "pending Scott's review");
3. sends Scott a push notification.

Nothing reaches Danielle's assistant until the pull request is merged. After merging, her plugin picks up the change on its next update (`/plugin marketplace update scottemartin-realty`, or automatically if marketplace auto-update is on).

## Sources checked
- TREC news and announcements: https://www.trec.texas.gov/news
- TREC rule changes (proposed and adopted): https://www.trec.texas.gov/agency-information/rules-and-laws/trec-rules and the TREC section of the Texas Register (https://www.sos.texas.gov/texreg/)
- TREC forms, promulgated contracts and notices: https://www.trec.texas.gov/forms
- TREC commission meeting agendas and minutes: https://www.trec.texas.gov/agency-information/meetings
- New Texas laws touching Occupations Code ch. 1101 and Property Code ch. 5 and ch. 92: https://capitol.texas.gov (bill search) and https://statutes.capitol.texas.gov

## State
`seen.json` on the `trec-monitor` branch lists every item already reviewed (url, title, date, and the decision: "changed rules", "no effect", or "pending"), so each item is judged once.
