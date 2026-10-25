import Link from "next/link";
import { birds } from "@/lib/birds";
import { allSpecies } from "@/lib/wildlife";
import { Credit } from "@/components/credit";

export const metadata = { title: "Credits" };

export default function Credits() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="font-serif text-4xl text-emerald-950">Credits &amp; attribution</h1>
      <p className="mt-4 text-stone-600">
        Photos come from Wikimedia Commons and iNaturalist. Recordings come from xeno-canto, Wikimedia Commons and iNaturalist. All are used under the Creative Commons licences listed; some recordings are non-commercial (NC). Images were resized and converted to WebP, and recordings trimmed to 30 seconds and converted to mono MP3 (recordings under a no-derivatives licence are served unmodified). Species records come from the{" "}
        <a className="underline" href="https://www.ala.org.au/">Atlas of Living Australia</a>. Videos are embedded from YouTube and remain the property of their channels.
      </p>
      <ul className="mt-8 divide-y divide-stone-200">
        {birds.map((b) => (
          <li key={b.slug} className="py-4 text-sm">
            <Link href={`/birds/${b.slug}`} className="font-serif text-lg text-emerald-900">{b.commonName}</Link>{" "}
            <span className="italic text-stone-500">{b.scientificName}</span>
            <p className="mt-1 text-stone-600">Photo: <Credit m={b.photo} /></p>
            <p className="text-stone-600">Call: {b.audio ? <Credit m={b.audio} /> : "none yet"}</p>
            {b.video && <p className="text-stone-600">Video: “{b.video.title}”, {b.video.channel} (YouTube)</p>}
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-serif text-3xl text-emerald-950">Mammals &amp; reptiles</h2>
      <ul className="mt-4 divide-y divide-stone-200">
        {allSpecies.map((s) => (
          <li key={s.slug} className="py-4 text-sm">
            <Link href={`/${s.group}/${s.slug}`} className="font-serif text-lg text-emerald-900">{s.commonName}</Link>{" "}
            <span className="italic text-stone-500">{s.scientificName}</span>
            <p className="mt-1 text-stone-600">Photo: {s.photo ? <Credit m={s.photo} /> : "none yet"}</p>
            {s.audio && <p className="text-stone-600">Call: <Credit m={s.audio} /></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
