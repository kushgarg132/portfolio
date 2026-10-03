"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * The page's one motion system, orchestrated in one place:
 *  - the note is printed on load: guilloche plates draw, the portrait plate passes, legend sets
 *  - a windowed security thread tracks reading progress
 *  - sections print in on one axis, in sequence, as they arrive
 * Content is server-rendered visible; everything here only runs after hydration.
 */
export default function Motion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // progress thread: vertical on desktop, across the top on phones
      mm.add({ desktop: "(min-width: 1024px)", phone: "(max-width: 1023px)" }, (ctx) => {
        const desktop = ctx.conditions?.desktop;
        gsap.fromTo(
          "[data-thread-fill]",
          desktop ? { scaleY: 0, scaleX: 1 } : { scaleX: 0, scaleY: 1 },
          {
            [desktop ? "scaleY" : "scaleX"]: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
          }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.fromTo(
          "[data-draw]",
          { strokeDasharray: 1, strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.8, stagger: 0.18, ease: "power2.inOut" }
        )
          .from(
            "[data-hero-portrait]",
            { clipPath: "inset(0% 0% 100% 0%)", filter: "blur(6px)", duration: 1.3, clearProps: "clipPath,filter" },
            0.35
          )
          .from("[data-hero-item]", { y: 18, autoAlpha: 0, duration: 1, stagger: 0.07, clearProps: "all" }, 0.5);

        // sections: a plate pass from top to bottom, batched so neighbours print in sequence
        gsap.set("[data-print]", { clipPath: "inset(0% 0% 100% 0%)", y: 16 });
        ScrollTrigger.batch("[data-print]", {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.12,
              clearProps: "clipPath,transform",
            }),
        });

        // project plates turn slowly with the scroll, like a rosette under a loupe
        gsap.utils.toArray<SVGElement>(".spin-rosette").forEach((el) =>
          gsap.to(el, {
            rotation: 40,
            transformOrigin: "50% 50%",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          })
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div
        aria-hidden="true"
        className="fixed z-40 pointer-events-none top-0 inset-x-0 h-[3px] lg:inset-x-auto lg:left-3 lg:top-0 lg:bottom-0 lg:h-auto lg:w-[5px] bg-ink/10"
      >
        <div
          data-thread-fill
          className="h-full w-full origin-left lg:origin-top [background:repeating-linear-gradient(90deg,#9c6b3c_0_14px,#d9b48a_14px_18px,#7a8a90_18px_30px,transparent_30px_36px)] lg:[background:repeating-linear-gradient(180deg,#9c6b3c_0_14px,#d9b48a_14px_18px,#7a8a90_18px_30px,transparent_30px_36px)]"
        />
      </div>
      {children}
    </div>
  );
}
