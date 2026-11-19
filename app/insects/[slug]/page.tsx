import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSpecies, speciesIn } from "@/lib/wildlife";
import { SpeciesPage, groupBack } from "@/components/species-page";

export function generateStaticParams() {
  return speciesIn("insects").map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: PageProps<"/insects/[slug]">): Promise<Metadata> {
  const s = getSpecies("insects", (await params).slug);
  return s ? { title: s.commonName } : {};
}
export default async function Page({ params }: PageProps<"/insects/[slug]">) {
  const s = getSpecies("insects", (await params).slug);
  if (!s) notFound();
  return <SpeciesPage s={s} back={groupBack("insects")} />;
}
