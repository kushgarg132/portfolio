import { lobe, lobeStep } from "@/lib/guilloche";

type Layer = { R: number; r: number; d: number; color: string; width?: number; copies?: number };

// Default plate: three nested hypotrochoids in the two rainbow tints plus ink.
const PLATE: Layer[] = [
  { R: 180, r: 6, d: 16, color: "var(--tint-green)", copies: 10, width: 0.35 },
  { R: 160, r: 5, d: 9, color: "var(--tint-rose)", copies: 8, width: 0.35 },
  { R: 196, r: 4, d: 5, color: "var(--ink)", copies: 3, width: 0.3 },
];

export default function Rosette({
  id,
  layers = PLATE,
  className = "",
  draw = false,
}: {
  /** unique per page; names the path defs */
  id: string;
  layers?: Layer[];
  className?: string;
  /** mark paths for the load-time stroke drawing */
  draw?: boolean;
}) {
  const extent = Math.max(...layers.map((l) => l.R - l.r + l.d)) + 2;
  return (
    <svg
      viewBox={`${-extent} ${-extent} ${extent * 2} ${extent * 2}`}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Per layer: one lobe path, a ring of N rotated <use> clones, then `copies` rotated
          clones of the ring. Clones mirror the source path, draw animation included. */}
      {layers.map((l, i) => {
        const { d, n } = lobe(l.R, l.r, l.d);
        const copies = l.copies ?? 1;
        return (
          <g key={i} stroke={l.color} strokeWidth={l.width ?? 0.5}>
            <defs>
              <path id={`${id}-${i}`} d={d} pathLength={1} data-draw={draw ? "" : undefined} />
            </defs>
            <g id={`${id}-${i}-ring`}>
              {Array.from({ length: n }, (_, j) => (
                <use key={j} href={`#${id}-${i}`} transform={`rotate(${((j * 360) / n).toFixed(2)})`} />
              ))}
            </g>
            {Array.from({ length: copies - 1 }, (_, c) => (
              <use key={c} href={`#${id}-${i}-ring`} transform={`rotate(${((c + 1) * lobeStep(l.R, l.r, copies)).toFixed(2)})`} />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
