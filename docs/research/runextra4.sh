#!/bin/bash
cd /workspace/inverleigh-wildlife/docs/research
for n in 14 15 16; do [ -f batch$n.json ] && continue; for a in 1 2 3; do
 ~/.grok/bin/grok --no-auto-update --reasoning-effort xhigh -m grok-4.7 --always-approve --cwd /workspace/inverleigh-wildlife -p "$(cat prompt$n.txt)" > run$n.b$a.log 2>&1; rc=$?
 echo "$(date '+%H:%M') batch $n attempt $a rc=$rc" >> status2.log
 if grep -qiE "usage limit|too quickly|resource-exhausted|Too many requests" run$n.b$a.log; then sleep 180; else break; fi
done; done
echo EXTRA4DONE >> status2.log
