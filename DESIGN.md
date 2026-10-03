---
name: Kush Garg Portfolio
description: A payments engineer's portfolio, printed like a security document.
colors:
  paper: "#dde7e1"
  paper-deep: "#cfdcd5"
  ink: "#142640"
  ink-soft: "#33485c"
  ink-faint: "#5a6d78"
  serial: "#b0261c"
  tint-green: "#6f9c8a"
  tint-rose: "#c27c95"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3.25rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.25
  figure:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "\"tnum\", \"lnum\""
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontFeature: "\"liga\" 0, \"clig\" 0"
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    letterSpacing: "0.14em"
    fontVariation: "\"wdth\" 125"
  serial:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0.2em"
    fontFeature: "\"tnum\", \"lnum\""
  source:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.62rem"
    fontWeight: 400
    lineHeight: 1.375
  microprint:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "6.5px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  control: "2px"
  note: "3px"
spacing:
  section-y: "8rem"
  section-y-mobile: "6rem"
  gutter-lg: "4rem"
  gutter-sm: "2.5rem"
  gutter-xs: "1.25rem"
  head-gap: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.serial}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "10px 0"
  note-frame:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.note}"
  schedule-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Kush Garg Portfolio

## Overview

**Creative North Star: "The Issued Note"**

The page is printed, not rendered. Every surface is a sheet of tinted note stock carrying deep intaglio ink, guilloche linework in two rainbow-printing tints, microprint used as rules, and a single vermilion reserved for serial numbers and the one figure under pressure. Sections are documents of the same issue: a note face for the introduction, a statement of account for experience, specimen notes for projects, a dense schedule for skills, embossed seals for honours, a perforated remittance slip for contact.

Density is that of a financial instrument: ruled lists, dated entries, definition tables, and figures that always sit beside the line they come from. Ornament is generated geometry (hypotrochoid rosettes, sine-strand bands, crossing wave underprint), never stock illustration. The portrait is an engraved line rendering in the same ink as the type (`public/kush-engraved.png`, produced by `scripts/engrave.py` from `public/kush.jpg`).

The system refuses the dark-navy-plus-accent developer template: no split hero over a card grid, no glow, no gradients-as-decoration. One committed light theme.

**Key Characteristics:**
- Cool mint note stock, never cream or white.
- Didone engraving face for names, headings and figures; extended grotesque caps for legends; wide mono for serials and source lines.
- Guilloche rosettes and bands as the only ornament, all computed in `lib/guilloche.ts`.
- One accent ink (serial vermilion), rare by rule.
- Hairline rules and double frames (border plus offset outline) instead of shadows.
- Motion is printing: plates draw, sections pass under a plate, a security thread fills with reading progress.

## Colors

A two-ink security print: deep blue-black intaglio on mint stock, two pale rainbow tints for linework, and one vermilion.

### Primary
- **Intaglio Ink** (ink): all type, frames, rules, primary buttons, the engraved portrait, and the inverted ground of the Skills schedule and footer.

### Secondary
- **Serial Vermilion** (serial): the one accent ink. See The Serial Ink Rule.

### Tertiary
- **Underprint Green** (tint-green) and **Underprint Rose** (tint-rose): guilloche linework only (rosette layers, border bands, the crossing-wave underprint at 6-7% alpha). Never text, never fills.

### Neutral
- **Note Stock** (paper): page ground and the ground of every note and slip.
- **Deep Stock** (paper-deep): alternating section ground, applied at 60% (Experience, Contact).
- **Soft Ink** (ink-soft): secondary prose, descriptions, nav at rest (7.4:1 on paper).
- **Faint Ink** (ink-faint): labels, source lines, microprint, placeholders only (4.6:1 on paper). Never running prose.

