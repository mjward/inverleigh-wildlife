#!/bin/bash
cd /workspace/inverleigh-wildlife
while true; do
 for n in 14 15 16; do f=docs/research/batch$n.json
  if [ -f $f ] && grep -q "batch $n attempt" docs/research/status2.log && ! grep -q "<!-- batch$n -->" docs/RESEARCH-REVIEW.md && python3 -c "import json;json.load(open('$f'))" 2>/dev/null; then
   python3 docs/research/tools/gen_extra.py >> docs/research/merge.log 2>&1
   if npx tsc --noEmit -p . >> docs/research/merge.log 2>&1; then python3 docs/research/tools/append_extra.py $n >> docs/research/merge.log 2>&1; echo "$(date +%H:%M) merged $n tsc ok" >> docs/research/merge.log; else echo "$(date +%H:%M) merged $n TSC FAIL" >> docs/research/merge.log; sleep 600; fi
  fi; done
 grep -q EXTRA4DONE docs/research/status2.log && { echo MERGE2DONE >> docs/research/merge.log; break; }
 sleep 60
done
