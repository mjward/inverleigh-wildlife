# Generate PROPOSED content/mammals.ts and content/reptiles.ts from batches 9-13 (whatever exists). Idempotent.
import json,os
R='/workspace/inverleigh-wildlife'
def items(n):
    p=f'{R}/docs/research/batch{n}.json'
    if not os.path.exists(p): return None
    d=json.load(open(p))
    if isinstance(d,dict) and 'commonName' in d: d=[d]
    if isinstance(d,dict):
        lst=next((v for v in d.values() if isinstance(v,list) and v and isinstance(v[0],dict)),None)
        d=lst if lst else [d]
    return d
def S(v): return v if isinstance(v,str) else json.dumps(v,ensure_ascii=False)
def emit(name,typ,groups,path):
    out=[f'// PROPOSED (not yet wired into the site). Generated from docs/research/batch*.json, 25-26 Oct 2026.\n// Sourced via Grok CLI live search + ALA/iNaturalist APIs; see docs/RESEARCH-REVIEW.md.\n',
         f'export type {typ} = {{\n  id: string;\n  commonName: string;\n  scientificName: string;\n  group: string;\n  tier: "5km" | "10km" | "";\n  fields: Record<string, string>;\n  notWellDocumented: string[];\n  sources: {{ url: string; title: string }}[];\n}};\n\n',f'export const {name}: {typ}[] = ']
    rows=[];seen=set()
    for g,n in groups:
        for b in items(n) or []:
            if (b.get('scientificName') or b.get('id')) in seen: continue
            seen.add(b.get('scientificName') or b.get('id'))
            skip={'id','commonName','scientificName','tier','notWellDocumented','sources','queries'}
            rows.append({'id':b.get('id') or (b.get('commonName') or '').lower().replace(' ','-'),'commonName':b.get('commonName') or b.get('id') or '','scientificName':b.get('scientificName') or '','group':g,
              'tier':b.get('tier','') if b.get('tier') in('5km','10km') else '',
              'fields':{k:S(v) for k,v in b.items() if k not in skip and v not in (None,'',[])},
              'notWellDocumented':[S(x) for x in b.get('notWellDocumented',[]) or []],
              'sources':[{'url':s.get('url') or '','title':s.get('title') or ''} if isinstance(s,dict) else {'url':str(s),'title':''} for s in b.get('sources',[]) or []]})
    open(path,'w').write(''.join(out)+json.dumps(rows,indent=2,ensure_ascii=False)+';\n')
    return len(rows)
print('mammals',emit('mammals','MammalText',[('koala',9),('native-mammal',12),('introduced-pest',13)],R+'/content/mammals.ts'))
print('reptiles',emit('reptiles','ReptileText',[('snake',10),('lizard',11)],R+'/content/reptiles.ts'))
