import { mammals } from "@/content/mammals";
import { reptiles } from "@/content/reptiles";
import { insects } from "@/content/insects";
import copy from "./wildlife-copy.json";
import media from "./wildlife-media.json";
import insectMedia from "./insects-media.json";
import type { Audio, Photo } from "./types";

export type Group = "mammals" | "reptiles" | "insects";
export type InsectKind = "butterfly" | "dragonfly" | "damselfly" | "bee" | "beetle" | "moth" | "grasshopper" | "ant" | "wasp" | "spider";
export type Kind = "koala" | "native-mammal" | "bat" | "introduced-pest" | "snake" | "lizard" | "turtle" | InsectKind;
export type Records = { ALA5: number; iNat5: number; ALA10: number; iNat10: number };

export type Species = {
  slug: string;
  group: Group;
  kind: Kind;
  commonName: string;
  scientificName: string;
  tier: "5km" | "10km" | "";
  text: Record<string, string>;
  notWellDocumented: string[];
  sources: { url: string; title: string }[];
  photo: Photo | null;
  audio: Audio | null;
  mediaTried: string[];
  // Insects and spiders only.
  introduced?: boolean;
  records?: Records;
  noCommonName?: boolean;
};

type Raw = (typeof mammals)[number];
type MediaEntry = { photo: Photo | null; audio: Audio | null; tried: string[] };

// Info pages in the research drop that are not species.
export const ARTICLE_IDS = new Set(["snake-safety-general", "lizard-friendly-garden", "legless-vs-snake"]);
// Species with no record inside 10 km of town, per docs/RESEARCH-REVIEW.md section 8.
export const NO_LOCAL_RECORDS = new Set(["striped-legless-lizard", "eastern-snake-necked-turtle"]);

const BATS = /-bat$|pipistrelle/;

function kindOf(r: Raw, group: Group): Kind {
  if (r.id === "eastern-snake-necked-turtle") return "turtle";
  if (group === "mammals" && BATS.test(r.id)) return "bat";
  return r.group as Kind;
}

function build(r: Raw, group: Group): Species {
  const m = (media as unknown as Record<string, MediaEntry>)[r.id];
  return {
    slug: r.id,
    group,
    kind: kindOf(r, group),
    commonName: r.commonName,
    scientificName: r.scientificName,
    tier: r.tier,
    text: (copy as Record<string, Record<string, string>>)[r.id] ?? {},
    notWellDocumented: r.notWellDocumented,
    sources: r.sources,
    photo: m?.photo ?? null,
    audio: m?.audio ?? null,
    mediaTried: m?.tried ?? [],
  };
}

// Insects and spiders: content/insects.ts (Grok batch 16, docs/RESEARCH-REVIEW.md section 9).
const NO_COMMON_NAME = /^no standard common name$/i;
const slugify = (s: string) => s.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const insectSlug = (r: { commonName: string; scientificName: string }) =>
  slugify(NO_COMMON_NAME.test(r.commonName) ? r.scientificName : r.commonName);

// Species whose local evidence is thin, per docs/RESEARCH-REVIEW.md section 9 ("Gaps and flags").
export const WEAK_EVIDENCE: Record<string, string> = {
  "grassland-copper": "Only four records, all 5–10 km from town and none within 5 km. It's not known whether a breeding colony is in the reserve.",
  "european-wasp": "The only record within 5 km is a single iNaturalist observation, which wasn't re-checked. There are six records within 10 km.",
  "redback-spider": "No record within 5 km, and only two records 5–10 km from town. The ALA and iNaturalist pairs may be the same two sightings.",
};
// The only listed insect with local records.
export const THREATENED_CAVEAT: Record<string, { status: string; caveat: string }> = {
  "golden-sun-moth": {
    status: "Vulnerable (EPBC Act and Victoria's FFG Act)",
    caveat:
      "Known locally only from three Atlas of Living Australia records, all from 2009 and about 10 km north of town. The three may be duplicate entries of a single sighting. There are no iNaturalist records within 10 km and nothing more recent, so a current population near Inverleigh has not been established.",
  },
};

function buildInsect(r: (typeof insects)[number]): Species {
  const slug = insectSlug(r);
  const m = (insectMedia as unknown as Record<string, MediaEntry>)[slug];
  const { records, origin, ...text } = r.fields;
  const noCommonName = NO_COMMON_NAME.test(r.commonName);
  return {
    slug,
    group: "insects",
    kind: r.group as InsectKind,
    commonName: noCommonName ? r.scientificName : r.commonName,
    scientificName: r.scientificName,
    tier: r.tier,
    text,
    notWellDocumented: r.uncertain,
    sources: r.sources,
    photo: m?.photo ?? null,
    audio: null,
    mediaTried: m?.tried ?? [],
    introduced: origin === "introduced",
    records: JSON.parse(records) as Records,
    noCommonName,
  };
}

const all: Species[] = [
  ...mammals.filter((r) => !ARTICLE_IDS.has(r.id)).map((r) => build(r, "mammals")),
  ...reptiles.filter((r) => !ARTICLE_IDS.has(r.id)).map((r) => build(r, "reptiles")),
  ...insects.map(buildInsect),
];

export const speciesIn = (g: Group) => all.filter((s) => s.group === g);
export const getSpecies = (g: Group, slug: string) => all.find((s) => s.group === g && s.slug === slug);
export const article = (id: string) => {
  const r = [...mammals, ...reptiles].find((x) => x.id === id);
  return r ? { title: r.commonName, text: (copy as Record<string, Record<string, string>>)[id] ?? {}, sources: r.sources } : null;
};
export const allSpecies = all;
