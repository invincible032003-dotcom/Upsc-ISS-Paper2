#!/usr/bin/env python3
"""Assembles prestorm.js from the 4 per-test agent JSON extractions.

Validates each of the 320 questions against the taxonomy, applies a seeded
option shuffle to remove answer-position bias (each question's examShortcut
was required to never reference options by letter/position, so no text
remap is needed - only correctAnswer moves with its option), and writes
the final window.prestormDataPaper2 array to ISS-Statistics-II-Mock/prestorm.js.
"""
import json
import random
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SCRATCH = Path("/tmp/claude-0/-home-user-Upsc-ISS-Paper2/0cd7bc9c-8ee7-5325-8134-e24995a09752/scratchpad/prestorm")
TAXONOMY = json.loads((SCRATCH / "taxonomy.json").read_text())
ANSWER_KEYS = json.loads((SCRATCH / "answer_keys.json").read_text())

REQUIRED_FIELDS = ["questionNumber", "question", "options", "correctAnswer", "examShortcut", "unit", "topic", "subtopic", "replaced", "replacedReason"]


def validate_taxonomy(unit, topic, subtopic, ctx):
    if unit not in TAXONOMY:
        raise ValueError(f"{ctx}: unknown unit {unit!r}")
    if topic not in TAXONOMY[unit]:
        raise ValueError(f"{ctx}: unknown topic {topic!r} for unit {unit!r}")
    if subtopic not in TAXONOMY[unit][topic]:
        raise ValueError(f"{ctx}: unknown subtopic {subtopic!r} for topic {topic!r}")


def load_test(test_no):
    path = SCRATCH / f"t{test_no}_out.json"
    data = json.loads(path.read_text())
    if len(data) != 80:
        raise ValueError(f"t{test_no}: expected 80 questions, got {len(data)}")

    key = ANSWER_KEYS[f"t{test_no}"]
    letter_to_idx = {"A": 0, "B": 1, "C": 2, "D": 3}

    by_num = {}
    for item in data:
        qn = item.get("questionNumber")
        ctx = f"t{test_no} Q{qn}"
        for f in REQUIRED_FIELDS:
            if f not in item:
                raise ValueError(f"{ctx}: missing field {f!r}")
        if not isinstance(qn, int) or not (1 <= qn <= 80):
            raise ValueError(f"{ctx}: bad questionNumber {qn!r}")
        if qn in by_num:
            raise ValueError(f"{ctx}: duplicate questionNumber")
        if len(item["options"]) != 4:
            raise ValueError(f"{ctx}: expected 4 options, got {len(item['options'])}")
        if not isinstance(item["correctAnswer"], int) or not (0 <= item["correctAnswer"] <= 3):
            raise ValueError(f"{ctx}: bad correctAnswer {item['correctAnswer']!r}")
        if not isinstance(item["replaced"], bool):
            raise ValueError(f"{ctx}: 'replaced' must be a boolean, got {item['replaced']!r}")
        if item["replaced"] and not item.get("replacedReason"):
            raise ValueError(f"{ctx}: replaced=true but replacedReason is empty")

        if not item["replaced"]:
            expected_idx = letter_to_idx[key[str(qn)]]
            if item["correctAnswer"] != expected_idx:
                raise ValueError(
                    f"{ctx}: correctAnswer {item['correctAnswer']} != answer-key index "
                    f"{expected_idx} (key letter {key[str(qn)]!r}) - agent may have mis-keyed "
                    f"(if this question was meant to be replaced, 'replaced' must be true)"
                )

        validate_taxonomy(item["unit"], item["topic"], item["subtopic"], ctx)
        by_num[qn] = item

    missing = sorted(set(range(1, 81)) - set(by_num.keys()))
    if missing:
        raise ValueError(f"t{test_no}: missing question numbers {missing}")

    return [by_num[i] for i in range(1, 81)]


BARE_LETTER_RE = re.compile(r"(?<![A-Za-z0-9(])([A-D])(?![A-Za-z0-9(])")
PAREN_LETTER_RE = re.compile(r"(?<!\d)\(([a-dA-D])\)")


def check_no_option_refs(text, ctx):
    """Best-effort warning (not fatal) if examShortcut still names an option
    by letter/position despite the brief's instruction not to."""
    if BARE_LETTER_RE.search(text) or PAREN_LETTER_RE.search(text):
        print(f"  [warn] {ctx}: examShortcut may reference an option by letter: {text[:90]!r}", file=sys.stderr)


def shuffle_item(item, rng, test_no):
    qn = item["questionNumber"]
    order = [0, 1, 2, 3]
    rng.shuffle(order)
    new_options = [item["options"][i] for i in order]
    new_correct = order.index(item["correctAnswer"])
    check_no_option_refs(item["examShortcut"], f"t{test_no} Q{qn}")
    return {
        "id": f"PRESTORM-T{test_no}-Q{qn:02d}",
        "testNo": test_no,
        "questionNumber": qn,
        "question": item["question"],
        "sharedStem": "",
        "trailingNote": "",
        "options": new_options,
        "correctAnswer": new_correct,
        "questionType": "Mock Series",
        "difficulty": "Medium",
        "examShortcut": item["examShortcut"],
        "unit": item["unit"],
        "topic": item["topic"],
        "subtopic": item["subtopic"],
        "isPrestorm": True,
        "provenanceLabel": (
            "PRESTORM MOCK SERIES - editorially replaced, shortcut AI-derived"
            if item["replaced"] else
            "PRESTORM MOCK SERIES - answer key as printed, shortcut AI-derived"
        ),
        "replaced": item["replaced"],
        "replacedReason": item.get("replacedReason", ""),
    }


def main():
    all_out = []
    rng = random.Random(0)
    for test_no in [1, 2, 3, 4]:
        items = load_test(test_no)
        for item in items:
            # seed per-question for determinism independent of processing order
            q_rng = random.Random(f"prestorm-t{test_no}-q{item['questionNumber']}")
            all_out.append(shuffle_item(item, q_rng, test_no))
        print(f"t{test_no}: OK (80/80 validated)")

    js = "window.prestormDataPaper2 = " + json.dumps(all_out, ensure_ascii=False, separators=(",", ":")) + ";\n"
    out_path = ROOT / "ISS-Statistics-II-Mock" / "prestorm.js"
    out_path.write_text(js, encoding="utf-8")
    print(f"Wrote {out_path} ({len(all_out)} questions, {len(js)} bytes)")

    from collections import Counter
    unit_counts = Counter(q["unit"] for q in all_out)
    for u, c in unit_counts.items():
        print(f"  {u}: {c}")

    replaced = [q for q in all_out if q["replaced"]]
    print(f"\nReplaced {len(replaced)}/{len(all_out)} questions for quality:")
    for q in replaced:
        print(f"  {q['id']}: {q['replacedReason']}")


if __name__ == "__main__":
    main()
