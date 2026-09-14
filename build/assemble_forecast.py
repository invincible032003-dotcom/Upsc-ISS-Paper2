# -*- coding: utf-8 -*-
"""Assembles forecast.js (window.forecastDataPaper2) from build/forecast/*.py
(hand-authored "Set 1" per section) plus build/forecast/data/*.json (large
evidence-based forecast banks reverse-engineered from 2018-2026 PYQ patterns,
covering Linear Models, Estimation and Hypothesis Testing far beyond the
original 25-per-section set).

These are AI-GENERATED / AI-derived forecast questions - never authentic
PYQs, and never merged into questions2.js / window.quizDataPaper2. Every
record carries provenance="forecast" and isForecast=True so the UI can
enforce this separation and label them clearly.

Run from the repository root:  python3 build/assemble_forecast.py
Writes: ISS-Statistics-II-Mock/forecast.js
"""
import json
import os
import random
import re
import sys

LETTERS = "abcd"
OPTION_LETTER_RE = re.compile(r"\(([abcd])\)")
# Guard: "(a)" etc immediately preceded by a digit is a citation like
# "2019 Q2(a)", not a reference to one of THIS question's own options.
OPTION_LETTER_RE_GUARDED = re.compile(r"(?<!\d)\(([abcd])\)")
BARE_LETTER_RE = re.compile(r"(?<![A-Za-z0-9(])([A-D])(?![A-Za-z0-9(])")


def remap_option_letters(text, order):
    """Rewrite every '(a)'..'(d)' reference in prose (lowercase, parenthesized
    - the style used by the hand-authored Set 1 and the Linear Models bulk
    bank) to match the shuffled option order."""
    old_to_new = {}
    for new_pos in range(4):
        old_to_new[LETTERS[order[new_pos]]] = LETTERS[new_pos]

    def repl(m):
        return "(" + old_to_new[m.group(1)] + ")"

    return OPTION_LETTER_RE_GUARDED.sub(repl, text)


def remap_bare_letters(text, order):
    """Rewrite every bare 'A'..'D' reference in prose (uppercase, no
    parens - the style used by the Statistical Inference bulk bank, e.g.
    'B is wrong', 'A and D are equivalent') to match the shuffled option
    order. Guarded against function-call notation like 'C(n,t)' and
    citation-like digit-glued tokens."""
    old_to_new = {}
    for new_pos in range(4):
        old_to_new[LETTERS[order[new_pos]].upper()] = LETTERS[new_pos].upper()

    def repl(m):
        return old_to_new[m.group(1)]

    return BARE_LETTER_RE.sub(repl, text)


HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA_DIR = os.path.join(HERE, "forecast", "data")
sys.path.insert(0, os.path.join(HERE, "forecast"))

import lm_forecast
import estimation_forecast
import hypothesis_forecast

SET1_SECTIONS = [
    ("Linear Models", "LM", lm_forecast.FORECAST),
    ("Estimation", "EST", estimation_forecast.FORECAST),
    ("Hypothesis Testing", "HT", hypothesis_forecast.FORECAST),
]

DIFF_MAP = {"EASY": "Easy", "MEDIUM": "Medium", "HIGH": "Hard", "HARD": "Hard"}


def shuffle_and_build(qid, section, topic, subtopic, question, options, ans_index,
                       sc, tips, sol, qtype, diff, set_no, letters="lower",
                       check_concluding_mention=True):
    if len(options) != 4:
        raise SystemExit("Forecast item %s does not have exactly 4 options" % qid)
    if not (0 <= ans_index <= 3):
        raise SystemExit("Forecast item %s has out-of-range correctAnswer" % qid)

    rng = random.Random(qid)
    order = [0, 1, 2, 3]
    rng.shuffle(order)
    shuffled_options = [options[order[p]] for p in range(4)]
    shuffled_ans = order.index(ans_index)

    remap = remap_option_letters if letters == "lower" else remap_bare_letters
    remapped_sc = remap(sc or "", order)
    remapped_tips = [remap(t, order) for t in tips]
    remapped_sol = [remap(t, order) for t in sol]
    solution = [{"step": j + 1, "text": t} for j, t in enumerate(remapped_sol)]

    mismatch = False
    if check_concluding_mention:
        concluding_text = " ".join(remapped_sol) + " " + remapped_sc
        mentions = (OPTION_LETTER_RE.findall(concluding_text) if letters == "lower"
                    else [m.lower() for m in BARE_LETTER_RE.findall(concluding_text)])
        mismatch = bool(mentions) and mentions[-1] != LETTERS[shuffled_ans]

    record = {
        "id": qid,
        "section": section,
        "set": set_no,
        "topic": topic,
        "subtopic": subtopic,
        "question": question,
        "options": shuffled_options,
        "correctAnswer": shuffled_ans,
        "questionType": qtype or "Conceptual",
        "difficulty": diff or "Medium",
        "examShortcut": remapped_sc,
        "tipsTricks": remapped_tips,
        "solution": solution,
        "explanationSource": "AI-derived explanation",
        "isForecast": True,
        "provenanceLabel": "FORECAST / AI-GENERATED — NOT AN AUTHENTIC PYQ",
    }
    return record, mismatch


