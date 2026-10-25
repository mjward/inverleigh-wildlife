import { mammals } from "@/content/mammals";
import { reptiles } from "@/content/reptiles";
import copy from "./wildlife-copy.json";
import media from "./wildlife-media.json";
import type { Audio, Photo } from "./types";

export type Group = "mammals" | "reptiles";
export type Kind = "koala" | "native-mammal" | "bat" | "introduced-pest" | "snake" | "lizard" | "turtle";

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

const all: Species[] = [
  ...mammals.filter((r) => !ARTICLE_IDS.has(r.id)).map((r) => build(r, "mammals")),
  ...reptiles.filter((r) => !ARTICLE_IDS.has(r.id)).map((r) => build(r, "reptiles")),
];

export const speciesIn = (g: Group) => all.filter((s) => s.group === g);
export const getSpecies = (g: Group, slug: string) => all.find((s) => s.group === g && s.slug === slug);
export const article = (id: string) => {
  const r = [...mammals, ...reptiles].find((x) => x.id === id);
  return r ? { title: r.commonName, text: (copy as Record<string, Record<string, string>>)[id] ?? {}, sources: r.sources } : null;
};
export const allSpecies = all;
