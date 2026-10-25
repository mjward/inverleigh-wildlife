# How the species list was chosen

_Draft for review, 25 October 2026 (AEDT)._

## Source

**Atlas of Living Australia (ALA) biocache occurrence API.** ALA aggregates eBird, BirdLife Australia's Birdata, the Victorian Biodiversity Atlas, iNaturalist and museum records.

Species query, counting records per species:

```
https://biocache-ws.ala.org.au/ws/occurrence/facets?q=*:*&fq=class:Aves&lat=-38.10&lon=144.05&radius=10&facets=species&flimit=70
```

- **Centre:** -38.10, 144.05, which is Inverleigh township at the Leigh and Barwon junction.
- **Radius:** 10 km.
- **Date range:** none. All years are included. Records run from 1896 to 2026; I got this from the `facets=year` query on the same URL.
- **Total bird records in the circle:** 53,375.

Records by dataset, using the `facets=data_resource` query:

| Dataset | Records |
|---|---|
| eBird Australia | 32,613 |
| Victorian Biodiversity Atlas | 11,794 |
| BirdLife Australia, Birdata | 5,860 |
| First Bird Atlas | 1,934 |
| iNaturalist Australia | 762 |
| Historical Bird Atlas | 234 |
| Earth Guardians Weekly Feed | 68 |
| ALA species sightings and OzAtlas | 40 |
| Bathing Birds (NPA NSW and BirdLife) | 39 |
| Museums Victoria (OZCAM) | 21 |

I didn't query eBird hotspots individually, because the eBird API needs a key. eBird data enters this list through ALA's "eBird Australia" dataset.

## Selection criteria

1. The species must be in the 70 most-recorded bird species within 10 km. That works out to at least about 170 ALA records.
2. It must be native to Victoria. Introduced species are excluded for now (see below).
3. It must be common and recognisable to a non-birder. I balanced the list across garden birds, parrots, water birds and raptors.
4. Vagrants and escapees are excluded automatically, because the top 70 is made up entirely of regularly recorded species.

This gives 38 selected species, with every other native in the top 70 held in reserve.

## All 70 candidates

