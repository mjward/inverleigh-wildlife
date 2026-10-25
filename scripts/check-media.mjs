// Verifies that every bird's photo and recording is labelled with its scientific
// name at the source (Wikimedia Commons title/description/categories, or the
// iNaturalist observation's taxon). Run: npm run check:media (needs network).
import fs from "node:fs";
const birds = JSON.parse(fs.readFileSync(new URL("../lib/birds.json", import.meta.url)));
const UA = { "User-Agent": "InverleighWildlife-check/1.0 (mjward@pm.me)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function commonsBlob(title) {
  const u = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo|categories&cllimit=50&iiprop=extmetadata&titles=" + encodeURIComponent(title);
  const p = Object.values((await (await fetch(u, { headers: UA })).json()).query.pages)[0];
  const m = p.imageinfo?.[0]?.extmetadata ?? {};
  return [title, m.ImageDescription?.value, m.Categories?.value, ...(p.categories ?? []).map((c) => c.title)].join(" ").toLowerCase();
}
async function inatTaxon(url) {
  const id = url.split("/").pop();
  const r = await (await fetch(`https://api.inaturalist.org/v1/observations/${id}`, { headers: UA })).json();
  return { name: r.results[0].taxon.name, grade: r.results[0].quality_grade };
}

async function xcTaxon(id) {
  // Needs XENO_CANTO_API_KEY in the environment (build-prep only; never committed).
  const key = process.env.XENO_CANTO_API_KEY;
  if (!key) throw new Error("XENO_CANTO_API_KEY not set");
  const u = `https://xeno-canto.org/api/3/recordings?query=nr:${id}&key=${key}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await (await fetch(u, { headers: UA, signal: AbortSignal.timeout(60000) })).json();
      const rec = r.recordings?.[0];
      return rec ? `${rec.gen} ${rec.sp}`.toLowerCase() : "";
    } catch { await sleep(3000); }
  }
  throw new Error(`xeno-canto lookup failed for XC${id}`);
}

let fail = 0;
for (const b of birds) {
  const sci = b.scientificName.toLowerCase();
  const pb = await commonsBlob(b.photo.title);
  const ok = pb.includes(sci) || pb.includes(sci.replace(" ", "_"));
  console.log(`${ok ? "✓" : "✗"} photo  ${b.commonName}: ${b.photo.title}`);
  if (!ok) fail++;
  if (b.audio) {
    let aok;
    if (b.audio.source === "xeno-canto") {
      aok = (await xcTaxon(b.audio.xcId)) === sci;
    } else if (b.audio.source === "iNaturalist") {
      const t = await inatTaxon(b.audio.sourceUrl);
      aok = t.name.toLowerCase() === sci && t.grade === "research";
    } else {
      const ab = await commonsBlob(b.audio.title);
      aok = ab.includes(sci) || ab.includes(sci.replace(" ", "_"));
    }
    console.log(`${aok ? "✓" : "✗"} audio  ${b.commonName}: ${b.audio.title}`);
    if (!aok) fail++;
  } else console.log(`– audio  ${b.commonName}: none`);
  if (!fs.existsSync(new URL(`../public${b.photo.src}`, import.meta.url))) { console.log(`✗ missing file ${b.photo.src}`); fail++; }
  await sleep(400);
}
console.log(fail ? `\n${fail} problem(s)` : "\nAll media verified");
process.exit(fail ? 1 : 0);
