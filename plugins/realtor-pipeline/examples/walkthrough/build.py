"""Build the walkthrough page from showcase-log/*.md step logs."""
import json, re, sys, pathlib

log_dir = pathlib.Path(sys.argv[1])
template = pathlib.Path(sys.argv[2]).read_text()
out = pathlib.Path(sys.argv[3])
run_date = sys.argv[4]

# step number -> (track, stage)
STAGE = {11: 1, 12: 2, 13: 3, 14: 4, 15: 4, 16: 5, 17: 6, 18: 6,
         21: 1, 22: 2, 23: 3, 24: 4, 25: 4, 26: 5}
KNOWN_AGENTS = ["lead-responder", "lead-qualifier", "nurture-writer", "cma-analyst",
                "listing-writer", "feedback-reporter", "offer-analyst",
                "deadline-tracker", "repair-negotiator"]


TOP = ("step", "what happened", "key output", "compliance", "files")


def sections(text):
    """Split on top-level '## ' headings we know, ignoring anything inside code fences."""
    res, cur, buf, fence = {}, None, [], False
    for line in text.splitlines():
        if line.lstrip().startswith("```"):
            fence = not fence
        if not fence and line.startswith("## ") and line[3:].strip().lower().startswith(TOP):
            if cur is not None:
                res[cur] = "\n".join(buf).strip()
            cur, buf = line[3:].strip(), []
        elif cur is not None:
            buf.append(line)
    if cur is not None:
        res[cur] = "\n".join(buf).strip()
    return res


def unfence(body):
    """Drop an outer markdown/plain fence so tables and headings render."""
    m = re.match(r"^```(?:markdown|md|text)?\s*\n(.*)\n```\s*$", body, flags=re.S)
    return m.group(1) if m else body


def bullets(body):
    items, cur = [], None
    for line in body.splitlines():
        m = re.match(r"^\s{0,3}[-*]\s+(.*)", line)
        if m:
            if cur is not None:
                items.append(cur)
            cur = m.group(1).strip()
        elif cur is not None and line.strip():
            cur += " " + line.strip()
    if cur is not None:
        items.append(cur)
    return [i for i in items if i.lower().rstrip(".") != "none"]


steps = []
for f in sorted(log_dir.glob("*.md")):
    m = re.match(r"(\d\d)-", f.name)
    if not m or int(m.group(1)) not in STAGE:
        continue
    num = int(m.group(1))
    text = f.read_text()
    sec = sections(text)
    title_key = next((k for k in sec if k.lower().startswith("step")), None)
    title = re.sub(r"^Step\s*[—-]\s*", "", title_key or f.stem).strip()
    header = sec.get(title_key, "") if title_key else text
    date = re.search(r"\*\*Date:\*\*\s*([^·\n*]+)", header)
    cmds = re.findall(r"`(/realtor-pipeline:[^`]+)`", header) or re.findall(r"`(/realtor-pipeline:[^`]+)`", text)[:2]
    agent_line = re.search(r"\*\*Agents dispatched:\*\*\s*(.+)", header)
    al = agent_line.group(1) if agent_line else ""
    agents = [] if al.strip().lower().startswith("none") else [a for a in KNOWN_AGENTS if a in al]
    get = lambda name: next((v for k, v in sec.items() if k.lower().startswith(name)), "")
    steps.append({
        "id": num,
        "track": "buyer" if num < 20 else "seller",
        "stage": STAGE[num],
        "title": title,
        "date": date.group(1).strip() if date else "",
        "commands": [c.split()[0] for c in cmds],
        "agents": agents,
        "happened": bullets(get("what happened")),
        "output": unfence(get("key output")),
        "catches": bullets(get("compliance")),
        "files": [x.strip("` ") for x in re.findall(r"`[^`]+`", get("files"))] or bullets(get("files")),
    })

html = template.replace("__STEPS__", json.dumps(steps, ensure_ascii=False).replace("</", "<\\/")).replace("__RUNDATE__", run_date)
out.write_text(html)
print(f"{len(steps)} steps -> {out}")
for s in steps:
    print(s["id"], s["stage"], s["title"][:50], s["agents"], len(s["catches"]), "catches", len(s["output"]), "chars")
