"use client";
import { useEffect, useState } from "react";
import { subscribe, toggle } from "./audio-bus";

export function PlayButton({ id, src, label, large = false }: { id: string; src: string | null; label: string; large?: boolean }) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => subscribe((p) => setPlaying(p === id)), [id]);
  if (!src)
    return <span className="text-xs text-stone-500 italic">No verified recording yet</span>;
  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id, src); }}
      aria-label={`${playing ? "Pause" : "Play"} ${label} call`}
      aria-pressed={playing}
      className={`inline-flex items-center gap-2 rounded-full font-medium transition ${playing ? "bg-amber-500 text-stone-900" : "bg-emerald-800 text-emerald-50 hover:bg-emerald-700"} ${large ? "px-5 py-3 text-base" : "px-3 py-1.5 text-sm"}`}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M7 5v14l12-7z" /></svg>
      )}
      {playing ? "Pause" : "Hear call"}
      {playing && <span className="flex gap-0.5">{[0, 1, 2].map((i) => <span key={i} className="h-3 w-0.5 animate-pulse bg-stone-900" style={{ animationDelay: `${i * 150}ms` }} />)}</span>}
    </button>
  );
}
