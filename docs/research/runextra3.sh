#!/bin/bash
while ! grep -qE "EXTRA2DONE|FREECAP_STOP" status2.log 2>/dev/null; do sleep 30; done
grep -q FREECAP_STOP status2.log && exit
for n in 12 13; do for a in 1 2 3; do
 ~/.grok/bin/grok --no-auto-update --reasoning-effort xhigh -m grok-4.7 --always-approve --cwd /workspace/inverleigh-wildlife -p "$(cat prompt$n.txt)" > run$n.b$a.log 2>&1; rc=$?
 echo "$(date '+%H:%M') batch $n attempt $a rc=$rc" >> status2.log
 if grep -qiE "usage limit|too quickly|resource-exhausted|Too many requests" run$n.b$a.log; then sleep 180; else break; fi
done; done
echo EXTRA3DONE >> status2.log
