import media from "./birds.json";
import { birdText } from "@/content/birds";
import type { Bird, BirdMedia } from "./types";

export const birds: Bird[] = (media as BirdMedia[]).map((m) => {
  const text = birdText[m.slug];
  if (!text) throw new Error(`Missing text for ${m.slug}`);
  return { ...m, ...text };
});

export const getBird = (slug: string) => birds.find((b) => b.slug === slug);
