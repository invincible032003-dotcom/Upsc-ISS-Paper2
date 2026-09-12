#!/usr/bin/env python3
"""Extract every PYQ from the nine Statistics-II source papers into JSON.

Source-fidelity rule: question text and option text are copied verbatim from the
markdown. Nothing is rewritten, reordered or invented. Shared ("Consider the
following for the next N items") stems are detached from the preceding item and
re-attached to every item they actually govern.
"""
import json, re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FILES = [
    (2018, "IES-ISS_Statistics_PaperII_2018.md"),
    (2019, "IES-ISS_Statistics_PaperII_2019.md"),
    (2020, "IES-ISS_Statistics_PaperII_2020.md"),
    (2021, "IES-ISS_Statistics_PaperII_2021.md"),
    (2022, "ISS_Statistics_Paper_II_2022.md"),
    (2023, "Statistics_Paper_II_2023.md"),
    (2024, "Statistics_Paper_II_2024.md"),
    (2025, "Statistics_Paper_II_2025.md"),
    (2026, "Statistics_Paper_II_2026.md"),
]

QRE   = re.compile(r'^\*\*Q?(\d{1,2})\.\*\*\s*(.*)$')
OPTRE = re.compile(r'^(?:-\s*)?\(([a-d])\)\s*(.*)$')

SH_RANGE = re.compile(r'^\*(?:Data for Q|Questions )(\d+)\s*[–—-]\s*(\d+)'
                      r'(?::\*|\s+are based on the following:\*)')
SH_NEXT  = re.compile(r'^>\s*\*\*Consider the following(?: data)? for the next '
                      r'(?:two|three|four)\s*\((\d+)\)\s*items?:\*\*')
FOOTNOTE = re.compile(r'^\*Transcribed from')

WORD2N = {"two": 2, "three": 3, "four": 4}


def parse(path, year):
    lines = open(path, encoding="utf-8").read().split("\n")
    starts = []
    for i, ln in enumerate(lines):
        m = QRE.match(ln)
        if m:
            starts.append((i, int(m.group(1)), m.group(2)))

    items, shared_assign = [], {}   # qno -> shared stem text
    for idx, (i, qno, first) in enumerate(starts):
        end = starts[idx + 1][0] if idx + 1 < len(starts) else len(lines)
        block = [first] + lines[i + 1:end]
        stem, opts, tail = [], [], []
        cur = None
        for ln in block:
            s = ln.strip()
            m = OPTRE.match(s)
            if m and m.group(1) == "abcd"[len(opts)] and len(opts) < 4:
                opts.append((m.group(1), [m.group(2)]))
                cur = m.group(1)
            elif cur is not None:
                if len(opts) == 4:
                    tail.append(ln.rstrip())
                elif s:
                    opts[-1][1].append(ln.rstrip())
            else:
                if s.startswith("---"):
                    continue
                stem.append(ln.rstrip())
        opts = [(l, "\n".join(t).strip()) for l, t in opts]

        # --- split the tail into (a) a genuine note for THIS item and
        #     (b) shared-stem material belonging to LATER items ---------------
        note_lines, shared_lines, shared_target = [], [], None
        mode = "note"
        for ln in tail:
            s = ln.strip()
            if not s:
                if mode == "shared":
                    shared_lines.append("")
                continue
            if FOOTNOTE.match(s):
                mode = "drop"
                continue
            mr = SH_RANGE.match(s)
            mn = SH_NEXT.match(s)
            if mr:
                mode, shared_target = "shared", list(range(int(mr.group(1)), int(mr.group(2)) + 1))
                rest = s[mr.end():].strip()
                if rest:
                    shared_lines.append(rest)
                continue
            if mn:
                n = int(mn.group(1))
                mode, shared_target = "shared", list(range(qno + 1, qno + 1 + n))
                rest = s[mn.end():].strip()
                if rest:
                    shared_lines.append(re.sub(r'^>\s?', '', rest))
                continue
            if s.strip("-") == "" :
                continue
            if mode == "note":
                note_lines.append(ln.rstrip())
            elif mode == "shared":
                shared_lines.append(re.sub(r'^>\s?', '', ln.rstrip()))
        if shared_target:
            txt = re.sub(r'\n{3,}', '\n\n', "\n".join(shared_lines)).strip()
            for t in shared_target:
                shared_assign[t] = txt

        stem_text = re.sub(r'\n{3,}', '\n\n', "\n".join(stem).strip()).strip()
        items.append({
            "year": year,
            "questionNumber": qno,
            "question": stem_text,
            "options": [t for _, t in opts],
            "optionLetters": [l for l, _ in opts],
            "trailingNote": "\n".join(note_lines).strip(),
            "sharedStem": "",
            "sourceFile": os.path.basename(path),
        })

    for it in items:
        if it["questionNumber"] in shared_assign:
            it["sharedStem"] = shared_assign[it["questionNumber"]]
    return items


def main():
    allq, problems = [], []
    for year, fname in FILES:
        p = os.path.join(ROOT, fname)
        if not os.path.exists(p):
            problems.append("MISSING FILE " + fname)
            continue
        qs = parse(p, year)
        nums = [q["questionNumber"] for q in qs]
        if nums != list(range(1, 81)):
            problems.append("%d: numbering anomaly count=%d" % (year, len(nums)))
        for q in qs:
            if len(q["options"]) != 4:
                problems.append("%d Q%d: %d options" % (year, q["questionNumber"], len(q["options"])))
            if q["optionLetters"] != ["a", "b", "c", "d"]:
                problems.append("%d Q%d: letters %s" % (year, q["questionNumber"], q["optionLetters"]))
            if not q["question"].strip():
                problems.append("%d Q%d: empty stem" % (year, q["questionNumber"]))
            for o in q["options"]:
                if not o.strip():
                    problems.append("%d Q%d: empty option" % (year, q["questionNumber"]))
        sh = sum(1 for q in qs if q["sharedStem"])
        allq.extend(qs)
        print("%d: %d questions, %2d with shared stem  (%s)" % (year, len(qs), sh, fname))
    print("TOTAL:", len(allq))
    json.dump(allq, open(os.path.join(ROOT, "build", "pyq_raw.json"), "w"),
              ensure_ascii=False, indent=1)
    if problems:
        print("\n--- EXTRACTION PROBLEMS ---")
        for x in problems:
            print(" ", x)
    else:
        print("No extraction problems.")


main()
