#!/bin/bash
cd /workspace/inverleigh-wildlife
declare -A done
while true; do
 for n in 8 9 10 11 12 13; do
  f=docs/research/batch$n.json
  if [ -f $f ] && [ -z "${done[$n]}" ] && grep -q "batch $n attempt" docs/research/status2.log && python3 -c "import json;json.load(open('$f'))" 2>/dev/null; then
   if [ $n -eq 8 ]; then cp content/birds.ts /tmp/birds.bak; python3 docs/research/tools/apply_birds.py; else python3 docs/research/tools/gen_wildlife.py; fi >> docs/research/merge.log 2>&1
   if npx tsc --noEmit -p . >> docs/research/merge.log 2>&1; then echo "$(date +%H:%M) merged $n tsc ok" >> docs/research/merge.log; else echo "$(date +%H:%M) merged $n TSC FAIL" >> docs/research/merge.log; [ $n -eq 8 ] && cp /tmp/birds.bak content/birds.ts; fi
   done[$n]=1
  fi
 done
 [ ${#done[@]} -ge 6 ] && break
 grep -q EXTRA3DONE docs/research/status2.log && sleep 120 && [ ${#done[@]} -ge 6 -o -n "$(grep EXTRA3DONE docs/research/status2.log)" ] && { python3 docs/research/tools/gen_wildlife.py >> docs/research/merge.log 2>&1; npx tsc --noEmit -p . >> docs/research/merge.log 2>&1 && echo "$(date +%H:%M) final tsc ok" >> docs/research/merge.log; break; }
 sleep 60
done
echo MERGEDONE >> docs/research/merge.log
