// PROPOSED (not yet wired into the site). Generated from docs/research/batch14.json, 26 Oct 2026.
// Grok CLI live search + ALA/iNaturalist APIs; see docs/RESEARCH-REVIEW.md.
export type ThreatenedText = {
  commonName: string;
  scientificName: string;
  group: string;
  tier: "5km" | "10km" | "";
  fields: Record<string, string>;
  uncertain: string[];
  sources: { url: string; title: string }[];
};

export const threatened: ThreatenedText[] = [
  {
    "commonName": "Australian Magpie",
    "scientificName": "Gymnorhina tibicen",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22706288/131945700",
        "title": "IUCN Red List page used for Gymnorhina tibicen"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Gymnorhina+tibicen&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Gymnorhina tibicen"
      }
    ]
  },
  {
    "commonName": "Superb Fairywren",
    "scientificName": "Malurus cyaneus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22703736/253995896",
        "title": "IUCN Red List page used for Malurus cyaneus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Malurus+cyaneus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Malurus cyaneus"
      }
    ]
  },
  {
    "commonName": "Red Wattlebird",
    "scientificName": "Anthochaera carunculata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704466/130382437",
        "title": "IUCN Red List page used for Anthochaera carunculata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Anthochaera+carunculata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Anthochaera carunculata"
      }
    ]
  },
  {
    "commonName": "White-plumed Honeyeater",
    "scientificName": "Ptilotula penicillata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704097/130253505",
        "title": "IUCN Red List page used for Ptilotula penicillata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ptilotula+penicillata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ptilotula penicillata"
      }
    ]
  },
  {
    "commonName": "New Holland Honeyeater",
    "scientificName": "Phylidonyris novaehollandiae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704361/253977598",
        "title": "IUCN Red List page used for Phylidonyris novaehollandiae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Phylidonyris+novaehollandiae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Phylidonyris novaehollandiae"
      }
    ]
  },
  {
    "commonName": "Little Raven",
    "scientificName": "Corvus mellori",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22706036/130408880",
        "title": "IUCN Red List page used for Corvus mellori"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Corvus+mellori&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Corvus mellori"
      }
    ]
  },
  {
    "commonName": "Eastern Rosella",
    "scientificName": "Platycercus eximius",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22685126/254011214",
        "title": "IUCN Red List page used for Platycercus eximius"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Platycercus+eximius&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Platycercus eximius"
      }
    ]
  },
  {
    "commonName": "Grey Shrike-thrush",
    "scientificName": "Colluricincla harmonica",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22705561/130407286",
        "title": "IUCN Red List page used for Colluricincla harmonica"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Colluricincla+harmonica&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Colluricincla harmonica"
      }
    ]
  },
  {
    "commonName": "Willie Wagtail",
    "scientificName": "Rhipidura leucophrys",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22706805/263897741",
        "title": "IUCN Red List page used for Rhipidura leucophrys"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Rhipidura+leucophrys&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Rhipidura leucophrys"
      }
    ]
  },
  {
    "commonName": "Galah",
    "scientificName": "Eolophus roseicapilla",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684758/131874469",
        "title": "IUCN Red List page used for Eolophus roseicapilla"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Eolophus+roseicapilla&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Eolophus roseicapilla"
      }
    ]
  },
  {
    "commonName": "Spotted Pardalote",
    "scientificName": "Pardalotus punctatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704490/254004662",
        "title": "IUCN Red List page used for Pardalotus punctatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pardalotus+punctatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pardalotus punctatus"
      }
    ]
  },
  {
    "commonName": "Grey Fantail",
    "scientificName": "Rhipidura albiscapa",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22735714/281006953",
        "title": "IUCN Red List page used for Rhipidura albiscapa"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Rhipidura+albiscapa&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Rhipidura albiscapa"
      }
    ]
  },
  {
    "commonName": "Welcome Swallow",
    "scientificName": "Hirundo neoxena",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22712294/263837548",
        "title": "IUCN Red List page used for Hirundo neoxena"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Hirundo+neoxena&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Hirundo neoxena"
      }
    ]
  },
  {
    "commonName": "Common Blackbird",
    "scientificName": "Turdus merula",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103888106/264548442",
        "title": "IUCN Red List page used for Turdus merula"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Turdus+merula&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Turdus merula"
      }
    ]
  },
  {
    "commonName": "Striated Pardalote",
    "scientificName": "Pardalotus striatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704499/254004873",
        "title": "IUCN Red List page used for Pardalotus striatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pardalotus+striatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pardalotus striatus"
      }
    ]
  },
  {
    "commonName": "Yellow-faced Honeyeater",
    "scientificName": "Caligavis chrysops",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704052/130247974",
        "title": "IUCN Red List page used for Caligavis chrysops"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Caligavis+chrysops&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Caligavis chrysops"
      }
    ]
  },
  {
    "commonName": "White-naped Honeyeater",
    "scientificName": "Melithreptus lunatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103685459/253978828",
        "title": "IUCN Red List page used for Melithreptus lunatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Melithreptus+lunatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Melithreptus lunatus"
      }
    ]
  },
  {
    "commonName": "Magpie-lark",
    "scientificName": "Grallina cyanoleuca",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22707425/131945945",
        "title": "IUCN Red List page used for Grallina cyanoleuca"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Grallina+cyanoleuca&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Grallina cyanoleuca"
      }
    ]
  },
  {
    "commonName": "Eastern Yellow Robin",
    "scientificName": "Eopsaltria australis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704849/254005548",
        "title": "IUCN Red List page used for Eopsaltria australis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Eopsaltria+australis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Eopsaltria australis"
      }
    ]
  },
  {
    "commonName": "Red-browed Finch",
    "scientificName": "Neochmia temporalis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22719666/132130886",
        "title": "IUCN Red List page used for Neochmia temporalis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Neochmia+temporalis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Neochmia temporalis"
      }
    ]
  },
  {
    "commonName": "Black-faced Cuckooshrike",
    "scientificName": "Coracina novaehollandiae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22706495/280985712",
        "title": "IUCN Red List page used for Coracina novaehollandiae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Coracina+novaehollandiae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Coracina novaehollandiae"
      }
    ]
  },
  {
    "commonName": "Red-rumped Parrot",
    "scientificName": "Psephotus haematonotus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22685139/254012516",
        "title": "IUCN Red List page used for Psephotus haematonotus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Psephotus+haematonotus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Psephotus haematonotus"
      }
    ]
  },
  {
    "commonName": "House Sparrow",
    "scientificName": "Passer domesticus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103818789/155522130",
        "title": "IUCN Red List page used for Passer domesticus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Passer+domesticus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Passer domesticus"
      }
    ]
  },
  {
    "commonName": "Common Starling",
    "scientificName": "Sturnus vulgaris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22710886/137493608",
        "title": "IUCN Red List page used for Sturnus vulgaris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Sturnus+vulgaris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Sturnus vulgaris"
      }
    ]
  },
  {
    "commonName": "White-eared Honeyeater",
    "scientificName": "Nesoptilotis leucotis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Nesoptilotis leucotis thomasi, Kangaroo Island White-eared Honeyeater, Endangered, taxon 86394, VIC column \"-\". That is not the Victorian bird."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704070/253993105",
        "title": "IUCN Red List page used for Nesoptilotis leucotis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Nesoptilotis+leucotis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Nesoptilotis leucotis"
      }
    ]
  },
  {
    "commonName": "Laughing Kookaburra",
    "scientificName": "Dacelo novaeguineae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22683189/253968941",
        "title": "IUCN Red List page used for Dacelo novaeguineae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Dacelo+novaeguineae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Dacelo novaeguineae"
      }
    ]
  },
  {
    "commonName": "Brown Falcon",
    "scientificName": "Falco berigora",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696354/263619384",
        "title": "IUCN Red List page used for Falco berigora"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Falco+berigora&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Falco berigora"
      }
    ]
  },
  {
    "commonName": "Sulphur-crested Cockatoo",
    "scientificName": "Cacatua galerita",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684781/131914971",
        "title": "IUCN Red List page used for Cacatua galerita"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cacatua+galerita&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cacatua galerita"
      }
    ]
  },
  {
    "commonName": "Long-billed Corella",
    "scientificName": "Cacatua tenuirostris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684820/254000283",
        "title": "IUCN Red List page used for Cacatua tenuirostris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cacatua+tenuirostris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cacatua tenuirostris"
      }
    ]
  },
  {
    "commonName": "Common Bronzewing",
    "scientificName": "Phaps chalcoptera",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22690667/253996500",
        "title": "IUCN Red List page used for Phaps chalcoptera"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Phaps+chalcoptera&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Phaps chalcoptera"
      }
    ]
  },
  {
    "commonName": "Rufous Whistler",
    "scientificName": "Pachycephala rufiventris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22705537/130405979",
        "title": "IUCN Red List page used for Pachycephala rufiventris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pachycephala+rufiventris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pachycephala rufiventris"
      }
    ]
  },
  {
    "commonName": "Yellow-rumped Thornbill",
    "scientificName": "Acanthiza chrysorrhoa",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704647/253984557",
        "title": "IUCN Red List page used for Acanthiza chrysorrhoa"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Acanthiza+chrysorrhoa&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Acanthiza chrysorrhoa"
      }
    ]
  },
  {
    "commonName": "Dusky Woodswallow",
    "scientificName": "Artamus cyanopterus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Artamus cyanopterus\" within 10 km of -38.10, 144.05: 485 records, years 1896–2026, 22 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Dusky Woodswallow has no July 2026 FFG line and no EPBC CSV row. It was absent from both ALA threatened-status facets."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Artamus+cyanopterus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Artamus cyanopterus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22706330/253999067",
        "title": "IUCN Red List page used for Artamus cyanopterus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Artamus+cyanopterus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Artamus cyanopterus"
      }
    ]
  },
  {
    "commonName": "Brown-headed Honeyeater",
    "scientificName": "Melithreptus brevirostris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Melithreptus brevirostris magnirostris, Kangaroo Island Brown-headed Honeyeater, Endangered, taxon 80453, VIC column \"-\". That is not the Victorian bird."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704151/130255796",
        "title": "IUCN Red List page used for Melithreptus brevirostris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Melithreptus+brevirostris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Melithreptus brevirostris"
      }
    ]
  },
  {
    "commonName": "Pacific Black Duck",
    "scientificName": "Anas superciliosa",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680217/265017939",
        "title": "IUCN Red List page used for Anas superciliosa"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Anas+superciliosa&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Anas superciliosa"
      }
    ]
  },
  {
    "commonName": "Weebill",
    "scientificName": "Smicrornis brevirostris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704662/253981533",
        "title": "IUCN Red List page used for Smicrornis brevirostris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Smicrornis+brevirostris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Smicrornis brevirostris"
      }
    ]
  },
  {
    "commonName": "Brown Thornbill",
    "scientificName": "Acanthiza pusilla",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Acanthiza pusilla magnirostris, King Island Brown Thornbill, Endangered, taxon 91709, VIC column \"-\". That is not the mainland Brown Thornbill."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704630/253977169",
        "title": "IUCN Red List page used for Acanthiza pusilla"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Acanthiza+pusilla&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Acanthiza pusilla"
      }
    ]
  },
  {
    "commonName": "Australian Wood Duck",
    "scientificName": "Chenonetta jubata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680111/253970179",
        "title": "IUCN Red List page used for Chenonetta jubata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Chenonetta+jubata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Chenonetta jubata"
      }
    ]
  },
  {
    "commonName": "Restless Flycatcher",
    "scientificName": "Myiagra inquieta",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103711768/280988122",
        "title": "IUCN Red List page used for Myiagra inquieta"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Myiagra+inquieta&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Myiagra inquieta"
      }
    ]
  },
  {
    "commonName": "Whistling Kite",
    "scientificName": "Haliastur sphenurus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22695091/281027154",
        "title": "IUCN Red List page used for Haliastur sphenurus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Haliastur+sphenurus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Haliastur sphenurus"
      }
    ]
  },
  {
    "commonName": "European Goldfinch",
    "scientificName": "Carduelis carduelis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103764950/152615959",
        "title": "IUCN Red List page used for Carduelis carduelis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Carduelis+carduelis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Carduelis carduelis"
      }
    ]
  },
  {
    "commonName": "Straw-necked Ibis",
    "scientificName": "Threskiornis spinicollis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22697525/129656213",
        "title": "IUCN Red List page used for Threskiornis spinicollis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Threskiornis+spinicollis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Threskiornis spinicollis"
      }
    ]
  },
  {
    "commonName": "White-winged Chough",
    "scientificName": "Corcorax melanorhamphos",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22705382/130392282",
        "title": "IUCN Red List page used for Corcorax melanorhamphos"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Corcorax+melanorhamphos&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Corcorax melanorhamphos"
      }
    ]
  },
  {
    "commonName": "Fan-tailed Cuckoo",
    "scientificName": "Cacomantis flabelliformis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22683941/263960401",
        "title": "IUCN Red List page used for Cacomantis flabelliformis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cacomantis+flabelliformis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cacomantis flabelliformis"
      }
    ]
  },
  {
    "commonName": "White-browed Scrubwren",
    "scientificName": "Sericornis frontalis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704539/253998478",
        "title": "IUCN Red List page used for Sericornis frontalis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Sericornis+frontalis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Sericornis frontalis"
      }
    ]
  },
  {
    "commonName": "Wedge-tailed Eagle",
    "scientificName": "Aquila audax",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Aquila audax fleayi, Tasmanian Wedge-tailed Eagle, Endangered, taxon 64435, VIC column \"-\". That is not the Victorian bird. The July 2026 FFG bird table has no Aquila audax row."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696064/157447886",
        "title": "IUCN Red List page used for Aquila audax"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Aquila+audax&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Aquila audax"
      }
    ]
  },
  {
    "commonName": "Jacky Winter",
    "scientificName": "Microeca fascinans",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704769/263907566",
        "title": "IUCN Red List page used for Microeca fascinans"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Microeca+fascinans&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Microeca fascinans"
      }
    ]
  },
  {
    "commonName": "Noisy Miner",
    "scientificName": "Manorina melanocephala",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704433/132071923",
        "title": "IUCN Red List page used for Manorina melanocephala"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Manorina+melanocephala&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Manorina melanocephala"
      }
    ]
  },
  {
    "commonName": "Eurasian Skylark",
    "scientificName": "Alauda arvensis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/102998555/132039889",
        "title": "IUCN Red List page used for Alauda arvensis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Alauda+arvensis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Alauda arvensis"
      }
    ]
  },
  {
    "commonName": "Masked Lapwing",
    "scientificName": "Vanellus miles",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22725229/281035548",
        "title": "IUCN Red List page used for Vanellus miles"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vanellus+miles&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vanellus miles"
      }
    ]
  },
  {
    "commonName": "Common Myna",
    "scientificName": "Acridotheres tristis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22710921/137492530",
        "title": "IUCN Red List page used for Acridotheres tristis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Acridotheres+tristis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Acridotheres tristis"
      }
    ]
  },
  {
    "commonName": "White-faced Heron",
    "scientificName": "Egretta novaehollandiae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696938/281021507",
        "title": "IUCN Red List page used for Egretta novaehollandiae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Egretta+novaehollandiae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Egretta novaehollandiae"
      }
    ]
  },
  {
    "commonName": "Silvereye",
    "scientificName": "Zosterops lateralis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22714212/263912483",
        "title": "IUCN Red List page used for Zosterops lateralis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Zosterops+lateralis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Zosterops lateralis"
      }
    ]
  },
  {
    "commonName": "Crimson Rosella",
    "scientificName": "Platycercus elegans",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Platycercus elegans melanopterus, Kangaroo Island Crimson Rosella, Vulnerable, taxon 91209, VIC column \"-\". That is not the Victorian bird."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22733483/132181501",
        "title": "IUCN Red List page used for Platycercus elegans"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Platycercus+elegans&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Platycercus elegans"
      }
    ]
  },
  {
    "commonName": "Eastern Shrike-tit",
    "scientificName": "Falcunculus frontatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2020)",
      "localRecords": "ALA species:\"Falcunculus frontatus\" within 10 km of -38.10, 144.05: 290 records, years 1977–2025, 19 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Falcunculus frontatus whitei, Northern Shrike-tit, Vulnerable, taxon 26013, VIC column \"-\". The eastern bird is not that subspecies, and the July 2026 FFG bird table has no Falcunculus row. Eastern Shrike-tit has no July 2026 FFG line."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Falcunculus+frontatus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Falcunculus frontatus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/103693235/181646246",
        "title": "IUCN Red List page used for Falcunculus frontatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Falcunculus+frontatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Falcunculus frontatus"
      }
    ]
  },
  {
    "commonName": "Crested Pigeon",
    "scientificName": "Ocyphaps lophotes",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22690676/253994941",
        "title": "IUCN Red List page used for Ocyphaps lophotes"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ocyphaps+lophotes&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ocyphaps lophotes"
      }
    ]
  },
  {
    "commonName": "Nankeen Kestrel",
    "scientificName": "Falco cenchroides",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696391/263625315",
        "title": "IUCN Red List page used for Falco cenchroides"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Falco+cenchroides&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Falco cenchroides"
      }
    ]
  },
  {
    "commonName": "Grey Teal",
    "scientificName": "Anas gracilis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680271/265005922",
        "title": "IUCN Red List page used for Anas gracilis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Anas+gracilis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Anas gracilis"
      }
    ]
  },
  {
    "commonName": "Dusky Moorhen",
    "scientificName": "Gallinula tenebrosa",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22692880/281025974",
        "title": "IUCN Red List page used for Gallinula tenebrosa"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Gallinula+tenebrosa&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Gallinula tenebrosa"
      }
    ]
  },
  {
    "commonName": "Little Corella",
    "scientificName": "Cacatua sanguinea",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684813/131915837",
        "title": "IUCN Red List page used for Cacatua sanguinea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cacatua+sanguinea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cacatua sanguinea"
      }
    ]
  },
  {
    "commonName": "Brown Goshawk",
    "scientificName": "Accipiter fasciatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2022)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The CSV has no Accipiter fasciatus row and no Tachyspiza row. The only Accipiter row found is Accipiter hiogaster natalis, Christmas Island Goshawk, Endangered, VIC column \"-\"."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/219590235/219590242",
        "title": "IUCN Red List page used for Accipiter fasciatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Accipiter+fasciatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Accipiter fasciatus"
      }
    ]
  },
  {
    "commonName": "Australian Shelduck",
    "scientificName": "Tadorna tadornoides",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680011/265004964",
        "title": "IUCN Red List page used for Tadorna tadornoides"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tadorna+tadornoides&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tadorna tadornoides"
      }
    ]
  },
  {
    "commonName": "White-throated Treecreeper",
    "scientificName": "Cormobates leucophaea",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22703560/253992729",
        "title": "IUCN Red List page used for Cormobates leucophaea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cormobates+leucophaea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cormobates leucophaea"
      }
    ]
  },
  {
    "commonName": "Black-shouldered Kite",
    "scientificName": "Elanus axillaris",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22695033/253993938",
        "title": "IUCN Red List page used for Elanus axillaris"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Elanus+axillaris&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Elanus axillaris"
      }
    ]
  },
  {
    "commonName": "Chestnut Teal",
    "scientificName": "Anas castanea",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680277/253990498",
        "title": "IUCN Red List page used for Anas castanea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Anas+castanea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Anas castanea"
      }
    ]
  },
  {
    "commonName": "Australian Golden Whistler",
    "scientificName": "Pachycephala pectoralis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Pachycephala pectoralis xanthoprocta, Golden Whistler (Norfolk Island), Vulnerable, taxon 64444, VIC column \"-\". That is not the Victorian bird."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/103693368/263821612",
        "title": "IUCN Red List page used for Pachycephala pectoralis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pachycephala+pectoralis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pachycephala pectoralis"
      }
    ]
  },
  {
    "commonName": "Sacred Kingfisher",
    "scientificName": "Todiramphus sanctus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22683442/280986198",
        "title": "IUCN Red List page used for Todiramphus sanctus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Todiramphus+sanctus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Todiramphus sanctus"
      }
    ]
  },
  {
    "commonName": "Tree Martin",
    "scientificName": "Petrochelidon nigricans",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22712449/264202937",
        "title": "IUCN Red List page used for Petrochelidon nigricans"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Petrochelidon+nigricans&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Petrochelidon nigricans"
      }
    ]
  },
  {
    "commonName": "Hoary-headed Grebe",
    "scientificName": "Poliocephalus poliocephalus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696589/254007779",
        "title": "IUCN Red List page used for Poliocephalus poliocephalus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Poliocephalus+poliocephalus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Poliocephalus poliocephalus"
      }
    ]
  },
  {
    "commonName": "White-necked Heron",
    "scientificName": "Ardea pacifica",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22697004/281012837",
        "title": "IUCN Red List page used for Ardea pacifica"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ardea+pacifica&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ardea pacifica"
      }
    ]
  },
  {
    "commonName": "Rainbow Lorikeet",
    "scientificName": "Trichoglossus moluccanus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22725334/254013129",
        "title": "IUCN Red List page used for Trichoglossus moluccanus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Trichoglossus+moluccanus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Trichoglossus moluccanus"
      }
    ]
  },
  {
    "commonName": "Yellow-tailed Black-Cockatoo",
    "scientificName": "Zanda funerea",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The CSV has no Zanda funerea row. Other black-cockatoos in the CSV are different species, including Calyptorhynchus lathami lathami, South-eastern Glossy Black-Cockatoo, Vulnerable, taxon 67036, VIC column Yes; Calyptorhynchus baudinii and Calyptorhynchus latirostris, both Endangered with VIC column \"-\"; and Calyptorhynchus banksii subspecies. None of those rows is Yellow-tailed Black-Cockatoo."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684739/253974842",
        "title": "IUCN Red List page used for Zanda funerea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Zanda+funerea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Zanda funerea"
      }
    ]
  },
  {
    "commonName": "Koala",
    "scientificName": "Phascolarctos cinereus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Vulnerable (assessed 2014)",
      "localRecords": "ALA species:\"Phascolarctos cinereus\" within 10 km of -38.10, 144.05: 33 records, years 1983–2025. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row. iNaturalist threatened=true within 10 km, all grades: 12 observations under Phascolarctos cinereus; research grade: 10. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: No EPBC row for the species across its whole range. The CSV row is exactly \"Phascolarctos cinereus (combined populations of Qld, NSW and the ACT)\", Endangered, Listed SPRAT TaxonID 85104, VIC column \"-\". Victorian koalas are outside that listed entity. The SPRAT profile URL in the CSV was not opened; a direct fetch of that profile returned a Cloudflare challenge. July 2026 FFG mammal table: not listed. IUCN Vulnerable (assessed 2014) is the global species assessment. iNaturalist threatened=true follows IUCN and EPBC flags on the name, not the Victorian FFG list. The koala was absent from both ALA threatened-status facets."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Phascolarctos+cinereus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Phascolarctos cinereus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/16892/166496779",
        "title": "IUCN Red List page used for Phascolarctos cinereus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Phascolarctos+cinereus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Phascolarctos cinereus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=85104",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Platypus",
    "scientificName": "Ornithorhynchus anatinus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Near Threatened (assessed 2014)",
      "localRecords": "ALA species:\"Ornithorhynchus anatinus\" within 10 km of -38.10, 144.05: 60 records, years 1965–2026. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 60 records. iNaturalist threatened=true within 10 km, all grades: 2 observations under Ornithorhynchus anatinus; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Platypus, Ornithorhynchus anatinus; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. There is no platypus row in the 28 August 2026 EPBC CSV."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Ornithorhynchus+anatinus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Ornithorhynchus anatinus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/40488/21964009",
        "title": "IUCN Red List page used for Ornithorhynchus anatinus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ornithorhynchus+anatinus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ornithorhynchus anatinus"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Eastern Grey Kangaroo",
    "scientificName": "Macropus giganteus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/41513/21952954",
        "title": "IUCN Red List page used for Macropus giganteus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Macropus+giganteus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Macropus giganteus"
      }
    ]
  },
  {
    "commonName": "Short-beaked Echidna",
    "scientificName": "Tachyglossus aculeatus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Tachyglossus aculeatus multiaculeatus, Kangaroo Island Echidna, Endangered, taxon 87597, VIC column \"-\". That is not the Victorian echidna."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/41312/21964662",
        "title": "IUCN Red List page used for Tachyglossus aculeatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tachyglossus+aculeatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tachyglossus aculeatus"
      }
    ]
  },
  {
    "commonName": "Swamp Wallaby",
    "scientificName": "Wallabia bicolor",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/40575/21952658",
        "title": "IUCN Red List page used for Wallabia bicolor"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Wallabia+bicolor&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Wallabia bicolor"
      }
    ]
  },
  {
    "commonName": "Common Brushtail Possum",
    "scientificName": "Trichosurus vulpecula",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Trichosurus vulpecula arnhemensis, Northern Brushtail Possum, Vulnerable, taxon 83091, VIC column \"-\". That is not the Victorian possum."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/40585/21952080",
        "title": "IUCN Red List page used for Trichosurus vulpecula"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Trichosurus+vulpecula&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Trichosurus vulpecula"
      }
    ]
  },
  {
    "commonName": "Rakali",
    "scientificName": "Hydromys chrysogaster",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/10310/115097054",
        "title": "IUCN Red List page used for Hydromys chrysogaster"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Hydromys+chrysogaster&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Hydromys chrysogaster"
      }
    ]
  },
  {
    "commonName": "Krefft's Glider",
    "scientificName": "Petaurus notatus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "not found in IUCN Red List ChecklistBank dataset 53131 (version 2026-07-28)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Petaurus australis australis, Yellow-bellied Glider (south-eastern), is a different species: EPBC Vulnerable, taxon 87600, VIC column Yes, and July 2026 FFG Vulnerable with extinction risk Australia. It is not Krefft's glider. No IUCN species record for Petaurus notatus was returned by ChecklistBank dataset 53131. Petaurus breviceps is a separate IUCN species assessed Least Concern in 2016, and that assessment is not used here."
    },
    "uncertain": [
      "No IUCN species record was found in ChecklistBank dataset 53131 version 2026-07-28."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Petaurus+notatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Petaurus notatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131",
        "title": "ChecklistBank dataset 53131, The IUCN Red List of Threatened Species, version 2026-07-28"
      }
    ]
  },
  {
    "commonName": "Common Ringtail Possum",
    "scientificName": "Pseudocheirus peregrinus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/40581/21963019",
        "title": "IUCN Red List page used for Pseudocheirus peregrinus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pseudocheirus+peregrinus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pseudocheirus peregrinus"
      }
    ]
  },
  {
    "commonName": "Bare-nosed Wombat",
    "scientificName": "Vombatus ursinus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/40556/258654868",
        "title": "IUCN Red List page used for Vombatus ursinus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vombatus+ursinus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vombatus ursinus"
      }
    ]
  },
  {
    "commonName": "Agile Antechinus",
    "scientificName": "Antechinus agilis",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/1590/21946586",
        "title": "IUCN Red List page used for Antechinus agilis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Antechinus+agilis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Antechinus agilis"
      }
    ]
  },
  {
    "commonName": "Swamp Rat",
    "scientificName": "Rattus lutreolus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/19343/115147713",
        "title": "IUCN Red List page used for Rattus lutreolus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Rattus+lutreolus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Rattus lutreolus"
      }
    ]
  },
  {
    "commonName": "Sugar Glider",
    "scientificName": "Petaurus breviceps",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Petaurus australis australis, Yellow-bellied Glider (south-eastern), is a different species: EPBC Vulnerable, taxon 87600, VIC column Yes, and July 2026 FFG Vulnerable with extinction risk Australia. It is not the sugar glider."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/16731/21959798",
        "title": "IUCN Red List page used for Petaurus breviceps"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Petaurus+breviceps&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Petaurus breviceps"
      }
    ]
  },
  {
    "commonName": "Grey-headed Flying-fox",
    "scientificName": "Pteropus poliocephalus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Pteropus poliocephalus\" within 10 km of -38.10, 144.05: 5 records, year 2020. ALA countryConservation threatened facet: 5 records. ALA stateConservation threatened facet: 5 records.",
      "notes": "July 2026 FFG Threatened List: Grey-headed Flying-fox, Pteropus poliocephalus; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Pteropus poliocephalus; common name Grey-headed Flying-fox; Listed SPRAT TaxonID 186; VIC column Yes. The SPRAT profile URL in the CSV was not opened. All 5 ALA records are year 2020, event date 2020-03-17, basis HUMAN_OBSERVATION, stateProvince Victoria, coordinate uncertainty 5 m, data resource SA Fauna (dr365). Coordinates: -38.037, 144.0624; -38.01858, 144.01208; -38.02653, 144.07353; -38.05858, 144.01898; -38.08045, 143.99078. SA Fauna is the Biological Databases of South Australia extract. These rows are not treated as a confirmed multi-year local camp count."
    },
    "uncertain": [
      "All five ALA records are from SA Fauna (BDBSA, data resource dr365), with coordinates in Victoria. Whether they are independent local observations is uncertain."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Pteropus+poliocephalus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Pteropus poliocephalus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/18751/22085511",
        "title": "IUCN Red List page used for Pteropus poliocephalus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pteropus+poliocephalus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pteropus poliocephalus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=186",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://collections.ala.org.au/ws/dataResource/dr365",
        "title": "ALA data resource dr365, SA Fauna (BDBSA)"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Pteropus+poliocephalus%22&lat=-38.10&lon=144.05&radius=10&pageSize=10",
        "title": "ALA occurrence records for Grey-headed Flying-fox within 10 km"
      }
    ]
  },
  {
    "commonName": "Little Forest Bat",
    "scientificName": "Vespadelus vulturnus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/7945/209533303",
        "title": "IUCN Red List page used for Vespadelus vulturnus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vespadelus+vulturnus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vespadelus vulturnus"
      }
    ]
  },
  {
    "commonName": "Gould's Wattled Bat",
    "scientificName": "Chalinolobus gouldii",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/4417/209548746",
        "title": "IUCN Red List page used for Chalinolobus gouldii"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Chalinolobus+gouldii&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Chalinolobus gouldii"
      }
    ]
  },
  {
    "commonName": "Large Forest Bat",
    "scientificName": "Vespadelus darlingtoni",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/7920/209532370",
        "title": "IUCN Red List page used for Vespadelus darlingtoni"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vespadelus+darlingtoni&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vespadelus darlingtoni"
      }
    ]
  },
  {
    "commonName": "Lesser Long-eared Bat",
    "scientificName": "Nyctophilus geoffroyi",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Nyctophilus corbeni, Corben's Long-eared Bat, is a different species: EPBC Vulnerable, taxon 83395, VIC column Yes, and July 2026 FFG Endangered with extinction risk Victoria. It was not in the 10 km threatened-status facets. Nyctophilus howensis, Lord Howe Long-eared Bat, is Extinct, VIC column \"-\"."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/15003/209533561",
        "title": "IUCN Red List page used for Nyctophilus geoffroyi"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Nyctophilus+geoffroyi&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Nyctophilus geoffroyi"
      }
    ]
  },
  {
    "commonName": "Southern Forest Bat",
    "scientificName": "Vespadelus regulus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/7939/209533051",
        "title": "IUCN Red List page used for Vespadelus regulus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vespadelus+regulus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vespadelus regulus"
      }
    ]
  },
  {
    "commonName": "Chocolate Wattled Bat",
    "scientificName": "Chalinolobus morio",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/4419/209530864",
        "title": "IUCN Red List page used for Chalinolobus morio"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Chalinolobus+morio&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Chalinolobus morio"
      }
    ]
  },
  {
    "commonName": "Eastern False Pipistrelle",
    "scientificName": "Falsistrellus tasmaniensis",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Vulnerable (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Eastern False Pipistrelle is not on the July 2026 FFG mammal table and has no row in the EPBC CSV. IUCN Vulnerable (assessed 2019) is a global assessment only. It was absent from both ALA threatened-status facets. Ordinary occurrence totals were not re-counted."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/17367/22123618",
        "title": "IUCN Red List page used for Falsistrellus tasmaniensis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Falsistrellus+tasmaniensis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Falsistrellus tasmaniensis"
      }
    ]
  },
  {
    "commonName": "White-striped Free-tailed Bat",
    "scientificName": "Austronomus australis",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/21313/22121905",
        "title": "IUCN Red List page used for Austronomus australis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Austronomus+australis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Austronomus australis"
      }
    ]
  },
  {
    "commonName": "Ride's Free-tailed Bat",
    "scientificName": "Ozimops ridei",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/71533043/209550467",
        "title": "IUCN Red List page used for Ozimops ridei"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ozimops+ridei&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ozimops ridei"
      }
    ]
  },
  {
    "commonName": "Eastern Forest Bat",
    "scientificName": "Vespadelus pumilus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/7938/22120244",
        "title": "IUCN Red List page used for Vespadelus pumilus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vespadelus+pumilus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vespadelus pumilus"
      }
    ]
  },
  {
    "commonName": "European rabbit",
    "scientificName": "Oryctolagus cuniculus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Endangered (assessed 2018)",
      "localRecords": "ALA species:\"Oryctolagus cuniculus\" within 10 km of -38.10, 144.05: 2533 records, years 1988–2026, 1 undated record. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row. iNaturalist threatened=true within 10 km, all grades: 4 observations under Oryctolagus cuniculus; research grade: 4. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. European rabbit is excluded from the local threatened-species set. iNaturalist threatened=true returned 4 observations within 10 km because IUCN lists the species as Endangered in its native range (assessed 2018). That flag is not an Australian listing. The species is not on the July 2026 FFG list, has no EPBC CSV row, and was absent from both ALA threatened-status facets. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Oryctolagus+cuniculus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Oryctolagus cuniculus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/41291/170619657",
        "title": "IUCN Red List page used for Oryctolagus cuniculus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Oryctolagus+cuniculus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Oryctolagus cuniculus"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Red fox",
    "scientificName": "Vulpes vulpes",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/23062/193903628",
        "title": "IUCN Red List page used for Vulpes vulpes"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Vulpes+vulpes&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Vulpes vulpes"
      }
    ]
  },
  {
    "commonName": "European hare",
    "scientificName": "Lepus europaeus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/41280/45187424",
        "title": "IUCN Red List page used for Lepus europaeus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Lepus+europaeus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Lepus europaeus"
      }
    ]
  },
  {
    "commonName": "Black rat",
    "scientificName": "Rattus rattus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/19360/192565917",
        "title": "IUCN Red List page used for Rattus rattus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Rattus+rattus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Rattus rattus"
      }
    ]
  },
  {
    "commonName": "House mouse",
    "scientificName": "Mus musculus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2016)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/13972/197519724",
        "title": "IUCN Red List page used for Mus musculus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Mus+musculus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Mus musculus"
      }
    ]
  },
  {
    "commonName": "Cat (feral or domestic)",
    "scientificName": "Felis catus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "not found in IUCN Red List ChecklistBank dataset 53131 (version 2026-07-28)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. ChecklistBank dataset 53131 returned no exact species record for Felis catus. A search also returned Felis silvestris, Least Concern, assessed 2021. That assessment is not applied to Felis catus. Introduced in Australia. No IUCN species assessment was applied to Felis catus."
    },
    "uncertain": [
      "No IUCN species record was found for Felis catus. Felis silvestris was not used as a substitute."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Felis+catus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Felis catus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131",
        "title": "ChecklistBank dataset 53131, The IUCN Red List of Threatened Species, version 2026-07-28"
      }
    ]
  },
  {
    "commonName": "Fallow deer",
    "scientificName": "Dama dama",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2008)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/42188/10656554",
        "title": "IUCN Red List page used for Dama dama"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Dama+dama&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Dama dama"
      }
    ]
  },
  {
    "commonName": "Sambar",
    "scientificName": "Rusa unicolor",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Vulnerable (assessed 2014)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. IUCN Vulnerable (assessed 2014) is the native-range assessment. Sambar was not in the iNaturalist threatened=true fauna results or the ALA threatened-status facets. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/41790/85628124",
        "title": "IUCN Red List page used for Rusa unicolor"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Rusa+unicolor&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Rusa unicolor"
      }
    ]
  },
  {
    "commonName": "Red deer",
    "scientificName": "Cervus elaphus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2015)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/55997072/142404453",
        "title": "IUCN Red List page used for Cervus elaphus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Cervus+elaphus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Cervus elaphus"
      }
    ]
  },
  {
    "commonName": "Hog deer",
    "scientificName": "Axis porcinus",
    "group": "mammal",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Endangered (assessed 2014)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. IUCN Endangered (assessed 2014) is the native-range assessment. Hog deer was not in the iNaturalist threatened=true fauna results or the ALA threatened-status facets. Introduced in Australia. The IUCN category is the global assessment, including the native range, and is not an EPBC or FFG listing."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/41784/22157664",
        "title": "IUCN Red List page used for Axis porcinus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Axis+porcinus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Axis porcinus"
      }
    ]
  },
  {
    "commonName": "Little Whip Snake",
    "scientificName": "Suta flagellum",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/177568/102713565",
        "title": "IUCN Red List page used for Suta flagellum"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Suta+flagellum&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Suta flagellum"
      }
    ]
  },
  {
    "commonName": "Lowland Copperhead",
    "scientificName": "Austrelaps superbus",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/102704097/102704137",
        "title": "IUCN Red List page used for Austrelaps superbus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Austrelaps+superbus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Austrelaps superbus"
      }
    ]
  },
  {
    "commonName": "Eastern Brown Snake",
    "scientificName": "Pseudonaja textilis",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/42493315/42493324",
        "title": "IUCN Red List page used for Pseudonaja textilis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pseudonaja+textilis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pseudonaja textilis"
      }
    ]
  },
  {
    "commonName": "Jacky Lizard",
    "scientificName": "Amphibolurus muricatus",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/83410038/83453648",
        "title": "IUCN Red List page used for Amphibolurus muricatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Amphibolurus+muricatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Amphibolurus muricatus"
      }
    ]
  },
  {
    "commonName": "Eastern Three-lined Skink",
    "scientificName": "Acritoscincus duperreyi",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/102964863/102964878",
        "title": "IUCN Red List page used for Acritoscincus duperreyi"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Acritoscincus+duperreyi&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Acritoscincus duperreyi"
      }
    ]
  },
  {
    "commonName": "Garden Skink",
    "scientificName": "Lampropholis guichenoti",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/109473177/109473189",
        "title": "IUCN Red List page used for Lampropholis guichenoti"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Lampropholis+guichenoti&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Lampropholis guichenoti"
      }
    ]
  },
  {
    "commonName": "Eastern Blue-tongue",
    "scientificName": "Tiliqua scincoides",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The only CSV name under this species is Tiliqua scincoides intermedia, Northern Blue-tongued Skink, Critically Endangered, taxon 89838, VIC column \"-\". That is not the Victorian lizard."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/109481538/109481555",
        "title": "IUCN Red List page used for Tiliqua scincoides"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tiliqua+scincoides&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tiliqua scincoides"
      }
    ]
  },
  {
    "commonName": "Blotched Blue-tongue",
    "scientificName": "Tiliqua nigrolutea",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/109481446/109481473",
        "title": "IUCN Red List page used for Tiliqua nigrolutea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tiliqua+nigrolutea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tiliqua nigrolutea"
      }
    ]
  },
  {
    "commonName": "White's Skink",
    "scientificName": "Liopholis whitii",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2017)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://www.iucnredlist.org/species/178520/101748542",
        "title": "IUCN Red List page used for Liopholis whitii"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Liopholis+whitii&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Liopholis whitii"
      }
    ]
  },
  {
    "commonName": "Striped Legless Lizard",
    "scientificName": "Delma impar",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Endangered",
      "iucn": "Endangered (assessed 2017)",
      "localRecords": "ALA species:\"Delma impar\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Striped Legless Lizard, Delma impar; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Delma impar; common name Striped Legless Lizard, Striped Snake-lizard; Listed SPRAT TaxonID 1649; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The Striped Legless Lizard is on the site list. The ALA species: search within 10 km returned 0 records, and it was absent from both threatened-status facets."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Delma+impar%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Delma impar\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/6315/101742864",
        "title": "IUCN Red List page used for Delma impar"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Delma+impar&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Delma impar"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=1649",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Eastern Snake-necked Turtle",
    "scientificName": "Chelodina longicollis",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "true",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "not found in IUCN Red List ChecklistBank dataset 53131 (version 2026-07-28)",
      "localRecords": "On the site list. Absent from the 26 October 2026 ALA occurrence facets for stateConservation and countryConservation categories Vulnerable, Endangered, and Critically Endangered within 10 km of -38.10, 144.05. Ordinary occurrence totals were not re-counted.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. ChecklistBank dataset 53131 exact nameusage for Chelodina longicollis returned no species record. A fuzzy nameusage search returned the genus Chelodina only, which is not a species assessment."
    },
    "uncertain": [
      "No IUCN species record was found in ChecklistBank dataset 53131 version 2026-07-28."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Chelodina+longicollis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Chelodina longicollis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131",
        "title": "ChecklistBank dataset 53131, The IUCN Red List of Threatened Species, version 2026-07-28"
      }
    ]
  },
  {
    "commonName": "Grey Goshawk",
    "scientificName": "Accipiter novaehollandiae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Accipiter novaehollandiae\" within 10 km of -38.10, 144.05: 6 records, years 2004–2017. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 6 records.",
      "notes": "July 2026 FFG Threatened List: Grey Goshawk, Accipiter novaehollandiae; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. IUCN lists this taxon as Least Concern (assessed 2024)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Accipiter+novaehollandiae%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Accipiter novaehollandiae\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22727714/253971282",
        "title": "IUCN Red List page used for Accipiter novaehollandiae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Accipiter+novaehollandiae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Accipiter novaehollandiae"
      }
    ]
  },
  {
    "commonName": "Brolga",
    "scientificName": "Antigone rubicunda",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2024); IUCN name on the page is Grus rubicunda",
      "localRecords": "ALA species:\"Antigone rubicunda\" within 10 km of -38.10, 144.05: 15 records, years 1988–2025, 1 undated record. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 15 records. iNaturalist threatened=true within 10 km, all grades: 1 observation under Antigone rubicunda; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Brolga, Antigone rubicunda (originally listed as Grus rubicundus); category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2025 eBird record in the latest year is at -38.118651, 144.006561. One further record is undated."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Antigone+rubicunda%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Antigone rubicunda\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22692067/264984392",
        "title": "IUCN Red List page used for Antigone rubicunda"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Antigone+rubicunda&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Antigone rubicunda"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Southern Whiteface",
    "scientificName": "Aphelocephala leucopsis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Aphelocephala leucopsis\" within 10 km of -38.10, 144.05: 1 record, all undated. ALA countryConservation threatened facet: 1 record. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: Southern Whiteface, Aphelocephala leucopsis; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Aphelocephala leucopsis; common name Southern Whiteface; Listed SPRAT TaxonID 529; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The only record is undated, Victorian Biodiversity Atlas, -38.07351, 144.043, coordinate uncertainty 900 m."
    },
    "uncertain": [
      "The only ALA record has no year, so there is no latest year."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Aphelocephala+leucopsis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Aphelocephala leucopsis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704748/211249958",
        "title": "IUCN Red List page used for Aphelocephala leucopsis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Aphelocephala+leucopsis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Aphelocephala leucopsis"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=529",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Aphelocephala+leucopsis%22&lat=-38.10&lon=144.05&radius=10&pageSize=10&facets=year&flimit=100",
        "title": "ALA occurrence records for Aphelocephala leucopsis within 10 km"
      }
    ]
  },
  {
    "commonName": "Eastern Great Egret",
    "scientificName": "Ardea alba",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable (Ardea alba modesta, originally listed as Ardea alba)",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "ALA species:\"Ardea alba\" within 10 km of -38.10, 144.05: 23 records, years 1977–2023, 5 undated records.",
      "notes": "July 2026 FFG Threatened List: Eastern Great Egret, Ardea alba modesta (originally listed as Ardea alba); category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The species: search total is 23, years 1977–2023, with 5 undated. The stateConservation threatened facet counts 20, and the countryConservation facet has no Ardea alba row. The supplied ALA figures were state-status records 20, national-status records none, latest year 2023. A 2012 eBird point from an earlier taxon_name sample is not the latest year."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Ardea+alba%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Ardea alba\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22697043/280949218",
        "title": "IUCN Red List page used for Ardea alba"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ardea+alba&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ardea alba"
      }
    ]
  },
  {
    "commonName": "Australian Bustard",
    "scientificName": "Ardeotis australis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Ardeotis australis\" within 10 km of -38.10, 144.05: 3 records, year 1896, 2 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 3 records.",
      "notes": "July 2026 FFG Threatened List: Australian Bustard, Ardeotis australis; category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. One record is dated 1896, Victorian Biodiversity Atlas, at -38.16517, 144.00134. Two further records are undated."
    },
    "uncertain": [
      "Two of the three ALA records are undated. The dated record is 1896."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Ardeotis+australis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Ardeotis australis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22691940/263666217",
        "title": "IUCN Red List page used for Ardeotis australis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ardeotis+australis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ardeotis australis"
      }
    ]
  },
  {
    "commonName": "Musk Duck",
    "scientificName": "Biziura lobata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Biziura lobata\" within 10 km of -38.10, 144.05: 11 records, years 1977–2023, 4 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 11 records.",
      "notes": "July 2026 FFG Threatened List: Musk Duck, Biziura lobata; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2023 eBird record in the latest year is at -38.105502, 144.141945."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Biziura+lobata%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Biziura lobata\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22679830/253981736",
        "title": "IUCN Red List page used for Biziura lobata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Biziura+lobata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Biziura lobata"
      }
    ]
  },
  {
    "commonName": "Bush Stone-curlew",
    "scientificName": "Burhinus grallarius",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "ALA species:\"Burhinus grallarius\" within 10 km of -38.10, 144.05: 3 records, all undated. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 3 records.",
      "notes": "July 2026 FFG Threatened List: Bush Stone-curlew, Burhinus grallarius (originally listed as Burhinus magnirostris); category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. All 3 records are undated. One is Victorian Biodiversity Atlas at -38.07351, 144.043, coordinate uncertainty 900 m. Two are Historical Bird Atlas at -38.06, 144.05, coordinate uncertainty 4500 m."
    },
    "uncertain": [
      "All three ALA records are undated, so there is no latest year."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Burhinus+grallarius%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Burhinus grallarius\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693600/281030269",
        "title": "IUCN Red List page used for Burhinus grallarius"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Burhinus+grallarius&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Burhinus grallarius"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Burhinus+grallarius%22&lat=-38.10&lon=144.05&radius=10&pageSize=10&facets=year&flimit=100",
        "title": "ALA occurrence records for Burhinus grallarius within 10 km"
      }
    ]
  },
  {
    "commonName": "Sharp-tailed Sandpiper",
    "scientificName": "Calidris acuminata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Calidris acuminata\" within 10 km of -38.10, 144.05: 7 records, years 1966–2001, 1 undated record. ALA countryConservation threatened facet: 7 records. ALA stateConservation threatened facet: 7 records.",
      "notes": "July 2026 FFG Threatened List: Sharp-tailed Sandpiper, Calidris acuminata; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Calidris acuminata; common name Sharp-tailed Sandpiper; Listed SPRAT TaxonID 874; VIC column Yes. The SPRAT profile URL in the CSV was not opened."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Calidris+acuminata%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Calidris acuminata\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693414/152588591",
        "title": "IUCN Red List page used for Calidris acuminata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Calidris+acuminata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Calidris acuminata"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=874",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Curlew Sandpiper",
    "scientificName": "Calidris ferruginea",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Critically Endangered",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Vulnerable (assessed 2024)",
      "localRecords": "ALA species:\"Calidris ferruginea\" within 10 km of -38.10, 144.05: 2 records, year 1977. ALA countryConservation threatened facet: 2 records. ALA stateConservation threatened facet: 2 records.",
      "notes": "July 2026 FFG Threatened List: Curlew Sandpiper, Calidris ferruginea; category Critically Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Critically Endangered; scientific name Calidris ferruginea; common name Curlew Sandpiper; Listed SPRAT TaxonID 856; VIC column Yes. The SPRAT profile URL in the CSV was not opened. IUCN lists this taxon as Vulnerable (assessed 2024)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Calidris+ferruginea%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Calidris ferruginea\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693431/180593985",
        "title": "IUCN Red List page used for Calidris ferruginea"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Calidris+ferruginea&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Calidris ferruginea"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=856",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Gang-gang Cockatoo",
    "scientificName": "Callocephalon fimbriatum",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Endangered",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Callocephalon fimbriatum\" within 10 km of -38.10, 144.05: 9 records, years 1979–2024, 1 undated record. ALA countryConservation threatened facet: 9 records. ALA stateConservation threatened facet: 9 records.",
      "notes": "July 2026 FFG Threatened List: Gang-gang Cockatoo, Callocephalon fimbriatum; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Callocephalon fimbriatum; common name Gang-gang Cockatoo; Listed SPRAT TaxonID 768; VIC column Yes. The SPRAT profile URL in the CSV was not opened. A 2024 eBird record in the latest year is at -38.1, 144.06."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Callocephalon+fimbriatum%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Callocephalon fimbriatum\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684755/210869419",
        "title": "IUCN Red List page used for Callocephalon fimbriatum"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Callocephalon+fimbriatum&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Callocephalon fimbriatum"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=768",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Brown Treecreeper",
    "scientificName": "Climacteris picumnus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable (Climacteris picumnus victoriae)",
      "ffgJuly2026": "Vulnerable (Climacteris picumnus victoriae)",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Climacteris picumnus\" within 10 km of -38.10, 144.05: 15 records, years 1979–2023, 1 undated record.",
      "notes": "July 2026 FFG Threatened List: Brown Treecreeper (south-eastern), Climacteris picumnus victoriae; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; the CSV row is Climacteris picumnus victoriae, Brown Treecreeper (south-eastern), not a separate species-level row; Listed SPRAT TaxonID 67062; VIC column Yes. The SPRAT profile URL in the CSV was not opened. Local records are the species Climacteris picumnus. The countryConservation facet has no row for that species name, which matches the supplied national-status count of none. The stateConservation facet count is 15, the same as the species: total. The EPBC and FFG listings are the south-eastern subspecies, not the species as a whole."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Climacteris+picumnus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Climacteris picumnus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22703577/253989189",
        "title": "IUCN Red List page used for Climacteris picumnus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Climacteris+picumnus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Climacteris picumnus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=67062",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Wandering Albatross",
    "scientificName": "Diomedea exulans",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Vulnerable (assessed 2018)",
      "localRecords": "ALA species:\"Diomedea exulans\" within 10 km of -38.10, 144.05: 1 record, year 2010. ALA countryConservation threatened facet: 1 record. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: Wandering Albatross, Diomedea exulans; category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Diomedea exulans; common name Wandering Albatross; Listed SPRAT TaxonID 89223; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The single ALA record is a machine observation from the Retrospective Analysis of Antarctic Tracking (Standardised) Data from the Scientific Committee on Antarctic Research, data resource dr22503, year 2010, at -38.043294, 144.078894. It is a tracking point inside the 10 km circle, not a local breeding or sighting record. Southern Royal Albatross, Diomedea epomophora, is a separate taxon on both lists and is not this record."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Diomedea+exulans%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Diomedea exulans\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22698305/132640680",
        "title": "IUCN Red List page used for Diomedea exulans"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Diomedea+exulans&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Diomedea exulans"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=89223",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Diomedea+exulans%22&lat=-38.10&lon=144.05&radius=10&pageSize=10",
        "title": "ALA occurrence record for Wandering Albatross within 10 km"
      }
    ]
  },
  {
    "commonName": "Black Falcon",
    "scientificName": "Falco subniger",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Falco subniger\" within 10 km of -38.10, 144.05: 65 records, years 2001–2025. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 65 records.",
      "notes": "July 2026 FFG Threatened List: Black Falcon, Falco subniger; category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. IUCN lists this taxon as Least Concern (assessed 2024)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Falco+subniger%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Falco subniger\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22696484/253970763",
        "title": "IUCN Red List page used for Falco subniger"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Falco+subniger&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Falco subniger"
      }
    ]
  },
  {
    "commonName": "Latham's Snipe",
    "scientificName": "Gallinago hardwickii",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Near Threatened (assessed 2021)",
      "localRecords": "ALA species:\"Gallinago hardwickii\" within 10 km of -38.10, 144.05: 5 records, years 1978–2017, 1 undated record. ALA countryConservation threatened facet: 5 records. ALA stateConservation threatened facet: 5 records.",
      "notes": "July 2026 FFG Threatened List: Latham's Snipe, Gallinago hardwickii; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Gallinago hardwickii; common name Latham's Snipe, Japanese Snipe; Listed SPRAT TaxonID 863; VIC column Yes. The SPRAT profile URL in the CSV was not opened. IUCN lists this taxon as Near Threatened (assessed 2021)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Gallinago+hardwickii%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Gallinago hardwickii\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693078/209318491",
        "title": "IUCN Red List page used for Gallinago hardwickii"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Gallinago+hardwickii&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Gallinago hardwickii"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=863",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Painted Honeyeater",
    "scientificName": "Grantiella picta",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2021)",
      "localRecords": "ALA species:\"Grantiella picta\" within 10 km of -38.10, 144.05: 13 records, years 1994–2008. ALA countryConservation threatened facet: 13 records. ALA stateConservation threatened facet: 13 records.",
      "notes": "July 2026 FFG Threatened List: Painted Honeyeater, Grantiella picta; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Grantiella picta; common name Painted Honeyeater; Listed SPRAT TaxonID 470; VIC column Yes. The SPRAT profile URL in the CSV was not opened. A 2008 Birdata record in the latest year is at -38.05139, 144.13778."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Grantiella+picta%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Grantiella picta\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704412/210645933",
        "title": "IUCN Red List page used for Grantiella picta"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Grantiella+picta&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Grantiella picta"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=470",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "White-bellied Sea-Eagle",
    "scientificName": "Haliaeetus leucogaster",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2020)",
      "localRecords": "ALA species:\"Haliaeetus leucogaster\" within 10 km of -38.10, 144.05: 1 record, year 2025. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: White-bellied Sea-Eagle, Haliaeetus leucogaster; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The single record is year 2025. No coordinate from a latest-year sample was stored."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Haliaeetus+leucogaster%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Haliaeetus leucogaster\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22695097/216253643",
        "title": "IUCN Red List page used for Haliaeetus leucogaster"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Haliaeetus+leucogaster&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Haliaeetus leucogaster"
      }
    ]
  },
  {
    "commonName": "Little Eagle",
    "scientificName": "Hieraaetus morphnoides",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Hieraaetus morphnoides\" within 10 km of -38.10, 144.05: 141 records, years 1977–2026, 10 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 141 records. iNaturalist threatened=true within 10 km, all grades: 2 observations under Hieraaetus morphnoides; research grade: 2. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Little Eagle, Hieraaetus morphnoides; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. iNaturalist threatened=true counts are separate from the ALA total and are not added to it."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Hieraaetus+morphnoides%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Hieraaetus morphnoides\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22734332/253976087",
        "title": "IUCN Red List page used for Hieraaetus morphnoides"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Hieraaetus+morphnoides&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Hieraaetus morphnoides"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "White-throated Needletail",
    "scientificName": "Hirundapus caudacutus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Hirundapus caudacutus\" within 10 km of -38.10, 144.05: 19 records, years 1979–2025, 3 undated records. iNaturalist threatened=true within 10 km, all grades: 1 observation under Hirundapus caudacutus; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: White-throated Needletail, Hirundapus caudacutus; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Hirundapus caudacutus; common name White-throated Needletail; Listed SPRAT TaxonID 682; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The species: search total is 19, years 1979–2025, with 3 undated. The countryConservation and stateConservation threatened facets each count 15, which matches the supplied national-status record count. The four-record difference was not reclassified. A 2025 iNaturalist record in the search is at -38.06307, 144.141366."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Hirundapus+caudacutus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Hirundapus caudacutus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22686677/263688709",
        "title": "IUCN Red List page used for Hirundapus caudacutus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Hirundapus+caudacutus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Hirundapus caudacutus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=682",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Caspian Tern",
    "scientificName": "Hydroprogne caspia",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "ALA species:\"Hydroprogne caspia\" within 10 km of -38.10, 144.05: 2 records, year 1980. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 2 records.",
      "notes": "July 2026 FFG Threatened List: Caspian Tern, Hydroprogne caspia (originally listed as Sterna caspia); category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Both records are year 1980. A First Bird Atlas record is at -38.08, 144.08."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Hydroprogne+caspia%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Hydroprogne caspia\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22694524/155509311",
        "title": "IUCN Red List page used for Hydroprogne caspia"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Hydroprogne+caspia&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Hydroprogne caspia"
      }
    ]
  },
  {
    "commonName": "Swift Parrot",
    "scientificName": "Lathamus discolor",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Critically Endangered",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Critically Endangered (assessed 2018)",
      "localRecords": "ALA species:\"Lathamus discolor\" within 10 km of -38.10, 144.05: 22 records, years 1979–2021, 2 undated records. ALA countryConservation threatened facet: 22 records. ALA stateConservation threatened facet: 22 records.",
      "notes": "July 2026 FFG Threatened List: Swift Parrot, Lathamus discolor; category Critically Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Critically Endangered; scientific name Lathamus discolor; common name Swift Parrot; Listed SPRAT TaxonID 744; VIC column Yes. The SPRAT profile URL in the CSV was not opened. A 2021 Birdata record in the latest year is at -38.033863, 144.064077."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Lathamus+discolor%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Lathamus discolor\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22685219/130886700",
        "title": "IUCN Red List page used for Lathamus discolor"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Lathamus+discolor&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Lathamus discolor"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=744",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Pink Cockatoo",
    "scientificName": "Lophochroa leadbeateri",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered (Lophochroa leadbeateri leadbeateri)",
      "ffgJuly2026": "Endangered (Lophochroa leadbeateri leadbeateri)",
      "iucn": "Least Concern (assessed 2018); IUCN name on the page is Cacatua leadbeateri",
      "localRecords": "ALA species:\"Lophochroa leadbeateri\" within 10 km of -38.10, 144.05: 1 record, year 1979. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: Pink Cockatoo (eastern), Lophochroa leadbeateri leadbeateri; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; the CSV row is Lophochroa leadbeateri leadbeateri, Pink Cockatoo (eastern); Listed SPRAT TaxonID 82926; VIC column Yes. The species binomial is not a separate row. The SPRAT profile URL in the CSV was not opened. The IUCN page is the species assessment under the name Cacatua leadbeateri, Least Concern, assessed 2018. It is not a separate assessment of the eastern subspecies. The local ALA record is rank species, one Victorian Biodiversity Atlas observation in 1979 at -38.15, 144.11."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Lophochroa+leadbeateri%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Lophochroa leadbeateri\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22684767/131914793",
        "title": "IUCN Red List page used for Lophochroa leadbeateri"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Lophochroa+leadbeateri&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Lophochroa leadbeateri"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=82926",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Square-tailed Kite",
    "scientificName": "Lophoictinia isura",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2018)",
      "localRecords": "ALA species:\"Lophoictinia isura\" within 10 km of -38.10, 144.05: 7 records, years 2020–2026. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 7 records. iNaturalist threatened=true within 10 km, all grades: 3 observations under Lophoictinia isura; research grade: 3. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Square-tailed Kite, Lophoictinia isura; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2026 iNaturalist record is at -38.087011, 144.054736."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Lophoictinia+isura%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Lophoictinia isura\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22695010/130019707",
        "title": "IUCN Red List page used for Lophoictinia isura"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Lophoictinia+isura&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Lophoictinia isura"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Hooded Robin",
    "scientificName": "Melanodryas cucullata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered (Melanodryas cucullata cucullata)",
      "ffgJuly2026": "Endangered (Melanodryas cucullata cucullata)",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Melanodryas cucullata\" within 10 km of -38.10, 144.05: 2 records, year 1989, 1 undated record. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 2 records.",
      "notes": "July 2026 FFG Threatened List: Hooded Robin (south-eastern), Melanodryas cucullata cucullata (previously listed as Melanodryas cucullata); category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; the row recorded in Victoria is Melanodryas cucullata cucullata, South-eastern Hooded Robin; Listed SPRAT TaxonID 67093; VIC column Yes. Melanodryas cucullata melvillensis, Tiwi Islands Hooded Robin, is a different subspecies, Critically Endangered, taxon 67092, VIC column \"-\". The SPRAT profile URL in the CSV was not opened. Two records are stored as Melanodryas cucullata. One is dated 1989 and one is undated. No latest-year coordinate was stored."
    },
    "uncertain": [
      "One of the two ALA records is undated. The dated record is 1989."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Melanodryas+cucullata%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Melanodryas cucullata\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704837/254005955",
        "title": "IUCN Red List page used for Melanodryas cucullata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Melanodryas+cucullata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Melanodryas cucullata"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=67093",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Blue-winged Parrot",
    "scientificName": "Neophema chrysostoma",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Neophema chrysostoma\" within 10 km of -38.10, 144.05: 70 records, years 1979–2026, 8 undated records. ALA countryConservation threatened facet: 70 records. ALA stateConservation threatened facet: 70 records. iNaturalist threatened=true within 10 km, all grades: 2 observations under Neophema chrysostoma; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Blue-winged Parrot, Neophema chrysostoma; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Neophema chrysostoma; common name Blue-winged Parrot; Listed SPRAT TaxonID 726; VIC column Yes. The SPRAT profile URL in the CSV was not opened. iNaturalist threatened=true counts are separate from the ALA total and are not added to it."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Neophema+chrysostoma%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Neophema chrysostoma\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22685194/210989456",
        "title": "IUCN Red List page used for Neophema chrysostoma"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Neophema+chrysostoma&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Neophema chrysostoma"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=726",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Blue-billed Duck",
    "scientificName": "Oxyura australis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2021)",
      "localRecords": "ALA species:\"Oxyura australis\" within 10 km of -38.10, 144.05: 11 records, years 2006–2019. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 11 records.",
      "notes": "July 2026 FFG Threatened List: Blue-billed Duck, Oxyura australis; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2019 eBird record in the latest year is at -38.047937, 144.140121."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Oxyura+australis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Oxyura australis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22679827/210733513",
        "title": "IUCN Red List page used for Oxyura australis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Oxyura+australis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Oxyura australis"
      }
    ]
  },
  {
    "commonName": "Plains-wanderer",
    "scientificName": "Pedionomus torquatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Critically Endangered",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Endangered (assessed 2022)",
      "localRecords": "ALA species:\"Pedionomus torquatus\" within 10 km of -38.10, 144.05: 1 record, year 1914. ALA countryConservation threatened facet: 1 record. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: Plains-wanderer, Pedionomus torquatus; category Critically Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Critically Endangered; scientific name Pedionomus torquatus; common name Plains-wanderer; Listed SPRAT TaxonID 906; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The only record is a 1914 Victorian Biodiversity Atlas observation at -38.06, 144.03."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Pedionomus+torquatus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Pedionomus torquatus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693049/212570062",
        "title": "IUCN Red List page used for Pedionomus torquatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pedionomus+torquatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pedionomus torquatus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=906",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Speckled Warbler",
    "scientificName": "Pyrrholaemus sagittatus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Pyrrholaemus sagittatus\" within 10 km of -38.10, 144.05: 3 records, year 2019, 1 undated record. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 3 records.",
      "notes": "July 2026 FFG Threatened List: Speckled Warbler, Pyrrholaemus sagittatus (originally listed as Chthonicola sagittata); category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2019 Victorian Biodiversity Atlas record is at -38.04747, 144.14021. One further record is undated."
    },
    "uncertain": [
      "One of the three ALA records is undated. The dated records are 2019."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Pyrrholaemus+sagittatus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Pyrrholaemus sagittatus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22728490/253969735",
        "title": "IUCN Red List page used for Pyrrholaemus sagittatus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Pyrrholaemus+sagittatus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Pyrrholaemus sagittatus"
      }
    ]
  },
  {
    "commonName": "Australasian Shoveler",
    "scientificName": "Spatula rhynchotis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Spatula rhynchotis\" within 10 km of -38.10, 144.05: 37 records, years 1978–2024, 3 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 37 records.",
      "notes": "July 2026 FFG Threatened List: Australasian Shoveler, Spatula rhynchotis; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. A 2024 eBird record in the latest year is at -38.105502, 144.141945."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Spatula+rhynchotis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Spatula rhynchotis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680243/264994587",
        "title": "IUCN Red List page used for Spatula rhynchotis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Spatula+rhynchotis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Spatula rhynchotis"
      }
    ]
  },
  {
    "commonName": "Diamond Firetail",
    "scientificName": "Stagonopleura guttata",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2021)",
      "localRecords": "ALA species:\"Stagonopleura guttata\" within 10 km of -38.10, 144.05: 70 records, years 1977–2015, 14 undated records. ALA countryConservation threatened facet: 70 records. ALA stateConservation threatened facet: 70 records.",
      "notes": "July 2026 FFG Threatened List: Diamond Firetail, Stagonopleura guttata; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Stagonopleura guttata; common name Diamond Firetail; Listed SPRAT TaxonID 59398; VIC column Yes. The SPRAT profile URL in the CSV was not opened."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Stagonopleura+guttata%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Stagonopleura guttata\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22719660/211542365",
        "title": "IUCN Red List page used for Stagonopleura guttata"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Stagonopleura+guttata&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Stagonopleura guttata"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=59398",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Freckled Duck",
    "scientificName": "Stictonetta naevosa",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Stictonetta naevosa\" within 10 km of -38.10, 144.05: 3 records, year 1997, 2 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 3 records.",
      "notes": "July 2026 FFG Threatened List: Freckled Duck, Stictonetta naevosa; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. The dated records are year 1997. A Victorian Biodiversity Atlas record is at -38.10181, 144.14387. Two further records are undated."
    },
    "uncertain": [
      "Two of the three ALA records are undated. The dated record is 1997."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Stictonetta+naevosa%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Stictonetta naevosa\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22679836/253979434",
        "title": "IUCN Red List page used for Stictonetta naevosa"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Stictonetta+naevosa&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Stictonetta naevosa"
      }
    ]
  },
  {
    "commonName": "Common Greenshank",
    "scientificName": "Tringa nebularia",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2025)",
      "localRecords": "ALA species:\"Tringa nebularia\" within 10 km of -38.10, 144.05: 1 record, year 2002. ALA countryConservation threatened facet: 1 record. ALA stateConservation threatened facet: 1 record.",
      "notes": "July 2026 FFG Threatened List: Common Greenshank, Tringa nebularia; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Tringa nebularia; common name Common Greenshank, Greenshank; Listed SPRAT TaxonID 832; VIC column Yes. The SPRAT profile URL in the CSV was not opened. EPBC and July 2026 FFG are both Endangered. IUCN Least Concern (assessed 2025) is the global assessment."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Tringa+nebularia%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Tringa nebularia\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693220/281868802",
        "title": "IUCN Red List page used for Tringa nebularia"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tringa+nebularia&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tringa nebularia"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=832",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Masked Owl",
    "scientificName": "Tyto novaehollandiae",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Least Concern (assessed 2023)",
      "localRecords": "ALA species:\"Tyto novaehollandiae\" within 10 km of -38.10, 144.05: 2 records, year 1994. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: 2 records.",
      "notes": "July 2026 FFG Threatened List: Masked Owl, Tyto novaehollandiae; category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. EPBC does not list the mainland Victorian Masked Owl. The CSV rows are Tyto novaehollandiae castanops (Tasmanian population), Vulnerable, taxon 67051, VIC \"-\"; Tyto novaehollandiae kimberli, Vulnerable, taxon 26048, VIC \"-\"; and Tyto novaehollandiae melvillensis, Endangered, taxon 26049, VIC \"-\". Both records are year 1994. A Victorian Biodiversity Atlas record is at -38.14851, 144.118."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Tyto+novaehollandiae%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Tyto novaehollandiae\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/230023167/230808865",
        "title": "IUCN Red List page used for Tyto novaehollandiae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tyto+novaehollandiae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tyto novaehollandiae"
      }
    ]
  },
  {
    "commonName": "Buff-breasted Sandpiper",
    "scientificName": "Calidris subruficollis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Vulnerable (assessed 2024)",
      "localRecords": "ALA species:\"Calidris subruficollis\" within 10 km of -38.10, 144.05: 1 record, year 2017. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row. iNaturalist threatened=true within 10 km, all grades: 1 observation under Calidris subruficollis; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Buff-breasted Sandpiper is not on the July 2026 FFG list and has no EPBC CSV row. It was absent from both ALA threatened-status facets. ALA conservation facets use statutory lists, not IUCN. The one record is an iNaturalist observation in 2017 at -38.019643, 143.999736. iNaturalist threatened=true count is 1."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Calidris+subruficollis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Calidris subruficollis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22693447/256354281",
        "title": "IUCN Red List page used for Calidris subruficollis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Calidris+subruficollis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Calidris subruficollis"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Black-chinned Honeyeater",
    "scientificName": "Melithreptus gularis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Melithreptus gularis\" within 10 km of -38.10, 144.05: 40 records, years 1993–2017, 1 undated record. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Black-chinned Honeyeater is not on the July 2026 FFG list and has no EPBC CSV row."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Melithreptus+gularis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Melithreptus gularis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22704143/253982570",
        "title": "IUCN Red List page used for Melithreptus gularis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Melithreptus+gularis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Melithreptus gularis"
      }
    ]
  },
  {
    "commonName": "Powerful Owl",
    "scientificName": "Ninox strenua",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Ninox strenua\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Powerful Owl, Ninox strenua; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. IUCN lists this taxon as Least Concern (assessed 2024)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Ninox+strenua%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Ninox strenua\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22689389/254015323",
        "title": "IUCN Red List page used for Ninox strenua"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Ninox+strenua&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Ninox strenua"
      }
    ]
  },
  {
    "commonName": "Australasian Bittern",
    "scientificName": "Botaurus poiciloptilus",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Vulnerable (assessed 2022)",
      "localRecords": "ALA species:\"Botaurus poiciloptilus\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Australasian Bittern, Botaurus poiciloptilus; category Critically Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Botaurus poiciloptilus; common name Australasian Bittern; Listed SPRAT TaxonID 1001; VIC column Yes. The SPRAT profile URL in the CSV was not opened. IUCN lists this taxon as Vulnerable (assessed 2022)."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Botaurus+poiciloptilus%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Botaurus poiciloptilus\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22697353/217377735",
        "title": "IUCN Red List page used for Botaurus poiciloptilus"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Botaurus+poiciloptilus&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Botaurus poiciloptilus"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=1001",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Hardhead",
    "scientificName": "Aythya australis",
    "group": "bird",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Least Concern (assessed 2024)",
      "localRecords": "ALA species:\"Aythya australis\" within 10 km of -38.10, 144.05: 89 records, years 1978–2025, 11 undated records. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Hardhead is not on the July 2026 FFG list. The threatened-list page states that Hardhead (Aythya australis) was removed from the Threatened List in June 2024. There is no Aythya australis row in the EPBC CSV. It was absent from both ALA threatened-status facets."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Aythya+australis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Aythya australis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/22680387/264978663",
        "title": "IUCN Red List page used for Aythya australis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Aythya+australis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Aythya australis"
      }
    ]
  },
  {
    "commonName": "Growling Grass Frog",
    "scientificName": "Litoria raniformis",
    "group": "frog",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2022)",
      "localRecords": "ALA species:\"Litoria raniformis\" within 10 km of -38.10, 144.05: 5 records, years 2016–2025, 1 undated record. ALA countryConservation threatened facet: 5 records. ALA stateConservation threatened facet: 5 records. iNaturalist threatened=true within 10 km, all grades: 5 observations under Ranoidea raniformis; research grade: 3. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List: Growling Grass Frog, Litoria raniformis; category Vulnerable. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; listed scientific name Litoria raniformis; current scientific name Ranoidea raniformis; common names in the CSV include Southern Bell Frog and Growling Grass Frog; Listed SPRAT TaxonID 1828; VIC column Yes. The SPRAT profile URL in the CSV was not opened. One frog object is used. ALA stores the records as Litoria raniformis (5) and returned 0 for Ranoidea raniformis in the same circle. iNaturalist uses Ranoidea raniformis. The EPBC current scientific name is Ranoidea raniformis. The Growling Grass Frog was the only frog in either ALA threatened-status facet."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Litoria+raniformis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Litoria raniformis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/12152/78435466",
        "title": "IUCN Red List page used for Litoria raniformis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Litoria+raniformis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Litoria raniformis"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=1828",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  },
  {
    "commonName": "Yarra Pygmy Perch",
    "scientificName": "Nannoperca obscura",
    "group": "fish",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Endangered",
      "iucn": "Endangered (assessed 2019)",
      "localRecords": "ALA species:\"Nannoperca obscura\" within 10 km of -38.10, 144.05: 16 records, years 2000–2008. ALA countryConservation threatened facet: 16 records. ALA stateConservation threatened facet: 16 records.",
      "notes": "July 2026 FFG Threatened List: Yarra Pygmy Perch, Nannoperca obscura; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Nannoperca obscura; common name Yarra Pygmy Perch; Listed SPRAT TaxonID 26177; VIC column Yes. The SPRAT profile URL in the CSV was not opened. A 2008 Victorian Biodiversity Atlas record in the latest year is at -38.1072, 144.09506. No other fish was in the ALA threatened-status facets."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Nannoperca+obscura%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Nannoperca obscura\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/39301/123379189",
        "title": "IUCN Red List page used for Nannoperca obscura"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Nannoperca+obscura&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Nannoperca obscura"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=26177",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Australian Grayling",
    "scientificName": "Prototroctes maraena",
    "group": "fish",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "Vulnerable (assessed 2019)",
      "localRecords": "ALA species:\"Prototroctes maraena\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Australian Grayling, Prototroctes maraena; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Prototroctes maraena; common name Australian Grayling; Listed SPRAT TaxonID 26179; VIC column Yes. The SPRAT profile URL in the CSV was not opened."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Prototroctes+maraena%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Prototroctes maraena\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/18383/123378802",
        "title": "IUCN Red List page used for Prototroctes maraena"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Prototroctes+maraena&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Prototroctes maraena"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=26179",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Dwarf Galaxias",
    "scientificName": "Galaxiella pusilla",
    "group": "fish",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Endangered",
      "iucn": "Endangered (assessed 2019)",
      "localRecords": "ALA species:\"Galaxiella pusilla\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Dwarf Galaxias, Galaxiella pusilla; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Galaxiella pusilla; common name Eastern Dwarf Galaxias, Dwarf Galaxias; Listed SPRAT TaxonID 56790; VIC column Yes. The SPRAT profile URL in the CSV was not opened. This is the Dwarf Galaxias row, extinction risk Australia, and the EPBC Eastern Dwarf Galaxias row. It is a different list entry from Little Galaxias, Galaxiella toourtkoourt, which the FFG list says was originally listed as Galaxiella pusilla. Both names returned 0 ALA records within 10 km. Which name would apply at Inverleigh is not inferred from the lists."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Galaxiella+pusilla%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Galaxiella pusilla\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/8820/123377818",
        "title": "IUCN Red List page used for Galaxiella pusilla"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Galaxiella+pusilla&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Galaxiella pusilla"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=56790",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Little Galaxias",
    "scientificName": "Galaxiella toourtkoourt",
    "group": "fish",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Endangered",
      "iucn": "Vulnerable (assessed 2019)",
      "localRecords": "ALA species:\"Galaxiella toourtkoourt\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Little Galaxias, Galaxiella toourtkoourt (originally listed as Galaxiella pusilla); category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Galaxiella toourtkoourt; common name Little Galaxias, Western Plains Galaxiella; Listed SPRAT TaxonID 88269; VIC column Yes. The SPRAT profile URL in the CSV was not opened. July 2026 FFG lists Little Galaxias, Galaxiella toourtkoourt, as Endangered with extinction risk Victoria, originally listed as Galaxiella pusilla. The EPBC CSV lists Galaxiella toourtkoourt as Vulnerable. Dwarf Galaxias, Galaxiella pusilla, is a separate row on both lists. Both names returned 0 ALA records within 10 km."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Galaxiella+toourtkoourt%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Galaxiella toourtkoourt\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/122904035/123382176",
        "title": "IUCN Red List page used for Galaxiella toourtkoourt"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Galaxiella+toourtkoourt&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Galaxiella toourtkoourt"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=88269",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Murray Cod",
    "scientificName": "Maccullochella peelii",
    "group": "fish",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Endangered",
      "iucn": "Least Concern (assessed 2019)",
      "localRecords": "ALA species:\"Maccullochella peelii\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Murray Cod, Maccullochella peelii; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Maccullochella peelii; common name Murray Cod; Listed SPRAT TaxonID 66633; VIC column Yes. The SPRAT profile URL in the CSV was not opened. EPBC Vulnerable and July 2026 FFG Endangered are both statutory. IUCN Least Concern (assessed 2019) is the global assessment."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Maccullochella+peelii%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Maccullochella peelii\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/12576/103325360",
        "title": "IUCN Red List page used for Maccullochella peelii"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Maccullochella+peelii&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Maccullochella peelii"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=66633",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Victorian Grassland Earless Dragon",
    "scientificName": "Tympanocryptis pinguicolla",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Critically Endangered",
      "ffgJuly2026": "Critically Endangered",
      "iucn": "Critically Endangered (assessed 2023)",
      "localRecords": "ALA species:\"Tympanocryptis pinguicolla\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Victorian Grassland Earless Dragon, Tympanocryptis pinguicolla; category Critically Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Critically Endangered; scientific name Tympanocryptis pinguicolla; common name Victorian Grassland Earless Dragon; Listed SPRAT TaxonID 66727; VIC column Yes. The SPRAT profile URL in the CSV was not opened. Other grassland earless dragons in the EPBC CSV (Tympanocryptis lineata, T. mccartneyi, T. osbornei and T. condaminensis) are different taxa. The ALA search for Tympanocryptis pinguicolla returned 0 records."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Tympanocryptis+pinguicolla%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Tympanocryptis pinguicolla\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/221337988/235752222",
        "title": "IUCN Red List page used for Tympanocryptis pinguicolla"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Tympanocryptis+pinguicolla&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Tympanocryptis pinguicolla"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=66727",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Corangamite Water Skink",
    "scientificName": "Eulamprus tympanum marnieae",
    "group": "reptile",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered (Eulamprus tympanum marnieae)",
      "ffgJuly2026": "Endangered (Eulamprus tympanum marnieae)",
      "iucn": "Least Concern (assessed 2017); IUCN name on the page is Eulamprus tympanum",
      "localRecords": "ALA species:\"Eulamprus tympanum marnieae\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Corangamite Water Skink, Eulamprus tympanum marnieae; category Endangered. Extinction risk column: Victoria. The July 2026 list says taxa at risk in Victoria are assessed under Victorian legislation only. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Eulamprus tympanum marnieae; common names Corangamite Water Skink and Dreeite Water Skink; Listed SPRAT TaxonID 64487; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The IUCN page retrieved is the species Eulamprus tympanum, Least Concern, assessed 2017. It is not a separate assessment of subspecies marnieae."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Eulamprus+tympanum+marnieae%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Eulamprus tympanum marnieae\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/62249/101743689",
        "title": "IUCN Red List page used for Eulamprus tympanum marnieae"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Eulamprus+tympanum+marnieae&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Eulamprus tympanum marnieae"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=64487",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Golden Sun Moth",
    "scientificName": "Synemon plana",
    "group": "invertebrate",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Vulnerable",
      "ffgJuly2026": "Vulnerable",
      "iucn": "not found in IUCN Red List ChecklistBank dataset 53131 (version 2026-07-28)",
      "localRecords": "ALA species:\"Synemon plana\" within 10 km of -38.10, 144.05: 3 records, year 2009. ALA countryConservation threatened facet: 3 records. ALA stateConservation threatened facet: 3 records.",
      "notes": "July 2026 FFG Threatened List: Golden Sun Moth, Synemon plana; category Vulnerable. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Vulnerable; scientific name Synemon plana; common name Golden Sun Moth; Listed SPRAT TaxonID 25234; VIC column Yes. The SPRAT profile URL in the CSV was not opened. ChecklistBank dataset 53131 exact nameusage for Synemon plana returned no species record. A fuzzy nameusage search returned the genus Synemon only, so no IUCN category is given. The other insects on the July 2026 FFG insect table were queried with the same ALA species: search within 10 km. Only Synemon plana returned records. Peronomyrmex bartoni returned HTTP 504 on the first call and 0 records, HTTP 200, on the retry on 2026-10-26. A web-search snippet of the SPRAT profile indexed Vulnerable with an effective date, but the profile HTML was not opened, so that date is not used."
    },
    "uncertain": [
      "No IUCN category was found in ChecklistBank dataset 53131 version 2026-07-28. The IUCN Red List API v4 returned HTTP 403 without a token."
    ],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Synemon+plana%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Synemon plana\" within 10 km of Inverleigh"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Synemon+plana&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Synemon plana"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131",
        "title": "ChecklistBank dataset 53131, The IUCN Red List of Threatened Species, version 2026-07-28"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=25234",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Matchstick Grasshopper",
    "scientificName": "Keyacris scurra",
    "group": "invertebrate",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "Endangered",
      "ffgJuly2026": "Endangered",
      "iucn": "Endangered (assessed 2021)",
      "localRecords": "ALA species:\"Keyacris scurra\" within 10 km of -38.10, 144.05: 0 records (accessed 2026-10-26). ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row.",
      "notes": "July 2026 FFG Threatened List: Matchstick Grasshopper, Keyacris scurra; category Endangered. Extinction risk column: Australia. The July 2026 list says taxa at risk in Australia are listed under national legislation with a Common Assessment Method-compliant assessment, or are endemic Victorian species listed only under the FFG Act. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: Endangered; scientific name Keyacris scurra; common name Key's Matchstick Grasshopper; Listed SPRAT TaxonID 89739; VIC column Yes. The SPRAT profile URL in the CSV was not opened. The July 2026 common name on the insect table is Matchstick Grasshopper. The EPBC CSV common name is Key's Matchstick Grasshopper. ALA species: total within 10 km is 0."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Keyacris+scurra%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Keyacris scurra\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/196174807/196182510",
        "title": "IUCN Red List page used for Keyacris scurra"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Keyacris+scurra&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Keyacris scurra"
      },
      {
        "url": "http://www.environment.gov.au/cgi-bin/sprat/public/publicspecies.pl?taxon_id=89739",
        "title": "SPRAT profile URL as given in the 28 August 2026 CSV (page not opened)"
      }
    ]
  },
  {
    "commonName": "Yarra Spiny Crayfish",
    "scientificName": "Euastacus yarraensis",
    "group": "invertebrate",
    "tier": "",
    "fields": {
      "onSite": "false",
      "epbc": "not listed",
      "ffgJuly2026": "not listed",
      "iucn": "Vulnerable (assessed 2010)",
      "localRecords": "ALA species:\"Euastacus yarraensis\" within 10 km of -38.10, 144.05: 8 records, years 1993–2024. ALA countryConservation threatened facet: no row. ALA stateConservation threatened facet: no row. iNaturalist threatened=true within 10 km, all grades: 1 observation under Euastacus yarraensis; research grade: 1. ALA and iNaturalist counts are separate and are not added.",
      "notes": "July 2026 FFG Threatened List fauna tables: not listed. EPBC Threatened Species State Lists CSV, date extracted 2026-Aug-28: no row for this scientific name. Yarra Spiny Crayfish is not on the July 2026 FFG crustacean table and has no EPBC CSV row. IUCN Vulnerable (assessed 2010) is why iNaturalist can flag it. Glenelg Spiny Freshwater Crayfish, Euastacus bispinosus, was also searched: July 2026 FFG Endangered, extinction risk Victoria; EPBC Endangered, taxon 81552, VIC column Yes; ALA species: total 0 within 10 km. Murray Spiny Crayfish, Euastacus armatus, is FFG category Threatened and was not the taxon in the 10 km search."
    },
    "uncertain": [],
    "sources": [
      {
        "url": "https://www.environment.vic.gov.au/__data/assets/pdf_file/0028/793801/FFG_Threatened_List_July_2026.pdf",
        "title": "Flora and Fauna Guarantee Act 1988 Threatened List July 2026"
      },
      {
        "url": "https://www.environment.vic.gov.au/conserving-threatened-species/threatened-list",
        "title": "Victoria's Threatened List and Processes List"
      },
      {
        "url": "https://data.gov.au/data/dataset/ae652011-f39e-4c6c-91b8-1dc2d2dfee8f/resource/78401dce-1f40-49d3-92c4-3713d6e34974/download/20260828spcs.csv",
        "title": "Threatened Species State Lists - 28 August 2026 (CSV)"
      },
      {
        "url": "https://data.gov.au/data/dataset/threatened-species-state-lists",
        "title": "Threatened Species State Lists dataset, data.gov.au"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=countryConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, countryConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=%2A%3A%2A&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=species&flimit=1000&fq=stateConservation%3A%28%22Vulnerable%22+OR+%22Endangered%22+OR+%22Critically+Endangered%22%29",
        "title": "ALA occurrences within 10 km, stateConservation threatened facet"
      },
      {
        "url": "https://api.ala.org.au/occurrences/occurrences/search?q=species%3A%22Euastacus+yarraensis%22&lat=-38.10&lon=144.05&radius=10&pageSize=0&facets=year&flimit=100",
        "title": "ALA occurrence search species:\"Euastacus yarraensis\" within 10 km of Inverleigh"
      },
      {
        "url": "https://www.iucnredlist.org/species/153639/4524409",
        "title": "IUCN Red List page used for Euastacus yarraensis"
      },
      {
        "url": "https://api.checklistbank.org/dataset/53131/nameusage?q=Euastacus+yarraensis&limit=8",
        "title": "ChecklistBank IUCN nameusage search for Euastacus yarraensis"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, all grades"
      },
      {
        "url": "https://api.inaturalist.org/v1/observations/species_counts?lat=-38.10&lng=144.05&radius=10&threatened=true&quality_grade=research&per_page=200",
        "title": "iNaturalist species counts, threatened=true, 10 km, research grade"
      }
    ]
  }
];
