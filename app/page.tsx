import Image from "next/image";
import Link from "next/link";
import { birds } from "@/lib/birds";
import { PlayButton } from "@/components/play-button";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-300">Leigh &amp; Barwon rivers · Victoria</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">The wildlife of Inverleigh</h1>
          <p className="mt-5 max-w-2xl text-lg text-emerald-100/80">
            Birds, mammals and reptiles. Here are {birds.length} species recorded around town, drawn from the Atlas of Living Australia. Tap a card to hear its call, or open it to read more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/mammals" className="rounded-full bg-emerald-50/10 px-4 py-2 ring-1 ring-emerald-50/30 hover:bg-emerald-50/20">Mammals →</Link>
            <Link href="/reptiles" className="rounded-full bg-emerald-50/10 px-4 py-2 ring-1 ring-emerald-50/30 hover:bg-emerald-50/20">Reptiles &amp; snake safety →</Link>
          </div>
        </div>
      </section>
      <section id="birds" className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl text-emerald-950">Birds</h2>
          <span className="text-sm text-stone-500">{birds.length} species</span>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {birds.map((b, i) => (
            <li key={b.slug} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md">
              <Link href={`/birds/${b.slug}`} className="block">
                <div className="relative aspect-[4/3] bg-stone-200">
                  <Image src={b.photo.src} alt={`${b.commonName} (${b.scientificName})`} fill sizes="(min-width:1280px) 280px, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" priority={i < 4} />
                </div>
                <div className="px-4 pt-4">
                  <h3 className="font-serif text-lg text-emerald-950">{b.commonName}</h3>
                  <p className="text-sm italic text-stone-500">{b.scientificName}</p>
                </div>
              </Link>
              <div className="px-4 pb-4 pt-3">
                <PlayButton id={b.slug} src={b.audio?.src ?? null} label={b.commonName} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
