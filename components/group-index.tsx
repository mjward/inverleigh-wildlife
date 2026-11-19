import type { Group, Species } from "@/lib/wildlife";
import { article, speciesIn } from "@/lib/wildlife";
import { SpeciesCard } from "./species-card";
import { SnakeSafety } from "./snake-safety";
import { RedbackSafety } from "./redback-safety";
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
  insects: [
    { title: "Butterflies", kinds: ["butterfly"] },
    { title: "Dragonflies & damselflies", kinds: ["dragonfly", "damselfly"] },
    { title: "Native bees", kinds: ["bee"] },
    { title: "Beetles", kinds: ["beetle"] },
    { title: "Moths", kinds: ["moth"] },
    { title: "Grasshoppers & locusts", kinds: ["grasshopper"] },
    { title: "Ants", kinds: ["ant"] },
    { title: "Wasps", kinds: ["wasp"] },
    { title: "Spiders", kinds: ["spider"] },
  ],
};

function CardGrid({ items }: { items: Species[] }) {
  return <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((s) => <SpeciesCard key={s.slug} s={s} />)}</ul>;
}

function InsectNotesBar() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section id="no-cicadas" className="scroll-mt-24 rounded-2xl bg-white p-5 text-sm text-stone-700 ring-1 ring-stone-200">
        <h2 className="font-serif text-xl text-emerald-950">No cicadas recorded within 10 km</h2>
        <p className="mt-2">
          Neither the Atlas of Living Australia nor iNaturalist has a cicada record within 10 km of Inverleigh. We checked the cicada family (Cicadidae) and the
          genera <i>Psaltoda</i>, <i>Yoyetta</i> and <i>Galanga</i>. That doesn&apos;t mean there are none, only that nobody has recorded one here. If you
          photograph one, add it to iNaturalist.
        </p>
      </section>
      <section className="rounded-2xl bg-white p-5 text-sm text-stone-700 ring-1 ring-stone-200">
        <h2 className="font-serif text-xl text-emerald-950">How to read this list</h2>
        <ul className="mt-2 space-y-1.5">
          <li><span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-900">Within 5 km</span> recorded within 5 km of town.</li>
          <li><span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-900">5–10 km only</span> recorded nearby, 5–10 km out, but not within 5 km.</li>
          <li><span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-900">Weak local evidence</span> only one or a few local records; see the species page.</li>
          <li>40 species picked from about 200 insects and spiders recorded within 5 km. Few native bees are identified to species.</li>
        </ul>
      </section>
    </div>
  );
}

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
        {group === "insects" && <InsectNotesBar />}
        {SECTIONS[group].map((sec) => {
          const items = list.filter((s) => sec.kinds.includes(s.kind) && !s.introduced);
          if (!items.length) return null;
          return (
            <section key={sec.title}>
              <h2 className="mb-6 font-serif text-3xl text-emerald-950">{sec.title}</h2>
              <CardGrid items={items} />
              {group === "insects" && sec.kinds.includes("spider") && <div className="mt-8"><RedbackSafety /></div>}
            </section>
          );
        })}
        {group === "insects" && (
          <section className="rounded-2xl bg-stone-100 p-6">
            <h2 className="font-serif text-2xl text-stone-800">Introduced species</h2>
            <p className="mt-1 mb-6 text-sm text-stone-600">Not native to Australia, but recorded around Inverleigh.</p>
            <CardGrid items={list.filter((s) => s.introduced)} />
          </section>
        )}
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
