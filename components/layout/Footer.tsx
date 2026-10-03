import { Microprint } from "@/components/Print";
import { socials } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Microprint className="!text-paper/40 py-1.5 border-b border-paper/15" />
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-2xl leading-none">
          K<span className="text-[#e46a5c]">·</span>G
        </p>
        <ul className="flex gap-6 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="ink-link py-2 hover:!text-paper"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-paper/60 tabular">© {new Date().getFullYear()} Kush Garg</p>
      </div>
    </footer>
  );
}
