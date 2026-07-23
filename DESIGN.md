# Design: Editorial Authority

**Date:** 2026-07-23 · **Status:** confirmed and locked  
**Archetype:** Sage primary, Ruler secondary · **Register:** restrained structure; expressive at the hero and section markers  
**Grounding:** strategy-journal information discipline + financial-broadsheet typographic authority  
**DNA:** Editorial Minimalism with Ruler-inflected copper · **Dominant axis:** composition  
**Composition:** asymmetric editorial column with generous negative space and rule-based grouping  
**Pins:** light paper ground, deep ink, muted copper/saffron accent, oversized vertical section markers

For IA and flow specification, see `JOURNEY.md`.

## Direction

The page should feel like a sharp strategic memorandum: composed, legible, and confident enough to leave space around the evidence. Decoration is replaced by typographic hierarchy, hairline rules, and one recurring sectional gesture.

## Signature move

On wide screens, every major content section carries a 7rem vertical section number in the outer gutter. On small screens the same number becomes a compact horizontal index above the section heading.

## Type

- Display: Georgia, `Times New Roman`, serif — headings and large numerals only.
- Body/UI: Arial, Helvetica, sans-serif.
- Base: 17px; scale: 0.75rem, 0.875rem, 1rem, 1.125rem, 1.375rem, 1.75rem, 2.5rem, 4.75rem.
- Heading sizing is fluid with `clamp()`.
- Body leading: 1.7; display leading: 0.98; labels: uppercase sans at 0.11em tracking.
- Weights: 400, 600, 700. No faux italics or compressed type.

## Color tokens

Generated with:

```text
node scripts/palette.mjs --seed 42 --chroma muted --harmony analogous
```

Implementation uses the generated ramps verbatim in `src/app/globals.css`, then aliases them to purpose-specific tokens:

```css
--page: var(--neutral-2);
--paper: var(--neutral-1);
--ink: var(--neutral-12);
--ink-muted: var(--neutral-11);
--rule: var(--neutral-7);
--rule-strong: var(--neutral-8);
--copper: var(--accent-9);
--copper-dark: var(--accent-11);
--copper-soft: var(--accent-3);
--on-copper: var(--accent-on-solid);
```

Contrast report:

- Light neutral-11 on neutral-2: 5.70:1 — PASS AA.
- Light neutral-12 on neutral-2: 12.93:1 — PASS AAA.
- Light accent-11 on neutral-2: 5.81:1 — PASS AA.
- Accent-on-solid on accent-9: 6.79:1 — PASS AA.
- Dark neutral-11 on neutral-2: 8.73:1 — PASS AAA.
- Dark neutral-12 on neutral-2: 14.24:1 — PASS AAA.

## Space, shape, depth

- Spacing: 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4.5, 6, 8rem.
- Reading width: 68ch; shell max: 76rem.
- Radius: 0 for structural surfaces; 999px only for the small status dot.
- Depth: no shadows on content; hierarchy comes from rules, spacing, and paper/ink contrast.

## Layout

- Mobile: single column, numbers above headings, horizontally scrollable navigation when needed.
- At 48rem: two-column hero and service/result compositions.
- At 64rem: the section index occupies a true outer gutter and headings/content form an asymmetric 3/8 grid.
- The metric strip uses intrinsic `auto-fit` columns and never hides evidence.

## Motion

- Standard transition: 160ms ease-out for color and underline state.
- Allowed: direct hover/focus feedback and a 2px CTA translation.
- Never: ambient motion, scroll reveals, parallax, blur, or layout animation.
- Reduced motion removes scrolling animation and transition duration.

## Never

- No gradients, translucency, glow, blurred backdrops, floating cards, or card-grid sameness.
- No serif body copy.
- No second decorative accent hue.
- No icon confetti; imagery appears only where it carries evidence.
- No invented client logos, statistics, or certification claims.

