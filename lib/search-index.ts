import { birds } from "./birds";
import { allSpecies, article } from "./wildlife";

export type SearchItem = {
  name: string;
  sci: string;
  group: string;
  href: string;
  thumb: string | null;
};

const GROUP_LABEL: Record<string, string> = {
  "introduced-pest": "Introduced pest",
  bat: "Bat",
  koala: "Mammal",
  "native-mammal": "Mammal",
  snake: "Snake",
  lizard: "Lizard",
  turtle: "Turtle",
};

// Built at build time on the server and passed to the client search box.
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = birds.map((b) => ({
    name: b.commonName,
    sci: b.scientificName,
    group: "Bird",
    href: `/birds/${b.slug}`,
    thumb: b.photo.src,
  }));
  for (const s of allSpecies) {
    items.push({ name: s.commonName, sci: s.scientificName, group: GROUP_LABEL[s.kind] ?? s.group, href: `/${s.group}/${s.slug}`, thumb: s.photo?.src ?? null });
  }
  items.push({ name: "Snake safety & first aid", sci: "", group: "Info", href: "/reptiles#snake-safety", thumb: null });
  for (const id of ["legless-vs-snake", "lizard-friendly-garden"]) {
    const a = article(id);
    if (a) items.push({ name: a.title, sci: "", group: "Info", href: `/reptiles#${id}`, thumb: null });
  }
  return items;
}
