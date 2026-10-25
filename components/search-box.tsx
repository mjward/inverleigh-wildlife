"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchItem } from "@/lib/search-index";

const MAX = 8;

// Damerau-free Levenshtein, capped for speed.
function dist(a: string, b: string, cap: number) {
  if (Math.abs(a.length - b.length) > cap) return cap + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, cur[j]);
    }
    if (best > cap) return cap + 1;
    prev = cur;
  }
  return prev[b.length];
}

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").trim();

function score(item: SearchItem, q: string): number {
  const fields = [norm(item.name), norm(item.sci), norm(item.group)];
  const words = fields.join(" ").split(/\s+/).filter(Boolean);
  const terms = q.split(/\s+/).filter(Boolean);
  let total = 0;
  for (const t of terms) {
    let s = 0;
    if (fields[0].startsWith(t)) s = 100;
    else if (fields[1].startsWith(t)) s = 90;
    else if (words.some((w) => w.startsWith(t))) s = 70;
    else if (fields.some((f) => f.includes(t))) s = 40;
    else if (t.length >= 4) {
      const cap = t.length >= 7 ? 2 : 1;
      const d = Math.min(...words.map((w) => dist(t, w.slice(0, t.length + 1), cap)), ...words.map((w) => dist(t, w, cap)));
      if (d <= cap) s = 20 - d * 5;
    }
    if (!s) return 0;
    total += s;
  }
  return total;
}

export function SearchBox({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const id = useId();
  const listId = `${id}-list`;
  const [value, setValue] = useState("");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setQ(norm(value)), 120);
    return () => clearTimeout(t);
  }, [value]);

  const results = useMemo(() => {
    if (!q) return [];
    return items
      .map((it) => ({ it, s: score(it, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.it.name.localeCompare(b.it.name))
      .slice(0, MAX)
      .map((r) => r.it);
  }, [items, q]);

  useEffect(() => setActive(results.length ? 0 : -1), [results]);

  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, []);

  const go = (it: SearchItem) => {
    setOpen(false);
    setValue("");
    input.current?.blur();
    router.push(it.href);
  };

  const showList = open && q.length > 0;

  return (
    <div ref={wrap} className="relative w-full sm:w-72">
      <label htmlFor={`${id}-input`} className="sr-only">Search wildlife</label>
      <div className="relative">
        <svg aria-hidden viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-stone-400 stroke-2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input
          ref={input}
          id={`${id}-input`}
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && active >= 0 ? `${id}-opt-${active}` : undefined}
          autoComplete="off"
          placeholder="Search birds, mammals, reptiles…"
          value={value}
          onChange={(e) => { setValue(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); setActive((a) => (results.length ? (a + 1) % results.length : -1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (results.length ? (a - 1 + results.length) % results.length : -1)); }
            else if (e.key === "Enter") { if (showList && results[active]) { e.preventDefault(); go(results[active]); } }
            else if (e.key === "Escape") { e.preventDefault(); setOpen(false); }
          }}
          className="w-full rounded-full border border-stone-300 bg-white py-2 pl-9 pr-4 text-sm text-stone-800 placeholder:text-stone-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
        />
      </div>
      {showList && (
        <ul id={listId} role="listbox" aria-label="Search results" className="absolute right-0 z-50 mt-2 max-h-[70vh] w-full overflow-auto rounded-2xl bg-white py-1 shadow-xl ring-1 ring-stone-200 sm:w-96">
          {results.length === 0 ? (
            <li role="option" aria-selected={false} aria-disabled className="px-4 py-3 text-sm text-stone-500">No matches</li>
          ) : (
            results.map((it, i) => (
              <li
                key={it.href}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => { e.preventDefault(); go(it); }}
                className={`flex cursor-pointer items-center gap-3 px-3 py-2 ${i === active ? "bg-emerald-50" : ""}`}
              >
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-stone-200">
                  {it.thumb ? <Image src={it.thumb} alt="" fill sizes="40px" className="object-cover" /> : <span className="flex h-full w-full items-center justify-center text-xs text-stone-500">i</span>}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-stone-900">{it.name}</span>
                  {it.sci && <span className="block truncate text-xs italic text-stone-500">{it.sci}</span>}
                </span>
                <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-600">{it.group}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
