// Erzeugt public/img/camo.png – eine nahtlos kachelbare Camouflage-Textur in Dunkelgrün.
// Aufruf: node scripts/generate-camo.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const OUT = 960; // Ausgabegröße (wird mit 30rem dargestellt → scharf auf Retina)
const SS = 2; // Supersampling für glatte Kanten
const N = OUT * SS;

let seed = 20261;
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

/** Periodisches Zufallsfeld aus Wellen mit ganzzahligen Wellenzahlen → kachelbar. */
function field(waves, kxMax, kyMax, kMin) {
  const f = new Float32Array(N * N);
  for (let w = 0; w < waves; w++) {
    let kx, ky;
    do {
      kx = Math.round((rnd() * 2 - 1) * kxMax);
      ky = Math.round((rnd() * 2 - 1) * kyMax);
    } while (Math.hypot(kx, ky) < kMin);
    const phase = rnd() * Math.PI * 2;
    const amp = 0.6 + rnd() * 0.8;
    const cx = new Float32Array(N), sx = new Float32Array(N), cy = new Float32Array(N), sy = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (2 * Math.PI * kx * i) / N + phase;
      const b = (2 * Math.PI * ky * i) / N;
      cx[i] = Math.cos(a); sx[i] = Math.sin(a); cy[i] = Math.cos(b); sy[i] = Math.sin(b);
    }
    for (let y = 0; y < N; y++) {
      const c = cy[y] * amp, s = sy[y] * amp, row = y * N;
      for (let x = 0; x < N; x++) f[row + x] += cx[x] * c - sx[x] * s;
    }
  }
  let sum = 0;
  for (let i = 0; i < f.length; i++) sum += f[i] * f[i];
  const sd = Math.sqrt(sum / f.length);
  for (let i = 0; i < f.length; i++) f[i] /= sd;
  return f;
}

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const BASE = hex("#2f4b2c"); // identisch mit --color-red im grünen Thema
// Flecken liegen übereinander wie bei echtem Tarnmuster; alle Töne bleiben dunkel (Kontrast zu Creme > 5:1).
const LAYERS = [
  { color: hex("#3b5a33"), f: field(22, 3, 4, 1.5), t: 0.55 },
  { color: hex("#223a25"), f: field(22, 3, 5, 2), t: 0.6 },
  { color: hex("#4a5330"), f: field(24, 4, 6, 2.5), t: 1.05 },
  { color: hex("#172818"), f: field(26, 5, 8, 3.5), t: 1.25 },
];

const acc = new Float32Array(OUT * OUT * 3);
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    const i = y * N + x;
    let c = BASE;
    for (const layer of LAYERS) if (layer.f[i] > layer.t) c = layer.color;
    const o = ((y >> 1) * OUT + (x >> 1)) * 3;
    acc[o] += c[0]; acc[o + 1] += c[1]; acc[o + 2] += c[2];
  }
}

// PNG schreiben (RGB, 8 Bit)
const raw = Buffer.alloc(OUT * (OUT * 3 + 1));
for (let y = 0; y < OUT; y++) {
  const r = y * (OUT * 3 + 1);
  raw[r] = 0;
  for (let x = 0; x < OUT * 3; x++) raw[r + 1 + x] = Math.round(acc[y * OUT * 3 + x] / (SS * SS));
}
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const sum = Buffer.alloc(4); sum.writeUInt32BE(crc(body));
  return Buffer.concat([len, body, sum]);
};
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(OUT, 0); ihdr.writeUInt32BE(OUT, 4); ihdr[8] = 8; ihdr[9] = 2;
writeFileSync(
  new URL("../public/img/camo.png", import.meta.url),
  Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]),
);
console.log("camo.png geschrieben");
