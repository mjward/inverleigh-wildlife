"use client";
// Single shared <audio> element so only one call plays at a time.
type Listener = (playing: string | null) => void;
let audio: HTMLAudioElement | null = null;
let current: string | null = null;
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l(current));

export function toggle(id: string, src: string) {
  if (!audio) {
    audio = new Audio();
    audio.addEventListener("ended", () => { current = null; emit(); });
  }
  if (current === id) { audio.pause(); current = null; emit(); return; }
  audio.pause();
  audio.src = src;
  current = id;
  emit();
  audio.play().catch(() => { current = null; emit(); });
}
export function subscribe(l: Listener) { listeners.add(l); return () => { listeners.delete(l); }; }
