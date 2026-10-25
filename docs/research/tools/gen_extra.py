# Generate PROPOSED content/threatened.ts, lost.ts, insects.ts from batches 14-16. Idempotent.
import json,os
R='/workspace/inverleigh-wildlife'
S=lambda v: v if isinstance(v,str) else json.dumps(v,ensure_ascii=False)
def gen(n,name,typ,path):
    p=f'{R}/docs/research/batch{n}.json'
    if not os.path.exists(p): return None
    d=json.load(open(p)); lst=d.get('species',[]) if isinstance(d,dict) else d
    rows=[];seen=set()
    for b in lst:
        k=b.get('scientificName') or b.get('commonName')
        if k in seen: continue
        seen.add(k)
        rows.append({'commonName':b.get('commonName') or '','scientificName':b.get('scientificName') or '','group':S(b.get('group') or ''),
          'tier':b.get('tier') if b.get('tier') in('5km','10km') else '',
          'fields':{k2:S(v) for k2,v in b.items() if k2 not in('commonName','scientificName','group','tier','sources','uncertain','notWellDocumented') and v not in(None,'',[])},
          'uncertain':[S(x) for x in (b.get('uncertain') or b.get('notWellDocumented') or [])],
          'sources':[{'url':(s.get('url') or ''),'title':(s.get('title') or '')} if isinstance(s,dict) else {'url':str(s),'title':''} for s in b.get('sources') or []]})
    hdr=f'// PROPOSED (not yet wired into the site). Generated from docs/research/batch{n}.json, 26 Oct 2026.\n// Grok CLI live search + ALA/iNaturalist APIs; see docs/RESEARCH-REVIEW.md.\n'
    t=f'export type {typ} = {{\n  commonName: string;\n  scientificName: string;\n  group: string;\n  tier: "5km" | "10km" | "";\n  fields: Record<string, string>;\n  uncertain: string[];\n  sources: {{ url: string; title: string }}[];\n}};\n\n'
    open(path,'w').write(hdr+t+f'export const {name}: {typ}[] = '+json.dumps(rows,indent=2,ensure_ascii=False)+';\n')
    return len(rows)
for n,nm,ty,f in [(14,'threatened','ThreatenedText','threatened.ts'),(15,'lost','LostText','lost.ts'),(16,'insects','InsectText','insects.ts')]:
    print(nm,gen(n,nm,ty,f'{R}/content/{f}'))
