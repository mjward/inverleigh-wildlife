# Merge grok bird batches 1-8 into content/birds.ts and docs/species.json. Idempotent.
import json,re,subprocess,glob,os
R='/workspace/inverleigh-wildlife'
src=open(R+'/content/birds.ts').read()
body=src.split('export const birdText: Record<string, BirdText> =',1)[1].rsplit(';',1)[0]
m=re.search(r"const LC = (\".*?\");",src); LC=m.group(1) if m else "\"\""
js=subprocess.run(['node','-e',f'const LC={LC};const o={body};console.log(JSON.stringify(o))'],capture_output=True,text=True,check=True).stdout
birds=json.loads(js)
slug=lambda n:re.sub(r'[^a-z0-9]+','-',n.lower()).strip('-')
def load(n):
    p=f'{R}/docs/research/batch{n}.json'
    if not os.path.exists(p): return []
    d=json.load(open(p))
    if isinstance(d,dict): d=d.get('birds') or next((v for v in d.values() if isinstance(v,list) and v and isinstance(v[0],dict)),[])
    return d
fact={};extra={}
for n in range(1,7):
    for b in load(n): fact[slug(b['commonName'])]=b
for n in (7,8):
    for b in load(n): extra[slug(b['commonName'])]=b
L=lambda f:{x['label']:x['count'] for x in json.load(open(f))[0]['fieldResult']}
a5=L('/workspace/inverleigh-wildlife/docs/research/data/all5.json');a10=L('/workspace/inverleigh-wildlife/docs/research/data/all.json')
spj=json.load(open(R+'/docs/species.json'))
known={x['scientificName'] for x in spj}
for sn,cn in [('Trichoglossus moluccanus','Rainbow Lorikeet'),('Zanda funerea','Yellow-tailed Black-Cockatoo')]:
    if sn not in known: spj.append({'rank':None,'commonName':cn,'scientificName':sn,'alaRecords':a10.get(sn,0),'status':'candidate','reason':'Added 25 Oct 2026 review: common locally, just below the top-70 cutoff'})
for x in spj:
    s=x['scientificName'];x['ala5km']=a5.get(s,0);x['ala10km']=a10.get(s,0)
    x['tier']='5km' if x['ala5km']>0 else '10km'
    k=slug(x['commonName']);f=fact.get(k,{});e=extra.get(k,{})
    if f.get('fields',{}).get('conservation'): x['conservation']=f['fields']['conservation']
    if e.get('trees'): x['trees']=e['trees']
    if e.get('hangouts'): x['hangouts']=e['hangouts']
    x['factCheck']=f.get('verdict','not checked') if x['status'] in('selected','candidate') else 'not in scope'
json.dump(spj,open(R+'/docs/species.json','w'),indent=2,ensure_ascii=False)
tier={slug(x['commonName']):x['tier'] for x in spj}
newc={}
for k,f in fact.items():
    flds=f.get('fields',{})
    if k not in birds:
        newc[k]=f;continue
    b=birds[k]
    for fk in ['origins','distribution','habitat','breeding','diet','threats','size','conservation']:
        if flds.get(fk): b[fk]=flds[fk]
for k,e in extra.items():
    if k in birds:
        if e.get('trees'): birds[k]['trees']=e['trees']
        if e.get('hangouts'): birds[k]['hangouts']=e['hangouts']
for k in birds: birds[k]['tier']=tier.get(k,'5km')
out='import type { BirdText } from "@/lib/types";\n\n// Original summaries written for this site. Facts re-checked 25 Oct 2026 with live sources (see docs/RESEARCH-REVIEW.md and docs/research/batch*.json).\n// Empty strings = not yet written/verified.\nexport const birdText: Record<string, BirdText> = '+json.dumps(birds,indent=2,ensure_ascii=False)+';\n'
open(R+'/content/birds.ts','w').write(out)
json.dump({k:{**v,**extra.get(k,{})} for k,v in newc.items()},open(R+'/docs/research/new-candidates.json','w'),indent=2,ensure_ascii=False)
print('new',list(newc));print('facts',len(fact),'extra',len(extra),'birds',len(birds))
