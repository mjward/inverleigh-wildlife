import { snakeFirstAid as s } from "@/content/safety";

export function SnakeSafety({ compact = false }: { compact?: boolean }) {
  return (
    <section id="snake-safety" className="rounded-3xl border-2 border-red-700 bg-red-50 p-6 text-stone-800">
      <h2 className="font-serif text-2xl text-red-900">Snake safety &amp; first aid</h2>
      <p className="mt-1 font-semibold text-red-900">Snake bite is a medical emergency. Call triple zero (000).</p>
      <div className={`mt-4 grid gap-6 ${compact ? "" : "md:grid-cols-2"}`}>
        <div>
          <h3 className="font-semibold">If you see a snake</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{s.avoid.map((t) => <li key={t}>{t}</li>)}</ul>
          <h3 className="mt-4 font-semibold">Do not</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{s.dont.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-semibold">First aid: pressure immobilisation</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">{s.steps.map((t) => <li key={t}>{t}</li>)}</ol>
        </div>
      </div>
      <p className="mt-4 text-xs text-stone-600">
        Source: <a className="underline" href={s.sourceUrl} target="_blank" rel="noreferrer">{s.sourceLabel}</a>
        {s.extraSources.map((x) => <span key={x.url}>; <a className="underline" href={x.url} target="_blank" rel="noreferrer">{x.label}</a></span>)}. General information only — do a first-aid course.
      </p>
    </section>
  );
}
