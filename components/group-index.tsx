import type { Group, Species } from "@/lib/wildlife";
import { article, speciesIn } from "@/lib/wildlife";
import { SpeciesCard } from "./species-card";
import { SnakeSafety } from "./snake-safety";
import Link from "next/link";

const SECTIONS: Record<Group, { title: string; kinds: Species["kind"][] }[]> = {
  mammals: [
    { title: "Koala", kinds: ["koala"] },
    { title: "Native mammals", kinds: ["native-mammal"] },
    { title: "Bats", kinds: ["bat"] },
  ],
  reptiles: [
    { title: "Snakes", kinds: ["snake"] },
    { title: "Lizards", kinds: ["lizard"] },
    { title: "Turtles", kinds: ["turtle"] },
  ],
};

function Article({ id }: { id: string }) {
  const a = article(id);
  if (!a) return null;
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl bg-white p-6 ring-1 ring-stone-200">
      <h2 className="font-serif text-2xl text-emerald-950">{a.title}</h2>
      <div className="mt-3 space-y-2 text-stone-700">
        {Object.entries(a.text).filter(([k]) => !["size"].includes(k)).map(([k, v]) => <p key={k}>{v}</p>)}
      </div>
    </section>
  );
}

export function GroupIndex({ group, title, intro }: { group: Group; title: string; intro: string }) {
  const list = speciesIn(group);
  const pests = list.filter((s) => s.kind === "introduced-pest");
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-300">Inverleigh Wildlife</p>
          <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-emerald-100/80">{intro}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-12 px-5 py-12">
        {group === "reptiles" && <SnakeSafety />}
        {SECTIONS[group].map((sec) => {
          const items = list.filter((s) => sec.kinds.includes(s.kind));
          if (!items.length) return null;
          return (
            <section key={sec.title}>
              <h2 className="mb-6 font-serif text-3xl text-emerald-950">{sec.title}</h2>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((s) => <SpeciesCard key={s.slug} s={s} />)}</ul>
            </section>
          );
        })}
        {group === "reptiles" && (
          <div className="grid gap-6 md:grid-cols-2">
            <Article id="legless-vs-snake" />
            <Article id="lizard-friendly-garden" />
          </div>
        )}
        {pests.length > 0 && (
          <section className="rounded-2xl bg-stone-100 p-6">
            <h2 className="font-serif text-2xl text-stone-800">Introduced pests</h2>
            <p className="mt-1 text-sm text-stone-600">Not native and not featured. Listed so you know what they are and what to do about them.</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {pests.map((s) => (
                <li key={s.slug} className="text-sm">
                  <Link href={`/${s.group}/${s.slug}`} className="text-emerald-900 underline">{s.commonName}</Link>{" "}
                  <span className="italic text-stone-500">{s.scientificName}</span>
                  {s.tier === "" && <span className="text-stone-500"> — not recorded near town</span>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
