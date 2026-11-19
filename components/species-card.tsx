import Image from "next/image";
import Link from "next/link";
import type { Species } from "@/lib/wildlife";
import { NO_LOCAL_RECORDS, THREATENED_CAVEAT, WEAK_EVIDENCE } from "@/lib/wildlife";
import { PlayButton } from "./play-button";

export function TierNote({ s }: { s: Species }) {
  if (s.group === "insects") return <InsectBadges s={s} />;
  if (NO_LOCAL_RECORDS.has(s.slug)) return <span className="rounded-full bg-stone-200 px-2 py-0.5 text-xs text-stone-700">No local records</span>;
  if (s.tier === "10km") return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">Occasionally recorded</span>;
  if (s.tier === "") return <span className="rounded-full bg-stone-200 px-2 py-0.5 text-xs text-stone-700">Not recorded near town</span>;
  return null;
}

const pill = "rounded-full px-2 py-0.5 text-xs";

// Insects and spiders: distance tier plus any flags, so they show on cards and pages alike.
function InsectBadges({ s }: { s: Species }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {s.tier === "5km" ? (
        <span className={`${pill} bg-emerald-100 text-emerald-900`}>Within 5 km</span>
      ) : (
        <span className={`${pill} bg-amber-100 text-amber-900`}>5–10 km only</span>
      )}
      {s.introduced && <span className={`${pill} bg-stone-200 text-stone-700`}>Introduced</span>}
      {THREATENED_CAVEAT[s.slug] && <span className={`${pill} bg-red-100 text-red-900`}>Vulnerable</span>}
      {WEAK_EVIDENCE[s.slug] && <span className={`${pill} bg-orange-100 text-orange-900`}>Weak local evidence</span>}
    </span>
  );
}

export function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-stone-200 p-4 text-center text-xs text-stone-500">
      No verified photo of the {label} yet
    </div>
  );
}

export function SpeciesCard({ s }: { s: Species }) {
  return (
    <li className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/${s.group}/${s.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-stone-200">
          {s.photo ? (
            <Image src={s.photo.src} alt={`${s.commonName} (${s.scientificName})`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
          ) : (
            <PhotoPlaceholder label={s.commonName} />
          )}
        </div>
        <div className="px-4 pt-4">
          <h3 className="font-serif text-lg text-emerald-950">{s.commonName}</h3>
          <p className="text-sm italic text-stone-500">{s.scientificName}</p>
          <div className="mt-2"><TierNote s={s} /></div>
        </div>
      </Link>
      <div className="px-4 pb-4 pt-3">
        {s.audio ? <PlayButton id={`${s.group}-${s.slug}`} src={s.audio.src} label={s.commonName} /> : <span className="block h-2" />}
      </div>
    </li>
  );
}
