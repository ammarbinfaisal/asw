# Plan: Editorial Authority

**Date:** 2026-07-23  
**Status:** complete  
**Track:** Quick  
**Entry stage:** Discover

## Context

Design and implement one responsive consultancy landing page that helps founders and marketing leads evaluate Abdul Samad Wani’s PPC expertise, see evidence, and start a conversation. Preserve the existing factual content and assets while replacing the generic SaaS treatment with a restrained editorial system.

## Constraints

- Next.js 14 and the existing project dependencies.
- No gradients, glassmorphism, generic card wall, invented results, or inaccessible color-only meaning.
- Mobile-first CSS, 44px touch targets, visible focus, semantic landmarks, reduced-motion support.
- Every rendered color must resolve through the locked custom-property token system.

## Phase 1: Journey and page specification

**Stage:** Discover  
**Doctrine:** journey, responsive  
**Gate:** Standard  
**Difficulty:** LOW  
**Produces:** `JOURNEY.md`

Define the JTBD, compact single-page IA, CTA task flow, and ordered marketing page blocks.

**Done when:**

- [x] `JOURNEY.md` contains Job, Journey, IA, Flow, and Page specs.
- [x] The customer remains the hero and the consultant is the guide.
- [x] Proof and contact paths are available at all viewport widths.

## Phase 2: Locked visual system and implementation

**Stage:** Design  
**Depends on:** Phase 1  
**Doctrine:** design-dna, foundations, archetypes, fonts, color, responsive  
**Gate:** Full  
**Difficulty:** MED  
**Produces:** `DESIGN.md`, responsive Next.js frontend

Lock the editorial DNA and palette, then build the page with the existing content and assets.

**Done when:**

- [x] `DESIGN.md` records exact type, color, spacing, composition, and motion tokens.
- [x] Palette output passes WCAG AA for light and dark semantic pairs.
- [x] The page uses semantic landmarks, working CTAs, visible focus, and reduced motion.
- [x] Layout remains readable without horizontal overflow from 320px upward.
- [x] `npm run build` passes.

## Verification

- Run `palette.mjs --seed 42 --chroma muted --harmony analogous`.
- Search CSS and JSX for rendered color literals outside the token declaration.
- Run the production Next.js build.
- Inspect git diff and status before committing.

## Doctrine loaded

`journey`, `design-dna`, `foundations`, `archetypes`, `fonts`, `color`, and `responsive`.

