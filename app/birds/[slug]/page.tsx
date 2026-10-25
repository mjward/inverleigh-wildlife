import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { birds, getBird } from "@/lib/birds";
import { PlayButton } from "@/components/play-button";
import { YouTubeFacade } from "@/components/youtube-facade";
import { Credit } from "@/components/credit";

// Fewest recent (2016–26) records within 5 km among the 38 (see docs/RESEARCH-REVIEW.md).
const UNCOMMON = new Set(["white-winged-chough", "masked-lapwing", "wedge-tailed-eagle"]);

export function generateStaticParams() {
  return birds.map((b) => ({ slug: b.slug }));
}
export async function generateMetadata({ params }: PageProps<"/birds/[slug]">): Promise<Metadata> {
  const b = getBird((await params).slug);
  return b ? { title: b.commonName, description: b.appearance } : {};
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 py-6">
      <h2 className="mb-2 font-serif text-xl text-emerald-950">{title}</h2>
      <div className="space-y-2 leading-relaxed text-stone-700">{children}</div>
    </section>
  );
}

export default async function BirdPage({ params }: PageProps<"/birds/[slug]">) {
  const b = getBird((await params).slug);
  if (!b) notFound();
  return (
    <article className="mx-auto max-w-6xl px-5 py-10">
      <Link href="/#birds" className="text-sm text-emerald-800 hover:underline">← All birds</Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <figure>
          <div className="relative overflow-hidden rounded-3xl bg-stone-200 shadow-sm">
            <Image src={b.photo.src} alt={`${b.commonName} (${b.scientificName})`} width={b.photo.width} height={b.photo.height} sizes="(min-width:1024px) 60vw, 100vw" priority className="h-auto w-full" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">
            {b.photo.sex && <span className="font-medium capitalize text-stone-600">Shown: {b.photo.sex}. </span>}
            <Credit m={b.photo} />
          </figcaption>
        </figure>
        <div>
          <h1 className="font-serif text-4xl text-emerald-950 sm:text-5xl">{b.commonName}</h1>
          <p className="mt-1 text-lg italic text-stone-500">{b.scientificName}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-white p-5 text-sm ring-1 ring-stone-200">
            <div><dt className="text-stone-500">Size</dt><dd className="font-medium">{b.size}</dd></div>
            <div><dt className="text-stone-500">Records within 10 km (ALA, all years)</dt><dd className="font-medium">{b.alaRecords?.toLocaleString() ?? "—"}</dd></div>
            <div className="col-span-2"><dt className="text-stone-500">Conservation status</dt><dd className="font-medium">{b.conservation}</dd></div>
          </dl>
          <div className="mt-6">
            <PlayButton id={b.slug} src={b.audio?.src ?? null} label={b.commonName} large />
            {b.audio && <p className="mt-2 text-xs text-stone-500">Recording: <Credit m={b.audio} />{b.audio.recordedAt ? ` · ${b.audio.recordedAt}` : ""}</p>}
          </div>
          <Section title="Around Inverleigh">
            <p>{b.localSpot}</p>
            {b.tier && <p className="text-sm text-stone-500">Recorded within {b.tier === "5km" ? "5 km" : "10 km"} of town (Atlas of Living Australia).</p>}
            {UNCOMMON.has(b.slug) && <p className="text-sm text-amber-800">Recorded only occasionally around Inverleigh in recent years, so don&apos;t expect to see one on every visit.</p>}
            {b.hangouts && <p><span className="font-medium">Hangouts: </span>{b.hangouts}</p>}
            {b.trees && <p><span className="font-medium">Trees: </span>{b.trees}</p>}
          </Section>
        </div>
      </div>
      <div className="mt-8 grid gap-x-12 lg:grid-cols-2">
        <div>
          <Section title="Appearance"><p>{b.appearance}</p></Section>
          <Section title="Behaviour"><p>{b.behaviour}</p></Section>
          <Section title="Origins"><p>{b.origins}</p></Section>
          <Section title="Distribution & habitat in Australia">
            <p>{b.distribution}</p>
            {b.habitat && <p><span className="font-medium">Habitat: </span>{b.habitat}</p>}
          </Section>
        </div>
        <div>
          <Section title="Breeding"><p>{b.breeding}</p></Section>
          <Section title="Diet"><p>{b.diet}</p></Section>
          <Section title="Predators & threats"><p>{b.threats}</p></Section>
          {b.video && (
            <Section title="Video">
              <YouTubeFacade video={b.video} />
              <p className="text-xs text-stone-500">“{b.video.title}” by {b.video.channel} on YouTube.</p>
            </Section>
          )}
        </div>
      </div>
      <Section title="Sources">
        <ul className="list-disc pl-5 text-sm">
          {b.sources.map((s) => <li key={s.url}><a href={s.url} className="text-emerald-800 underline" target="_blank" rel="noreferrer">{s.label}</a></li>)}
          <li><a href="https://australian.museum/learn/animals/birds/" className="text-emerald-800 underline" target="_blank" rel="noreferrer">Australian Museum — birds</a></li>
        </ul>
      </Section>
    </article>
  );
}
