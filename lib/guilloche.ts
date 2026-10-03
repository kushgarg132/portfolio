// Guilloche geometry for the security-print look. Pure math, runs at build/server
// render time; the browser only receives static SVG paths.

const f = (n: number) => n.toFixed(1);

/**
 * One lobe of a hypotrochoid centred at (0,0). Requires r to divide R: the curve is then
 * N-fold symmetric (N = R / r), so the full rosette is this lobe rotated N times.
 */
export function lobe(R: number, r: number, d: number): { d: string; n: number } {
  if (R % r) throw new Error(`rosette needs r | R (got R=${R}, r=${r})`);
  const k = (R - r) / r;
  const n = R / r;
  const steps = 24; // ponytail: 24 points per lobe, smooth up to ~500px
  let p = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * ((Math.PI * 2) / n);
    const x = (R - r) * Math.cos(t) + d * Math.cos(k * t);
    const y = (R - r) * Math.sin(t) - d * Math.sin(k * t);
    p += (i ? "L" : "M") + f(x) + " " + f(y);
  }
  return { d: p, n };
}

/** Rotation (degrees) between copies so `copies` clones fill exactly one lobe. */
export const lobeStep = (R: number, r: number, copies: number) => (360 * r) / R / copies;

/** One horizontal period of n phase-shifted sine strands, for a repeat-x band tile. */
export function bandTile(width: number, height: number, strands: number, color: string): string {
  const mid = height / 2;
  const amp = height / 2 - 1;
  let paths = "";
  for (let s = 0; s < strands; s++) {
    const phase = (s / strands) * Math.PI;
    let d = "";
    for (let x = 0; x <= width; x += 1) {
      const y = mid + amp * Math.sin((x / width) * Math.PI * 2 + phase) * Math.cos((x / width) * Math.PI * 4 + phase);
      d += (x ? "L" : "M") + f(x) + " " + f(y);
    }
    paths += `<path d='${d}'/>`;
  }
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' fill='none' stroke='${color}' stroke-width='0.6'>${paths}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
