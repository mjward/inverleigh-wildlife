import json,sys
R='/workspace/inverleigh-wildlife';n=sys.argv[1];rv=R+'/docs/RESEARCH-REVIEW.md';mark=f'<!-- batch{n} -->'
if mark in open(rv).read(): sys.exit()
d=json.load(open(f'{R}/docs/research/batch{n}.json'))
title={'14':'Threatened wildlife','15':'Lost from Inverleigh','16':'Insects and spiders'}[n]
o=[f'\n{mark}\n## {title} (Grok batch {n}, grok-4.7; prompt docs/research/prompt{n}.txt; data content/{["threatened","lost","insects"][int(n)-14]}.ts)\n']
for k,v in d.items():
    if k=='species': continue
    o.append(f'\n**{k}**\n'+(''.join(f'- {x if isinstance(x,str) else json.dumps(x,ensure_ascii=False)}\n' for x in v) if isinstance(v,list) else f'{json.dumps(v,ensure_ascii=False,indent=1)}\n'))
o.append('\n| Species | Group | Key facts | Uncertain |\n|---|---|---|---|\n')
for b in d.get('species',[]):
    keys=[x for x in ('tier','epbc','ffgJuly2026','localRecords','status','lastLocalRecord','scale','records','season','whereToSeeLocally') if b.get(x)]
    c=lambda s:str(s).replace('|','/').replace('\n',' ')[:300]
    o.append(f"| {c(b.get('commonName'))} *{c(b.get('scientificName'))}* | {c(b.get('group',''))} | {'; '.join(k+': '+c(b[k] if isinstance(b[k],str) else json.dumps(b[k],ensure_ascii=False)) for k in keys)} | {c('; '.join(map(str,b.get('uncertain') or b.get('notWellDocumented') or [])))} |\n")
srcs=sorted({s.get('url') for b in d.get('species',[]) for s in b.get('sources',[]) if isinstance(s,dict) and s.get('url')})
o.append(f'\nSources ({len(srcs)} unique URLs, accessed 26 Oct 2026):\n'+''.join(f'- {u}\n' for u in srcs))
open(rv,'a').write(''.join(o));print('appended',n)
