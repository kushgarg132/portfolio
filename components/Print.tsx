import { bandTile } from "@/lib/guilloche";

const MICRO = "KUSH GARG · BACKEND + AI SYSTEMS · SWIFT ISO 20022 · DISTRIBUTED SYSTEMS · MULTI-AGENT AI · ";

/** A rule made of text too small to read without leaning in. */
export function Microprint({ text = MICRO, className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`microprint ${className}`} aria-hidden="true">
      {text.repeat(12)}
    </div>
  );
}

const BAND_GREEN = bandTile(64, 14, 4, "#6f9c8a");
const BAND_ROSE = bandTile(64, 14, 3, "#c27c95");

/** Guilloche border strip: two interlaced wave fields. */
export function Band({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3.5 ${className}`}
      style={{ backgroundImage: `${BAND_ROSE}, ${BAND_GREEN}`, backgroundRepeat: "repeat-x", backgroundPosition: "0 0, 32px 0" }}
    />
  );
}

export function SectionHead({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div data-print className="mb-10 sm:mb-14">
      <div className="flex items-end gap-5">
        <h2 id={`${id}-title`} className="font-display text-4xl sm:text-5xl leading-none tracking-tight">
          {title}
        </h2>
        <Microprint className="flex-1 pb-1.5 hidden sm:block" />
      </div>
      {note && <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">{note}</p>}
    </div>
  );
}
