#!/bin/bash
cd /workspace/inverleigh-wildlife/docs
while true; do
 for n in 4 5 6 7 8 9 10 11 12 13; do
  f=research/batch$n.json
  if [ -f $f ] && ! grep -q "<!-- batch$n -->" RESEARCH-REVIEW.md; then sleep 20; python3 -c "import json;json.load(open('$f'))" 2>/dev/null && python3 research/tools/append_batch.py $n >> research/append.log 2>&1; fi
 done
 grep -q EXTRA3DONE research/status2.log && [ $(grep -c "<!-- batch" RESEARCH-REVIEW.md) -ge 13 ] && break
 sleep 60
done
