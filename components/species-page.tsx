import Image from "next/image";
import Link from "next/link";
import type { Group, Species } from "@/lib/wildlife";
import { NO_LOCAL_RECORDS } from "@/lib/wildlife";
import { koalaWhatToDo } from "@/content/safety";
import { PlayButton } from "./play-button";
import { Credit } from "./credit";
import { SnakeSafety } from "./snake-safety";
import { PhotoPlaceholder, TierNote } from "./species-card";

const LABELS: [string, string][] = [
  ["identification", "Identification"],
  ["venom", "Venom"],
  ["origins", "Origins"],
  ["distribution", "Distribution"],
  ["habitat", "Habitat"],
  ["trees", "Trees and shelter"],
  ["hangouts", "Around Inverleigh"],
  ["activity", "When it's active"],
  ["activeSeason", "Active season"],
  ["bestViewing", "Best chance of seeing one"],
  ["breeding", "Breeding"],
  ["diet", "Diet"],
  ["threats", "Predators & threats"],
  ["impacts", "Impacts"],
  ["legalStatus", "Legal status"],
  ["whatToDo", "What to do"],
  ["conservation", "Conservation status"],
];

export function SpeciesPage({ s, back }: { s: Species; back: { href: string; label: string } }) {
  const t = s.text;
  return (
    <article className="mx-auto max-w-6xl px-5 py-10">
      <Link href={back.href} className="text-sm text-emerald-800 hover:underline">← {back.label}</Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr]">
        <figure>
          <div className="relative overflow-hidden rounded-3xl bg-stone-200 shadow-sm">
            {s.photo ? (
              <Image src={s.photo.src} alt={`${s.commonName} (${s.scientificName})`} width={s.photo.width} height={s.photo.height} sizes="(min-width:1024px) 60vw, 100vw" priority className="h-auto w-full" />
            ) : (
              <div className="aspect-[4/3]"><PhotoPlaceholder label={s.commonName} /></div>
            )}
          </div>
          {s.photo && <figcaption className="mt-2 text-xs text-stone-500"><Credit m={s.photo} /></figcaption>}
        </figure>
        <div>
          <h1 className="font-serif text-4xl text-emerald-950 sm:text-5xl">{s.commonName}</h1>
          <p className="mt-1 text-lg italic text-stone-500">{s.scientificName}</p>
          <div className="mt-3"><TierNote s={s} /></div>
          {NO_LOCAL_RECORDS.has(s.slug) && (
            <p className="mt-3 rounded-xl bg-stone-100 p-3 text-sm text-stone-700">There are no Atlas of Living Australia or iNaturalist records of this species within 10 km of Inverleigh. It's included because it's discussed locally, not because it's been seen here.</p>
          )}
          {s.tier === "10km" && !NO_LOCAL_RECORDS.has(s.slug) && (
            <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">Occasionally recorded: only recorded 5–10 km from town, and rarely.</p>
          )}
          {t.size && <p className="mt-4 text-sm"><span className="text-stone-500">Size: </span>{t.size}</p>}
          {s.audio && (
            <div className="mt-6">
              <PlayButton id={`${s.group}-${s.slug}`} src={s.audio.src} label={s.commonName} large />
              <p className="mt-2 text-xs text-stone-500">Recording: <Credit m={s.audio} />{s.audio.recordedAt ? ` · ${s.audio.recordedAt}` : ""}</p>
            </div>
          )}
          {s.slug === "koala" && (
            <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-950 ring-1 ring-emerald-200">
              <h2 className="font-semibold">Found a koala?</h2>
              <p className="mt-1">{koalaWhatToDo}</p>
            </div>
          )}
        </div>
      </div>
      {s.kind === "snake" && <div className="mt-10"><SnakeSafety /></div>}
      <div className="mt-8 grid gap-x-12 lg:grid-cols-2">
        {LABELS.filter(([k]) => t[k]).map(([k, label]) => (
          <section key={k} className="border-t border-stone-200 py-5">
            <h2 className="mb-2 font-serif text-xl text-emerald-950">{label}</h2>
            <p className="leading-relaxed text-stone-700">{t[k]}</p>
          </section>
        ))}
      </div>
      <section className="border-t border-stone-200 py-6">
        <h2 className="mb-2 font-serif text-xl text-emerald-950">Sources</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {s.sources.slice(0, 12).map((x) => <li key={x.url}><a href={x.url} className="text-emerald-800 underline" target="_blank" rel="noreferrer">{x.title || x.url}</a></li>)}
        </ul>
        {s.sources.length > 12 && <p className="mt-1 text-xs text-stone-500">Plus {s.sources.length - 12} more in docs/research.</p>}
      </section>
    </article>
  );
}

export function groupBack(g: Group) {
  return g === "mammals" ? { href: "/mammals", label: "All mammals" } : { href: "/reptiles", label: "All reptiles" };
}