| # | Common name | Scientific name | ALA records | Status | Reason |
|---|---|---|---|---|---|
| 1 | Australian Magpie | *Gymnorhina tibicen* | 2450 | Selected | Native, common, recognisable |
| 2 | Superb Fairywren | *Malurus cyaneus* | 1956 | Selected | Native, common, recognisable |
| 3 | Red Wattlebird | *Anthochaera carunculata* | 1955 | Selected | Native, common, recognisable |
| 4 | White-plumed Honeyeater | *Ptilotula penicillata* | 1802 | Selected | Native, common, recognisable |
| 5 | New Holland Honeyeater | *Phylidonyris novaehollandiae* | 1558 | Selected | Native, common, recognisable |
| 6 | Little Raven | *Corvus mellori* | 1477 | Selected | Native, common, recognisable |
| 7 | Eastern Rosella | *Platycercus eximius* | 1462 | Selected | Native, common, recognisable |
| 8 | Grey Shrike-thrush | *Colluricincla harmonica* | 1421 | Selected | Native, common, recognisable |
| 9 | Willie Wagtail | *Rhipidura leucophrys* | 1415 | Selected | Native, common, recognisable |
| 10 | Galah | *Eolophus roseicapilla* | 1346 | Selected | Native, common, recognisable |
| 11 | Spotted Pardalote | *Pardalotus punctatus* | 1062 | Selected | Native, common, recognisable |
| 12 | Grey Fantail | *Rhipidura albiscapa* | 1055 | Selected | Native, common, recognisable |
| 13 | Welcome Swallow | *Hirundo neoxena* | 1017 | Selected | Native, common, recognisable |
| 14 | Common Blackbird | *Turdus merula* | 986 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 15 | Striated Pardalote | *Pardalotus striatus* | 934 | Selected | Native, common, recognisable |
| 16 | Yellow-faced Honeyeater | *Caligavis chrysops* | 885 | Selected | Native, common, recognisable |
| 17 | White-naped Honeyeater | *Melithreptus lunatus* | 861 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 18 | Magpie-lark | *Grallina cyanoleuca* | 834 | Selected | Native, common, recognisable |
| 19 | Eastern Yellow Robin | *Eopsaltria australis* | 807 | Selected | Native, common, recognisable |
| 20 | Red-browed Finch | *Neochmia temporalis* | 800 | Selected | Native, common, recognisable |
| 21 | Black-faced Cuckooshrike | *Coracina novaehollandiae* | 762 | Selected | Native, common, recognisable |
| 22 | Red-rumped Parrot | *Psephotus haematonotus* | 755 | Selected | Native, common, recognisable |
| 23 | House Sparrow | *Passer domesticus* | 751 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 24 | Common Starling | *Sturnus vulgaris* | 729 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 25 | White-eared Honeyeater | *Nesoptilotis leucotis* | 707 | Selected | Native, common, recognisable |
| 26 | Laughing Kookaburra | *Dacelo novaeguineae* | 704 | Selected | Native, common, recognisable |
| 27 | Brown Falcon | *Falco berigora* | 644 | Selected | Native, common, recognisable |
| 28 | Sulphur-crested Cockatoo | *Cacatua galerita* | 623 | Selected | Native, common, recognisable |
| 29 | Long-billed Corella | *Cacatua tenuirostris* | 614 | Selected | Native, common, recognisable |
| 30 | Common Bronzewing | *Phaps chalcoptera* | 567 | Selected | Native, common, recognisable |
| 31 | Rufous Whistler | *Pachycephala rufiventris* | 541 | Selected | Native, common, recognisable |
| 32 | Yellow-rumped Thornbill | *Acanthiza chrysorrhoa* | 521 | Selected | Native, common, recognisable |
| 33 | Dusky Woodswallow | *Artamus cyanopterus* | 485 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 34 | Brown-headed Honeyeater | *Melithreptus brevirostris* | 482 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 35 | Pacific Black Duck | *Anas superciliosa* | 474 | Selected | Native, common, recognisable |
| 36 | Weebill | *Smicrornis brevirostris* | 474 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 37 | Brown Thornbill | *Acanthiza pusilla* | 461 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 38 | Australian Wood Duck | *Chenonetta jubata* | 452 | Selected | Native, common, recognisable |
| 39 | Restless Flycatcher | *Myiagra inquieta* | 448 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 40 | Whistling Kite | *Haliastur sphenurus* | 437 | Selected | Native, common, recognisable |
| 41 | European Goldfinch | *Carduelis carduelis* | 422 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 42 | Straw-necked Ibis | *Threskiornis spinicollis* | 400 | Selected | Native, common, recognisable |
| 43 | White-winged Chough | *Corcorax melanorhamphos* | 397 | Selected | Native, common, recognisable |
| 44 | Fan-tailed Cuckoo | *Cacomantis flabelliformis* | 392 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 45 | White-browed Scrubwren | *Sericornis frontalis* | 359 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 46 | Wedge-tailed Eagle | *Aquila audax* | 343 | Selected | Native, common, recognisable |
| 47 | Jacky Winter | *Microeca fascinans* | 339 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 48 | Noisy Miner | *Manorina melanocephala* | 337 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 49 | Eurasian Skylark | *Alauda arvensis* | 334 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 50 | Masked Lapwing | *Vanellus miles* | 333 | Selected | Native, common, recognisable |
| 51 | Common Myna | *Acridotheres tristis* | 331 | Excluded | Introduced species (kept out of the first native-birds list; could be added as an "introduced" section) |
| 52 | White-faced Heron | *Egretta novaehollandiae* | 330 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 53 | Silvereye | *Zosterops lateralis* | 319 | Selected | Native, common, recognisable |
| 54 | Crimson Rosella | *Platycercus elegans* | 292 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 55 | Eastern Shrike-tit | *Falcunculus frontatus* | 290 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 56 | Crested Pigeon | *Ocyphaps lophotes* | 289 | Selected | Native, common, recognisable |
| 57 | Nankeen Kestrel | *Falco cenchroides* | 286 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 58 | Grey Teal | *Anas gracilis* | 241 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 59 | Dusky Moorhen | *Gallinula tenebrosa* | 240 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 60 | Little Corella | *Cacatua sanguinea* | 236 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 61 | Brown Goshawk | *Accipiter fasciatus* | 227 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 62 | Australian Shelduck | *Tadorna tadornoides* | 217 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 63 | White-throated Treecreeper | *Cormobates leucophaea* | 216 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 64 | Black-shouldered Kite | *Elanus axillaris* | 215 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 65 | Chestnut Teal | *Anas castanea* | 198 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 66 | Australian Golden Whistler | *Pachycephala pectoralis* | 188 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 67 | Sacred Kingfisher | *Todiramphus sanctus* | 187 | Selected | Native, common, recognisable |
| 68 | Tree Martin | *Petrochelidon nigricans* | 185 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 69 | Hoary-headed Grebe | *Poliocephalus poliocephalus* | 172 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |
| 70 | White-necked Heron | *Ardea pacifica* | 170 | Reserve | Native and regularly recorded; left out only to keep the list to ~38 recognisable species. Easy to add. |

## Caveats

- Record counts reflect how much effort observers put in at popular sites as well as how abundant a species is.
- Common names follow BirdLife Australia's working list. The scientific names are the ones ALA returns.
