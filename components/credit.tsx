import type { Media } from "@/lib/types";
export function Credit({ m }: { m: Media }) {
  return (
    <>
      <a href={m.sourceUrl} className="underline" target="_blank" rel="noreferrer">{m.author || "Unknown"}</a>
      {" · "}
      {m.licenseUrl ? <a href={m.licenseUrl} className="underline" target="_blank" rel="noreferrer">{m.license}</a> : m.license}
      {" · via "}{m.source}
    </>
  );
}
