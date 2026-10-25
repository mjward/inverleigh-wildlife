import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSpecies, speciesIn } from "@/lib/wildlife";
import { SpeciesPage, groupBack } from "@/components/species-page";

export function generateStaticParams() {
  return speciesIn("mammals").map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: PageProps<"/mammals/[slug]">): Promise<Metadata> {
  const s = getSpecies("mammals", (await params).slug);
  return s ? { title: s.commonName } : {};
}
export default async function Page({ params }: PageProps<"/mammals/[slug]">) {
  const s = getSpecies("mammals", (await params).slug);
  if (!s) notFound();
  return <SpeciesPage s={s} back={groupBack("mammals")} />;
}
