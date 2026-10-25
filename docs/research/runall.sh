#!/bin/bash
for n in 0 1 2 3 4 5 6; do
 for a in 1 2 3 4; do
  ~/.grok/bin/grok --no-auto-update --reasoning-effort xhigh -m grok-4.7 --always-approve --cwd /workspace/inverleigh-wildlife -p "$(cat prompt$n.txt)" > run$n.a$a.log 2>&1; rc=$?
  echo "$(date '+%H:%M') batch $n attempt $a rc=$rc" >> status.log
  if grep -qiE "usage limit|too quickly|resource-exhausted|Too many requests" run$n.a$a.log; then [ $a -lt 4 ] && sleep 240; else break; fi
 done
done
echo ALLDONE >> status.log
