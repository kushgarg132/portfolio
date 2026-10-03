# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: recruiters and hiring managers for backend / fintech / AI-systems roles. They skim in under a minute, judge fit, then download the resume or make contact.
Secondary: engineers and tech leads evaluating depth (architecture, live projects, source code). The 30-second skim must work first; depth stays reachable for those who dig in.

## Product Purpose
Personal portfolio of Kush Garg. Success = a recruiter leaves knowing what Kush does and how to reach him, and an engineer finds enough technical substance to trust it.

## Positioning
Backend + AI systems engineer. Day job: production payment infrastructure at StoneX (SWIFT, ISO 20022, XPAY, $600M savings). Outside it: distributed and multi-agent AI systems that are actually deployed and self-hosted (NeoTrade, Betrix, RoutineOS) plus a microservices Chess platform. The combination of regulated-payments rigor and shipped AI systems is the claim.

## Operating Context
Visitors arrive from resume links, LinkedIn, job applications. Desktop and mobile both matter. Resume PDF download (`/KushGarg_Resume.pdf`) and the contact form (Formspree) are the conversion points.

## Capabilities and Constraints
- Next.js 14 App Router + Tailwind 3, deployed to Vercel. Single page with sections: hero, about, skills, experience, projects, achievements, contact.
- One committed light theme (tinted note-stock ground); the light/dark toggle was dropped in the 2026-10 redesign.
- Motion: user wants live in-site motion (built into the pages), not a rendered video.

## Evidence on Hand
- Real content in `components/sections/*`: experience bullets, stats (2+ yrs, $600M XPAY impact, 7+ SWIFT message types), 4 projects with live URLs, 3 achievements (StoneX hackathon 2nd, Kickstart 2021 rank 1596, ICPC Kanpur regionals).
- Photo `public/kush.jpg`, resume `public/KushGarg_Resume.pdf`.
- No testimonials, no client logos, no metrics beyond the ones above. Do not fabricate any.

## Product Principles
1. Recruiter skim first: role, positioning, and contact reachable in the first viewport.
2. Proof over adjectives: real numbers, live links, source code.
3. Depth on demand: technical detail is available, never in the way of the skim.
4. Motion must explain or guide, never delay reading or block content.

## Accessibility & Inclusion
Respect `prefers-reduced-motion`; WCAG AA contrast on the single light theme; keyboard focus visible.
