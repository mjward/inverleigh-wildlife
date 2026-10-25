#!/bin/bash
for n in 0 1 2 3 4 5 6; do
 for a in 1 2 3; do
  ~/.grok/bin/grok --no-auto-update --reasoning-effort xhigh -m grok-4.7 --always-approve --cwd /workspace/inverleigh-wildlife -p "$(cat prompt$n.txt)" > run$n.b$a.log 2>&1; rc=$?
  echo "$(date '+%H:%M') batch $n attempt $a rc=$rc" >> status2.log
  if grep -qiE "free Grok Build usage limit" run$n.b$a.log; then
    if [ $n -eq 0 ] && [ $a -ge 2 ]; then echo FREECAP_STOP >> status2.log; exit; fi
    sleep 180
  elif grep -qiE "too quickly|resource-exhausted|Too many requests" run$n.b$a.log; then sleep 180
  else break; fi
 done
done
echo ALLDONE >> status2.log