### Specimen tints
Each project note is issued in its own tint through a local `--tint` custom property: violet (#6b4f9a), teal (#1d6a73), green (#3a7552), umber (#8a4f26). The tint drives the note border, the offset outline at 35%, a 12% wash into paper for the ground, the rosette strokes, the column divider at 40%, and the status line (tint mixed 70% toward black for legibility). A new project gets a new tint of similar depth; the tint never replaces ink for running text.

### Implementation
Tokens are hex custom properties in `app/globals.css`. Tailwind maps each through `color-mix(in srgb, var(--token) calc(<alpha-value> * 100%), transparent)`, so opacity modifiers (`ink/25`, `paper/95`, `paper-deep/60`) work on the hex vars. Add new colors the same way: hex var in globals, color-mix entry in `tailwind.config.ts`.

### Named Rules
**The Serial Ink Rule.** At rest, vermilion prints only three things: the $600M figure (hero denomination and its mention in About), serial numbers (the hero serial row, the slip's Nº), and the dot in the K·G mark. Everything else it touches is a state: focus ring, text selection at 18%, caret, error message, and the hover of the primary button and icon links. If a new element wants vermilion at rest, it is not the figure under pressure.

**The Tint Is Linework Rule.** Green and rose exist as printed line, never as area. A surface wash comes from paper-deep or from a specimen tint mixed into paper, not from the underprint tints.

## Typography

**Display Font:** Bodoni Moda (opsz axis, with Georgia, serif)
**Body Font:** Archivo (wdth axis, with system-ui, sans-serif)
**Label/Mono Font:** Martian Mono (400/500, with ui-monospace, monospace)

**Character:** A Didone legend as engraved on a note, a workhorse grotesque that stretches into extended caps for legends, and a wide mono that reads as machine-numbered.

### Hierarchy
- **Display** (Bodoni 400, clamp(3.25rem, 9vw, 6rem), 0.9, -0.02em): the name on the note face only.
- **Headline** (Bodoni 400, 2.25rem to 3rem, 1, tight tracking): section titles and project titles; Contact's closing title steps up to 3rem/3.75rem at 0.95.
- **Title** (Bodoni 400, 1.5rem to 1.875rem, 1.25): experience roles, honour titles, the About lede, the mailto line.
- **Figure** (Bodoni 400 tabular lining, 2.2rem to 3rem, 1): hero denominations and seal years.
- **Body** (Archivo 400, 1rem to 1.125rem, 1.625, measure 65-72ch): prose in ink-soft; hero intro at 1.25rem, 34ch.
- **Label / Legend** (Archivo 600, wdth 125, uppercase, 0.14em, 0.66-0.8rem): definition terms, role lines, company lines, form labels.
- **Serial** (Martian Mono, 0.875rem, 0.2em, tabular, vermilion): identity numbers.
- **Source line** (Martian Mono, 0.62-0.72rem, ink-faint): the origin of a figure, link destinations, stack lists, tag rows, dates.
- **Microprint** (Martian Mono, 6.5px, 0.08em, aria-hidden): repeated text used as a rule, never content.

### Named Rules
**The Clean Setting Rule.** Body sets `font-variant-ligatures: no-common-ligatures` and `word-spacing: 0.05em`; Archivo's variable fi ligature gaps and its word spaces close up at 1x. Keep both on any Archivo running text.

**The Sourced Figure Rule.** A figure in Bodoni never stands alone: its label sits beside it and its mono source line sits under it.

**The Hairline Plus Rule.** Bodoni's hairline "+" disappears at figure size; set the plus in Archivo light at 0.6em, raised 0.35em.

## Layout

Single scrolling page, one column of documents. The note face is `max-w-7xl` inside 12-40px side gutters and fills the viewport on desktop (`min-h-dvh`); every other section is `max-w-6xl` with gutters of 1.25rem / 2.5rem / 4rem and vertical padding of 6rem (8rem from sm). Section heads sit 2.5rem (3.5rem from sm) above content, with a microprint rule running from the heading to the right edge.

Grids are asymmetric fractions (5fr/7fr hero and contact, 7fr/5fr About), fixed label columns for definition lists (7.5rem, 9.75rem, 11rem date column), and a 1fr/18rem split inside project notes. Sections alternate grounds: paper, paper-deep at 60%, and one full ink inversion (Skills) before the footer repeats it. Content stacks below `lg` (1024px); project notes collapse their side column below `md` (768px). On phones the hero actions move above the figures so they land in the first viewport.

## Elevation & Depth

Flat print. Depth comes from double framing (1px border plus a 1px outline offset 3-4px at lower alpha), stock tone changes, and the inverted ink section, not from shadows.

### Shadow Vocabulary
- **Slip lift** (`box-shadow: 0 18px 40px -24px rgb(20 38 64 / 0.45)`): the contact slip only, as a loose sheet resting on the page.

### Named Rules
**The Double Frame Rule.** A note is framed by a solid border and an offset outline at a third of its strength. Use that instead of elevation to say "this is a document."

## Shapes

Near-square corners: 2px on controls, 3px on notes and slips; fields have none. Lines carry the form: 2px ink top rules open ledgers and schedules, 1px rules at 20-25% divide rows, and a short 1px dash replaces bullets. Rosettes are cropped by the note edge (project notes) or sit as stamped seals (honours). The slip has a perforated edge (1.6px dots on a 10x8px repeat) above a guilloche band. The textarea is ruled like a form at 2.6rem line pitch.

## Components

### Buttons
Printed and decisive.
- **Shape:** near-square (2px).
- **Primary:** ink ground, paper text, 500 weight, 12px 20px (send button 14px 24px), optional 16px leading icon.
- **Hover / Focus:** primary turns vermilion; outline buttons fill with ink. Focus everywhere is a 2px vermilion outline offset 3px.
- **Outline:** 1px ink border, transparent ground. The nav résumé button is the small outline (8px 16px, 0.875rem).

### Links
- **Ink link:** 1px underline offset 0.28em at 40% of the text color, full strength on hover.
- **Destination line:** outbound links carry their host in a mono source line beneath or beside them (and a `title` on icon-only links), so the destination shows before commit.

### Inputs / Fields
- **Style:** bottom rule only (1px ink at 50%), transparent, no radius, legend label above.
- **Focus:** the rule turns vermilion.
- **Error / Disabled:** error copy in vermilion in a polite live region; submit at 60% opacity with a wait cursor while sending.

### Navigation
Fixed bar 4rem tall, transparent over the note face, paper at 95% with blur and an ink/20 bottom rule once scrolled. K·G mark in Bodoni with the vermilion dot. Links are 0.875rem ink-soft, the active section underlined in ink (offset 0.5em). Phones get a full-width sheet of Bodoni 1.5rem links ruled at ink/10 and a primary résumé button.

### Guilloche Rosette (signature)
`components/Rosette.tsx`: nested hypotrochoid layers, each one lobe path (`pathLength=1`) defined once and cloned around the ring with `<use>`, then the ring cloned `copies` times. Requires r to divide R. The default plate is green 10 copies, rose 8, ink 3 at 0.3-0.35 stroke. Seals and project plates pass their own layers.

### Band and Microprint
`components/Print.tsx`: a 14px repeat-x band of two interlaced sine-strand tiles (rose and green) frames notes and the slip; microprint repeats the identity line as a rule.

### Security Thread (signature)
A fixed metallic thread (bronze, gold, steel segments with windows) at 10% ink track: vertical 5px at the left edge on desktop, 3px across the top on phones. Its fill scrubs with scroll position.

### Motion
GSAP + ScrollTrigger, all in `components/Motion.tsx`; content is server-rendered visible and motion only runs after hydration.
- **Load:** rosette paths draw by dash offset (1.8s, power2.inOut, 0.18s stagger); the portrait is revealed by a top-down clip pass with a 6px blur clearing (1.3s, at 0.35s); hero items rise 18px and fade in (1s, expo.out, 0.07s stagger).
- **Sections:** each `data-print` block starts clipped to `inset(0 0 100% 0)` and 16px low, and prints in when its top reaches 88% of the viewport (1.1s, expo.out), batched with 0.12s stagger, once.
- **Project rosettes** rotate 40 degrees across their pass through the viewport, scrubbed.
- **Reduced motion:** load drawing, section printing and rosette rotation run only under `prefers-reduced-motion: no-preference`; smooth scrolling is turned off. The thread fill is scroll-linked and stays active.

## Do's and Don'ts

### Do:
- **Do** set every surface on note stock (paper, paper-deep, or a specimen tint mixed into paper) and every mark in ink.
- **Do** frame documents with a 1px border plus an offset outline at roughly a third of the border's strength, at 3px radius.
- **Do** give every headline figure its label and a mono source line.
- **Do** generate ornament from `lib/guilloche.ts` and clone repeated geometry with `<use>`.
- **Do** mark new reveal blocks with `data-print` so they join the one batched print-in, and keep new motion inside the reduced-motion gate.
- **Do** add colors as hex vars in `globals.css` mapped through color-mix in `tailwind.config.ts`.

### Don't:
- **Don't** print vermilion at rest on anything but the $600M figure, serial numbers, and the K·G dot.
- **Don't** use the green or rose tints as text or area fills.
- **Don't** set running prose in ink-faint or in microprint.
- **Don't** use a cream or white ground, a dark-navy page, or a split hero over a card grid.
- **Don't** add shadows beyond the slip lift; use the double frame.
- **Don't** set the Bodoni "+" at figure sizes.
