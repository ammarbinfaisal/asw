# Design: Ledger Performance

**Date:** 2026-07-23 · **Status:** confirmed (four-direction exploration explicitly requested)
**Archetype:** Data-Dense Professional · **Register:** restrained structure; expressive at the hero, CPA metric, and contact band.
**Composition:** Ledger Grid, variance 2 · dealer seed `asw-swiss-performance|2026-07-23|0`, hand 1.

## Direction

A performance-marketing practice should feel like a clear operating system, not advertising theatre. The layout uses a ruled, columnar ledger: facts gain authority through placement, hierarchy and measure rather than decorative containers.

## Signature move

The lime performance signal is used as a full-width metric/contact ground and as a small number of high-value cues; section framing remains ink-and-rule based.

## Type

- Display: `Inter` 700 with a Georgia italic interrupt. Inter has an open, screen-legible body; Georgia is reserved for large expressive words.
- Body: `Inter`, 400–700. Minimum 14px labels / 16px prose.
- Scale: 12px, 14px, 16px, 18px, 28px, `clamp(42px, 8.4vw, 147px)`.
- Leading: 1.45–1.55 body, .88 display.

## Color tokens

Seed: 137.56 (lime) · chroma: balanced · harmony: mono.

- `--paper` #fcfdfc · `--mist` #eff1ee · `--ink` #161915 · `--muted` #5d635b · `--line` #cfd4cd
- `--lime` #78d251 · `--lime-ink` #1d3513
- Functional outputs: error #e1524f · success #5ad664 · warning #dbb155 · info #5baee5.

`palette.mjs` reports every tested text and interactive pair passing WCAG AA in light and dark ramps; `accent-on-solid` on the lime solid is 10.25:1.

## Space, shape, depth

Spacing is 8/16/24/32/64/128px. No card-radius system or ambient shadows: 1px rules form the grid; only CTAs use a 4px hard offset, shifting on press.

## Motion

Micro interaction only: CTA hard-shadow translation. Motion is disabled by the shared reduced-motion override.

## Never

- Do not add glass panels, atmospheric gradients, or a cyan-on-dark dashboard.
- Do not turn the ledger into a uniform card grid.
- Do not use lime as a cosmetic secondary accent.
