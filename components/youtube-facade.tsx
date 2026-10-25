"use client";
import { useState } from "react";
import type { Video } from "@/lib/types";

export function YouTubeFacade({ video }: { video: Video }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-stone-900">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${video.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />
          <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white"><path d="M7 5v14l12-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