def build_set1(out, seen_ids, mismatches):
    for section_name, code, items in SET1_SECTIONS:
        if len(items) != 25:
            raise SystemExit("Section %s has %d items, expected 25" % (section_name, len(items)))
        for i, item in enumerate(items, start=1):
            qid = "F-%s-%02d" % (code, i)
            if qid in seen_ids:
                raise SystemExit("Duplicate forecast id %s" % qid)
            seen_ids.add(qid)
            record, mismatch = shuffle_and_build(
                qid, section_name, item["topic"], item["subtopic"], item["question"],
                item["options"], item["ans"], item.get("sc", ""), item.get("tips", []),
                item.get("sol", []), item.get("qtype", "Conceptual"), item.get("diff", "Medium"),
                set_no=1, letters="lower")
            if mismatch:
                mismatches.append(qid)
            out.append(record)


def lm_sort_key(qid):
    # qid like "F1.1", "F14.10" -> (1, 1), (14, 10)
    sec, sub = qid[1:].split(".")
    return (int(sec), int(sub))


def build_lm_bulk(out, seen_ids, mismatches):
    data = json.load(open(os.path.join(DATA_DIR, "lm_bulk.json"), encoding="utf-8"))
    items = [data[k] for k in sorted(data.keys(), key=lm_sort_key)]
    letters = "abcd"
    n_per_set = 25
    total_sets = (len(items) + n_per_set - 1) // n_per_set
    for idx, item in enumerate(items):
        set_no = 2 + idx // n_per_set
        pos_in_set = idx % n_per_set + 1
        qid = "F-LM-B%03d" % (idx + 1)
        if qid in seen_ids:
            raise SystemExit("Duplicate forecast id %s" % qid)
        seen_ids.add(qid)
        ans_index = letters.index(item["answer_letter"].lower())
        record, mismatch = shuffle_and_build(
            qid, "Linear Models", item["topic"], item["topic"], item["question"],
            item["options"], ans_index, item.get("explanation", ""), [], [],
            "Conceptual", "Medium", set_no=set_no, letters="lower",
            check_concluding_mention=False)
        if mismatch:
            mismatches.append(qid)
        out.append(record)
    return total_sets, len(items)


def build_inference_bulk(out, seen_ids, mismatches):
    data = json.load(open(os.path.join(DATA_DIR, "inf_bulk.json"), encoding="utf-8"))
    items = [data[k] for k in sorted(data.keys(), key=lambda k: int(k))]
    estimation_items = [it for it in items if it["num"] <= 250]
    hyptest_items = [it for it in items if it["num"] > 250]

    def emit(section, code, pool):
        n_per_set = 25
        total_sets = (len(pool) + n_per_set - 1) // n_per_set
        for idx, item in enumerate(pool):
            set_no = 2 + idx // n_per_set
            qid = "F-%s-B%03d" % (code, idx + 1)
            if qid in seen_ids:
                raise SystemExit("Duplicate forecast id %s" % qid)
            seen_ids.add(qid)
            ans_index = "ABCD".index(item["answer_letter"])
            diff = DIFF_MAP.get(item.get("difficulty", "MEDIUM"), "Medium")
            record, mismatch = shuffle_and_build(
                qid, section, item["topic"], item["title"], item["question"],
                item["options"], ans_index, item.get("explanation", ""), [], [],
                "Conceptual", diff, set_no=set_no, letters="upper",
                check_concluding_mention=False)
            if mismatch:
                mismatches.append(qid)
            out.append(record)
        return total_sets, len(pool)

    est_sets, est_n = emit("Estimation", "EST", estimation_items)
    ht_sets, ht_n = emit("Hypothesis Testing", "HT", hyptest_items)
    return (est_sets, est_n), (ht_sets, ht_n)


def main():
    out = []
    seen_ids = set()
    mismatches = []

    build_set1(out, seen_ids, mismatches)
    lm_sets, lm_n = build_lm_bulk(out, seen_ids, mismatches)
    (est_sets, est_n), (ht_sets, ht_n) = build_inference_bulk(out, seen_ids, mismatches)

    if mismatches:
        raise SystemExit(
            "Option-letter remap self-check failed for %d item(s): %s"
            % (len(mismatches), ", ".join(mismatches[:20]))
        )

    print("Assembled %d forecast questions." % len(out))
    print("  Linear Models   : Set 1 (25) + %d bulk sets (%d) = %d total" % (lm_sets, lm_n, 25 + lm_n))
    print("  Estimation      : Set 1 (25) + %d bulk sets (%d) = %d total" % (est_sets, est_n, 25 + est_n))
    print("  Hypothesis Test.: Set 1 (25) + %d bulk sets (%d) = %d total" % (ht_sets, ht_n, 25 + ht_n))

    out_dir = os.path.join(ROOT, "ISS-Statistics-II-Mock")
    os.makedirs(out_dir, exist_ok=True)
    js_path = os.path.join(out_dir, "forecast.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("// AUTO-GENERATED by build/assemble_forecast.py - do not edit by hand.\n")
        f.write("// AI-GENERATED FORECAST questions for 2027 - NOT authentic UPSC PYQs.\n")
        f.write("// Every item is clearly labeled and must never be merged with\n")
        f.write("// window.quizDataPaper2 (the authentic PYQ dataset in questions2.js).\n")
        f.write("window.forecastDataPaper2 = ")
        json.dump(out, f, ensure_ascii=False, indent=None, separators=(",", ":"))
        f.write(";\n")
    size_kb = os.path.getsize(js_path) / 1024
    print("Wrote %s (%.1f KB)" % (js_path, size_kb))


if __name__ == "__main__":
    main()
