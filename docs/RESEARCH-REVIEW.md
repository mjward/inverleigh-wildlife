# Research review: Inverleigh bird list and write-ups

Researchy, 25 Oct 2026 (AEDT). **Status: partial pass.** I fact-checked breeding data only, against one source. Origins, diet and threats are **not yet verified**.

## 0. Method and a failure to note first
- I could not use the required Grok CLI. `~/.grok/bin/grok` does not exist (`ls: cannot access '/home/box/.grok/bin/'`), `which grok` returns nothing, and a filesystem search found no grok binary. Nothing in this pass comes from grok.
- I used these instead, all fetched live on 25 Oct 2026:
  - the ALA biocache API, for the species list;
  - Birds in Backyards (BirdLife Australia) species pages, for breeding season, clutch, incubation and distribution.
- Training knowledge was used only to decide which claims to check. No correction rests on it alone.

## 1. Species list check (ALA)
Queries:
- All years: `https://biocache-ws.ala.org.au/ws/occurrence/facets?q=*:*&fq=class:Aves&lat=-38.10&lon=144.05&radius=10&facets=species&flimit=250` (232 species).
- Recent only: the same query plus `&fq=year:[2016 TO 2026]` (184 species, 28,246 records).

Findings:
- The 38 selected species all sit in the top 70 for the last 10 years as well. None is a vagrant. The weakest recent counts are Sacred Kingfisher (#64), Masked Lapwing (#54) and Whistling Kite (#48).
- **Recent-decline flags** (all-time rank → 2016–26 rank). The site shouldn't present these as easy to see:
  - Australian Golden Whistler: 66 → 97
  - Jacky Winter: 47 → 70
  - Brown Goshawk: 61 → 73
  - Tree Martin: 68 → 84
  - Purple-crowned Lorikeet: 143 → 19 recent records
- **Threatened or declining species in the circle.** None is on the list. The site might want a note on them:
  - **Diamond Firetail** (*Stagonopleura guttata*): 70 records, **0 since 2016**. I haven't checked its FFG/EPBC status this pass, but my understanding is that it's listed. Verify before publishing.
  - Black-chinned Honeyeater: 40 records, 3 recent.
  - Brown Treecreeper and Hooded Robin: not in the top 130. Not checked.
- **Missing species that locals would expect**, with 2016–26 records:
  - Rainbow Lorikeet: 144 (rank 55 and rising). It isn't in the 70-candidate list because the all-time rank is 74.
  - Yellow-tailed Black-Cockatoo: 103
  - Eurasian Coot: 81
  - Australasian Grebe: 92
  - Pied Currawong: 73
  - Little Pied Cormorant: 69
  - Black Swan: 31
  - Tawny Frogmouth: 8 (under-recorded because it is nocturnal)
  - Australian Pelican: 37
  - Spotted Dove: 25 (introduced)
  - Suggest adding Rainbow Lorikeet and Yellow-tailed Black-Cockatoo to the reserves.
- **ID caution:** Australian Raven (*Corvus coronoides*) has 71 records, only 7 of them recent. Little Raven is the default raven locally, and the page could say so.
- **Not done:** eBird hotspot cross-check (needs an API key), Birdata and local field-naturalist sources (Geelong Field Naturalists Club). These are **gaps**.
- species.json is unchanged. All 70 candidates are still listed, so none was dropped.

## 2. Corrections applied to content/birds.ts
The original is saved as `birds.ts.orig`. Source: Birds in Backyards, `https://www.birdsinbackyards.net/species/<Genus-species>`, accessed 25 Oct 2026.

| Species | Change |
|---|---|
| New Holland Honeyeater | Clutch 1–3 → 2–3. Incubation 14 → 18 days. Season "any time, mainly summer and winter". |
| Little Raven | Season Jul–Nov → May–Dec. Clutch 4–5 → 1–6. Added King Island and the "in or west of the Divide" detail. |
| Eastern Rosella | Clutch 4–9 → 4–8 (usually 5). |
| Spotted Pardalote | Season Aug–Jan → Jun–Jan. Clutch 3–5 → usually 4. Incubation 14–16 → 19 days. |
| Grey Fantail | Season Aug–Jan → Jul–Jan. |
| Striated Pardalote | Season Jul–Jan → Jun–Jan. Incubation is now marked "not confirmed". |
| Red-browed Finch | Season Sep–Apr → Oct–Apr. Clutch 4–6 → 4–5. Incubation 13 → 14 days. |
| Red-rumped Parrot | Season Jul–Dec → Aug–Dec. Clutch 4–7 → 3–7 (usually 5). Incubation 19 → 21 days. |
| Brown Falcon | Season Jul–Dec → Jun–Nov (south). Clutch 2–4 → 2–6 (usually 3). Incubation 4–5 weeks → about 30 days. |
| Sulphur-crested Cockatoo | Clutch 2–3 → 1–3. |
| Long-billed Corella | Season Aug–Dec → Jul–Dec. Clutch 2–4 → 1–4. |
| Rufous Whistler | Distribution "throughout Australia" → mainland only, not Tasmania (BIBY lists it as not present in Tasmania). Season Sep–Feb → Jul–Feb. Clutch usually 2. Incubation 13 days. |
| Yellow-rumped Thornbill | Season: any month, mainly Jul–Dec. Clutch 2–5 (usually 3–4). Incubation 17 days. |
| Australian Wood Duck | Season Jul–Nov → Sep–Nov (south). Clutch 8–11 → 8–10. |
| Whistling Kite | Added the Solomon Islands. Distribution now "uncommon in Tasmania". Season Jun–Oct → Jul–Jan (south). Clutch usually 2. Incubation 38 days. |
| Straw-necked Ibis | Season now Aug–Jan in the south. |
| Wedge-tailed Eagle | Season Jun–Dec → Apr–Sep, mainly July. Clutch 1–2 → 1–3 (usually 2). The 45-day incubation is marked unconfirmed. |
| Masked Lapwing | Season Jun–Dec → any month. |
| Crested Pigeon | Season: usually Sep–Mar, can breed at any time. Incubation 18–20 → 21 days. |

## 3. Proposed changes (not applied)
- **Welcome Swallow:** BIBY gives 21 days' incubation and the draft says 15. I believe HANZAB gives about 14–16. I left the draft as it is until a second source settles it.
- **Magpie-lark:** BIBY says it is a rare vagrant to Tasmania. The draft could say "except Tasmania".
- **Little Raven threats:** "few natural predators beyond Wedge-tailed Eagles" has no source. Suggest "Adults have few natural predators".

## 4. Gaps (no data or not checked)
- **No BIBY page found (404)** for Australian Magpie, White-plumed Honeyeater, Galah, Yellow-faced Honeyeater or White-eared Honeyeater. For these, every field is **unverified**.
- **BIBY page found but no breeding figures could be read from it:** Superb Fairywren, Grey Shrike-thrush, Magpie-lark, Laughing Kookaburra, Black-faced Cuckooshrike (season only), Pacific Black Duck, Silvereye (season only), Eastern Yellow Robin (incubation), Common Bronzewing (season and incubation), Red Wattlebird (incubation, already marked uncertain in the draft).
- **Not fact-checked for any species:** origins and endemism, habitat, diet, predators and threats, size, conservation status (the shared "LC" string isn't verified against the EPBC/FFG lists), and the localSpot text.
- Still to check: the Australian Museum, ALA species pages, the Victorian FFG Threatened List, eBird, Birdata and HANZAB.

## 5. Source and query log
- `ls ~/.grok/bin/`, `which grok`, `find / -name grok`: the grok CLI is missing.
- ALA biocache facets, all years and 2016–2026 (the URLs in section 1).
- Birds in Backyards pages for the 38 selected species, at `https://www.birdsinbackyards.net/species/` + scientific name with a hyphen. Examples: `.../Corvus-mellori`, `.../Pachycephala-rufiventris`. Five of these returned 404 (section 4).
- No grok prompts were run.

## 6. Grok rerun attempt, 25 Oct 2026, 8:38–8:42 PM AEDT
- `grok-4.6` was rejected with `unknown model id`. `grok models` lists only `grok-4.7`, so I used that.
- I wrote 7 prompts, saved in `docs/research/prompt0..6.txt`: one for the species list and eBird hotspots, and six batches covering the 38 birds plus Rainbow Lorikeet and Yellow-tailed Black-Cockatoo.
- All 7 runs exited with code 1 and produced no output. The logs are in `docs/research/run*.log`. The errors were:
  - "You've reached your free Grok Build usage limit"
  - "sending requests too quickly"
  - "resource-exhausted: Too many requests for team …"
- A one-line test 60 seconds later also hit the usage limit.
- Some partial notes from the runs before they stopped:
  - eBird is behind a proof-of-work wall for grok's fetcher.
  - Grok's fetch tool hit a DNS filter on some sites.
- Nothing from these runs was used. `birds.ts` and `species.json` are unchanged since section 2. `species.json.orig` is a backup.

## 7. Sequential Grok rerun, 25 Oct 2026, 8:47–9:00 PM AEDT
- Ran `runall.sh` in `docs/research`: one batch at a time, waiting 4 minutes between retries.
- Batch 0 (species list and eBird hotspots) failed on all four attempts, at 20:47, 20:51, 20:55 and 20:59. Batch 1 also failed on its first attempt, at 20:59.
- Every failure gave the same message: "You've reached your free Grok Build usage limit for now. Get SuperGrok…". That is a usage cap, not burst rate-limiting.
- Two of the attempts printed one line of preamble before the cap hit. So the limit allows a tiny amount of use, then stops.
- I stopped the loop at that point. No grok output was produced, and `birds.ts` and `species.json` are unchanged.
- Logs: `docs/research/run0.a1-4.log`, `run1.a1.log` and `status.log`.

## 8. Full Grok pass, 25–26 Oct 2026 (AEDT)
- Grok CLI 1.0.70 with model **grok-4.7**. `grok-4.6` was rejected as an unknown model.
- The CLI is now signed in as Matt's SuperGrok account, and the runs go one at a time.
- Each batch's prompt is in `docs/research/promptN.txt`, its log in `runN.b*.log` and its output in `batchN.json`. Batch 0 output is `species-list.md`.
- **Radius change:** on 25 Oct 2026 Matt changed the radius from 10 km to 5 km.
  - Tiers: "5km" means the species is recorded within 5 km. "10km" means it is recorded only between 5 and 10 km.
  - Batches 0–6 were already prompted with 10 km when the change came. Batches 7–13 use 5 km.
- **Snapshot files** are in `docs/research/data/`:
  - `all5.json` and `recent5.json`: ALA counts within 5 km.
  - `all.json` and `recent.json`: ALA counts within 10 km.
  - `inat*.json`: iNaturalist species counts.

### 8a. Batch 0: species list, eBird hotspots, threatened species
Full text: `docs/research/species-list.md`. Every source and query is logged there.
- **eBird:** ebird.org itself returned a bot challenge, which I didn't try to get round. Hotspot details come from indexed (search-engine) copies of the pages plus ALA locality strings.
  - Inverleigh Nature Conservation Reserve (Inverleigh Common or Flora Reserve) is hotspot **L2547650**, with 128 to 138 species.
  - Main river and town sites: Leigh River north and south of the Hamilton Hwy, Lawson Reserve, the Barwon–Leigh junction, Barwon River at Bell Bridge and at Olivers Property, and the Inverleigh Recreation Reserve.
- **Missing species** (just under the cutoff, current, and expected by locals):
  - Eurasian Coot, Little Pied Cormorant, Yellow Thornbill, Rainbow Lorikeet, Purple-crowned Lorikeet.
  - Yellow-tailed Black-Cockatoo, Australasian Grebe, Flame Robin, Black Swan, Rainbow Bee-eater.
  - Pied Currawong, Australian Pelican, Purple Swamphen, Tawny Frogmouth, Musk Lorikeet, Scarlet Robin.
- **Threatened species recorded locally** (status as found by Grok; the July 2026 FFG workbook couldn't be opened, so FFG categories come from SPRAT/SWIFFT/the March 2025 list):

| Species | EPBC | FFG | Local records |
|---|---|---|---|
| Diamond Firetail | Vulnerable | Vulnerable | Last dated record 2015 |
| Brown Treecreeper (south-eastern) | Vulnerable | Vulnerable | Latest 2023 |
| Swift Parrot | Critically Endangered | Critically Endangered | Latest 2021 |
| Painted Honeyeater | Vulnerable | Vulnerable | Latest 2008 within 10 km |
| White-throated Needletail | Vulnerable | Vulnerable | Records to 2025 |
| Latham's Snipe | Vulnerable | Vulnerable | Last 2017 |
| Blue-winged Parrot | Vulnerable | Vulnerable | Records to 2026 |
| Gang-gang Cockatoo | Endangered | Endangered | Latest 2024 |
| Black Falcon | Not listed | Critically Endangered | Records to 2025 |
| Brolga | Not listed | Endangered | Records to 2025 |
| Speckled Warbler | Not listed | Endangered | Records to 2019 |
| Hooded Robin | Endangered | Endangered | Only 1989 |
| Bush Stone-curlew | Not listed | Critically Endangered | Historical only |

  - Lake Murdeduke shorebirds (Curlew Sandpiper, Sharp-tailed Sandpiper) are at the 15 km edge, so they are not Inverleigh birds.
- **The 70 candidates:** none is EPBC/FFG listed. Eastern Shrike-tit is not listed; only the northern subspecies is. Hardhead was removed from the FFG list in June 2024.

### 8b. ALA at 5 km (pulled 25 Oct 2026)
- Query: `https://biocache-ws.ala.org.au/ws/occurrence/facets?q=*:*&fq=class:Aves&lat=-38.10&lon=144.05&radius=5&facets=species&flimit=300`, plus `&fq=year:[2016 TO 2026]` for recent records.
- Result: 25,923 bird records and 216 species. By dataset: eBird 15,163, VBA 6,185, Birdata 2,037, iNaturalist Australia 341.
- **All 70 candidates (38 selected and 26 reserves) have records within 5 km, so every one is tier "5km".**
- **Outside 5 km / proposed removal:** none, because none falls outside 5 km. Some are weak inside 5 km (records from 2016–26, all years in brackets). These are flagged for Matt, not dropped:
  - Jacky Winter: 2 (104)
  - Australian Golden Whistler: 14 (91)
  - Hoary-headed Grebe: 16 (59)
  - Brown Goshawk: 21 (79)
  - Australian Shelduck: 27 (100)
  - White-necked Heron: 29 (108)
  - Grey Teal: 30 (74)
  - Restless Flycatcher: 37 (152)
  - Among the selected birds, the weakest are White-winged Chough 42, Masked Lapwing 48 and Wedge-tailed Eagle 56.
- New candidates at 5 km (all years / since 2016):
  - Rainbow Lorikeet: 56 / 55
  - Yellow-tailed Black-Cockatoo: 50 / 37
  - Diamond Firetail: 52 / 0. It's historical; flag it, don't feature it.
  - Black-chinned Honeyeater: 1 / 0, so it belongs in the 10km tier at best.

### 8c. iNaturalist (API pulled 25 Oct 2026)
- URLs:
  - `https://api.inaturalist.org/v1/observations/species_counts?iconic_taxa=Aves&lat=-38.10&lng=144.05&radius={5|10}&per_page=500`, with `&quality_grade=research` and without it.
  - `https://api.inaturalist.org/v1/observations?iconic_taxa=Aves&lat=-38.10&lng=144.05&radius=5&per_page=200&page={1,2}&order_by=id`, saved as `inat_obs_5km.json`.
- Within 10 km: 108 species and 769 observations at research grade; 109 species and 800 observations across all grades.
  - ALA's iNaturalist Australia dataset (dr1411) holds 762 records in the same circle, so most iNat records are already in ALA.
- Within 5 km: 75 species and 350 observations at research grade; 76 species and 359 observations across all grades. ALA dr1411 holds 341.
- **No species appears only in iNat.** The apparent iNat-only species are name differences:
  - Purple-crowned Lorikeet: *Psitteuteles* on iNat, *Parvipsitta* in ALA.
  - Musk Lorikeet: *Trichoglossus* on iNat, *Glossopsitta* in ALA.
  - Collared Sparrowhawk: *Tachyspiza* on iNat, *Accipiter* in ALA.
  - Australian Pipit: *A. australis* on iNat, *A. novaeseelandiae* in ALA.
  - The only non-research-grade extra is one observation identified only to the pheasant family (Phasianidae). It needs ID, so it isn't a species.
- **Where iNat observations cluster** (5 km, rounded to 0.01°):
  - -38.07, 144.04: 80 observations
  - -38.10, 144.06: 71 (township and river junction)
  - -38.08, 144.05: 53
  - -38.07, 144.05: 36
  - My guess is that the northern cluster is the Inverleigh Nature Conservation Reserve, but I haven't confirmed that against a reserve boundary.
  - Most iNat place names are just "Inverleigh VIC 3321", so per-species hangouts rely on the Grok batches 7–8 and ALA localities.

<!-- batch1 -->
### Grok batch 1 (grok-4.7, prompt docs/research/prompt1.txt, output batch1.json)

**Australian Magpie** *Gymnorhina tibicen*  verdict: corrected, tier: 
- Errors in draft:
  - Origins omit the introduced populations in New Zealand and Fiji.
  - Breeding season “mainly July–December” is earlier and longer than the usual southern Victorian season. BirdLife gives August–November; cooler regions start in August or September.
  - Threats over-specify nest predators. Ravens are documented taking unattended nestlings, but currawongs are not named, and the documented predators of birds are snakes, monitors and the barking owl rather than birds of prey in general.
  - Distribution follows BirdLife’s “densest forests and arid deserts”, but does not mention the southwest-Tasmania gap given in a more detailed range account.
- Conflicts:
  - Clutch: BirdLife Australia and the Australian Museum say 3–5; Wikipedia and New Zealand Birds Online say 2–5; a western Victorian field guide says 1–6.
  - Length: Wikipedia 37–43 cm; Australian Museum 36–44 cm.
  - Season: BirdLife August–November; Wikipedia June–September in the north and August or September onward in cooler regions, to January in alpine areas; western Victorian plains account June–December, usually August–October.
  - Absence from southwest Tasmania is in the detailed range account. BirdLife’s profile only says densest forests and arid deserts.
- Not well documented:
  - Currawongs as predators of magpie eggs or chicks were not found in the sources checked.
- Sources (8): https://birdlife.org.au/bird-profiles/australian-magpie/; https://australian.museum/learn/animals/birds/australian-magpie/; https://en.wikipedia.org/wiki/Australian_magpie; https://www.iucnredlist.org/species/22706288/131945700; https://birdlife.org.au/news/its-magpie-swooping-season-once-again/; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/australian-magpie; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Superb Fairywren** *Malurus cyaneus*  verdict: corrected, tier: 
- Errors in draft:
  - Breeding season is given as August–March without the usual September–January window used by the Australian Museum (citing HANZAB).
  - Distribution omits Kangaroo Island, King Island and Flinders Island.
  - Threats omit pied currawongs, which a long study names as a main nest predator, and the claim that understorey loss is “the main threat in towns” is not quantified. Globally, IUCN finds no substantial threat.
- Conflicts:
  - Season: Australian Museum, citing HANZAB volume 6, “usually September to January”; a western Victorian guide says September–December; other accounts say August–March, rarely after January, with fledging into late March in some years.
  - Clutch: usually 3 or 4; a study population ranged from 1 to 5 with a strong mode of 3.
  - Incubation: 13–15 days in a Victorian guide; 14 days in a general account. The draft’s “about 14 days” sits inside that range.
  - Length: 14 cm is the usual figure; also given as 13–14 cm and 13.5–16 cm.
- Not well documented:
  - Whether loss of dense understorey is the main threat in towns, as against cats and larger birds, is not measured in the sources checked. IUCN treats the global population as stable.
- Sources (7): https://australian.museum/learn/animals/birds/superb-fairy-wren/; https://birdlife.org.au/bird-profiles/superb-fairy-wren/; https://www.iucnredlist.org/species/22703736/253995896; https://en.wikipedia.org/wiki/Superb_fairywren; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/superb-fairy-wren; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Red Wattlebird** *Anthochaera carunculata*  verdict: corrected, tier: 
- Errors in draft:
  - Length 33–37 cm is outside the 34–36 cm given by Birds in Backyards and the Australian Museum.
  - “Endemic to southern Australia” can be read as including Tasmania. The species is a mainland bird; Tasmania has the Yellow Wattlebird instead.
  - Nest predators “ravens and currawongs” were not found in BirdLife, the Australian Museum or Birds in Backyards. Brood parasitism by the Eastern Koel is the documented nest threat.
- Conflicts:
  - Length: Birds in Backyards and the Australian Museum 34–36 cm; western Victorian guide 32–36 cm; the draft 33–37 cm.
  - Incubation: not stated by Birds in Backyards, BirdLife or the Australian Museum; 15–16 days (western Victoria); about 16 days (Armidale, NSW); 16–21 days (Wikipedia).
- Not well documented:
  - A single incubation period. Preferred species pages leave it out, and the published figures do not agree.
  - Ravens and currawongs as nest predators.
- Sources (10): https://www.birdsinbackyards.net/species/Anthochaera-carunculata; https://australian.museum/learn/animals/birds/red-wattlebird-anthochaera-carunculata/; https://birdlife.org.au/bird-profiles/red-wattlebird/; https://birdlife.org.au/news/what-bird-is-that-wattlebirds/; https://www.iucnredlist.org/species/22704466/130382437; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/red-wattlebird; https://australian.museum/learn/animals/birds/eastern-koel/; https://en.wikipedia.org/wiki/Red_wattlebird; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**White-plumed Honeyeater** *Ptilotula penicillata*  verdict: corrected, tier: 
- Errors in draft:
  - “Mainly July–January” does not match the usual season. Birds in Backyards and the Australian Museum say any time, mainly August to December.
  - Threats name nest predation by other birds and omit cats and dogs, which the Australian Museum and Birds in Backyards do name, along with clearing of creek-line trees.
  - “Endemic to Australia” is true, but the species is a mainland bird and is absent from Tasmania.
- Conflicts:
  - Season: Birds in Backyards and the Australian Museum, mainly August–December, any month; an older eggs-and-nests account gives extremes of June or July to February; a field compilation gives June–January.
  - Incubation: Birds in Backyards 14 days; a life-history compilation 13–15 days.
  - Nest: Birds in Backyards and the Australian Museum say a cup in the crown; other accounts say a suspended basket hanging in outer foliage.
  - Clutch: 2–3, rarely 4 (Birds in Backyards); overall range given elsewhere as 1–4.
- Not well documented:
  - Nest predation by other birds, as stated in the draft, was not found on the Australian Museum or Birds in Backyards pages.
  - Whether the usual nest is a hanging basket or a cup set in foliage depends on the account.
- Sources (7): https://www.birdsinbackyards.net/species/Lichenostomus-penicillatus; https://australian.museum/learn/animals/birds/white-plumed-honeyeater/; https://www.iucnredlist.org/species/22704097/130253505; https://www.mdahlem.net/birds/18/whplmhon.php; https://animalia.bio/white-plumed-honeyeater; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**New Holland Honeyeater** *Phylidonyris novaehollandiae*  verdict: corrected, tier: 
- Errors in draft:
  - Length 17–18 cm is a little short of the Australian Museum’s 17–18.5 cm and of Birds in Backyards’ 18 cm.
  - “A cup nest low in a shrub” is too narrow. The nest may be from ground level to about 6 m, in a bush or a tree.
  - Diet omits fruit and spiders, which Birds in Backyards lists, and states honeydew, which those pages do not.
  - Threats (cats, and loss of flowering understorey) are not supported by BirdLife, the Australian Museum or the IUCN account.
- Conflicts:
  - Length: Australian Museum 17–18.5 cm; Birds in Backyards facts 18 cm; the same Birds in Backyards page’s size category, and a Tasmania poster, say under 15 cm.
  - Incubation: Birds in Backyards and the Australian Museum 18 days; secondary accounts 13–15 days or 14 days.
  - Tasmania: the Birds in Backyards distribution sentence does not mention it, but the status table says Tasmania is Secure, and the Australian Faunal Directory and subspecies accounts include Tasmania and Bass Strait islands.
- Not well documented:
  - Cats and loss of flowering understorey as threats. The IUCN account describes a stable population and does not list a substantial threat.
  - Which incubation figure is right. The BirdLife-linked pages say 18 days; other summaries say about two weeks.
- Sources (8): https://www.birdsinbackyards.net/species/Phylidonyris-novaehollandiae; https://australian.museum/learn/animals/birds/new-holland-honeyeater/; https://birdlife.org.au/bird-profiles/new-holland-honeyeater/; https://www.iucnredlist.org/species/22704361/253977598; https://biodiversity.org.au/afd/taxa/New_Holland_Honeyeater; https://en.wikipedia.org/wiki/New_Holland_honeyeater; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Little Raven** *Corvus mellori*  verdict: corrected, tier: 
- Errors in draft:
  - “Few natural predators beyond Wedge-tailed Eagles” is not supported. Preferred pages and the HANZAB-based Birds in Backyards account do not name a predator. Wedge-tailed eagle predation is documented for the Australian Raven, a different species.
  - “Sometimes shot or poisoned by landholders” is only partly supported. Shooting as farm control is recorded in a Canberra account. Poisoning was not found for the Little Raven.
  - Distribution omits Kangaroo Island and the reported absence from west Gippsland and from mainland Tasmania.
  - Diet leads with grain. Birds in Backyards lists seeds and fruit as occasional, and includes small birds, eggs and nestlings.
- Conflicts:
  - Length: Wikipedia, a western Victorian guide and a Canberra key say 48–50 cm; Birds in Backyards says 48–52 cm, average 49 cm.
  - Clutch: Birds in Backyards, citing HANZAB volume 7, 1–6; Wikipedia usually 4 or 5, up to 6; western Victorian guide 4–5.
  - Incubation: Birds in Backyards 19 days; western Victorian guide 19–20 days; Rowley (1973), cited in a nesting study, 19–21 days in rural New South Wales.
  - Season: Birds in Backyards May–December; western Victorian guide April–December.
  - Diet emphasis: Birds in Backyards starts with insects and treats seeds as occasional; the western Victorian guide says mainly vegetable matter, including grain and fruit.
  - Tasmania: Birds in Backyards’ status table says not present, while its distribution text includes King Island, which is part of Tasmania. The species is on King Island and not on mainland Tasmania.
- Not well documented:
  - Natural predators. No preferred source names the wedge-tailed eagle, or any other predator, for this species. A Canberra key says adults are not under serious predation pressure, which may itself be too absolute.
  - Poisoning by landholders. Not found for the Little Raven. It is documented for the Australian Raven.
- Sources (9): https://www.birdsinbackyards.net/species/Corvus-mellori; https://en.wikipedia.org/wiki/Little_raven; https://www.iucnredlist.org/species/22706036/130408880; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/little-raven; https://keyserver.lucidcentral.org/key-server/data/03050501-000c-4503-8203-0a030507090d/media/Html/Corvus_mellori.htm; https://en.wikipedia.org/wiki/Australian_raven; https://absa.asn.au/wp-content/uploads/2019/05/10_FINAL_V43_Pg65-80_LittleRaven_ALill_V2.pdf; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Eastern Rosella** *Platycercus eximius*  verdict: corrected, tier: 
- Errors in draft:
  - “Tasmania” should be eastern Tasmania. The Tasmanian subspecies is confined to the east of the island.
  - Length 29–33 cm does not match Birds in Backyards’ 28–32 cm. It is close to a separate compilation of 28–33 cm.
  - Incubation “about 19 days” matches Birds in Backyards only. Other accounts give 18–22 days.
  - “On a bed of wood dust” was not stated on the Birds in Backyards or BirdLife pages checked.
- Conflicts:
  - Length: Birds in Backyards 28–32 cm, average 30 cm; Wikipedia about 30 cm; a field compilation 28–33 cm.
  - Clutch: Birds in Backyards 4–8, usually 5; New Zealand Birds Online 3–9, mean 5.6 for Australia; Wikipedia usually 5–6.
  - Incubation: Birds in Backyards 19 days; New Zealand Birds Online and Wikipedia 18–22 days.
  - Season: Birds in Backyards August–February; one avicultural and field account also mentions occasional autumn breeding.
- Not well documented:
  - Eggs laid on a bed of wood dust. Hollow nesting is well documented; that lining was not on the preferred pages.
  - A current statutory listing for the Tasmanian subspecies. An older regional key called it Near Threatened. The species itself is Least Concern and is not on the EPBC or Victorian FFG lists. The subspecies was not found on the July 2026 FFG list, which is a Victorian list.
- Sources (10): https://www.birdsinbackyards.net/species/Platycercus-eximius; https://birdlife.org.au/bird-profiles/eastern-rosella/; https://www.nzbirdsonline.org.nz/species/eastern-rosella; https://www.iucnredlist.org/species/22685126/93059555; https://en.wikipedia.org/wiki/Eastern_rosella; https://archive.org/download/biostor-254476/biostor-254476.pdf; https://web.archive.org/web/20150228082055/http://indianmynaaction.org.au/documents/Pell_Tidemann_myna_impacts1997.pdf; https://parrots.org/encyclopedia/eastern-rosella/; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv
- outOfBatch:
  - Welcome Swallow incubation was not checked: that species is not in this batch.
  - Magpie-lark presence in Tasmania was not checked: that species is not in this batch.
  - Little Raven natural predators are covered under that species.
- queries:
  - Victorian FFG Act Threatened List 2025 2026 DEECA Gymnorhina Malurus Anthochaera Ptilotula Phylidonyris Corvus mellori Platycercus
  - site:birdsinbackyards.net Australian Magpie Gymnorhina tibicen Superb Fairy-wren Red Wattlebird
  - site:australian.museum Australian Magpie Superb Fairy-wren Red Wattlebird White-plumed Honeyeater New Holland Honeyeater Little Raven Eastern Rosella
  - BirdLife Australia Australian Magpie species profile breeding incubation clutch size distribution
  - EPBC Act threatened species list Australian Magpie Superb Fairy-wren Red Wattlebird White-plumed Honeyeater New Holland Honeyeater Little Raven Eastern Rosella
  - site:birdlife.org.au Superb Fairy-wren Red Wattlebird White-plumed Honeyeater New Holland Honeyeater Little Raven Eastern Rosella bird profile
  - FFG_Threatened_List July 2026 filetype:pdf environment.vic.gov.au
  - Gymnorhina tibicen OR Cracticus tibicen OR Malurus cyaneus OR Anthochaera carunculata OR Ptilotula penicillata OR Phylidonyris novaehollandiae OR Corvus mellori OR Platycercus eximius FFG threatened list Victoria 2025 OR 2026
  - Little Raven Corvus mellori breeding clutch incubation predators distribution King Island HANZAB BirdLife Australia Museum
  - Eastern Rosella Platycercus eximius clutch incubation breeding season size distribution Tasmania New Zealand HANZAB Birds in Backyards
  - Red Wattlebird Anthochaera carunculata incubation clutch nest size Tasmania endemic IUCN Birds in Backyards Australian Museum
  - Superb Fairy-wren Malurus cyaneus incubation period days clutch breeding season size predators HANZAB
  - Little Raven OR Corvus mellori predator OR predators wedge-tailed OR eagle OR shot OR poison HANZAB
  - White-plumed Honeyeater Ptilotula penicillata incubation clutch nest days breeding season Australian Museum OR HANZAB OR Birds in Backyards
  - New Holland Honeyeater Phylidonyris novaehollandiae Tasmania size incubation honeydew distribution endemic IUCN
  - Australian Magpie Gymnorhina tibicen New Guinea introduced New Zealand size clutch 2-5 OR 1-6 incubation predators IUCN distribution Tasmania
  - IUCN Red List Malurus cyaneus Anthochaera carunculata Ptilotula penicillata Corvus mellori Platycercus eximius Least Concern
  - Eastern Rosella hollow competition starling Common Starling OR Sturnus vulgaris nest site loss Platycercus eximius
  - site:iucnredlist.org Ptilotula penicillata White-plumed Honeyeater Corvus mellori Platycercus eximius Anthochaera carunculata
  - Corvus mellori iucnredlist.org/species Least Concern
  - Platycercus eximius iucnredlist.org/species Least Concern Anthochaera carunculata 2018

<!-- batch2 -->
### Grok batch 2 (grok-4.7, prompt docs/research/prompt2.txt, output batch2.json)

**Grey Shrike-thrush** *Colluricincla harmonica*  verdict: corrected, tier: 
- Errors in draft:
  - “Endemic to Australia, apart from a population in southern New Guinea” is contradictory. The species is native to Australia and southern New Guinea, not endemic to Australia.
  - “Throughout Australia” misses the gap in the most arid deserts.
  - Diet omits small mammals, carrion, fruit and seeds. Eggs and nestlings are listed as part of the varied diet, not only an occasional item.
  - August–February starts a month later than the western Victorian season of July–February.
  - Cats and loss of woodland understorey were not found as documented threats.
- Conflicts:
  - Clutch: Birds in Backyards says 3–4. Nest Record Scheme means are about 2.9 in New South Wales and about 3.0 in New South Wales and Victoria, with a study range of 2–4, usually 3. One popular account says a clutch of 2.
  - Incubation: New South Wales study mean 17.4 days; HANZAB estimates cited there are 16.9, 18 and 19 days; other field accounts say 16–18 or 17–18 days.
  - Length: 22–25 cm (Australian Museum and Birds in Backyards) versus 22–26 cm (Biodiversity of the Western Volcanic Plains).
  - Season: western Victorian plains July–February; a general field account July–March.
- Not well documented:
  - Cats, named nest predators, and loss of understorey as threats to this species.
- Sources (8): https://www.birdsinbackyards.net/species/Colluricincla-harmonica; https://australian.museum/learn/animals/birds/grey-shrike-thrush-colluricincla-harmonica/; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/grey-shrike-thrush; https://www.tandfonline.com/doi/abs/10.1071/MU04022; https://www.iucnredlist.org/species/22705561/130407286; https://en.wikipedia.org/wiki/Grey_shrikethrush; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Willie Wagtail** *Rhipidura leucophrys*  verdict: corrected, tier: 
- Errors in draft:
  - “Rare in Tasmania” is not accurate. The bird is absent as a breeding resident. Museum and Wikipedia accounts call it a vagrant; Birds in Backyards marks Tasmania as not present.
  - Ravens are not named as nest predators. Pied currawongs and cats are; so are butcherbirds, the spangled drongo and rats.
  - Size 19–21 cm is narrower than the published ranges of 18–22 cm and 19–22 cm.
  - August–February matches the national main season, but the western Victorian account says the usual season is August to December.
- Conflicts:
  - Tasmania: Birds in Backyards and the western Victorian guide say absent. The Australian Museum and Wikipedia say vagrant.
  - Clutch: Birds in Backyards says three. The Australian Museum says usually three, up to four. Wikipedia and the western Victorian guide say 2–4.
  - Incubation: Birds in Backyards 14 days; western Victoria 14–15 days; Australian Museum, citing HANZAB volume 7, 12–16 days, usually 14.
  - Season: western Victoria generally August–December, any month if conditions suit; Birds in Backyards mainly August–February and can nest all year; Australian Museum mostly August–January; Wikipedia July–December.
  - Length: Birds in Backyards 18–22 cm; western Victoria 19–22 cm; Wikipedia 19–21.5 cm; Australian Museum about 20 cm.
- Not well documented:
  - Ravens as predators of Willie Wagtail eggs or chicks were not found in the sources checked.
- Sources (7): https://www.birdsinbackyards.net/species/Rhipidura-leucophrys; https://australian.museum/learn/animals/birds/willie-wagtail/; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/willie-wagtail; https://en.wikipedia.org/wiki/Willie_wagtail; https://birdlife.org.au/bird-profiles/willie-wagtail/; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Galah** *Eolophus roseicapilla*  verdict: corrected, tier: 
- Errors in draft:
  - “Native and endemic to Australia” omits the introduced populations in Tasmania and New Zealand. The natural range is mainland Australia.
  - “Throughout mainland Australia” misses the driest deserts, far northern Cape York, and the established Tasmanian population.
  - “Few natural predators beyond falcons” misses the little eagle, wedge-tailed eagle and cats. Peregrine, black and grey falcons are documented.
  - Loss of hollow trees was not found as a principal threat. Clearing and water points have favoured the species.
- Conflicts:
  - Clutch: Birds in Backyards and the Australian Museum say 3–4. Wikipedia, citing Forshaw, says usually 2–5. A HANZAB-style cockatoo summary gives 2–5 for Eolophus. The western Victorian guide says 3–6. Rowley, via a zoo fact sheet, gives typically 4, range 2–6, rarely 7–8.
  - Incubation: Forshaw via an avicultural review 23–25 days; Rowley 22–26 days; a field compilation 24 days; Wikipedia about 25 days. A broad cockatoo summary gives 20–30 days for Eolophus.
  - Length: Wikipedia about 35 cm; Australian Museum and Birds in Backyards 35–36 cm; western Victorian guide 35–38 cm.
  - Tasmanian history: Wikipedia says no sightings before 1848, a large increase in the 1960s from escapees, and also “introduced in the mid-20th century”.
- Not well documented:
  - The cause of the reported 50% mortality of chicks in the first six months.
  - Loss of hollow-bearing trees as a population-level threat. The species nests in hollows, but sources describe an increase, not a decline from hollow shortage.
- Sources (10): https://www.birdsinbackyards.net/species/Eolophus-roseicapillus; https://australian.museum/learn/animals/birds/galah/; https://birdlife.org.au/bird-profiles/galah/; https://en.wikipedia.org/wiki/Galah; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/galah; https://www.aavac.com.au/files/2003-10.pdf; https://ielc.libguides.com/sdzg/factsheets/galah; https://afo.birdlife.org.au/afo/index.php/afo/article/viewFile/1092/1062; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Spotted Pardalote** *Pardalotus punctatus*  verdict: corrected, tier: 
- Errors in draft:
  - “Partly migratory” overstates the movements. The species is largely sedentary, with local shifts away from higher country.
  - The distribution sentence omits Tasmania, where the nominate subspecies occurs in the east and north-west.
  - The nest account omits tree hollows and artificial sites, which the Australian Museum and BirdLife record.
  - June–January is the national season in Birds in Backyards and the Australian Museum. Accounts aimed at southern birds start in August or September.
  - Foxes were not found as predators of burrow nests. Cats are named in one urban account, along with dogs.
- Conflicts:
  - Season: Birds in Backyards and the Australian Museum, citing HANZAB, say June–January. Wikipedia and Australian Geographic say August or September to December or January, later in the south.
  - Clutch: Birds in Backyards and the Australian Museum say 4. Wikipedia says 3–4. An encyclopedia.com family account says 3–5.
  - Incubation: Birds in Backyards and the Australian Museum say 19 days, the museum citing HANZAB volume 6. The encyclopedia.com account says 14–16 days and is not preferred.
- Not well documented:
  - Foxes at Spotted Pardalote burrows.
  - A southern Victorian incubation figure separate from the national HANZAB value of 19 days.
- Sources (8): https://www.birdsinbackyards.net/species/Pardalotus-punctatus; https://australian.museum/learn/animals/birds/spotted-pardalote/; https://birdlife.org.au/bird-profiles/spotted-pardalote/; https://en.wikipedia.org/wiki/Spotted_pardalote; https://keyserver.lucidcentral.org/key-server/data/03050501-000c-4503-8203-0a030507090d/media/Html/Pardalotus_punctatus.htm; https://www.australiangeographic.com.au/nature-wildlife/2021/09/the-burrowing-spotted-pardalote-is-among-australias-smallest/; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Grey Fantail** *Rhipidura albiscapa*  verdict: corrected, tier: 
- Errors in draft:
  - “Related populations in New Guinea and the Pacific” misstates the range. Pacific island birds (Solomons, Vanuatu, New Caledonia, Norfolk Island) are this species. New Zealand birds are treated as a separate species by the IUCN. New Guinea is not a breeding population.
  - Cats were not found as documented predators. Pied currawongs are.
- Conflicts:
  - Length: Birds in Backyards 14–16 cm; Wikipedia grows to 16 cm; oiseaux.net and a Tasmanian site say 17 cm. The draft’s 14–17 cm is the outer envelope.
  - Clutch: Birds in Backyards and a field compilation say 2–3. Wikipedia says usually 3 or 4. A handbook-style account says usually 3 in Australia, with a range of 1–5 and sometimes 6, and usually 2 in subspecies keasti.
  - Incubation: Birds in Backyards 14 days; a field compilation 14–15 days; a handbook-style account usually 14, sometimes 15.
  - Taxonomy: IUCN and Australian Faunal Directory treat Rhipidura albiscapa as separate from the New Zealand fantail. Some authorities still consider them conspecific.
  - Birds in Backyards marks the Northern Territory as Critically Endangered. That status was not confirmed on a current Northern Territory list. IUCN is Least Concern, and the species is not on the FFG or EPBC lists.
- Not well documented:
  - The Birds in Backyards “Critically endangered” flag for the Northern Territory. No current Northern Territory listing was found to confirm it.
  - Cats as predators of Grey Fantails.
  - A clutch or incubation study confined to southern Victoria, beyond the national figures.
- Sources (9): https://www.birdsinbackyards.net/species/Rhipidura-albiscapa; https://www.iucnredlist.org/species/22735714/281006953; https://en.wikipedia.org/wiki/Grey_fantail; https://birdsoftheworld.org/bow/species/gryfan1/cur/introduction; https://biodiversity.org.au/afd/taxa/Rhipidura_%28Rhipidura%29_albiscapa; https://mdahlem.net/birds/21/greyfant.php; https://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=67106; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf

**Welcome Swallow** *Hirundo neoxena*  verdict: corrected, tier: 
- Errors in draft:
  - Incubation “about 15 days” is the bottom of the usual range, not the typical value. Southern Victorian and HANZAB-aligned figures are usually 15–19 days, with an eastern Australian mean of 16.0 days. Birds in Backyards’ 21 days matches nestling periods in other studies, not incubation.
  - “Resident in the south, partly migratory” reverses the pattern. Southern and eastern birds are the migratory ones. Western birds are mainly sedentary.
  - “Except the arid interior” is only partly supported. The Australian Museum excludes the drier inland, but BirdLife’s overview includes deserts.
  - August–March is longer than August–February in the Australian Museum and Birds in Backyards, and longer than August–December laying in the Yarra Valley.
  - Origins omit New Caledonia and the vagrant records before the 1958 breeding colonisation. The 1950s date for the start of New Zealand breeding is fair.
- Conflicts:
  - Incubation: Birds in Backyards 21 days. Tarburton 1993 mean 16.0 days in eastern Australia and 16.7 days in New Zealand. Lill 2014, Yarra Valley, 11–20 days, with 80.8% lasting 15–19 days, citing HANZAB (Higgins et al. 2006) for a usual period of 15–19 days. New Zealand Birds Online text says 15 days; its data table says 15–19 days. Wikipedia says the eggs hatch after two to three weeks.
  - Season: Australian Museum and Birds in Backyards August–February. Lill, citing HANZAB, laying August–December in southern Victoria. Wikipedia August–March.
  - Range in dry country: BirdLife overview includes deserts. The same site’s habitat section, and the Australian Museum, exclude the drier inland and heavily forested regions. Wikipedia says the species does not breed in desert or dense forest.
  - New Zealand arrival: New Zealand Birds Online and Te Ara say first breeding in 1958, with earlier vagrant records. One Wikipedia paragraph says the early 1900s.
  - Length: Australian sources 15 cm; New Zealand Birds Online 14–16 cm.
  - Clutch: Birds in Backyards 3–5. Eastern Australian mean 3.7 (Tarburton) and Yarra Valley mean 3.9, mode 4 (Lill). Full recorded range 2–7.
- Not well documented:
  - Birds in Backyards’ incubation figure of 21 days. It is not supported by Tarburton, by the Yarra Valley study, or by the HANZAB duration those papers cite. It matches published nestling periods more closely than incubation.
  - Whether ship assistance played any part in the New Zealand colonisation. The accepted account is a natural crossing, and breeding began in 1958.
- Sources (10): https://www.birdsinbackyards.net/species/Hirundo-neoxena; https://australian.museum/learn/animals/birds/welcome-swallow/; https://birdlife.org.au/bird-profiles/welcome-swallow/; https://www.tandfonline.com/doi/abs/10.1071/MU9930034; https://absa.asn.au/wp-content/uploads/2021/03/Vol38No1_Pg10-17_Lill.pdf; https://www.nzbirdsonline.org.nz/species/welcome-swallow; https://teara.govt.nz/en/photograph/9889/welcome-swallow; https://en.wikipedia.org/wiki/Welcome_swallow; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Striated Pardalote** *Pardalotus striatus*  verdict: corrected, tier: 
- Errors in draft:
  - “Throughout Australia” misses the gap in the most arid deserts.
  - “Incubation not confirmed in sources checked (roughly two to three weeks)” is not accurate. Several accounts give about 14–16 days. “Two to three weeks” is wider than those figures.
  - Competition for hollows was not found as a documented threat. Habitat loss was. The species also nests in earth banks.
  - Size 9–11.5 cm matches a handbook-style account, but Birds in Backyards, the usual Australian source, says 8–10 cm.
- Conflicts:
  - Length: Birds in Backyards 8–10 cm, average 9. A handbook-style account says 9.0–11.5 cm. Other accounts say 8–12 cm or an average of about 10 cm.
  - Clutch: Birds in Backyards 3–5. Wikipedia 2–5. A Queensland account and a field compilation say 3–4.
  - Incubation: about 16 days (Queensland account); 14–16 days (field compilation and a family encyclopedia); 15–23 days in one secondary compilation. Birds in Backyards does not give a figure. HANZAB volume 6 is cited by banders but the incubation page was not opened.
  - Season: Birds in Backyards and the Australian Museum June–January. Wikipedia June–February.
- Not well documented:
  - The full HANZAB incubation period. Published summaries cluster at 14–16 days, with one wider secondary range of 15–23 days.
  - Competition with starlings or other hollow-nesters as a population threat to the Striated Pardalote. A nest-box note says the entrance is too small for Common Mynas and Common Starlings, which cuts against that threat.
- Sources (11): https://www.birdsinbackyards.net/species/Pardalotus-striatus; https://australian.museum/learn/animals/birds/striated-pardalote/; https://en.wikipedia.org/wiki/Striated_pardalote; https://www.ourlocalbirds.com/striated-pardalote; https://mdahlem.net/birds/17/stripard.php; https://www.encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/pardalotes-pardalotidae; https://www.birdsinbackyards.net/sites/www.birdsinbackyards.net/files/Striated%20Pardalote_0.pdf; https://bwvp.ecolinc.vic.edu.au/content/point-5; https://absa.asn.au/wp-content/uploads/2015/04/Striated-Pardalote.pdf; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv
- outOfBatch:
  - Magpie-lark presence in Tasmania was not checked: that species is not in this batch.
  - Little Raven natural predators were not checked: that species is not in this batch.
  - Welcome Swallow incubation is covered under that species.
- queries:
  - Grey Shrike-thrush Colluricincla harmonica BirdLife Australia breeding clutch incubation size distribution New Guinea
  - site:birdsinbackyards.net Grey Shrike-thrush Willie Wagtail Galah Spotted Pardalote Grey Fantail Welcome Swallow Striated Pardalote
  - site:australian.museum Grey Shrike-thrush Colluricincla harmonica Willie Wagtail Galah Spotted Pardalote Grey Fantail Welcome Swallow Striated Pardalote
  - FFG Act Threatened List July 2026 Victoria Colluricincla Rhipidura Eolophus Pardalotus Hirundo neoxena
  - EPBC Act threatened species list 2026 Colluricincla harmonica Rhipidura leucophrys Eolophus roseicapilla Pardalotus Hirundo neoxena
  - Welcome Swallow Hirundo neoxena incubation period days HANZAB Birds in Backyards 14 15 16 21 clutch
  - site:birdlife.org.au Grey Shrike-thrush OR Willie Wagtail OR Galah OR Spotted Pardalote OR Grey Fantail OR Welcome Swallow OR Striated Pardalote bird profile
  - Grey Shrike-thrush OR Colluricincla harmonica incubation clutch southern Victoria breeding season nest HANZAB OR Higgins
  - FFG Threatened List July 2026 site:environment.vic.gov.au filetype:pdf Colluricincla OR Pardalotus OR Rhipidura OR Eolophus OR Hirundo
  - Grey Fantail OR Rhipidura albiscapa threatened Northern Territory critically endangered Tiwi OR subspecies
  - Welcome Swallow New Zealand colonisation 1958 OR 1950s nzbirdsonline first breeding Northland
  - Grey Shrike-thrush breeding season Victoria nest site hollow OR ledge clutch incubation Higgins Peter HANZAB
  - Striated Pardalote Pardalotus striatus length cm incubation days clutch HANZAB OR Birds in Backyards OR museum
  - site:bwvp.ecolinc.vic.edu.au Willie Wagtail OR Galah OR Spotted Pardalote OR Grey Fantail OR Welcome Swallow OR Striated Pardalote breeding
  - Rhipidura fuliginosa OR Rhipidura albiscapa EPBC extinct Lord Howe SPRAT 2026
  - Grey Fantail clutch 2 OR 3 OR 4 eggs incubation 14 Victoria OR HANZAB Rhipidura albiscapa
  - Spotted Pardalote OR Pardalotus punctatus predator OR fox OR cat nest burrow threat habitat loss
  - Galah Eolophus diet bulbs OR roots OR shoots OR grass seeds HANZAB OR Forshaw incubation 24 OR 25 days

<!-- batch3 -->
### Grok batch 3 (grok-4.7, prompt docs/research/prompt3.txt, output batch3.json)

**Yellow-faced Honeyeater** *Caligavis chrysops*  verdict: corrected, tier: 
- Errors in draft:
  - Breeding season July–February ends a month early. The Australian Museum and Birds in Backyards give July to March.
  - Diet omits pollen and seeds. Honeydew is in the Wikipedia diet list; Birds in Backyards says nectar, pollen, fruit, seeds, insects and their products.
  - Threats omit cats, brood-parasitic cuckoos, and grazing and weeds alongside clearing.
  - The span 15–18 cm covers conflicting measurements rather than one published range.
- Conflicts:
  - Length: Australian Museum and Birds in Backyards 16–17 cm; Wikipedia 15–17.5 cm; Museums Victoria, on the ALA species page, body up to 18 cm.
  - Birds in Backyards marks Tasmania Secure in its status table, but the same page limits the distribution to mainland Australia from northern Queensland to eastern South Australia.
- Not well documented:
  - A breeding window special to southern Victoria, beyond the general July–March season.
  - Incubation beyond the Birds in Backyards figure of 14 days. Wikipedia says around two weeks.
- Sources (9): https://www.birdsinbackyards.net/species/Lichenostomus-chrysops; https://australian.museum/learn/animals/birds/yellow-faced-honeyeater/; https://birdlife.org.au/bird-profiles/yellow-faced-honeyeater/; https://datazone.birdlife.org/species/factsheet/22704052; https://www.iucnredlist.org/species/22704052/130247974; https://en.wikipedia.org/wiki/Yellow-faced_honeyeater; https://bie.ala.org.au/species/ALA_DR31896_10095; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Magpie-lark** *Grallina cyanoleuca*  verdict: corrected, tier: 
- Errors in draft:
  - Throughout Australia except the driest deserts, and resident, imply a Tasmanian population. Tasmania has only rare vagrant records, and many non-breeding birds migrate.
  - The mud bowl is lined with feathers and fur as well as grass.
  - Freshwater snails are more specific than the sources, which say freshwater invertebrates.
  - Threats omit Eastern Koel parasitism. Clearing is thought to create habitat, so few other threats undersells both the cuckoo and that story.
  - Origins omit the introduced Lord Howe Island population and the New Zealand vagrant.
- Conflicts:
  - Tasmania: Birds in Backyards distribution text says rare vagrant, and its status table says Not present. The western Victorian plains guide says rare and vagrant. Wikipedia says absent from Tasmania. The Australian Faunal Directory does not list Tasmania for Grallina cyanoleuca cyanoleuca.
  - Length: Birds in Backyards 26–30 cm; Wikipedia 25–30 cm.
  - Season: Birds in Backyards generally August–December; western Victorian plains and Wikipedia's fertile-south account August–February.
  - Incubation: western Victorian guide 18 days; Wikipedia up to 18 days; a secondary site says 17–18 days. Birds in Backyards gives no figure.
- Not well documented:
  - Freshwater snails as a named prey.
  - An incubation period of 17 days in the preferred sources.
  - Predators of adult Magpie-larks.
- Sources (9): https://www.birdsinbackyards.net/species/Grallina-cyanoleuca; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/magpie-lark; https://en.wikipedia.org/wiki/Magpie-lark; https://www.biodiversity.org.au/afd/taxa/d4958ac2-7102-496a-96a8-c34b72af4c69; https://www.iucnredlist.org/species/22707425/131945945; https://australian.museum/learn/animals/birds/eastern-koel/; https://www.theanimalfacts.com/birds/magpie-lark/; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Eastern Yellow Robin** *Eopsaltria australis*  verdict: corrected, tier: 
- Errors in draft:
  - Sedentary misses the winter shift to lower ground and other local movements.
  - Forest and woodland with a shrubby understorey is narrower than the published habitats.
  - Size 15–16 cm matches Wikipedia and not Birds in Backyards, which gives 15–17 cm.
  - Cats were not found as documented predators. The named nest predators are pied currawong, eastern ringtail possum and possibly Australian magpie.
- Conflicts:
  - Length: Wikipedia 15–16 cm; Birds in Backyards 15–17 cm.
  - Season: Birds in Backyards July–January; Marchant nest-record cards from late July or early August to the end of December.
  - Incubation: Debus 15–17 days (mean and mode 16) in northern New South Wales; Berry 15.9 days in southern Victorian woodland; Marchant just under 16 days. Birds in Backyards does not state a figure. The draft span 15–17 days matches Debus and brackets the Victorian mean.
- Not well documented:
  - Cats as predators of this species.
  - The population trend in the 2024 IUCN assessment, whose full text was not opened. The 2012 page only records that the 2024 category is still Least Concern.
- Sources (9): https://www.birdsinbackyards.net/species/Eopsaltria-australis; https://en.wikipedia.org/wiki/Eastern_yellow_robin; https://www.tandfonline.com/doi/abs/10.1071/MU00043; https://www.tandfonline.com/doi/abs/10.1071/MU9840167; https://www.une.edu.au/staff-profiles/ers/sdebus/files/debus-robins-corella.pdf; https://www.ecolsoc.org.au/blog/first-evidence-of-eastern-yellow-robin-nestling-predation/; https://www.iucnredlist.org/species/22704849/38456359; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Red-browed Finch** *Neochmia temporalis*  verdict: corrected, tier: 
- Errors in draft:
  - Introduced to Tahiti and the Marquesas overstates the sources. IUCN names French Polynesia, and Tahiti is documented. The Marquesas were not confirmed.
  - South-eastern South Australia is short of the western limit in the Mount Lofty Ranges and on Kangaroo Island, and of the pattern mostly east of the Divide.
  - Size 11–12 cm drops the 10 cm lower figure used by Birds in Backyards.
  - Some insects when feeding young is narrower than Birds in Backyards, which lists seeds and insects as the ordinary diet.
  - Cats were not found as a documented threat. Loss of dense shrub cover is supported.
  - The contested introduced population in south-western Australia is omitted.
- Conflicts:
  - Introduced range: IUCN says introduced resident in French Polynesia, and birds are recorded on Tahiti. Wikipedia and popular accounts also say near Perth and the Darling Ranges. Birds in Backyards marks Western Australia Not present. The Marquesas are not named by IUCN.
  - Length: Birds in Backyards 10–12 cm; Wikipedia 11–12 cm.
  - Clutch: Birds in Backyards 4–5; Wikipedia 4–6. A personal field diary gives 5–8, which is an outlier.
  - Nest height: Birds in Backyards 1–2 m; Wikipedia 2–3 m.
  - Incubation: Birds in Backyards 14 days. A personal field diary gives 13–15 days, and captive accounts give about 12–14 days.
- Not well documented:
  - An established population in the Marquesas. French Polynesia is the country IUCN names.
  - Whether the south-western Australian birds are established. Wikipedia says they are; Birds in Backyards marks Western Australia Not present.
  - Cats as predators.
- Sources (8): https://www.birdsinbackyards.net/species/Neochmia-temporalis; https://en.wikipedia.org/wiki/Red-browed_finch; https://www.iucnredlist.org/species/22719666/132130886; https://www.scientificlib.com/en/Biology/Animalia/Chordata/Aves/NeochmiaTemporalis01.html; https://www.flickr.com/photos/arthur_chapman/36495215155; https://mdahlem.net/birds/24/rbfinch.php; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Black-faced Cuckooshrike** *Coracina novaehollandiae*  verdict: corrected, tier: 
- Errors in draft:
  - Breeds in Australia, with some wintering in New Guinea and Indonesia, misses the resident range in southern New Guinea, Indonesia and the Solomon Islands, and the non-breeding range in Timor-Leste.
  - Many southern birds are migratory, arriving in spring, reverses the Tasmanian subspecies, which breeds in Tasmania and the Bass Strait islands and is non-breeding in south-eastern Australia.
  - 33 cm is the Birds in Backyards average. The published range is about 32–34 cm.
  - Diet omits seeds. Birds in Backyards and BirdLife include some fruits and seeds.
- Conflicts:
  - Season: August–February (Birds in Backyards and BirdLife); August–January in the south-east (M. Dahlem); September–March (Birds Queensland, citing Higgins et al. 2006).
  - Clutch: 2–3 (Higgins et al. 2006, via Birds Queensland); usually 2, with a photo of three chicks (M. Dahlem); 2 in a compiled life-history table.
  - Incubation: 21–22 days (M. Dahlem); 22 days and 21.5 days in compiled tables; 20–24 days for Coracina in a HANZAB family introduction; about 20 days on a secondary species page. The nestling period is also about 21 days, so the two intervals are easy to mix. Birds in Backyards does not state incubation.
  - Length: 32–34 cm (Birds in Backyards and Wikipedia); 32.5 cm (Museums Victoria on ALA); 32–35 cm (Birds Queensland, citing Hardy 2020); 32–36 cm (M. Dahlem and a secondary profile).
- Not well documented:
  - A clutch size or incubation period on the Birds in Backyards or BirdLife species pages. Those pages give the nestling period as 21 days and leave incubation to the handbook sources.
  - Species-specific threats beyond the stable Least Concern assessment.
- Sources (13): https://www.birdsinbackyards.net/species/Coracina-novaehollandiae; https://birdlife.org.au/bird-profiles/black-faced-cuckoo-shrike/; https://en.wikipedia.org/wiki/Black-faced_cuckooshrike; https://birdsoftheworld.org/bow/species/bkfcus1/cur/introduction; https://www.iucnredlist.org/species/22706495/280985712; https://www.nzbirdsonline.org.nz/assets/95597/1725855241-318_black-faced-20cuckoo-shrike.pdf; https://birdsqueensland.org.au/bird/black-faced-cuckoo-shrike/; https://mdahlem.net/birds/22/bfcshrk.php; https://absa.asn.au/wp-content/uploads/2014/12/Black-faced-Cuckoo-shrike-1.pdf; https://bie.ala.org.au/species/https:/biodiversity.org.au/afd/taxa/69c22b10-ff42-4bef-bb0f-88dc01a8f96c; http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=647; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Red-rumped Parrot** *Psephotus haematonotus*  verdict: corrected, tier: 
- Errors in draft:
  - West of the Great Dividing Range is too absolute. The range includes most of Victoria and New South Wales away from the wetter coast, and the bird is a resident of the western Victorian plains.
  - Size 26–28 cm runs past the Birds in Backyards maximum of 27 cm, though 28 cm is the top of a field-guide range.
  - Weed seeds is narrower than seeds of native and introduced grasses and herbs, and the diet omits fruits and flowers.
  - Threats omit cars and cats. Loss of hollow-bearing trees is not the framing in the sources: the documented hollow problem is competition, and clearing for farmland has also suited the species.
- Conflicts:
  - Length: Birds in Backyards 26–27 cm; western Victorian plains guide and Museums Victoria 25–28 cm; a personal field diary gives 27–30 cm.
  - Season: Birds in Backyards August–December; western Victorian plains and World Parrot Trust August–January; Wikipedia usually September–November, and any time after rain inland.
  - Clutch: Birds in Backyards 3–7, usually 5; Wikipedia and World Parrot Trust 4–6; M. Dahlem 4–7.
  - Incubation: 21 days in Birds in Backyards, which cites HANZAB volume 4; Wikipedia about 20–25 days; aviculture accounts about 19–20 days; M. Dahlem 18–20 days; a compiled table 18.5–19 days.
- Not well documented:
  - One agreed incubation period. The figure to prefer for the site is 21 days, because that is the HANZAB-cited Birds in Backyards value, but shorter and longer published ranges exist.
- Sources (9): https://www.birdsinbackyards.net/species/Psephotus-haematonotus; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/red-rumped-parrot; https://en.wikipedia.org/wiki/Red-rumped_parrot; https://www.iucnredlist.org/species/22685139/254012516; https://parrots.org/encyclopedia/red-rumped-parrot/; https://mdahlem.net/birds/12/redrump.php; https://bie.ala.org.au/species/https:/biodiversity.org.au/afd/taxa/7890d5ed-3830-435e-98cb-88c6a1103a91; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**White-eared Honeyeater** *Nesoptilotis leucotis*  verdict: corrected, tier: 
- Errors in draft:
  - Size 17–22 cm starts too low. Published figures are 20–21 cm or 19–22 cm.
  - Sedentary misses local movements and altitudinal migration in the Southern Alps.
  - July–January is shorter than July–March and shorter than most months of the year.
  - Incubation about 14–16 days is not given by Birds in Backyards, the Australian Museum or Wikipedia.
  - Diet omits fruit and lerp. Honeydew and manna are supported.
  - Loss of woodland habitat omits fire, loss of understorey and cuckoo parasitism.
  - Appearance says yellow below. The Australian Museum and Birds in Backyards say lighter green underparts. Wikipedia describes the coastal belly as light greenish-yellow.
- Conflicts:
  - Length: Australian Museum and Birds in Backyards 20–21 cm; Wikipedia 19–22 cm.
  - Season: most months, and August–October around Sydney (Australian Museum and Birds in Backyards); July–March (Wikipedia); October–March in the highlands near Canberra (a regional key).
  - Underparts: lighter green (Australian Museum and Birds in Backyards) versus light greenish-yellow belly on coastal birds (Wikipedia).
- Not well documented:
  - Incubation period. Birds in Backyards, the Australian Museum and Wikipedia do not state it. A personal field site marks 14–15 days with a question mark. Secondary pages that state 14–16 days were not relied on, because some of them also place the species in Tasmania, which the Australian sources reject.
  - A breeding season measured in southern Victoria, as distinct from the general and Sydney figures.
- Sources (11): https://www.birdsinbackyards.net/species/Lichenostomus-leucotis; https://australian.museum/learn/animals/birds/white-eared-honeyeater/; https://en.wikipedia.org/wiki/White-eared_honeyeater; https://datazone.birdlife.org/species/factsheet/22704070; https://www.iucnredlist.org/species/22704070/253993105/pdf; https://birdsoftheworld.org/bow/species/whehon1/cur/introduction; https://keyserver.lucidcentral.org/key-server/data/03050501-000c-4503-8203-0a030507090d/media/Html/Lichenostomus_leucotis.htm; https://mdahlem.net/birds/18/whearhon.php; http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=86394; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv
- outOfBatch:
  - Welcome Swallow incubation was not checked: that species is not in this batch.
  - Little Raven natural predators were not checked: that species is not in this batch.
  - Magpie-lark presence in Tasmania is covered under that species.
- queries:
  - Yellow-faced Honeyeater Caligavis chrysops breeding incubation clutch size distribution Birds in Backyards OR BirdLife OR "Australian Museum"
  - Magpie-lark Grallina cyanoleuca Tasmania breeding incubation clutch size distribution BirdLife "Birds in Backyards"
  - Eastern Yellow Robin Eopsaltria australis incubation clutch breeding season size habitat IUCN BirdLife "Australian Museum"
  - Red-browed Finch Neochmia temporalis incubation clutch breeding introduced Tahiti Marquesas size BirdLife "Birds in Backyards"
  - Black-faced Cuckooshrike Coracina novaehollandiae incubation clutch breeding size distribution Tasmania BirdLife "Australian Museum"
  - Red-rumped Parrot Psephotus haematonotus incubation clutch breeding hollow size distribution BirdLife "Birds in Backyards"
  - White-eared Honeyeater Nesoptilotis leucotis incubation clutch breeding size distribution endemic BirdLife "Australian Museum"
  - site:australian.museum Magpie-lark OR "Eastern Yellow Robin" OR "Red-browed Finch" OR "Black-faced Cuckoo" OR "Red-rumped Parrot" OR "Yellow-faced Honeyeater" OR "White-eared Honeyeater"
  - site:birdlife.org.au Magpie-lark OR "Eastern Yellow Robin" OR "Red-browed Finch" OR "Red-rumped Parrot" OR "White-eared Honeyeater" bird profile
  - "Magpie-lark" OR "Grallina cyanoleuca" Tasmania vagrant OR "rare visitor" OR "not present" BirdLife OR HANZAB OR "Birds in Backyards"
  - "Black-faced Cuckoo-shrike" OR "Coracina novaehollandiae" incubation "days" clutch eggs HANZAB OR "2 or 3" OR "two or three"
  - "White-eared Honeyeater" incubation days clutch HANZAB OR "14" OR "15 days" OR "16 days" nesting Victoria
  - "Eastern Yellow Robin" incubation "days" HANZAB OR Marchant cats predator nest Victoria
  - Red-rumped Parrot "Great Dividing Range" distribution incubation HANZAB "21" OR "19" OR "20 days" hollow starling OR competition
  - Grallina cyanoleuca Tasmania "vagrant" OR "rare" OR "absent" HANZAB OR "not recorded" OR "Birds of Tasmania"
  - Red-browed Finch introduced "French Polynesia" OR Tahiti OR Marquesas OR "Western Australia" Perth established Neochmia temporalis
  - "Yellow-faced Honeyeater" Tasmania absent OR vagrant OR "not recorded" Caligavis OR Lichenostomus chrysops
  - Psephotus haematonotus IUCN Red List Least Concern assessed EPBC FFG "Caligavis chrysops" "Grallina cyanoleuca" "Eopsaltria australis" "Neochmia temporalis" "Coracina novaehollandiae" "Nesoptilotis leucotis"
  - "Neochmia temporalis" OR "red-browed finch" OR "red-browed firetail" Tahiti OR Marquesas OR Moorea introduced OR feral
  - site:environment.gov.au/cgi-bin/sprat Caligavis chrysops OR "Grallina cyanoleuca" OR "Eopsaltria australis" OR "Neochmia temporalis" OR "Psephotus haematonotus" OR "Nesoptilotis leucotis" OR "Lichenostomus leucotis" EPBC
  - FFG Threatened List July 2026 "White-eared" OR "Yellow-faced" OR "Magpie-lark" OR "Eastern Yellow Robin" OR "Red-browed" OR "Red-rumped" OR "Cuckoo-shrike" site:environment.vic.gov.au
  - "Psephotus haematonotus" IUCN "Date assessed" OR "assessed" Least Concern 2016 OR 2018 OR 2024
  - site:environment.gov.au/cgi-bin/sprat/public/publicspecies.pl "Caligavis chrysops" OR "Lichenostomus chrysops" OR "Grallina cyanoleuca" OR "Eopsaltria australis" OR "Neochmia temporalis" OR "Psephotus haematonotus" OR "Nesoptilotis leucotis" "EPBC Act Listing Status"
  - Magpie-lark Grallina cyanoleuca Tasmania vagrant breeding incubation clutch "Birds in Backyards"
  - Eastern Yellow Robin Eopsaltria australis incubation clutch breeding season size habitat "Australian Museum" cats predator
  - Red-browed Finch Neochmia temporalis incubation clutch breeding introduced Tahiti Marquesas size "Birds in Backyards" OR "Australian Museum"
  - Black-faced Cuckooshrike Coracina novaehollandiae incubation clutch breeding size distribution "Australian Museum" OR BirdLife IUCN 2025
  - Red-rumped Parrot Psephotus haematonotus incubation clutch breeding hollow size distribution "Birds in Backyards" "Great Dividing Range"
  - White-eared Honeyeater Nesoptilotis leucotis incubation clutch breeding size distribution "Australian Museum" OR "Birds in Backyards" IUCN
  - "Eastern Yellow Robin" incubation "15" OR "16" OR "17" days Debus OR Marchant OR "Birds in Backyards" clutch nest predator currawong cat
  - Grallina cyanoleuca IUCN Least Concern assessed 2018 trend increasing habitat degradation Higgins Tasmania vagrant list of birds
  - "Neochmia temporalis" IUCN "French Polynesia" Least Concern 2018 threat nutmeg OR cat OR "not threatened" Marquesas OR Tahiti introduced Perth
  - "Black-faced Cuckoo-shrike" OR "Coracina novaehollandiae" incubation "21" OR "20-24" OR "22 days" HANZAB Higgins clutch SPRAT "listed marine" OR "Marine" EPBC
  - Eastern Koel "Magpie-lark" host Australian Museum OR HANZAB brood parasite
  - site:environment.gov.au "Coracina novaehollandiae" "Listed marine" OR "EPBC Act status" SPRAT black-faced cuckoo-shrike
  - Eopsaltria australis IUCN Red List "Date assessed" OR "Last assessed" Least Concern 2012 OR 2016 OR 2018 OR 2024

<!-- batch4 -->
### Grok batch 4 (grok-4.7, prompt docs/research/prompt4.txt, output batch4.json)

**Laughing Kookaburra** *Dacelo novaeguineae*  verdict: corrected, tier: 
- Errors in draft:
  - Breeding is given as September–January. Birds in Backyards, the Australian Museum and BirdLife Australia all start the season in August.
  - Clutch is given as 1–5. BirdLife Australia and New Zealand Birds Online give 2–3, and Wikipedia says the usual clutch is three. Eggs of one or five were not found in the pages read.
  - Diet omits crustaceans and birds. Lizards are in the Wikipedia diet and in BirdLife Australia's note on small reptiles, but not in the Australian Museum or Birds in Backyards diet sentence, which names snakes rather than lizards.
  - Distribution omits New Zealand, which the origins sentence includes, and omits the Flinders Island and Kangaroo Island introductions. Habitat is narrowed to open forest, woodland and towns.
  - Road strikes are not documented in Birds in Backyards, the Australian Museum, BirdLife Australia or the hollow-loss account cited by the San Diego Zoo Wildlife Alliance fact sheet.
- Conflicts:
  - Length: Australian Museum and Birds in Backyards 40–45 cm; Wikipedia 41–47 cm; New Zealand Birds Online 39–45 cm.
  - Clutch and incubation: BirdLife Australia 2–3 eggs and 25 days; Wikipedia usual clutch of three and 24–26 days; New Zealand Birds Online 2–3 eggs and 24–26 days.
  - Season: August–January on the Australian pages; Wikipedia peak laying September–November, with nest-building from August and later clutches if the first fails. New Zealand Birds Online gives laying from November to May and says New Zealand breeding success is not yet documented.
  - Population: the San Diego Zoo Wildlife Alliance fact sheet says populations were considered large and stable (BirdLife International 2016) and, on the same page, that the 2024 assessment trend is decreasing.
- Not well documented:
  - A breeding window special to southern Victoria, beyond the general August–January season and the September–November laying peak.
  - Clutch extremes of one and five. They are not in the Australian Museum, Birds in Backyards, BirdLife Australia, Wikipedia or New Zealand Birds Online pages read.
  - The exact day of the 2024 IUCN assessment. The species page did not render; the year and the decreasing trend come from the San Diego Zoo Wildlife Alliance fact sheet citing BirdLife International 2024, and from the IUCN genus search result labelled Decreasing, Least Concern.
  - Road strikes as a threat.
  - HANZAB volume 4 is cited by the Australian Museum and Birds in Backyards, but the handbook page itself returned HTTP 401 and was not read.
- Sources (9): https://www.birdsinbackyards.net/species/Dacelo-novaeguineae; https://australian.museum/learn/animals/birds/laughing-kookaburra/; https://birdlife.org.au/bird-profiles/laughing-kookaburra/; https://en.wikipedia.org/wiki/Laughing_kookaburra; https://www.nzbirdsonline.org.nz/species/laughing-kookaburra; https://ielc.libguides.com/sdzg/factsheets/laughingkookaburra/population; https://www.iucnredlist.org/search?taxonomies=22674516&searchType=species; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Brown Falcon** *Falco berigora*  verdict: corrected, tier: 
- Errors in draft:
  - Origins stop at Australia and New Guinea. IUCN also lists Indonesia as native and extant breeding.
  - Diet lists birds without the 'less often' used by the Australian Museum and Birds in Backyards.
  - The nest sentence stops at an old stick nest. The same sources say the falcon may build its own stick nest and occasionally uses an open tree hollow.
  - Road strikes are not documented in the preferred pages or in the IUCN threat sentence, which does support occasional persecution and poisoning of prey or pesticide use.
- Conflicts:
  - Length: Birds in Backyards and the Australian Museum 41–51 cm; Wikipedia usually 40–50 cm.
  - Clutch: Birds in Backyards 2–6, usually 3; Wikipedia two to five.
  - Subspecies: Wikipedia and Oiseaux.net use two forms; Birds of the World also lists F. b. occidentalis for south-western and central-western Australia, and extends F. b. novaeguineae to north-coast islands of New Guinea.
- Not well documented:
  - A southern Victorian season narrower than June–November.
  - Road strikes.
  - No BirdLife Australia profile was published for this species (the profile slug returned empty).
  - HANZAB was not opened. The Australian Museum cites Olsen et al. 1993, Pizzey and Knight 1997, and Reader's Digest 1990.
- Sources (7): https://www.birdsinbackyards.net/species/Falco-berigora; https://australian.museum/learn/animals/birds/brown-falcon/; https://en.wikipedia.org/wiki/Brown_falcon; https://www.iucnredlist.org/species/22696354/263619384; https://birdsoftheworld.org/bow/species/brofal1/cur/introduction; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Sulphur-crested Cockatoo** *Cacatua galerita*  verdict: corrected, tier: 
- Errors in draft:
  - Origins say only Australia and New Guinea. They omit the Aru Islands, the Perth population, New Zealand, and the conflict over whether Indonesian birds are native or introduced.
  - Distribution omits Perth and narrows the habitat to woodland and farmland.
  - Diet leads with grain, bulbs and insect larvae. The Australian Museum and Birds in Backyards lead with berries, seeds, nuts and roots. Grain, bulbs and larvae are in other accounts, including a study that cites HANZAB.
  - Loss of large hollow trees is not the threat named by the Australian Museum, Birds in Backyards or the Tasmanian parks page, which says the species has benefited from clearing. Culling as a pest is supported.
- Conflicts:
  - Incubation: Birds in Backyards 30 days; Wikipedia 25–27 days.
  - Clutch: Birds in Backyards one to three; Wikipedia two to three.
  - Length: Birds in Backyards and the Australian Museum 45–50 cm; Wikipedia 44–55 cm.
  - Indonesia: Birds in Backyards and the Australian Museum say introduced; IUCN lists Indonesia as native, and Wikipedia treats New Guinea and some Indonesian islands, including the Aru Islands, as part of the natural range while listing other introductions separately.
  - Trend cause: IUCN suspects a decline from habitat destruction, while the Tasmanian parks account says the species has benefited from clearing and cropping.
- Not well documented:
  - Whether loss of hollow trees, as distinct from broader habitat destruction, is driving the species decline.
  - A southern Victorian season narrower than August–January.
  - HANZAB volume itself was not opened. The clutch, incubation and larval diet in Higgins 1999 are cited by later papers, not read here.
  - World Parrot Trust says the species is not protected in Australia and that culls occur. Wikipedia says a government permit is required because it is protected under Commonwealth law. Those two statements were not reconciled from a statute page.
- Sources (9): https://www.birdsinbackyards.net/species/Cacatua-galerita; https://australian.museum/learn/animals/birds/sulphur-crested-cockatoo/; https://birdlife.org.au/bird-profiles/sulphur-crested-cockatoo/; https://en.wikipedia.org/wiki/Sulphur-crested_cockatoo; https://www.iucnredlist.org/species/22684781/131914971; https://web.archive.org/web/20170326112218/http:/www.parks.tas.gov.au/?base=19344; https://absa.asn.au/wp-content/uploads/2021/03/FINAL_Paper_2_V45_Lill_Sulphur_C_Cockatoo_V4.pdf; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Long-billed Corella** *Cacatua tenuirostris*  verdict: corrected, tier: 
- Errors in draft:
  - Distribution says western Victoria and southern New South Wales and leaves out south-eastern South Australia, which Birds in Backyards and the Australian Faunal Directory include in the natural range.
  - The nest sentence mentions only tree hollows. Birds in Backyards and the Australian Museum also describe cavities in loose gravelly cliffs.
  - Diet leads with roots, bulbs and corms. Birds in Backyards says grass seeds, particularly grain, are preferred, with corms, bulbs, roots and insects as well.
  - 'Feral populations elsewhere' does not name the documented Sydney, Brisbane, Mount Lofty, Gawler and Perth populations, and it does not show the conflict over Tasmania.
- Conflicts:
  - Season: Birds in Backyards July–December; Wikipedia July–November.
  - Clutch: Birds in Backyards 1–4; Wikipedia 2–3 dull white eggs.
  - Tasmania: Birds in Backyards Not present; Australian Faunal Directory apparently a rare visitor; Wikipedia present.
  - Queensland: Birds in Backyards Not present; Australian Faunal Directory established around Brisbane; Wikipedia south-east Queensland.
  - Trend: IUCN 2024 increasing; Birds in Backyards says the overall population may decline because old hollow trees are being lost in the original range.
- Not well documented:
  - A southern Victorian season narrower than the July–December or July–November figures.
  - Incubation other than about 24 days was not found on the pages read this session.
  - No BirdLife Australia profile was published (the profile slug returned empty).
  - HANZAB was not opened.
- Sources (7): https://www.birdsinbackyards.net/species/Cacatua-tenuirostris; https://australian.museum/learn/animals/birds/long-billed-corella/; https://biodiversity.org.au/afd/taxa/Cacatua_%28Licmetis%29_tenuirostris; https://en.wikipedia.org/wiki/Long-billed_corella; https://www.iucnredlist.org/species/22684820/254000283; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Common Bronzewing** *Phaps chalcoptera*  verdict: corrected, tier: 
- Errors in draft:
  - Distribution says resident and limits the gaps to the driest deserts. The Australian Faunal Directory excludes treeless deserts and upper Cape York and says birds wander locally or regionally. Dense rainforest is also excluded.
  - Habitat is limited to woodland and scrub.
  - Incubation is given as about 14–16 days. Birds in Backyards and the Australian Museum both say 15 days. The 14–16 day span matches Wikipedia, not that preferred pair.
  - Diet says seeds especially of acacias. The Australian Museum and Birds in Backyards say seeds and other vegetable matter and do not name acacia.
  - Foxes, cats and habitat clearing are not documented in the preferred sources read.
- Conflicts:
  - Incubation: Birds in Backyards and the Australian Museum 15 days; Wikipedia roughly 14–16 days; Alice Springs Desert Park 16 days; M Dahlem 16–18 days; Oiseaux-birds about two weeks.
  - Season: no months on the Australian Museum or Birds in Backyards; Alice Springs any time, mostly August–December; M Dahlem almost any time, table August–February; Oiseaux-birds mainly August–January, extendable; Australian Faunal Directory seasonal or opportunistic.
  - Length: 30–36 cm on the museum, Birds in Backyards and Wikipedia; Alice Springs Desert Park 33–36 cm.
  - Acacia: absent from the preferred diet sentences; Ausemade says wattle seeds are favoured, along with native grasses and cassia.
  - IUCN: the retrieved assessment is 1 October 2016, trend stable, while the same page notes a 2024 assessment that is still Least Concern, without a 2024 trend in the text retrieved.
- Not well documented:
  - A breeding peak special to southern Victoria. Temperate peaks in secondary accounts fall somewhere between August and February.
  - Predators. Foxes and cats were not found on the preferred pages.
  - Whether acacia seed is a principal food. It is a secondary-page claim, not in the Australian Museum, Birds in Backyards or the Australian Faunal Directory text read. Frith's diet papers are cited by the directory but were not read.
  - The 2024 IUCN trend.
  - No BirdLife Australia profile was published (the profile slug returned empty).
- Sources (11): https://www.birdsinbackyards.net/species/Phaps-chalcoptera; https://australian.museum/learn/animals/birds/common-bronzewing/; https://biodiversity.org.au/afd/taxa/Phaps_%28Phaps%29_chalcoptera; https://en.wikipedia.org/wiki/Common_bronzewing; https://alicespringsdesertpark.com.au/connect-with-nature/animals/animals/common-bronzewing; https://www.mdahlem.net/birds/11/cbrwing.php; https://www.oiseaux-birds.com/card-common-bronzewing.html; https://ausemade.com.au/flora-fauna/fauna/birds/dove-pigeon-columbidae/common-bronzewing-phaps-chalcoptera/; https://www.iucnredlist.org/species/22690667/93282812; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Rufous Whistler** *Pachycephala rufiventris*  verdict: corrected, tier: 
- Errors in draft:
  - Diet says only insects and larvae gleaned from foliage. Birds in Backyards and BirdLife Australia add seeds, fruit and leaves, and describe foraging as higher in the vegetation, rarely on the ground, rather than only gleaning from foliage.
  - Threats mention habitat clearing and omit urban development, which Birds in Backyards pairs with land clearing.
- Conflicts:
  - Foraging: Birds in Backyards and BirdLife Australia say rarely on the ground; Wikipedia says never on the ground.
  - Diet extras: Wikipedia adds grasses to seeds, fruit and leaves. The Australian pages stop at seeds, fruit or leaves.
  - Some secondary accounts place the species in New Guinea. The IUCN page retrieved lists Australia as extant breeding and New Caledonia as extant resident, and does not list Papua New Guinea. Wikipedia's range sentence is Australia and New Caledonia.
- Not well documented:
  - A southern Victorian season narrower than July–February.
  - Named predators. None were on the preferred pages read.
  - The Australian Museum has no species page for the Rufous Whistler (the expected URL returned not found).
  - HANZAB volume 6 is cited by Birds in Backyards, but the handbook page returned HTTP 401 and was not read. The 13-day incubation is the Birds in Backyards figure, which cites that volume.
- Sources (6): https://www.birdsinbackyards.net/species/Pachycephala-rufiventris; https://birdlife.org.au/bird-profiles/rufous-whistler/; https://en.wikipedia.org/wiki/Rufous_whistler; https://www.iucnredlist.org/species/22705537/130405979; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Yellow-rumped Thornbill** *Acanthiza chrysorrhoa*  verdict: corrected, tier: 
- Errors in draft:
  - Distribution says much of southern and eastern Australia and omits Tasmania, the southern Northern Territory and the Nullarbor Plain, and the note that the bird is sparse in the tropics, the arid zone and east of the Divide.
  - Habitat is limited to open woodland and grassland edges. The sources include open forest, shrubland, grassland with some trees, farmland, roadsides, parks and gardens.
  - Threats say cats and clearing of understorey. Cats are supported. Understorey clearing is not. The documented pressures are cats, cars, urban development and, in Western Australia, extensive clearing. Wikipedia also names nest predators and two cuckoos.
- Conflicts:
  - Season: Birds in Backyards and the Australian Museum any month, mainly July–December; Wikipedia July–December only.
  - Clutch: Birds in Backyards two to five, usually three or four; Wikipedia three or four.
  - Incubation: Birds in Backyards 17 days; Wikipedia about 16–18 days.
  - Helpers: Birds in Backyards one or two; Wikipedia one to three.
  - Range wording: Birds in Backyards and the Australian Museum stress the east, south-east, Tasmania, southern Northern Territory and the Nullarbor, and say the bird is sparse in the tropics and arid zone. Wikipedia says western, southern and eastern Australia and Tasmania, with stated absences in the north-west, centre and north.
- Not well documented:
  - A southern Victorian season inside the July–December peak. The 'any month' statement is national.
  - What the false nest is for. Birds in Backyards lists several theories and says the function is not clearly understood.
  - No BirdLife Australia profile was published (the profile slug returned empty).
  - HANZAB volume 6 is cited by Birds in Backyards and the Australian Museum, but the handbook page was not opened.
- Sources (6): https://www.birdsinbackyards.net/species/Acanthiza-chrysorrhoa; https://australian.museum/learn/animals/birds/yellow-rumped-thornbill/; https://en.wikipedia.org/wiki/Yellow-rumped_thornbill; https://www.iucnredlist.org/species/22704647/253984557; https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv
- outOfBatch:
  - Welcome Swallow incubation was not checked: that species is not in this batch.
  - Magpie-lark presence in Tasmania was not checked: that species is not in this batch.
  - Little Raven natural predators were not checked: that species is not in this batch.
- queries:
  - Laughing Kookaburra Dacelo novaeguineae breeding incubation clutch distribution BirdLife Australia
  - Brown Falcon Falco berigora incubation clutch size distribution New Guinea IUCN
  - Sulphur-crested Cockatoo Cacatua galerita incubation clutch distribution New Guinea introduced New Zealand
  - Long-billed Corella Cacatua tenuirostris endemic distribution incubation clutch FFG
  - Common Bronzewing Phaps chalcoptera incubation clutch breeding season distribution Tasmania
  - Rufous Whistler Pachycephala rufiventris New Caledonia incubation clutch distribution Tasmania
  - Yellow-rumped Thornbill Acanthiza chrysorrhoa incubation clutch nest false cup distribution
  - site:birdsinbackyards.net Laughing Kookaburra Dacelo novaeguineae breeding incubation clutch size distribution habitat diet
  - site:birdlife.org.au Laughing Kookaburra profile size distribution breeding diet conservation
  - site:australian.museum Rufous Whistler Pachycephala rufiventris
  - Laughing Kookaburra IUCN Red List Dacelo novaeguineae Least Concern assessed
  - "Common Bronzewing" incubation OR "incubate" days HANZAB OR "Frith" clutch season Victoria
  - Sulphur-crested Cockatoo Cacatua galerita diet insect larvae grain bulbs HANZAB clutch incubation 25 OR 27 OR 30
  - Brown Falcon Falco berigora secondary poisoning roadkill OR "road" threat OR pesticide HANZAB OR "Birds of Prey"
  - Long-billed Corella Cacatua tenuirostris "south-eastern South Australia" OR Tasmania introduced range HANZAB OR "Australian Museum" OR BirdLife
  - FFG Act Threatened List July 2026 DEECA Victoria filetype:xlsx OR "FFG_Threatened_List"
  - "FFG Threatened List" July 2026 "Dacelo novaeguineae" OR "Falco berigora" OR "Cacatua tenuirostris" OR "Phaps chalcoptera" OR "Acanthiza chrysorrhoa" OR "Pachycephala rufiventris" OR "Cacatua galerita"
  - site:datazone.birdlife.org Laughing Kookaburra factsheet Dacelo novaeguineae Least Concern
  - site:datazone.birdlife.org "Yellow-rumped Thornbill" OR "Common Bronzewing" OR "Rufous Whistler" OR "Sulphur-crested Cockatoo" factsheet Least Concern
  - Falco berigora IUCN Red List Least Concern assessed 2024 trend
  - Dacelo novaeguineae IUCN Red List assessment year population trend Least Concern
  - Cacatua galerita IUCN Red List Least Concern trend assessed year
  - Cacatua tenuirostris IUCN Red List Least Concern trend 2024
  - Phaps chalcoptera IUCN Red List Least Concern assessment trend
  - Pachycephala rufiventris IUCN Red List assessed 2018 trend Least Concern
  - Acanthiza chrysorrhoa IUCN Red List Least Concern assessment year trend
  - "Laughing Kookaburra" "Dacelo novaeguineae" "Last assessed" IUCN site:iucnredlist.org
  - Phaps chalcoptera IUCN "Latest assessment" 2024 trend stable OR decreasing
  - Falco berigora IUCN native "Papua New Guinea" Indonesia Australia range
  - "Dacelo novaeguineae" "The IUCN Red List of Threatened Species" 2024 assessed
  - Common Bronzewing Phaps chalcoptera breeding season "any month" OR "all year" OR "throughout the year" Frith incubation
  - Sulphur-crested Cockatoo diet "insect larvae" OR bulbs grain HANZAB OR "Australian Museum" OR "Parks and Wildlife" Tasmania

<!-- batch5 -->
### Grok batch 5 (grok-4.7, prompt docs/research/prompt5.txt, output batch5.json)

**Pacific Black Duck** *Anas superciliosa*  verdict: corrected, tier: 
- Errors in draft:
  - Size starts at 47 cm. Birds in Backyards, the Australian Museum and New Zealand Birds Online all start at 50 cm.
  - Distribution is limited to fresh water. The same sources include tidal mudflats and other waters, and exclude the most arid regions.
  - Movements are given as resident or nomadic with rainfall. Birds SA says mainly sedentary, with dispersal in drought, and Birds in Backyards does not describe the movements.
  - The southern season is given as mainly July–December. The Western Volcanic Plains guide gives June–January, and Birds in Backyards says the season is highly variable.
  - Incubation is given as about 28 days. Published figures are 26–29 days (New Zealand Birds Online, citing HANZAB), about 30 days (Western Volcanic Plains) and 26–32 days (wildpro).
  - Clutch is given only as 8–10. That is the HANZAB summary figure and the wildpro average, but the usual range is also given as 7–12 (Western Volcanic Plains and Birds SA) and 10–12 (Museums Victoria). Birds in Backyards prints 16, which its own breeding text does not support.
  - Nests are limited to hollows, grass or reeds. Sources also give old nests, including an Australian Museum photograph of eggs in an old Little Raven nest, tree forks and epiphytes.
  - Diet omits molluscs. Birds in Backyards, the Australian Museum and Museums Victoria include them, and the museum accounts say the food is mostly plant material.
  - Wetland loss is not stated on the Birds in Backyards or Australian Museum pages. Hybridisation with Mallards is.
- Conflicts:
  - Clutch: Birds in Backyards field 16, unsupported by its breeding paragraph; New Zealand Birds Online 8–10; Western Volcanic Plains and Birds SA usually 7–12; Museums Victoria usually 10–12; wildpro average 8–10, range 3–15, wider still in dump nests.
  - Incubation: New Zealand Birds Online 26–29 days; Western Volcanic Plains about 30 days; wildpro 26–32 days. Birds in Backyards gives none.
  - Southern season: Birds in Backyards highly variable; Western Volcanic Plains June–January; Birds SA June–February in South Australia; wildpro July–October in southern Australia. New Zealand laying in the HANZAB summary is mainly August–October, which is a New Zealand account.
  - Subspecies: New Zealand Birds Online says rogersi (Australia) versus superciliosa (New Zealand) is not supported. The name pelewensis is still used by some accounts for Pacific-island birds.
  - IUCN trend: the 2016 text says the trend is not known. The page also labels the latest assessment, 2024, as Least Concern, but that assessment's trend was not retrieved.
- Not well documented:
  - The 2024 IUCN trend. Only the 2016 justification, which says the trend is not known, and a banner calling the 2024 category Least Concern, were retrieved.
  - A single incubation length for southern Victoria. The sources give ranges.
  - Wetland loss as an Australian population threat on the preferred pages read.
  - The Birds in Backyards clutch of 16. It is not explained by the breeding text on that page.
  - The HANZAB species account itself. New Zealand Birds Online cites Marchant and Higgins 1990, but the 46 MB handbook PDF was not read.
- Sources (10): https://www.birdsinbackyards.net/species/Anas-superciliosa; https://australian.museum/learn/animals/birds/pacific-black-duck/; https://www.nzbirdsonline.org.nz/species/grey-duck; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/pacific-black-duck; https://resources.birdssa.au/birddirectory/pacific-black-duck/; https://collections.museumsvictoria.com.au/species/8243; https://web.archive.org/web/20180317174446/http:/wildpro.twycrosszoo.org/S/0AvAnserif/anatidae/1ACrAvAn_anas/Anas_superciliosa/Anas_superciliosa.htm; https://www.iucnredlist.org/species/22680217/92849931; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Australian Wood Duck** *Chenonetta jubata*  verdict: corrected, tier: 
- Errors in draft:
  - Size is 45–51 cm. Birds in Backyards gives 44–50 cm, average 47 cm.
  - Movements are given as resident or nomadic. DataZone says Not a Migrant, and Birds in Backyards does not call it nomadic.
  - Endemic is fair for breeding, but DataZone also records vagrants in New Zealand and Papua New Guinea.
  - Road strikes are not documented in Birds in Backyards, the HANZAB predator paragraph retrieved, or the ANU account. Foxes are supported, and those accounts also name ravens, herons, kookaburras, other raptors, dogs, cats, rats, gulls, swamp harriers and purple swamphens.
- Conflicts:
  - Range outside Australia: DataZone says breeding endemic, and also vagrant to New Zealand (non-breeding) and Papua New Guinea.
  - Predators: HANZAB names ravens, herons and kookaburras on ducklings, and falcons, goshawks, Wedge-tailed Eagles, foxes and feral cats on adults. The ANU account names foxes, dogs and cats on young and adults, plus rats, gulls, swamp harriers and purple swamphens. Birds in Backyards names none of these and says the duck has benefited from farms.
- Not well documented:
  - Road strikes as a threat. They were not in the pages read.
  - The Birds in Backyards state-status table. It did not render.
  - A breeding window tighter than September–November for southern Victoria. That is the southern season Birds in Backyards gives.
  - The full HANZAB account. Only the predator paragraph returned by search was read.
- Sources (6): https://www.birdsinbackyards.net/species/Chenonetta-jubata; https://datazone.birdlife.org/species/factsheet/22680111; https://www.nzbirdsonline.org.nz/assets/95597/1691920008-021_australian-20wood-20duck.pdf; https://keyserver.lucidcentral.org/key-server/data/03050501-000c-4503-8203-0a030507090d/media/Html/Chenonetta_jubata.htm; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Whistling Kite** *Haliastur sphenurus*  verdict: corrected, tier: 
- Errors in draft:
  - Origins include the Solomon Islands, which matches Birds in Backyards, and omit Indonesia, which the 2025 IUCN country list includes. IUCN does not list the Solomons.
  - Tasmania is given only as uncommon. The same Birds in Backyards page also marks Tasmania Not present.
  - Movements are given as resident or nomadic. Birds in Backyards says partially migratory, and mostly resident in the north and west.
  - Secondary poisoning is not the threat on Birds in Backyards. That page names southern wetland drainage, and the need for remnant nest trees, and says clearing can favour the kite.
  - Diet matches Birds in Backyards, and is narrower than Wikipedia, which adds reptiles, amphibians and crustaceans.
- Conflicts:
  - Extra-Australian range: Birds in Backyards includes the Solomon Islands and omits Indonesia. IUCN 2025 breeding countries are Australia, Indonesia, New Caledonia and Papua New Guinea, with no Solomon Islands. Wikipedia's lead has Australia including coastal islands, New Caledonia and much of New Guinea, excluding the central mountains and the north-west, and does not name Indonesia or the Solomons.
  - Tasmania: distribution text says uncommon; the status table says Not present.
  - Diet: Birds in Backyards lists carrion, mammals, birds, fish and insects. Wikipedia adds reptiles, amphibians and crustaceans.
  - Threats: Birds in Backyards names wetland drainage in the south and loss of tall nest trees, and says clearing can help. IUCN 2025 gives a stable trend. Secondary poisoning appears only as inclusion in a rodenticide dataset, not as a stated population threat on the preferred pages.
- Not well documented:
  - Secondary poisoning as a cause of decline. The Wildlife Health Australia sheet lists the species in a rodenticide dataset and does not give a population effect.
  - A HANZAB incubation figure other than the 38 days on Birds in Backyards. The handbook page was not read. Birds in Backyards cites HANZAB volume 1B for this species, which is an odd volume for a raptor.
  - Whether the bird is truly absent from Tasmania or only scarce. The one Birds in Backyards page says both.
- Sources (7): https://www.birdsinbackyards.net/species/Haliastur-sphenurus; https://www.iucnredlist.org/species/22695091/281027154; https://datazone.birdlife.org/species/factsheet/22695091; https://en.wikipedia.org/wiki/Whistling_kite; https://wildlifehealthaustralia.com.au/Portals/0/ResourceCentre/FactSheets/Multiple/Rodenticide_Toxicity_in_Australian_Wildlife.pdf; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Straw-necked Ibis** *Threskiornis spinicollis*  verdict: corrected, tier: 
- Errors in draft:
  - Origins say endemic to Australia, with vagrants in New Guinea. New Guinea and Indonesia are part of the native range. Vagrants on these pages are Tasmania, New Zealand, Norfolk Island and, on Birds in Backyards, Lord Howe Island.
  - Distribution says throughout Australia except the driest areas. Birds in Backyards limits the Australian range to the mainland and calls Tasmania a vagrant.
  - Clutch 2–5 omits the usual two to three given by Birds in Backyards.
  - Diet lists snails, which are not on the Birds in Backyards list, and omits the small reptiles and mammals that are.
  - Drought is not the threat named by Birds in Backyards. Loss of freshwater breeding habitat and increased salinity are, and irrigation may have helped.
- Conflicts:
  - Tasmania: the distribution sentence says vagrant; the status table says Not present.
  - Islands: Birds in Backyards includes Lord Howe Island and does not mention New Zealand. DataZone includes New Zealand and Norfolk Island as vagrants and does not list Lord Howe Island in the country table retrieved.
  - Trend: Least Concern, but DataZone says decreasing. Birds in Backyards marks it Secure.
- Not well documented:
  - An IUCN assessment newer than 2016. None was retrieved.
  - Drought as a named threat on the preferred pages.
  - Snails in the diet on Birds in Backyards.
  - The HANZAB text. Birds in Backyards cites volume 2, which was not read.
- Sources (4): https://www.birdsinbackyards.net/species/Threskiornis-spinicollis; http://datazone.birdlife.org/species/factsheet/22697525; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**White-winged Chough** *Corcorax melanorhamphos*  verdict: corrected, tier: 
- Errors in draft:
  - Origins say eastern Australia only. The range also includes south-eastern South Australia, and Wikipedia says southern and eastern Australia. Birds of the World says Victorian birds are mainly north of the Divide.
  - Clutch 3–5 matches the usual modern figure and omits Birds in Backyards' clutches of up to ten, and Campbell's usual five to seven.
  - August–December matches Wikipedia and Campbell, but it is not stated on Birds in Backyards or the Australian Museum. Dahlem extends the season to January, and oiseaux-birds adds breeding after rain.
  - Incubation of about 19 days matches Birds in Backyards. Oiseaux-birds gives 19–20 days.
  - Diet adds larvae, which are not in the Birds in Backyards or Australian Museum sentence.
  - Habitat fragmentation is not the threat those pages name. Cats and foxes taking flightless young are.
- Conflicts:
  - Season: not stated on Birds in Backyards or the Australian Museum; Wikipedia and Campbell August–December; Dahlem August–January; oiseaux-birds September–December, also after rain.
  - Clutch: Birds in Backyards usually 3–5, up to 10; Wikipedia and Dahlem 3–5; Campbell usually 5–7, occasionally 8 or more.
  - Incubation and nestling period: Birds in Backyards and Dahlem 19 days and 28 days; oiseaux-birds 19–20 days and 24–30 days.
  - Nest height: Birds in Backyards within 15 m; Wikipedia up to 10 m; Dahlem 5–15 m.
  - Length: Birds in Backyards and the Australian Museum 43–47 cm; oiseaux-birds 50 cm.
  - Western Australia: Birds in Backyards status Secure, against an eastern and south-eastern distribution.
  - Victoria: Birds of the World says mainly north of the Great Dividing Range. The Australian Museum says eastern and south-eastern mainland Australia without that limit.
- Not well documented:
  - A breeding season on Birds in Backyards or the Australian Museum. Both pages omit the months.
  - Habitat fragmentation as a measured threat. The pages name cats, foxes and, on the ANU account, loss of litter.
  - An IUCN assessment after 7 August 2018. None was found. The 2018 population size is unquantified.
  - HANZAB volume 7. The ABSA bird-in-the-hand sheet cites it for measurements, but the handbook text was not read.
  - Whether the Western Australian Secure flag on Birds in Backyards is a site error. The distribution text does not include Western Australia.
- Sources (12): https://www.birdsinbackyards.net/species/Corcorax-melanorhamphos; https://australian.museum/learn/animals/birds/white-winged-chough/; https://birdlife.org.au/bird-profiles/white-winged-chough/; https://en.wikipedia.org/wiki/White-winged_chough; https://mdahlem.net/birds/23/wwchough.php; https://www.oiseaux-birds.com/card-white-winged-chough.html; https://collections.museumsvictoria.com.au/articles/1563; https://birdsoftheworld.org/bow/species/whwcho1/cur/introduction; https://www.iucnredlist.org/species/22705382/130392282; https://keyserver.lucidcentral.org/key-server/data/03050501-000c-4503-8203-0a030507090d/media/Html/Corcorax_melanorhamphos.htm; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Wedge-tailed Eagle** *Aquila audax*  verdict: corrected, tier: 
- Errors in draft:
  - Size 89–106 cm does not match Birds in Backyards or the Australian Museum, which give 87–105 cm, average 96 cm.
  - The breeding sentence says incubation of about 45 days is not confirmed in Birds in Backyards. Both Birds in Backyards and the Australian Museum state 45 days.
  - Diet lists kangaroos beside rabbits, hares and carrion as if they were ordinary prey, and omits lizards and birds. Rabbits, hares and carrion are the staples. Adult kangaroos are killed by groups.
  - Vehicle collisions while feeding on roadkill are not the threat in Birds in Backyards or the Australian Museum. Those pages name poisoning, historical persecution, nest disturbance, forestry and loss of nest trees, and in Tasmania habitat loss and persecution.
  - Distribution says throughout Australia and resident, and does not spell out Tasmania or southern New Guinea. IUCN also includes Indonesia, which is the western New Guinea part of the range.
- Conflicts:
  - Length: Birds in Backyards and the Australian Museum 87–105 cm. Avibase quotes a maximum of 1.06 m and a maximum wingspan of 2.84 m, against the 2.3 m wingspan on the Australian pages.
  - Federal status: IUCN Least Concern for the species in 2025, trend unknown. The EPBC list of 28 August 2026 lists only A. a. fleayi as Endangered. Birds in Backyards marks the species federally Endangered.
  - Diet emphasis: Birds in Backyards starts with live prey, rabbits and hares first. The Australian Museum starts with carrion and then the same live prey.
- Not well documented:
  - Vehicle collisions as a threat to mainland birds. They are not in the Birds in Backyards or Australian Museum threat text. A separate Tasmanian threatened-species account was not re-read for this batch.
  - The 2025 population trend. IUCN says unknown. One search snippet mentioned possible declines in eBird records from 2013 to 2021 that monitoring does not support.
  - A wingspan of 2.84 m on a primary Australian page. It appears in the Avibase quotation, not in Birds in Backyards or the Australian Museum.
- Sources (8): https://www.birdsinbackyards.net/species/Aquila-audax; https://australian.museum/learn/animals/birds/wedge-tailed-eagle/; https://www.iucnredlist.org/species/22696064/157447886; https://avibase.bsc-eoc.org/species.jsp?avibaseid=5E574D70AC136CC1; https://bie.ala.org.au/species/Aquila+(Uroaetus)+audax; http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=64435; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv

**Masked Lapwing** *Vanellus miles*  verdict: corrected, tier: 
- Errors in draft:
  - Origins omit Indonesia, including the Moluccas, and New Caledonia. The 1930s arrival in New Zealand is right: first breeding near Invercargill in 1932.
  - Distribution says northern, eastern and southern Australia and omits central. Birds in Backyards' distribution sentence says northern, central and eastern, while the southern subspecies and the Tasmanian account cover the south, and the status table includes Western Australia.
  - Habitat is narrowed to open grassland and parks. Marshes, mudflats and beaches are in the Birds in Backyards habitat sentence.
  - Clutch 3–4 is too narrow. Birds in Backyards and ClimateWatch give 3–5. Tasmania NRE and New Zealand Birds Online give 3–4.
  - Incubation of about 28 days matches the lower end of the Australian 28–30 day accounts and is close to Thomas's 27–28 days. New Zealand Birds Online, citing HANZAB, gives 30–34 days. Birds in Backyards gives no incubation figure.
  - Breeding in any month matches Birds in Backyards, and the southern published window is seasonal: June–December, or late winter to early spring.
  - Dogs are not named as a threat. ClimateWatch names disturbance by people and vehicles.
- Conflicts:
  - Australian distribution wording: Birds in Backyards says northern, central and eastern, and marks Western Australia, Tasmania and Victoria Secure. Tasmania NRE says widespread throughout Australia.
  - Clutch: Birds in Backyards and ClimateWatch 3–5; Tasmania NRE and New Zealand Birds Online 3–4.
  - Incubation: no figure on Birds in Backyards; ClimateWatch and Tasmania NRE 28–30 days; Thomas 1969, cited by the peri-urban study, 27–28 days; New Zealand Birds Online 30–34 days.
  - Season: Birds in Backyards any time; ClimateWatch any time when suitable, and late winter to early spring in the south; Chambers et al. 2008, via the peri-urban paper, June–December in the south and any month in the tropics; New Zealand laying usually June–November.
  - Taxonomy and IUCN: the 2016 Vanellus miles page is Least Concern, trend increasing, and is flagged as not the latest. A 2014 page banner says the latest assessment is 2025, Least Concern, with no 2025 trend in the text retrieved. DataZone treats Vanellus novaehollandiae separately and, in the extract retrieved, assesses it Least Concern in 2024 with an increasing trend.
  - Length: Birds in Backyards 33–38 cm; New Zealand Birds Online 38 cm.
- Not well documented:
  - The 2025 IUCN trend for Vanellus miles. The banner says Least Concern. The trend text of that assessment was not retrieved.
  - Dogs as a cause of nest failure. They are not named on Birds in Backyards or ClimateWatch.
  - The full HANZAB lapwing account. New Zealand Birds Online cites Marchant and Higgins 1993 and summarises clutch and incubation. The handbook PDF was not read.
  - The country table on the Black-shouldered Lapwing DataZone page. The page shell loaded without the table. The 2024 category and increasing trend come from the search extract.
- Sources (10): https://www.birdsinbackyards.net/species/Vanellus-miles; https://www.nzbirdsonline.org.nz/species/spur-winged-plover; https://nre.tas.gov.au/wildlife-management/fauna-of-tasmania/birds/complete-list-of-tasmanian-birds/masked-lapwing-%28plover%29; https://climatewatch.org.au/species/birds/masked-lapwing; https://www.researchgate.net/publication/375723597_Nesting_ecology_of_the_Masked_Lapwing_Vanellus_miles_novaehollandiae_at_two_peri-urban_sites_breeding_densities_nest_characteristics_clutch_sizes_and_hatching_success; https://www.iucnredlist.org/species/22725229/94887836; https://www.iucnredlist.org/species/22725229/40751177; https://datazone.birdlife.org/species/factsheet/black-shouldered-lapwing-vanellus-novaehollandiae; https://www.environment.vic.gov.au/__data/assets/excel_doc/0030/793803/FFG_Threatened_List-July_2026.xlsx; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv
- outOfBatch:
  - Welcome Swallow incubation was not checked: that species is not in this batch.
  - Magpie-lark presence in Tasmania was not checked: that species is not in this batch.
  - Little Raven natural predators were not checked: that species is not in this batch.
- queries:
  - Pacific Black Duck Anas superciliosa Birds in Backyards breeding clutch incubation distribution habitat diet size conservation
  - Australian Wood Duck Chenonetta jubata Birds in Backyards breeding clutch incubation habitat diet size endemic
  - Whistling Kite Haliastur sphenurus Birds in Backyards breeding incubation clutch distribution diet size
  - Straw-necked Ibis Threskiornis spinicollis Birds in Backyards breeding incubation clutch range endemic New Guinea
  - White-winged Chough Corcorax melanorhamphos Birds in Backyards breeding incubation clutch endemic distribution diet
  - Wedge-tailed Eagle Aquila audax Birds in Backyards breeding incubation clutch size EPBC Tasmanian subspecies Endangered
  - Masked Lapwing Vanellus miles Birds in Backyards breeding incubation clutch distribution New Zealand New Guinea size
  - site:birdsinbackyards.net Pacific Black Duck Anas superciliosa size breeding clutch incubation distribution habitat diet conservation
  - site:birdlife.org.au "Pacific Black Duck" OR "Australian Wood Duck" OR "Whistling Kite" OR "Straw-necked Ibis" OR "White-winged Chough" OR "Wedge-tailed Eagle" OR "Masked Lapwing" profile clutch incubation
  - "Pacific Black Duck" OR "Anas superciliosa" incubation "days" HANZAB OR "Marchant" clutch "July" OR "June" Victoria OR southern
  - Whistling Kite Haliastur sphenurus Solomon Islands Tasmania distribution incubation "Birds in Backyards" OR HANZAB OR "Marchant and Higgins"
  - White-winged Chough incubation days clutch "19" OR "20" OR "18" Corcorax HANZAB OR "Birds in Backyards" OR Australian Museum
  - Masked Lapwing Vanellus miles incubation days HANZAB OR "Marchant and Higgins" clutch "28" southern Australia breeding season
  - site:datazone.birdlife.org Pacific Black Duck Anas superciliosa Least Concern assessed
  - "Whistling Kite" "secondary poisoning" OR rodenticide OR "nest trees" OR "1080" Haliastur threat OR decline
  - "Australian Wood Duck" OR "Chenonetta jubata" fox OR "road" OR "vehicle" predator OR threat OR killed
  - FFG Act Threatened List July 2026 DEECA Victoria "Aquila audax" OR "Chenonetta" OR birds filetype:pdf
  - "FFG Threatened List July 2026" "Wedge-tailed Eagle" OR "Aquila audax" Victoria site:environment.vic.gov.au
  - Anas superciliosa IUCN "Last assessed" OR "Year of last assessment" Least Concern trend datazone OR iucnredlist
  - Chenonetta jubata IUCN "Year of last assessment" OR "Last assessed" Least Concern 2016 OR 2024 OR 2025
  - "Vanellus miles" IUCN "Last assessed" OR "Year of last assessment" Least Concern 2016 OR 2024 OR 2025
  - "Corcorax melanorhamphos" IUCN "Last assessed" OR "Year of last assessment" 2018 OR 2024 Least Concern trend
  - Anas superciliosa IUCN Red List Least Concern assessed 2024 trend datazone
  - Vanellus miles IUCN Red List Last assessed Least Concern trend 2024 OR 2025
  - Haliastur sphenurus IUCN 2025 Least Concern countries Indonesia Solomon Islands datazone
  - site:datazone.birdlife.org Pacific Black Duck Anas superciliosa factsheet Least Concern 2024
  - site:datazone.birdlife.org Australian Wood Duck Chenonetta jubata factsheet 22680111
  - site:datazone.birdlife.org Straw-necked Ibis Threskiornis spinicollis factsheet
  - site:datazone.birdlife.org "Wedge-tailed Eagle" Aquila audax factsheet Least Concern 2025
  - site:datazone.birdlife.org Masked Lapwing Vanellus miles factsheet Least Concern
  - site:datazone.birdlife.org White-winged Chough Corcorax melanorhamphos factsheet
  - Pacific Black Duck Anas superciliosa breeding southern Australia June OR July clutch incubation ecolinc OR "Birds SA" OR HANZAB
  - "Australian Wood Duck" OR Chenonetta fox OR raven OR "wedge-tailed" predator duckling road
  - Aquila audax IUCN Red List 2025 Least Concern assessed trend "Wedge-tailed Eagle"
  - "White-winged Chough" breeding season August OR September incubation "19" Corcorax site:birdlife.org.au OR Wikipedia OR mdahlem
  - Masked Lapwing incubation "28" OR "28–30" OR "27" southern Australia ClimateWatch OR "NRE" OR Chambers Vanellus
  - "White-winged Chough" "August" OR "September to" breeding season Corcorax "eggs" site:australian.museum OR "Birds in Backyards" OR HANZAB OR "Reader's Digest"
  - Aquila audax IUCN native countries "Papua New Guinea" Indonesia Australia 2025 geographic range
  - "Whistling Kite" "secondary poisoning" OR rodenticide Haliastur threat
  - Corcorax melanorhamphos IUCN Red List Last assessed 2018 Least Concern trend Stable
  - "White-winged Chough" "August" "December" nest mud clutch Wikipedia OR "Birds of the World" OR HANZAB

<!-- batch6 -->
### Grok batch 6 (grok-4.7, prompt docs/research/prompt6.txt, output batch6.json)

**Silvereye** *Zosterops lateralis*  verdict: corrected, tier: 
- Errors in draft:
  - Size is 10–12.5 cm. HANZAB gives 11–13 cm and Birds in Backyards gives 10–12 cm.
  - Distribution is limited to eastern and southern Australia. The range also includes Tasmania and south-western Australia to about Shark Bay, and Birds in Backyards marks the Northern Territory as not present.
  - The season is given as August–January. Birds in Backyards goes to February, and Victorian eggs in HANZAB run from September to February.
  - The clutch is given as 2–4. Two or three is usual and four is uncommon. The Victorian Nest Record Scheme mean is 2.7.
  - Incubation is given as a single figure of about 11 days. That is close to the Nest Record Scheme means, but published figures run from 10 to 14 days.
  - Diet omits spiders, which Wikipedia and New Zealand Birds Online include.
  - Threats name cats and nest predators, which HANZAB supports, and omit killing in orchards and collisions with windows and vehicles.
- Conflicts:
  - Length: HANZAB 11–13 cm, stated length 12 cm; Birds in Backyards 10–12 cm, average 11 cm; Wikipedia 11–13 cm; Museums Victoria up to 12 cm.
  - Incubation: Nest Record Scheme means about 10.9–11.8 days, records 10–13 days; other HANZAB citations about 10 days, 10–12 days, 11 or 12 days, or 12–14 days (Kikkawa and Wilson 1983, Heron Island). New Zealand Birds Online’s narrative says 10–12 days and its data table says 12–14 days.
  - New Zealand arrival: HANZAB, a possible record about 1832 and the establishing influx in 1856; New Zealand Birds Online, the 1850s; Wikipedia, first recorded 1832 and greater numbers in 1856.
  - Clutch: Birds in Backyards, 2 to 3, rarely 4; HANZAB, two to four, usually three.
- Not well documented:
  - A single incubation length for southern Victoria. The Nest Record Scheme clusters near 11 days, and other studies give wider ranges.
  - How large a share of the cat records in HANZAB come from New Zealand rather than Victoria.
  - The July 2026 FFG spreadsheet and PDF. Cloudflare returned 403. The conclusion that it is not listed uses the indexed June 2024 and March 2025 lists, Birds in Backyards’ Secure status for Victoria, and the absence of a 2025–2026 amendment naming this species.
- Sources (10): https://www.birdsinbackyards.net/species/Zosterops-lateralis; https://www.nzbirdsonline.org.nz/assets/95597/1725856125-339_silvereye.pdf; https://www.nzbirdsonline.org.nz/species/silvereye; https://en.wikipedia.org/wiki/Silvereye; https://collections.museumsvictoria.com.au/species/8239; https://www.iucnredlist.org/species/22714212/263912483; http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=423; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0027/741627/FFG_Threatened_List_March_2025.pdf; https://birdlife.org.au/bird-profiles/silvereye/

**Crested Pigeon** *Ocyphaps lophotes*  verdict: corrected, tier: 
- Errors in draft:
  - Size starts at 31 cm. Birds in Backyards and Wikipedia start at 30 cm. A field account does use 31–35 cm, so the sources disagree.
  - Incubation is given only as about 21 days. That matches Birds in Backyards and BirdLife. The HANZAB figure cited by the Tasmanian assessment is 18–20 days.
  - Diet is limited to seeds and leaves. Birds in Backyards also includes insects.
  - Habitat is given as open woodland, grassland and towns. The species uses lightly wooded grassland and towns near water and is absent from dense forest.
  - “Few major threats” matches the increasing, unlisted population. It leaves out the predators named in the HANZAB-based assessment.
- Conflicts:
  - Length: Birds in Backyards 30–35 cm, average 33 cm; Wikipedia 30–34 cm; mdahlem 31–35 cm.
  - Incubation: Birds in Backyards and BirdLife 21 days; Wikipedia about three weeks; Higgins and Davies 1996, as cited by NRE Tasmania, 18–20 days; Avibase compiled range 18–20 days; one HBW-derived compilation 19 days. One secondary page gives 17–20 days.
  - Nestling period: Birds in Backyards 21 days; Higgins and Davies 1996, young leave at 14–19 days.
  - Diet: Birds in Backyards, seeds plus some leaves and insects; mdahlem, seeds only.
  - Range edge: Birds in Backyards, most of the mainland; the 2011 Tasmanian assessment excludes the Top End, Cape York and the extreme south-east and south-west. BirdLife describes a later spread into Melbourne, Canberra and Sydney.
- Not well documented:
  - The HANZAB species account itself. The 18–20 day incubation and 14–19 day nestling period are taken from the Tasmanian government’s citation of Higgins and Davies 1996, not from the handbook PDF.
  - Whether insects are a regular food or only occasional. Birds in Backyards includes them and one field account excludes them.
  - The July 2026 FFG file, which could not be downloaded. The indexed 2024 and March 2025 lists do not name the species, and Birds in Backyards marks Victoria Secure.
- Sources (9): https://www.birdsinbackyards.net/species/Ocyphaps-lophotes; https://birdlife.org.au/bird-profiles/crested-pigeon/; https://datazone.birdlife.org/species/factsheet/22690676; https://www.iucnredlist.org/species/22690676/253994941; https://en.wikipedia.org/wiki/Crested_pigeon; https://nre.tas.gov.au/Documents/Crested-pigeon-final.pdf; https://mdahlem.net/birds/11/crpigeon.php; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0027/741627/FFG_Threatened_List_March_2025.pdf

**Sacred Kingfisher** *Todiramphus sanctus*  verdict: corrected, tier: 
- Errors in draft:
  - The overseas range is given as New Zealand and the south-west Pacific. The species also breeds or winters in New Guinea and eastern Indonesia, and it occurs on Lord Howe, Norfolk and the Kermadecs.
  - “Throughout most of Australia” includes the dry interior. Birds in Backyards limits it to coastal mainland regions and says it is less common in Tasmania.
  - The season is given as September–March. Birds in Backyards gives September to December, only occasionally extended to March.
  - Nest sites are limited to tree hollows and tunnels in banks. Termite mounds are a normal site on Birds in Backyards and Wikipedia.
  - “Habitat loss and nest predation” are not stated as population threats on Birds in Backyards. The species is Secure and the reported IUCN trend is increasing.
- Conflicts:
  - Length: Birds in Backyards 19–24 cm, average 21 cm; mdahlem 20–23 cm; the draft 19–23 cm.
  - Season: Birds in Backyards September–December, occasionally to March; Wikipedia August–March, mostly September–January. A secondary southern-Australian account says September–March.
  - Clutch: Birds in Backyards and Wikipedia 3–6; New Zealand Birds Online 3–7, mean 5.
  - Incubation: Birds in Backyards 18 days; Wikipedia and an Australian field account 17–18 days; a secondary page says 16–17 days without a primary citation; New Zealand Birds Online’s data table 20–21 days. The New Zealand narrative does not give a day count.
  - Egg size: Wikipedia 25 × 22 mm; New Zealand Birds Online mean 29 × 24 mm. These may be Australian and New Zealand samples.
- Not well documented:
  - Which incubation figure is the HANZAB value for Australia. The handbook is cited by New Zealand Birds Online and by the ABSA bird-in-the-hand sheet, but the incubation paragraph of HANZAB volume 4 was not retrieved. The New Zealand table of 20–21 days and the Australian figures of 17–18 or 18 days are both in print.
  - Habitat loss as a measured threat. It is not on the Birds in Backyards or Wikipedia conservation text read here.
  - The July 2026 FFG file, which could not be downloaded.
- Sources (7): https://www.birdsinbackyards.net/species/Todiramphus-sanctus; https://en.wikipedia.org/wiki/Sacred_kingfisher; https://www.nzbirdsonline.org.nz/species/sacred-kingfisher; https://mdahlem.net/birds/14/sacrking.php; https://absa.asn.au/wp-content/uploads/2015/11/Sacred-Kingfisher-1.pdf; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0027/741627/FFG_Threatened_List_March_2025.pdf

**Rainbow Lorikeet** *Trichoglossus moluccanus*  verdict: uncertain, tier: 
- Errors in draft:
  - No draft entry. This is a new candidate.
- Conflicts:
  - Tasmania: Birds of the World, vagrant; Birds in Backyards, becoming more common; World Parrot Trust, included in the range; IUCN population text, rare in Tasmania, citing del Hoyo et al. 1997.
  - Southern season: Birds in Backyards June–January; Wikipedia August–January. Outside the south, breeding is recorded in every month except March.
  - Clutch: Birds in Backyards 2; Wikipedia and several other accounts 1–3; World Parrot Trust 2–3.
  - Incubation: Birds in Backyards 23 days; Wikipedia around 25 days; one aviculture account 23–25 days; one secondary account 25–26 days.
  - Nestling period: Birds in Backyards 45 days; other accounts about 7–9 weeks or 54–57 days.
  - Length: Birds in Backyards 28–32 cm; Birdfact 25–30 cm; World Parrot Trust 26 cm.
  - Trend: IUCN 2024, suspected decrease from unsustainable exploitation; Australian accounts describe an abundant, expanding urban bird. The same IUCN page says the Action Plan for Australian Birds 2020 did not find it near threatened.
- Not well documented:
  - A single wild incubation period for southern Victoria. The 23-day and 25-day figures are both published, and the handbook account was not retrieved.
  - Whether the IUCN decline from exploitation refers to this Australian species or was carried over from the former Coconut Lorikeet complex. The 2024 page still prints that sentence.
  - Current status in Tasmania: vagrant, scarce, or established. The sources disagree.
  - The July 2026 FFG file, which could not be downloaded. The indexed earlier lists do not name Trichoglossus moluccanus.
- Sources (8): https://birdsinbackyards.net/species/Trichoglossus-haematodus; https://www.birdsinbackyards.net/content/article/Rainbow-Lorikeets-Fun-facts-about-fun-bird; https://en.wikipedia.org/wiki/Rainbow_lorikeet; https://www.iucnredlist.org/species/22725334/254013129; https://birdsoftheworld.org/bow/species/railor5/cur/introduction; https://parrots.org/encyclopedia/rainbow-lorikeet/; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0027/741627/FFG_Threatened_List_March_2025.pdf

**Yellow-tailed Black-Cockatoo** *Zanda funerea*  verdict: uncertain, tier: 
- Errors in draft:
  - No draft entry. This is a new candidate.
- Conflicts:
  - Breeding season in the south: Birds of the World, October–March in South Australia, Victoria and Tasmania; Western Volcanic Plains guide, November–February; a secondary account, July–January in the south and March–August in the north.
  - Incubation: Bellarine community guide, around four weeks; a secondary species profile, about 29 days. Birds in Backyards prints no figure. The HANZAB account was not retrieved.
  - Weight: Birds in Backyards about 700 g; Australian Geographic 750–900 g.
  - Global trend against local reports: IUCN 2024, stable, in the absence of evidence for declines or substantial threats; BirdLife cites a significant east-coast decline in State of Australia’s Birds 2015; Wikipedia says the species is declining in Victoria and South Australia.
  - Taxonomy: one species with two or three subspecies in IUCN, BirdLife and Birds of the World; Saunders 2023 treats eastern, western and Tasmanian yellow-tailed cockatoos as three species in Zanda. The name whiteae is accepted by some lists and not by others.
  - Diet of southern birds: BirdLife includes some insects across the species; one secondary account says Tasmanian, western Victorian and South Australian birds eat seeds only.
- Not well documented:
  - The incubation period in HANZAB. Only secondary figures of about four weeks and about 29 days were retrieved.
  - How steep any Victorian decline is. IUCN’s 2024 justification says it found no evidence of a decline large enough to move the species, while BirdLife and Wikipedia report regional declines.
  - Whether whiteae is the form at Inverleigh. Southern Victoria is variously placed in whiteae or in xanthanota.
  - The July 2026 FFG file, which could not be downloaded. The older statutory lists retrieved, and the Western Volcanic Plains page, do not list the species in Victoria.
- Sources (12): https://www.birdsinbackyards.net/species/Calyptorhynchus-funereus; https://birdlife.org.au/bird-profiles/yellow-tailed-black-cockatoo/; https://www.iucnredlist.org/species/22684739/253974842; https://en.wikipedia.org/wiki/Yellow-tailed_black_cockatoo; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/yellow-tailed-black-cockatoo; https://www.environmentbellarine.org.au/cb_pages/files/Cockatoo%20-%20Info%20-%20Download.pdf; https://www.australianwildlife.org/animals/yellow-tailed-black-cockatoo; https://birdsoftheworld.org/bow/species/ytbcoc1/1.0/introduction; https://www.environment.gov.au/cgi-bin/sprat/public/spratlookupspecies.pl?name=cockatoo; https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv; https://www.environment.vic.gov.au/__data/assets/pdf_file/0027/741627/FFG_Threatened_List_March_2025.pdf; https://www.acf.org.au/our-work/nature/missing-wildlife/black-cockatoos
- outOfBatch:
  - Welcome Swallow incubation was not checked: that species is not in this batch.
  - Magpie-lark presence in Tasmania was not checked: that species is not in this batch.
  - Little Raven natural predators were not checked: that species is not in this batch.
- queries:
  - Silvereye Zosterops lateralis Birds in Backyards distribution breeding diet size conservation
  - Crested Pigeon Ocyphaps lophotes Birds in Backyards breeding clutch incubation diet size
  - Sacred Kingfisher Todiramphus sanctus Birds in Backyards breeding incubation clutch distribution
  - Rainbow Lorikeet Trichoglossus moluccanus Birds in Backyards IUCN EPBC FFG Victoria breeding
  - Yellow-tailed Black-Cockatoo Zanda funerea conservation status IUCN EPBC FFG Victoria breeding diet
  - site:birdsinbackyards.net Sacred Kingfisher Todiramphus sanctus size breeding incubation clutch
  - Silvereye Zosterops lateralis incubation period days clutch HANZAB "11" OR "12" OR "13" site:birdlife.org.au OR museum OR HANZAB
  - "Silvereye" site:australian.museum OR site:collections.museumsvictoria.com.au OR site:bie.ala.org.au Zosterops lateralis
  - Crested Pigeon Ocyphaps lophotes HANZAB incubation 18 OR 21 clutch endemic Tasmania predator cat
  - site:nzbirdsonline.org.nz Sacred Kingfisher HANZAB pdf incubation clutch
  - site:nzbirdsonline.org.nz "Crested Pigeon" OR Ocyphaps HANZAB pdf
  - "Rainbow Lorikeet" site:birdsinbackyards.net Trichoglossus moluccanus OR haematodus size breeding incubation
  - site:birdsinbackyards.net Yellow-tailed Black-Cockatoo Calyptorhynchus funereus size breeding incubation clutch
  - "Yellow-tailed Black-Cockatoo" OR "Zanda funerea" OR "Calyptorhynchus funereus" Victoria FFG Vulnerable OR "not listed" 2025 OR 2026
  - Sacred Kingfisher HANZAB incubation period days Higgins "17" OR "18" OR "20" Todiramphus OR Halcyon sanctus
  - "Flora and Fauna Guarantee Act" "Yellow-tailed Black-Cockatoo" OR "Zanda funerea" OR "Calyptorhynchus funereus" threatened list Victoria 2024 OR 2025 OR 2026
  - "FFG_Threatened_List_July_2026" "Yellow-tailed" OR "Zanda funerea" OR "Calyptorhynchus funereus" OR "not" site:environment.vic.gov.au
  - "Yellow-tailed Black-Cockatoo" "Flora and Fauna Guarantee" Vulnerable OR Endangered OR "not listed" Victoria -Wikipedia
  - filetype:pdf "FFG Threatened List" July 2026 "Yellow-tailed Black-Cockatoo" OR "Zanda funerea" OR "Calyptorhynchus funereus"
  - "Yellow-tailed Black-Cockatoo" "Calyptorhynchus funereus" "Category of Threat" Victoria "Vulnerable" FFG
  - "Silvereye" "Zosterops lateralis" "FFG Threatened List" "Category of Threat" Victoria
  - "Zosterops lateralis" OR "Ocyphaps lophotes" OR "Todiramphus sanctus" OR "Trichoglossus moluccanus" OR "Calyptorhynchus funereus" OR "Zanda funerea" "Threatened List" Victoria FFG 2024 OR 2025 OR 2026
  - site:environment.gov.au/cgi-bin/sprat Ocyphaps lophotes OR "Todiramphus sanctus" OR "Trichoglossus moluccanus" OR "Zanda funerea" OR "Calyptorhynchus funereus" "EPBC Act Listing Status"
  - Rainbow Lorikeet BirdLife Australia profile distribution breeding clutch incubation Trichoglossus moluccanus
  - "Todiramphus sanctus" SPRAT "Listed marine" OR "EPBC Act Listing Status" site:environment.gov.au
  - "Ocyphaps lophotes" OR "Trichoglossus moluccanus" OR "Trichoglossus haematodus" SPRAT "EPBC Act Listing Status" site:environment.gov.au
  - Crested Pigeon Wikipedia length cm incubation "Ocyphaps lophotes" "30" OR "31" diet seeds
  - site:datazone.birdlife.org Silvereye Zosterops lateralis factsheet Least Concern trend Australia breeding endemic
  - site:datazone.birdlife.org Rainbow Lorikeet Trichoglossus moluccanus factsheet trend introduced Perth

### 8d. Merge status as of 26 Oct 2026, 2:05 AM AEDT
- Batches 1–6 are applied to `content/birds.ts`, through `research/tools/apply_birds.py`, which can safely be rerun.
  - All 38 selected birds now have Grok-sourced origins, distribution, habitat, breeding, diet, threats, size and conservation status.
  - Backups: `birds.ts.orig` is the first draft and `research/birds.ts.pre-merge` is the version after the first pass.
  - I added optional `habitat`, `trees`, `hangouts` and `tier` fields to `lib/types.ts`. `tsc --noEmit` passes.
- `species.json` now gives every species `ala5km`, `ala10km`, `tier`, `factCheck` and `conservation`. The backup is `species.json.orig`.
  - Rainbow Lorikeet and Yellow-tailed Black-Cockatoo were added with status "candidate". Their sourced write-ups are in `research/new-candidates.json`, and Grok's verdict on both is "uncertain". They are not in `birds.ts`, so the site won't render them.
- **The three proposals are resolved by Grok's sources and applied:**
  - Welcome Swallow: incubation now gives both figures.
  - Magpie-lark: now reads "not a Tasmanian resident, rare vagrant".
  - Little Raven: now reads "natural predators not well documented".
- **Editorial caveat:** the merged text reads like research notes, for example "A Yarra Valley study found…". It's accurate and sourced, but Merge should tighten it to site copy before building.

<!-- batch7 -->
### Grok batch 7 (grok-4.7, prompt docs/research/prompt7.txt, output batch7.json)

**Australian Magpie** *Gymnorhina tibicen*  verdict: n/a, tier: 
- trees: Australian Magpies need trees beside open ground. The nest is a stick platform in the outer branches, usually high in a fork, most often in a eucalypt. HANZAB also records nests in pine, hawthorn and elm. Around Inverleigh the trees are Manna Gum and River Red Gum, over Wallaby Grass in the reserve and over pasture and lawns in town, which is where the birds walk and hunt insects.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 1183 records of this species. The largest public strings are Inverleigh Nature Conservation Reserve (141), Lawson Reserve (64), the Leigh River south of the Hamilton Highway (60), the town name Inverleigh (52), Old Shelford Track in the reserve (44), Barwon River at Bell Bridge (39) and at Olivers Property (29), and the Barwon–Leigh junction (22). Further strings are the Murnong gully and dam (21), the recreation reserve (13) and Native Hut Creek on the Hamilton Highway at Murgheboluc (23), which sits inside the 5 km circle.
- Not well documented:
  - No Inverleigh study names the nest tree. Use of pine, cypress or fruit trees in the town is not documented, though HANZAB records pines and other introduced trees elsewhere.
  - Yellow Box is on the Golden Plains plains list, and no source links it to local magpie nests.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (11): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.melbourneplaygrounds.com.au/lawson-reserve-playground-cnr-cambridge-street-and-hamilton-highway-inverleigh; https://www.birdsinbackyards.net/species/Cracticus-tibicen; https://australian.museum/learn/animals/birds/australian-magpie/; https://en.wikipedia.org/wiki/Australian_magpie
- Queries (20): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Gymnorhina%20tibicen%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Gymnorhina%20tibicen%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Gymnorhina%20tibicen%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Gymnorhina+tibicen%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | site:australian.museum Australian Magpie nesting habitat eucalypt | https://www.birdsinbackyards.net/species/Gymnorhina-tibicen | https://en.wikipedia.org/wiki/Australian_magpie | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Gymnorhina+tibicen%22+AND+locality%3A%22Hamilton+Hwy+at+Native+Hut+Creek%2C+Murgheboluc%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality%2CdataResourceName&facet=off

**Superb Fairywren** *Malurus cyaneus*  verdict: n/a, tier: 
- trees: Superb Fairywrens keep to wooded country with dense low cover, including open eucalypt woodland and gardens that still have a shrubby understorey. The domed grass nest is built in thick grass or a shrub, usually under a metre, and the birds take insects on the ground and in low bushes. At Inverleigh, Hedge Wattle thickets and Wallaby Grass in the reserve, and shrubby creek edges, match that cover. Lantana and blackberry are used as shelter elsewhere in Australia. The shrub species used for nests in the reserve is not named.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 990 records of this species. Records are spread through the reserve and the rivers: Inverleigh Nature Conservation Reserve (146), the Leigh River south of the highway (54), Old Shelford Track (53), the town name Inverleigh (40), Barwon River at Bell Bridge (39), Lawson Reserve (32), Barwon River at Olivers Property (22) and the Barwon–Leigh junction (21). The Murnong gully and dam has 19 records under that label.
- Not well documented:
  - No source names the Inverleigh nest shrub. Sweet Bursaria is a local tall shrub in the Golden Plains guide, and no page ties it to this species.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Malurus-cyaneus; https://australian.museum/learn/animals/birds/superb-fairy-wren/; https://en.wikipedia.org/wiki/Superb_fairywren
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Malurus%20cyaneus%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Malurus%20cyaneus%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Malurus%20cyaneus%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Malurus+cyaneus%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Superb_fairywren | https://www.birdsinbackyards.net/species/Malurus-cyaneus

**Red Wattlebird** *Anthochaera carunculata*  verdict: n/a, tier: 
- trees: Red Wattlebirds live in forests, woodlands and gardens and defend flowering plants. They take nectar, insects, berries and honeydew. The cup nest is usually in a eucalypt fork. A study at Armidale, summarised on Wikipedia from Ford 1999, found more nests in Manna Gum and Apple Box than in other trees at that site. Manna Gum is one of the two dominant trees in the Inverleigh reserve, which also has Banksia. Whether Inverleigh birds use those same nest trees is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 964 records of this species. The leading strings are Inverleigh Nature Conservation Reserve (141), Lawson Reserve (64), the Leigh River south of the highway (56), Old Shelford Track (45), the town name Inverleigh (38) and Barwon River at Bell Bridge (25). High Street has 12 records, and the Barwon–Leigh junction has 14.
- Not well documented:
  - The Manna Gum nesting preference is from Armidale, New South Wales, not from Inverleigh.
  - Birds in Backyards describes feeding and habitat and does not describe the nest tree.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Anthochaera-carunculata; https://en.wikipedia.org/wiki/Red_wattlebird
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Anthochaera%20carunculata%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Anthochaera%20carunculata%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Anthochaera%20carunculata%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Anthochaera+carunculata%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Red_wattlebird | https://www.birdsinbackyards.net/species/Anthochaera-carunculata

**White-plumed Honeyeater** *Ptilotula penicillata*  verdict: n/a, tier: 
- trees: White-plumed Honeyeaters are birds of open woodland near water, and both Birds in Backyards and the Australian Museum link the species to River Red Gum. They feed in the crowns and in shrubs on nectar, lerps, honeydew, manna, fruit and some seeds, and the small cup nest is built in the crown. HANZAB, as summarised on Wikipedia, also places them in riparian eucalypt woodland that includes paperbark, wattle or she-oak. River Red Gum lines the Leigh at Inverleigh and grows in the reserve, with Manna Gum, Hedge Wattle and she-oak around it.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 959 records of this species. River and reserve strings lead: Inverleigh Nature Conservation Reserve (128), Lawson Reserve (62), the Leigh River south of the highway (60), Old Shelford Track (53), Barwon River at Bell Bridge (44), the town name Inverleigh (44), Barwon River at Olivers Property (28) and the Barwon–Leigh junction (21).
- Not well documented:
  - The Ptilotula penicillata Birds in Backyards URL returned 404. The live page uses the older name Lichenostomus penicillatus. ALA returned these records under Ptilotula penicillata.
  - Removal of creek trees is named as a threat. A local count of nest trees along the Leigh was not found.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Lichenostomus-penicillatus; https://australian.museum/learn/animals/birds/white-plumed-honeyeater/; https://en.wikipedia.org/wiki/White-plumed_honeyeater
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Ptilotula%20penicillata%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Ptilotula%20penicillata%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Ptilotula%20penicillata%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Ptilotula+penicillata%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://www.birdsinbackyards.net/species/Ptilotula-penicillata | https://en.wikipedia.org/wiki/White-plumed_honeyeater

**New Holland Honeyeater** *Phylidonyris novaehollandiae*  verdict: n/a, tier: 
- trees: New Holland Honeyeaters stay where banksias and grevilleas flower, in heath, forest, woodland and gardens. Most feeding is low in bushes and thickets, on nectar, fruit, insects and spiders, and the cup nest is placed in a bush or tree from ground level to about 6 m. They also take nectar from banksia, hakea, grass-trees and wattles. The Inverleigh reserve has areas of Banksia, and Silver Banksia is an indigenous plains plant in the Golden Plains guide. Local grevilleas are not named in the sources checked.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 734 records of this species. The reserve and its tracks hold the most records: Inverleigh Nature Conservation Reserve (113), Old Shelford Track (48), Lawson Reserve (48), the Leigh River south of the highway (42) and the town name Inverleigh (27). Carrah Track has 18, High Street has 16, the Flora and Fauna Reserve label has 16, and the recreation reserve has 9. Bell Bridge does not appear in the returned locality list.
- Not well documented:
  - Grevillea is named in the national habitat accounts. No Inverleigh plant list consulted here records grevillea in the reserve.
  - Bell Bridge and several river labels are absent from the returned locality list, so the river is a lesser string for this species than for the White-plumed Honeyeater.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Phylidonyris-novaehollandiae; https://australian.museum/learn/animals/birds/new-holland-honeyeater/; https://en.wikipedia.org/wiki/New_Holland_honeyeater
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Phylidonyris%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Phylidonyris%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Phylidonyris%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Phylidonyris+novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/New_Holland_honeyeater

**Little Raven** *Corvus mellori*  verdict: n/a, tier: 
- trees: Little Ravens feed in grassland, pasture and other open country and roost in nearby dry open woodland. The stick nest is a thin cup in an outer fork, often under 10 m, and dead trees with bare branches are used. Inverleigh's scattered River Red Gums and Manna Gums, in the reserve and along the Leigh and Barwon, are the local open woodland. Which of those trees holds roosts or nests here is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 652 records of this species. Public strings cover the reserve, the rivers and open roadsides: Inverleigh Nature Conservation Reserve (91), the Leigh River south of the highway (40), Lawson Reserve (38), Barwon River at Bell Bridge (32), Old Shelford Track (26), the town name Inverleigh (22) and Barwon River at Olivers Property (21). Native Hut Creek at Murgheboluc has 18, the Murnong gully and dam has 17, and the recreation reserve has 8.
- Not well documented:
  - Roost and nest trees at Inverleigh are inferred from the open-woodland habitat and the local gums. No nest-tree record for the town was found.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Corvus-mellori; https://en.wikipedia.org/wiki/Little_raven
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Corvus%20mellori%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Corvus%20mellori%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Corvus%20mellori%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Corvus+mellori%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Little_raven | https://www.birdsinbackyards.net/species/Corvus-mellori

**Eastern Rosella** *Platycercus eximius*  verdict: n/a, tier: 
- trees: Eastern Rosellas use open woodland, grassland, farmland and remnant bush, and also parks, gardens and golf courses with lawns. They feed mainly on the ground among grasses, and also take seeds, fruit, buds, flowers, nectar and insects in trees and bushes. The nest is a hollow, usually in a eucalypt. River Red Gum and Manna Gum are the local hollow-bearing trees along the rivers and in the reserve, over Wallaby Grass, pasture and town lawns.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 779 records of this species. Leading strings are Inverleigh Nature Conservation Reserve (126), the Leigh River south of the highway (56), the town name Inverleigh (41), Lawson Reserve (41) and Old Shelford Track (36). River strings continue at Olivers Property (18), Bell Bridge (17) and the Barwon–Leigh junction (15). The recreation reserve has 8.
- Not well documented:
  - HANZAB diet detail of about 50 plant species is cited for the species generally, including New Zealand exotics. An Inverleigh food-plant list was not found.
  - Competition for hollows with Common Starlings is recorded by Birds in Backyards. Local hollow loss is not measured here.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (11): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.melbourneplaygrounds.com.au/lawson-reserve-playground-cnr-cambridge-street-and-hamilton-highway-inverleigh; https://www.birdsinbackyards.net/species/Platycercus-eximius; https://australian.museum/learn/animals/birds/eastern-rosella/; https://en.wikipedia.org/wiki/Eastern_rosella
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Platycercus%20eximius%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Platycercus%20eximius%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Platycercus%20eximius%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Platycercus+eximius%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Eastern_rosella

**Grey Shrike-thrush** *Colluricincla harmonica*  verdict: n/a, tier: 
- trees: Grey Shrike-thrushes live in forests and woodlands, including eucalypt forest and riparian strips of eucalypt, paperbark or she-oak, and they also use parks and gardens. They hunt on the ground around fallen logs and on trunks and limbs. The cup nest goes in a hollow, fork, crevice, vine or dense cover, and also in sheds and hanging baskets. The reserve's Manna Gum, River Red Gum, fallen timber and shrubby wattle fit that description. The nest site used at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 734 records of this species. The reserve leads: Inverleigh Nature Conservation Reserve (137), the Leigh River south of the highway (43), Old Shelford Track (39), the town name Inverleigh (36), Lawson Reserve (25), Barwon River at Bell Bridge (22), the junction (16) and Olivers Property (16).
- Not well documented:
  - Birds in Backyards describes the nest materials and does not name the support. Nest sites used here are taken from the Western Volcanic Plains field guide and Birds Queensland, not from an Inverleigh nest record.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Colluricincla-harmonica; https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/grey-shrike-thrush; https://birdsqueensland.org.au/bird/grey-shrikethrush/
- Queries (19): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Colluricincla%20harmonica%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Colluricincla%20harmonica%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Colluricincla%20harmonica%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Colluricincla+harmonica%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | Grey Shrike-thrush nest site fork hollow Colluricincla harmonica habitat eucalypt | https://bwvp.ecolinc.vic.edu.au/fieldguide/fauna/grey-shrike-thrush | https://birdsqueensland.org.au/bird/grey-shrikethrush/

**Willie Wagtail** *Rhipidura leucophrys*  verdict: n/a, tier: 
- trees: Willie Wagtails use open woodland, grassland and dry forest, and also parks, gardens, golf courses and sports fields. They hunt insects on the ground and from a perch. The grass cup, bound with spider web, is built on a thin branch, in a shrub, or on a rafter under a verandah or inside a shed. No source names a preferred tree species. At Inverleigh the limbs of River Red Gums along the Leigh and Barwon, and the trees and sheds of the town, are the supports available for that nest.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 692 records of this species. Records sit on the reserve, the rivers and in town: Inverleigh Nature Conservation Reserve (88), the Leigh River south of the highway (54), the town name Inverleigh (48), Lawson Reserve (42), Olivers Property (24), Bell Bridge (22) and the junction (11). The Murnong gully and dam has 7 under that label.
- Not well documented:
  - Preferred nest-tree species is not documented for the species or for Inverleigh.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Rhipidura-leucophrys; https://australian.museum/learn/animals/birds/willie-wagtail/; https://en.wikipedia.org/wiki/Willie_wagtail
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Rhipidura%20leucophrys%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Rhipidura%20leucophrys%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Rhipidura%20leucophrys%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Rhipidura+leucophrys%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Willie_wagtail

**Galah** *Eolophus roseicapilla*  verdict: n/a, tier: 
- trees: Galahs use open country with scattered trees, usually near water, and they are scarce in dense wet forest. The Australian Museum describes the nest as a tree hollow or similar site, lined with leaves, and the food as seeds taken on the ground, mostly grasses and cultivated crops. Wikipedia records flocks feeding on open grass and birds stripping leaves and bark. Inverleigh offers River Red Gum and Manna Gum hollows, Wallaby Grass and pasture. A Friends of the reserve note says she-oak cones are taken by cockatoos and parrots. A galah food list for Inverleigh was not found.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 663 records of this species. Leading strings are Inverleigh Nature Conservation Reserve (98), the Leigh River south of the highway (43), the town name Inverleigh (35), Old Shelford Track (32), Bell Bridge (23), Lawson Reserve (22), the junction (13) and Olivers Property (12). High Street has 8.
- Not well documented:
  - Birds in Backyards has no Galah page: both Eolophus roseicapilla and Cacatua roseicapilla returned 404.
  - The she-oak cone note is for cockatoos and parrots as a group, not a galah diet study.
  - Hollow-bearing eucalypts near water are described in secondary accounts. The Museum page says a tree hollow and does not name the tree genus.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://australian.museum/learn/animals/birds/galah/; https://en.wikipedia.org/wiki/Galah; https://library.dbca.wa.gov.au/Journals/082168/082168-21.pdf
- Queries (21): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Eolophus%20roseicapilla%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Eolophus%20roseicapilla%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Eolophus%20roseicapilla%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Eolophus+roseicapilla%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | Galah Eolophus roseicapilla nest hollow eucalypt feeding seeds Birds in Backyards OR Australian Museum | https://www.birdsinbackyards.net/species/Eolophus-roseicapilla | https://www.birdsinbackyards.net/species/Cacatua-roseicapilla | https://birdlife.org.au/bird-profiles/galah | https://en.wikipedia.org/wiki/Galah

**Spotted Pardalote** *Pardalotus punctatus*  verdict: n/a, tier: 
- trees: Spotted Pardalotes keep to eucalypt forest and woodland, and to parks that still have a eucalypt canopy. They pick psyllids, lerps and sugary leaf exudates from the foliage. The nest is a lined chamber at the end of a tunnel in an earth bank, and sometimes a tree hollow. The reserve and the river corridors are Manna Gum and River Red Gum country, and the Leigh and Barwon have banks. Which gum they feed in most at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 533 records of this species. The reserve dominates: Inverleigh Nature Conservation Reserve (117), Old Shelford Track (34), the Leigh River south of the highway (21), the town name Inverleigh (19), the Flora and Fauna Reserve label (14), Carrah Track (14) and Lawson Reserve (14). Bell Bridge and Olivers Property have 6 and 6 under those labels, fewer than the reserve tracks.
- Not well documented:
  - No local study says whether Manna Gum or River Red Gum supplies more of the lerp. Both are the documented eucalypts.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Pardalotus-punctatus; https://australian.museum/learn/animals/birds/spotted-pardalote/; https://en.wikipedia.org/wiki/Spotted_pardalote
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Pardalotus%20punctatus%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Pardalotus%20punctatus%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Pardalotus%20punctatus%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Pardalotus+punctatus%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Spotted_pardalote

**Grey Fantail** *Rhipidura albiscapa*  verdict: n/a, tier: 
- trees: Grey Fantails use most treed habitats, including eucalypt forest, and they visit densely planted gardens. They catch flying insects from the edge of the foliage at all levels. Birds in Backyards says they often use eucalypts. The nest, with its long stem, sits in a thin fork, usually 2 to 5 m up. Local canopy trees are Manna Gum and River Red Gum. The fork species used at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 450 records of this species. Most records are inside the reserve: Inverleigh Nature Conservation Reserve (99), Old Shelford Track (38), the town name Inverleigh (30), Carrah Track (15) and the Flora and Fauna Reserve label (13). The Leigh River north of the highway has 8 and the south side has 6. A dam on the Teesdale–Inverleigh Road has 5.
- Not well documented:
  - River localities are weaker than the reserve tracks. Bell Bridge is absent from the returned locality list.
  - The nest-tree species at Inverleigh is not documented.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Rhipidura-albiscapa; https://en.wikipedia.org/wiki/Grey_fantail
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Rhipidura%20albiscapa%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Rhipidura%20albiscapa%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Rhipidura%20albiscapa%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Rhipidura+albiscapa%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://www.birdsinbackyards.net/species/Rhipidura-fuliginosa | https://en.wikipedia.org/wiki/Grey_fantail

**Welcome Swallow** *Hirundo neoxena*  verdict: n/a, tier: 
- trees: Welcome Swallows hunt flying insects over open country and water, and they avoid heavy forest and the drier inland. The nest is an open cup of mud and grass fixed to a building, bridge or rock wall, and lined with feathers and fur. The sources checked do not name a roost tree or a food plant. Inverleigh's open river flats, town buildings and reserve edge match the places where the birds were recorded.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 527 records of this species. Town and river strings lead the reserve: Lawson Reserve (48), Inverleigh Nature Conservation Reserve (43), the Leigh River south of the highway (43), the town name Inverleigh (41) and Bell Bridge (19). Olivers Property has 10, the junction has 8, High Street has 5, and the dam on the Teesdale–Inverleigh Road has 4.
- Not well documented:
  - Nest plants are mud and grass, and the support is a structure. A roost tree for Inverleigh was not found.
  - Lawson Reserve outranks the Nature Conservation Reserve on locality strings, unlike the woodland insectivores in this batch.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Hirundo-neoxena; https://australian.museum/learn/animals/birds/welcome-swallow/; https://en.wikipedia.org/wiki/Welcome_swallow
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Hirundo%20neoxena%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Hirundo%20neoxena%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Hirundo%20neoxena%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Hirundo+neoxena%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Welcome_swallow

**Striated Pardalote** *Pardalotus striatus*  verdict: n/a, tier: 
- trees: Striated Pardalotes use almost any place with trees or shrubs, and they favour eucalypt forest and woodland. They take insects from high foliage and sometimes from low shrubs. The nest is in a tree hollow or a tunnel in an earth bank, and also in small openings in buildings. Manna Gum and River Red Gum canopy, plus banks on the Leigh and Barwon, match that. The hollow tree used at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 530 records of this species. Reserve, town and river strings are all well represented: Inverleigh Nature Conservation Reserve (76), Old Shelford Track (38), the town name Inverleigh (31), Lawson Reserve (27), Bell Bridge (21), High Street (18) and the Leigh River south of the highway (17). Olivers Property has 12, the junction has 9, and Inverleigh Golf Club has 6.
- Not well documented:
  - The hollow-tree species at Inverleigh is not documented. Golf Club records show use of the town's open treed ground as well as the reserve.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Pardalotus-striatus; https://australian.museum/learn/animals/birds/striated-pardalote/; https://en.wikipedia.org/wiki/Striated_pardalote
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Pardalotus%20striatus%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Pardalotus%20striatus%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Pardalotus%20striatus%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Pardalotus+striatus%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Striated_pardalote

**Yellow-faced Honeyeater** *Caligavis chrysops*  verdict: n/a, tier: 
- trees: Yellow-faced Honeyeaters use open forest and woodland, often along rivers, and also parks, gardens, orchards and patches of blackberry or Scotch broom. Across their range the forest most often described is spotted gum with ironbarks and stringybarks, and wattle, banksia or she-oak woodland is used less often. They feed in flowers, foliage and mistletoe, on nectar, pollen, fruit, seeds and insects, and the cup nest is placed in understorey shrubs, hedges or vines. Inverleigh's documented trees are Manna Gum, River Red Gum, wattles, she-oaks and banksia, so the local match is riparian and shrubby woodland. A local forage-plant list was not found.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 400 records of this species. The reserve holds most of the named records: Inverleigh Nature Conservation Reserve (97), Old Shelford Track (41), the town name Inverleigh (26) and Carrah Track (11). The Leigh River south of the highway has 7, the Flora and Fauna Reserve label has 6, Lawson Reserve has 5, and Inverleigh Golf Club has 3.
- Not well documented:
  - The Caligavis chrysops Birds in Backyards URL returned 404. The live page uses Lichenostomus chrysops. ALA records were returned under Caligavis chrysops.
  - Ironbark and spotted gum, the trees most often named in the range-wide habitat account, are not the dominant Inverleigh trees in the sources read.
  - Mistletoe feeding is recorded for the species. Mistletoe on Inverleigh gums was not checked.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (10): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Lichenostomus-chrysops; https://australian.museum/learn/animals/birds/yellow-faced-honeyeater/; https://en.wikipedia.org/wiki/Yellow-faced_honeyeater
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Caligavis%20chrysops%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Caligavis%20chrysops%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Caligavis%20chrysops%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Caligavis+chrysops%22&lat=-38.10&lon=144.05&radius=5&pageSize=3&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://www.birdsinbackyards.net/species/Caligavis-chrysops | https://en.wikipedia.org/wiki/Yellow-faced_honeyeater

**Magpie-lark** *Grallina cyanoleuca*  verdict: n/a, tier: 
- trees: Magpie-larks need short or bare ground for feeding, mud for the nest, and a tree. The mud bowl, lined with grass and feathers, sits on a horizontal branch, often near water, or on a beam or pole. They eat insects and their larvae, earthworms and freshwater invertebrates on the ground. No source names a preferred tree. River Red Gums beside the Leigh and Barwon give branches next to mud and water, with pasture and lawns for feeding.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 430 records of this species. The Leigh River south of the highway leads (45), ahead of the town name Inverleigh (37), Inverleigh Nature Conservation Reserve (35), Lawson Reserve (26), Olivers Property (20), the junction (14) and Bell Bridge (14). The recreation reserve has 5.
- Not well documented:
  - No preferred tree species is documented. The River Red Gum link is the local tree that supplies a horizontal branch beside water, which is the nest situation described for the species.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Grallina-cyanoleuca; https://en.wikipedia.org/wiki/Magpie-lark
- Queries (17): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Grallina%20cyanoleuca%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Grallina%20cyanoleuca%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Grallina%20cyanoleuca%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Grallina+cyanoleuca%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Magpie-lark

**Eastern Yellow Robin** *Eopsaltria australis*  verdict: n/a, tier: 
- trees: Eastern Yellow Robins use damp woodland and forest, from dry woodland to rainforest, and shaded parks and gardens. They pounce from a trunk or low perch onto insects and spiders on the ground. The cup nest is woven into an upright fork, usually within 5 m of the ground, though nests are recorded up to 20 m, and it is disguised with lichen, moss, bark or leaves. The reserve's Manna Gum and River Red Gum grassy woodland is the local habitat of that kind. The nest tree used at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 325 records of this species. Records are concentrated in the reserve: Inverleigh Nature Conservation Reserve (98), Old Shelford Track (26), Old Shelford Track at Carrah Track (18), the town name Inverleigh (16), Carrah Track (8) and the Flora and Fauna Reserve label (6). The Leigh River north of the highway has 4. Lawson Reserve, Bell Bridge and the junction are absent from the returned locality list.
- Not well documented:
  - This is the most reserve-centred species in the batch on the locality strings. River and town-park labels are scarce in the returned locality list.
  - The nest tree at Inverleigh is not documented.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Eopsaltria-australis; https://en.wikipedia.org/wiki/Eastern_yellow_robin
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Eopsaltria%20australis%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Eopsaltria%20australis%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Eopsaltria%20australis%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Eopsaltria+australis%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Eastern_yellow_robin | https://www.birdsinbackyards.net/species/Eopsaltria-australis

**Red-browed Finch** *Neochmia temporalis*  verdict: n/a, tier: 
- trees: Red-browed Finches live in grassy patches with dense shrubs, often along creeks. They eat seeds of grasses and herbs, including non-native seeds, on the ground or from seeding heads, plus some insects. The domed nest of twigs and grass is built in a dense shrub about 1 to 2 m up. The reserve's Wallaby Grass and Hedge Wattle thickets, and the grassy edges of the Leigh, match that pattern. The shrub species used for nests at Inverleigh is not named.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 400 records of this species. Reserve and Leigh River strings lead: Inverleigh Nature Conservation Reserve (74), the Leigh River south of the highway (31), the town name Inverleigh (22), Lawson Reserve (15), the Barwon–Leigh junction (14), Old Shelford Track (14) and Bell Bridge (12).
- Not well documented:
  - Wikipedia gives nest height as 2–3 m and Birds in Backyards as 1–2 m. Both say a dense shrub. The Inverleigh shrub is not named.
  - An older Birds in Backyards archive lists Lantana camara as an associated plant. That weed is not in the Inverleigh plant lists read here.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (11): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Neochmia-temporalis; https://australian.museum/learn/animals/birds/red-browed-finch/; https://birdlife.org.au/bird-profiles/red-browed-finch; https://en.wikipedia.org/wiki/Red-browed_finch
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Neochmia%20temporalis%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Neochmia%20temporalis%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Neochmia%20temporalis%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Neochmia+temporalis%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | Red-browed Finch OR Neochmia temporalis nest shrub grass creek habitat Australia Museum OR BirdLife | https://en.wikipedia.org/wiki/Red-browed_finch

**Black-faced Cuckooshrike** *Coracina novaehollandiae*  verdict: n/a, tier: 
- trees: Black-faced Cuckooshrikes use almost any wooded habitat except rainforest, including suburbs, where they perch on wires and aerials. They take insects in the air, in foliage and on the ground, plus some fruit and seeds. The nest is a very small saucer of sticks and bark bound with cobwebs. Birds Queensland, citing HANZAB, places that nest on exposed branches of eucalypt or acacia. Inverleigh's Manna Gums, River Red Gums and wattles are the local trees of that kind. The nest tree used here is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 417 records of this species. Reserve, town and river strings are all in the top set: Inverleigh Nature Conservation Reserve (73), the town name Inverleigh (32), the Leigh River south of the highway (27), Old Shelford Track (21), the junction (14), Bell Bridge (13), Olivers Property (12) and Lawson Reserve (12).
- Not well documented:
  - Birds in Backyards describes the nest materials and does not name the tree. The eucalypt or wattle fork is from Birds Queensland's HANZAB summary, not from an Inverleigh nest.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
- Sources (11): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Coracina-novaehollandiae; https://australian.museum/learn/animals/birds/black-faced-cuckoo-shrike/; https://birdlife.org.au/bird-profiles/black-faced-cuckoo-shrike; https://birdsqueensland.org.au/bird/black-faced-cuckoo-shrike/
- Queries (19): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Coracina%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Coracina%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Coracina%20novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Coracina+novaehollandiae%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | Black-faced Cuckooshrike nest fork eucalypt sticks cobweb Birds in Backyards OR HANZAB | https://birdsqueensland.org.au/bird/black-faced-cuckoo-shrike/ | https://en.wikipedia.org/wiki/Black-faced_cuckooshrike

**Red-rumped Parrot** *Psephotus haematonotus*  verdict: n/a, tier: 
- trees: Red-rumped Parrots live on lightly timbered plains, in open woodland and along watercourses with grass. They feed on the ground on seeds and leaves of grasses, and also on seeds, fruit and flowers in trees, often beside Eastern Rosellas and Galahs. The nest is a hollow, usually in a eucalypt, and sometimes a nest box. River Red Gum and Manna Gum over Wallaby Grass, pasture and river flats are the local version of that habitat. Which hollow trees they use at Inverleigh is not documented.
- hangouts: Within 5 km of Inverleigh, the Atlas of Living Australia holds 485 records of this species. Reserve, town and river strings are close together: Inverleigh Nature Conservation Reserve (69), the Leigh River south of the highway (40), the town name Inverleigh (39), Bell Bridge (33), Lawson Reserve (18), the junction (16), Old Shelford Track (15) and Olivers Property (14).
- Not well documented:
  - The hollow tree at Inverleigh is not documented. She-oak cones are noted by the Friends group for cockatoos and parrots as a group, and this page does not treat that as a measured red-rumped parrot diet.
  - ALA locality strings split one place across several labels, including track names and an Inverleigh VIC 3321 prefix. Each count belongs to that string alone.
  - eBird hotspot pages returned a bot-check page, so species totals on eBird were not read.
  - Some locality strings are private properties marked restricted access, including Maguire and UBLN sites on the Leigh. They are listed in the evidence and are not treated as public hangouts.
- Sources (9): https://inverleigh.org.au/features/nature-conservation/; https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf; https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html; https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16; https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk; https://issuu.com/leighnews/docs/leigh_news_july_2023/s/27359474; https://ebird.org/hotspot/L2547650; https://www.birdsinbackyards.net/species/Psephotus-haematonotus; https://en.wikipedia.org/wiki/Red-rumped_parrot
- Queries (18): https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Psephotus%20haematonotus%22&lat=-38.10&lon=144.05&radius=5&facets=locality&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrence/facets?q=species%3A%22Psephotus%20haematonotus%22&lat=-38.10&lon=144.05&radius=5&facets=dataResourceName&flimit=20 | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Psephotus%20haematonotus%22&lat=-38.10&lon=144.05&radius=5&pageSize=0&facet=off | https://biocache-ws.ala.org.au/ws/occurrences/search?q=species%3A%22Psephotus+haematonotus%22&lat=-38.10&lon=144.05&radius=5&pageSize=1&fl=decimalLatitude%2CdecimalLongitude%2Clocality&facet=off | Inverleigh Flora Reserve Nature Conservation Reserve vegetation River Red Gum Yellow Gum Manna Gum sheoak wattle | Inverleigh Nature Conservation Reserve Parks Victoria vegetation grassy woodland | Lawson Reserve Inverleigh Leigh River location | Golden Plains Shire OR Corangamite CMA Leigh River Barwon River Inverleigh vegetation River Red Gum woodland | Golden Plains Shire Plains and Rivers Planting Guide River Red Gum Manna Gum Yellow Box Drooping Sheoak PDF | eBird hotspot Inverleigh Nature Conservation Reserve Leigh River Barwon L25 | https://inverleigh.org.au/features/nature-conservation/ | https://www.recreatingthecountry.com.au/wild-plants-of-inverleigh.html | https://www.goldenplains.vic.gov.au/sites/default/files/Plains%20and%20Rivers%20Planting%20Guide.pdf | https://planning-schemes.app.planning.vic.gov.au/Golden%20Plains/ordinance/42.03-s16 | https://ebird.org/hotspot/L2547650 | https://www.melbourneplaygrounds.com.au/inverleigh-leigh-river-environmental-heritage-walk | https://en.wikipedia.org/wiki/Red-rumped_parrot | https://www.birdsinbackyards.net/species/Psephotus-haematonotus
