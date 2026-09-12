import json, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from classify_map import LM, SI, OS
q = json.load(open('build/pyq_raw.json'))
MAPS = {'LM': LM, 'SI': SI, 'OS': OS}
part = sys.argv[1]
lo = int(sys.argv[2]) if len(sys.argv) > 2 else 0
hi = int(sys.argv[3]) if len(sys.argv) > 3 else 10**6
D = MAPS[part]
sel = []
for x in q:
    if x['questionNumber'] in D.get(x['year'], {}):
        sel.append((x, D[x['year']][x['questionNumber']]))
sel = sel[lo:hi]
print("# %s items %d..%d of %d" % (part, lo, min(hi, len(sel) + lo), sum(len(v) for v in D.values())))
for x, c in sel:
    print("### %d-Q%d  [%s]" % (x['year'], x['questionNumber'], c))
    if x['sharedStem']:
        print("SHARED: " + x['sharedStem'])
    print(x['question'])
    for i, o in enumerate(x['options']):
        print("  (%s) %s" % ("abcd"[i], o))
    if x['trailingNote']:
        print("NOTE: " + x['trailingNote'])
    print()
