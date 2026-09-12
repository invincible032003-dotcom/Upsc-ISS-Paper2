import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from classify_map import LM, SI, OS
q = json.load(open('build/pyq_raw.json'))
code = {}
for D in (LM, SI, OS):
    for y, d in D.items():
        for n, c in d.items():
            code[(y, n)] = c
year = int(sys.argv[1]); lo = int(sys.argv[2]); hi = int(sys.argv[3])
for x in q:
    if x['year'] != year or not (lo <= x['questionNumber'] <= hi):
        continue
    print("### Q%d  [%s]" % (x['questionNumber'], code[(year, x['questionNumber'])]))
    if x['sharedStem']:
        print("SHARED: " + x['sharedStem'])
    print(x['question'])
    for i, o in enumerate(x['options']):
        print("  (%s) %s" % ("abcd"[i], o))
    if x['trailingNote']:
        print("NOTE: " + x['trailingNote'])
    print()
