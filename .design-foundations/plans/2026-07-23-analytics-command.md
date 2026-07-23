# Analytics Command — Frontend Plan

**Date:** 2026-07-23  
**Status:** complete  
**Track:** Quick  
**Entry stage:** Discover — no prior `JOURNEY.md` or locked `DESIGN.md` existed.  
**Direction approval:** Confirmed under the user's authorized four-direction visual exploration.

## Context

**Problem:** Reframe Abdul Samad Wani's existing Google Ads specialist landing page as a sophisticated, data-literate command surface that makes his PPC, analytics, and growth expertise immediately credible.

**Constraints:** Preserve the existing claims, assets, links, contact routes, and 30% CPA result. Use a responsive Next.js implementation with AA contrast, keyboard-visible focus, reduced-motion support, and no invented performance claims. Avoid generic cyan glow and glassmorphism.

**Success criteria:** The page has a decisive dashboard-style hero, a clear scan from value proposition to evidence to services to contact, readable dense typography, one distinctive signature move, and no Critical accessibility or truthful-data findings.

### Phase 1: Journey and page contract
**Stage:** Discover  
**Model:** sonnet  
**Doctrine:** journey  
**Gate:** Standard

**Goal:** Define the marketing job, section order, CTA path, and complete landing-page states before visual composition.

**Scope:**
- IN: JTBD, IA, primary flow, content blocks, CTA destination, responsive page spec.
- OUT: New service claims, pricing, lead-capture forms, and case-study details not present in the source.

**Produces:** `JOURNEY.md` — Job, IA, flow, and Page specs  
**Depends on:** Existing site content | **Unlocks:** Phase 2

**Done when:**
- [x] DW-1.1: `JOURNEY.md` contains one complete page spec with purpose, entry points, ordered content, states, primary CTA, and exit.
- [x] DW-1.2: All existing source content has a named destination in the page sequence.

### Phase 2: Locked visual DNA and tokens
**Stage:** Design  
**Model:** fable  
**Doctrine:** design-dna, archetypes, foundations, fonts, color, responsive, design-systems, data-viz  
**Gate:** Full

**Goal:** Lock an authored Analytics Command identity and a complete token/type/layout specification.

**Scope:**
- IN: Sage/Ruler archetype, typography, complementary palette, semantic tokens, chart treatment, motion and responsive rules.
- OUT: Glass panels, neon glow, invented KPI values, ornamental charts, and a third text family.

**Produces:** `DESIGN.md` (locked) — visual DNA, palette output, type scale, responsive and chart rules  
**Depends on:** Phase 1 | **Unlocks:** Phase 3

**Done when:**
- [x] DW-2.1: `DESIGN.md` is confirmed and contains the full `palette.mjs` light/dark token output.
- [x] DW-2.2: All palette contrast pairs pass WCAG AA (body ≥4.5:1, large ≥3:1).
- [x] DW-2.3: Semantic aliases, functional colors, and `--text-xs` through `--text-4xl` are specified.

### Phase 3: Compose and validate
**Stage:** Design  
**Model:** sonnet  
**Doctrine:** responsive, data-viz, design-systems  
**Gate:** Standard

**Goal:** Implement the confirmed direction as a production-responsive landing page.

**Scope:**
- IN: Hero command panel, credential rail, service matrix, proof section, CTA/footer, focus/reduced-motion states.
- OUT: New APIs, account dashboards, live data, CMS, and contact backend.

**Produces:** Next.js page and CSS implementation  
**Depends on:** Phase 2 | **Unlocks:** delivery

**Done when:**
- [x] DW-3.1: The page retains all source claims/assets and represents the abstract chart as illustrative.
- [x] DW-3.2: Primary interactions have ≥44px touch targets, visible focus, and reduced-motion handling.
- [x] DW-3.3: Mobile reflows without removing critical content or requiring horizontal scrolling.
- [x] DW-3.4: Production build passes with no Critical design findings.

## Verification

- Run the recorded `palette.mjs` command and retain its PASS contrast report.
- Run `npm run build`.
- Inspect 320px, intermediate, and wide-layout CSS behavior for overflow and content loss.
- Confirm the abstract line visual carries an explicit “illustrative” label and the only quantified outcome is the existing 30% CPA reduction.
- Audit focus-visible styles, target sizes, semantic landmarks, and `prefers-reduced-motion`.

