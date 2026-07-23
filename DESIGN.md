# DESIGN.md — Conversion Studio

**Status:** locked  
**Direction confirmation:** the user explicitly requested this implemented exploration.  
For structure and flow, see [JOURNEY.md](./JOURNEY.md).

## Design DNA

**Register:** Calm, legible studio structure with energetic peaks in the hero metric and final contact panel.

**Grounding:** Independent editorial studios’ typographic confidence + screen-printed workshop labels’ tactile offset. The collision keeps a performance-marketing site human and authored without weakening analytical credibility.

**Archetype:** Friendly expert / performance studio.

**Type voice:** `Bebas Neue` for large display and metric figures over a humanist system sans stack (`Avenir Next`, `Trebuchet MS`, UI sans-serif) for body and controls. The pairing is deliberately high-contrast: condensed display versus open, screen-readable body.

**Color strategy:** Vermilion seed `#D54A2E`, balanced chroma, complementary harmony. Cream is the dominant surface, ink carries content, vermilion is reserved for actions and proof accents. The complementary cyan is not used decoratively; it remains a functional token.

**Composition:** Mobile-first single column, then an asymmetric editorial grid. Rules, numbered labels, and staggered framed blocks organize the page. Cards are reserved for concrete proof and services rather than used as a universal container.

**Signature move:** Offset print frames—hard 5–8px shadows in ink or vermilion paired with small uppercase registration labels.

**Motion budget:** 160–240ms state transitions and a restrained reveal where supported. No parallax, looping animation, or essential motion; `prefers-reduced-motion` disables transitions.

## Typography tokens

```css
--font-display: var(--font-bebas), "Arial Narrow", sans-serif;
--font-body: "Avenir Next", "Trebuchet MS", ui-sans-serif, system-ui, sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
--text-xl: clamp(1.5rem, 1.2rem + 1.1vw, 2.125rem);
--text-2xl: clamp(2.25rem, 1.65rem + 2.5vw, 4.25rem);
--text-hero: clamp(3.5rem, 2.2rem + 7vw, 8.75rem);
```

Body copy is ragged-right, 1.6 leading, and capped at 65ch. Display lines use 0.88–0.94 leading and modest positive tracking appropriate to the condensed face.

## Generated palette

Generated with:

```sh
node /home/ammar/.codex/skills/design-for-ai/scripts/palette.mjs \
  --seed '#D54A2E' --chroma balanced --harmony complementary
```

```css
:root {
  --neutral-1: #fdfcfc;
  --neutral-2: #faf8f8;
  --neutral-3: #f3efef;
  --neutral-4: #ece6e5;
  --neutral-5: #e3dcdb;
  --neutral-6: #d9d0ce;
  --neutral-7: #cbc1be;
  --neutral-8: #b4a8a5;
  --neutral-9: #9a8b88;
  --neutral-10: #877a77;
  --neutral-11: #69615f;
  --neutral-12: #312d2c;
  --accent-1: #fffcfb;
  --accent-2: #fff7f5;
  --accent-3: #ffece7;
  --accent-4: #ffe0d9;
  --accent-5: #ffd2c8;
  --accent-6: #ffc1b3;
  --accent-7: #ffab98;
  --accent-8: #f48871;
  --accent-9: #e26147;
  --accent-10: #c95239;
  --accent-11: #934c3c;
  --accent-12: #47221a;
  --accent-on-solid: #150a08;
  --cyan-3: #e1f5f9;
  --cyan-9: #60c8de;
  --cyan-11: #366c78;
  --cyan-on-solid: #040f12;
  --error-3: #ffebe9;
  --error-9: #e1524f;
  --error-11: #974843;
  --success-3: #e0f8e0;
  --success-9: #5ad664;
  --success-11: #337437;
  --warning-3: #f9f0dd;
  --warning-9: #dbb155;
  --warning-11: #76602f;
  --info-3: #e3f3ff;
  --info-9: #5baee5;
  --info-11: #3d6886;
  --background: var(--neutral-1);
  --surface: var(--neutral-2);
  --surface-hover: var(--neutral-3);
  --surface-active: var(--neutral-4);
  --border-subtle: var(--neutral-6);
  --border: var(--neutral-7);
  --border-strong: var(--neutral-8);
  --text-secondary: var(--neutral-11);
  --text: var(--neutral-12);
  --accent-bg-subtle: var(--accent-3);
  --accent-solid: var(--accent-9);
  --accent-solid-hover: var(--accent-10);
  --accent-text: var(--accent-11);
}
```

The generator reports AA or better for all named light and dark semantic pairs; key light-mode ratios include ink on surface at 12.93:1, secondary text on surface at 5.7:1, and accent-on-solid at 5.6:1.

## Responsive contract

- Base layout supports 320px without horizontal scroll or removed content.
- Grids become two-column where copy and proof can breathe, then a 12-column editorial composition at wide widths.
- `clamp()` controls type and spacing; intrinsic grids handle service cards.
- All interactive targets are at least 44px on coarse pointers.
- Sticky and fixed edges honor safe-area insets.

