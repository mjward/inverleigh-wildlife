// Verifies that every bird's photo and recording is labelled with its scientific
// name at the source (Wikimedia Commons title/description/categories, or the
// iNaturalist observation's taxon). Run: npm run check:media (needs network).
import fs from "node:fs";
const birds = JSON.parse(fs.readFileSync(new URL("../lib/birds.json", import.meta.url)));
const UA = { "User-Agent": "InverleighWildlife-check/1.0 (mjward@pm.me)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rawFetch = globalThis.fetch;
// Retry transient network errors so one dropped socket doesn't fail the whole check.
const fetch = async (u, o) => {
  for (let i = 0; ; i++) {
    try { return await rawFetch(u, o); } catch (e) { if (i >= 3) throw e; await sleep(2000 * (i + 1)); }
  }
};

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
      aok = (t.name.toLowerCase() + " ").startsWith(sci + " ") && t.grade === "research";
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
// Mammals and reptiles (lib/wildlife-media.json). Scientific names come from content/*.ts.
const media = JSON.parse(fs.readFileSync(new URL("../lib/wildlife-media.json", import.meta.url)));
const sciOf = {};
for (const f of ["mammals", "reptiles"]) {
  const src = fs.readFileSync(new URL(`../content/${f}.ts`, import.meta.url), "utf8");
  for (const x of JSON.parse(src.slice(src.indexOf("= [") + 2, src.lastIndexOf("]") + 1))) sciOf[x.id] = x.scientificName;
}
async function checkOne(label, m, sci) {
  let ok;
  if (m.source === "iNaturalist") {
    const t = await inatTaxon(m.sourceUrl);
    ok = (t.name.toLowerCase() + " ").startsWith(sci + " ") && t.grade === "research";
  } else {
    const blob = await commonsBlob(m.title);
    ok = blob.includes(sci) || blob.includes(sci.replace(" ", "_"));
  }
  if (!fs.existsSync(new URL(`../public${m.src}`, import.meta.url))) ok = false;
  console.log(`${ok ? "✓" : "✗"} ${label}: ${m.title}`);
  if (!ok) fail++;
}
for (const [slug, e] of Object.entries(media)) {
  const sci = (sciOf[slug] || "").toLowerCase();
  if (!sci) { console.log(`✗ ${slug}: unknown species`); fail++; continue; }
  if (e.photo) await checkOne(`photo  ${slug}`, e.photo, sci); else console.log(`– photo  ${slug}: none (placeholder)`);
  if (e.audio) await checkOne(`audio  ${slug}`, e.audio, sci);
  await sleep(400);
}
console.log(fail ? `\n${fail} problem(s)` : "\nAll media verified");
process.exit(fail ? 1 : 0);
