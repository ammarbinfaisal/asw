# Design: Analytics Command

**Date:** 2026-07-23 · **Status:** confirmed  
**Archetype:** Sage with Ruler inflection · **Register:** restrained product structure · expressive at hero signal panel and 30% proof  
**Grounding:** Bloomberg Terminal's information density + airport wayfinding's calm indexing  
**DNA:** Data-Dense Professional base + Swiss composition discipline · **Dominant axis:** composition  
**Composition:** Structured command grid, variance 4/10 — hard section rails, compact metrics, asymmetric 7/5 hero  
**Pins:** User-directed dark analytics control-room aesthetic; electric blue plus a warm signal accent; no cyan glow or glassmorphism

## Direction

A charcoal command surface presents Abdul Samad Wani as the operator who turns campaign telemetry into decisive action. The site feels precise rather than futuristic: hard rules, tabular numbers, calm density, and a single warm signal accent reserve attention for decisions.

## Signature move

A continuous calibration rail runs down the page grid. Every major section docks to it with a coordinate label (`01 / ORIENT`, `02 / PROFILE`, and so on), and the rail culminates at the proven 30% CPA reduction. This indexing is structural, never decorative glow.

## Expressive moments

- **Hero:** the abstract campaign line crosses a blue reference rail and terminates at an amber decision marker.
- **Proof:** `30%` is the only oversized numeric claim and uses the warm signal accent.
- **Contact:** the rail resolves into a direct consultation band.

## Type

- Display: Inter 700 (screen-optimized, fallback `Arial, sans-serif`)
- Body: Inter 400/500/600
- Data labels and numerals: JetBrains Mono 500/700 with tabular figures
- Scale: `--text-xs` 0.72rem; `--text-sm` 0.82rem; `--text-base` 1rem; `--text-lg` 1.16rem; `--text-xl` 1.38rem; `--text-2xl` 1.72rem; `--text-3xl` 2.22rem; `--text-4xl` clamp(2.7rem, 7vw, 5.9rem)
- Leading: 1.55 body / 0.94 display · Tracking: -0.055em display / 0.1em operational labels

## Color tokens

Generated with:

```sh
node /home/ammar/.codex/skills/design-for-ai/scripts/palette.mjs --seed 250 --chroma vivid --harmony complementary
```

```css
:root {
  --neutral-1: #fcfdfd;
  --neutral-2: #f8f9fa;
  --neutral-3: #eef1f3;
  --neutral-4: #e5e8ec;
  --neutral-5: #dadee3;
  --neutral-6: #cdd3d9;
  --neutral-7: #bec4cb;
  --neutral-8: #a4acb4;
  --neutral-9: #8a939d;
  --neutral-10: #79818a;
  --neutral-11: #5f6469;
  --neutral-12: #2b2e31;
  --accent-1: #fbfdff;
  --accent-2: #f4f9ff;
  --accent-3: #e6f2ff;
  --accent-4: #d7eaff;
  --accent-5: #c6e1ff;
  --accent-6: #b0d7ff;
  --accent-7: #94c9ff;
  --accent-8: #60b0ff;
  --accent-9: #0095fe;
  --accent-10: #0083e0;
  --accent-11: #2966a0;
  --accent-12: #102f4d;
  --accent-on-solid: #070e16;
  --amber-3: #ffedda;
  --amber-9: #fba100;
  --amber-11: #88570f;
  --amber-on-solid: #130c05;
  --error-3: #ffebe9;
  --error-9: #ff002b;
  --error-11: #a93433;
  --success-3: #dafbd9;
  --success-9: #00dd3e;
  --success-11: #03791f;
  --warning-3: #fcefd4;
  --warning-9: #e6ad00;
  --warning-11: #7e5e00;
  --info-3: #e3f3ff;
  --info-9: #0eafff;
  --info-11: #226a95;
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

[data-theme="dark"] {
  --neutral-1: #121313;
  --neutral-2: #19191a;
  --neutral-3: #212224;
  --neutral-4: #282a2d;
  --neutral-5: #2f3336;
  --neutral-6: #383c41;
  --neutral-7: #444a50;
  --neutral-8: #5a6169;
  --neutral-9: #8a939d;
  --neutral-10: #9da6af;
  --neutral-11: #b2b8be;
  --neutral-12: #e5e8ec;
  --accent-1: #0f1318;
  --accent-2: #131a22;
  --accent-3: #122335;
  --accent-4: #102c46;
  --accent-5: #07345a;
  --accent-6: #003d6e;
  --accent-7: #004b84;
  --accent-8: #0062ab;
  --accent-9: #0095fe;
  --accent-10: #51a9ff;
  --accent-11: #7ebdfc;
  --accent-12: #d7eaff;
  --accent-on-solid: #070e16;
  --amber-3: #2e1f0d;
  --amber-9: #fba100;
  --amber-11: #e2ac6c;
  --amber-on-solid: #130c05;
  --error-3: #391614;
  --error-9: #ff002b;
  --error-11: #ff958d;
  --success-3: #0e2910;
  --success-9: #00dd3e;
  --success-11: #71d176;
  --warning-3: #2a210b;
  --warning-9: #e6ad00;
  --warning-11: #d6b267;
  --info-3: #112432;
  --info-9: #0eafff;
  --info-11: #7bc0f0;
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

Contrast: all 14 generated light/dark pairs PASS. Dark examples: neutral-11 on neutral-2 8.76:1; neutral-12 on neutral-2 14.26:1; accent-11 on neutral-2 8.8:1; amber-11 on neutral-2 8.61:1; accent-on-solid on accent-9 6.23:1.

## Semantic and component tiers

- Page `--background` → dark neutral-1; alternate surface → accent-1/2 blue-black; panels → neutral-2.
- Primary text → neutral-12; secondary text → neutral-11.
- Information/action → accent-9/10/11; decision/proof signal → amber-9/11.
- Component tokens: `--command-border`, `--command-panel`, `--button-primary`, `--button-signal`, `--focus-ring`.
- Functional color ramps remain reserved for explicit status and never act as decoration.

## Space, shape, depth

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 104px.
- Radius: 0 for rails/section frames; 2px for controls; 6px only for credential icon wells.
- Borders/shadows: 1px cool rails; no blur-heavy shadows; blue-black tonal depth instead of translucent glass.

## Responsive

- Mobile-first single column with all content retained.
- Hero becomes 7/5 grid when the copy and signal panel can each hold 34ch without compression.
- Service and proof matrices use intrinsic `minmax()` reflow.
- Controls remain at least 44px; no hover-only content.
- Fluid headings use bounded `clamp()` values; page prevents horizontal overflow.

## Data visualization

- The hero line is an illustrative trend mark, not live account data.
- Position/line encodes change over time; no false numeric scale, dual axis, or fabricated baseline.
- A direct “illustrative signal” label and accessible SVG description clarify its role.
- Blue is the sole data emphasis; amber marks the terminal decision point. Shape and text make the emphasis redundant.

## Motion

- Timing: 120ms interaction / 280ms reveal · Easing: ease-out.
- Allowed: focus/hover translation up to 2px and a one-time line draw.
- Never: ambient glow, parallax, looping counters, auto-refresh, or motion implying live data.
- `prefers-reduced-motion`: disable transforms, animation, and smooth scrolling.

## Never

- No cyan-on-dark neon glow or glassmorphism.
- No uniform floating-card dashboard.
- No generic “live” indicator or fabricated campaign values.
- No gradients on chart marks, buttons, or panel backgrounds.
- No decorative icon in every heading; use icons only where they carry recognition or action.
- No second display face or third accent hue.

