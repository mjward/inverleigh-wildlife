import json,sys,os
R='/workspace/inverleigh-wildlife';n=sys.argv[1]
mark=f'<!-- batch{n} -->'
rv=R+'/docs/RESEARCH-REVIEW.md'
if mark in open(rv).read(): sys.exit('already')
d=json.load(open(f'{R}/docs/research/batch{n}.json'))
items=d if isinstance(d,list) else (d.get('birds') or d.get('items') or d.get('species') or ([d] if 'commonName' in d else next((v for v in d.values() if isinstance(v,list) and v and isinstance(v[0],dict)),[])))
o=[f'\n{mark}\n### Grok batch {n} (grok-4.7, prompt docs/research/prompt{n}.txt, output batch{n}.json)\n']
def L(t,xs):
    if xs: o.append(f'- {t}:\n'+''.join(f'  - {x if isinstance(x,str) else json.dumps(x,ensure_ascii=False)}\n' for x in xs))
for b in items:
    o.append(f"\n**{b.get('commonName',b.get('id'))}** *{b.get('scientificName','')}*  verdict: {b.get('verdict','n/a')}, tier: {b.get('tier','')}\n")
    for k in ['trees','hangouts']:
        if b.get(k): o.append(f'- {k}: {b[k]}\n')
    L('Errors in draft',b.get('errorsInDraft'));L('Conflicts',b.get('conflicts'));L('Not well documented',b.get('notWellDocumented'))
    s=b.get('sources',[]); o.append(f'- Sources ({len(s)}): '+'; '.join(x.get('url','') if isinstance(x,dict) else str(x) for x in s)+'\n')
    q=b.get('queries',[]); 
    if q: o.append(f'- Queries ({len(q)}): '+' | '.join(map(str,q))+'\n')
if isinstance(d,dict):
    for k,v in d.items():
        if k not in('birds',) and not (isinstance(v,list) and v and isinstance(v[0],dict) and 'commonName' in v[0]): L(k,v if isinstance(v,list) else [v])
open(rv,'a').write(''.join(o));print('appended',n,len(items))
