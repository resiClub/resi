# resi — Design System

> **resi** cuida los residuos separados desde el hogar para entregárselos —así, separados— a un reciclador de confianza, y le comunica al hogar su impacto mes a mes.

This is the working design system for **resi**, derived from the *Manual de Marca - resi 2024*. It is the source of truth for any visual artifact — slides, marketing pages, the resi web app, packaging copy, internal docs — built by humans or agents.

The system is **Spanish-first** (Colombian Spanish), **white-dominant**, **rounded everywhere**, and quietly hopeful in tone. We are *cuidadores* (caretakers) and *creadores* (creators) — never lecturers.

---

## Brand context

resi is an **umbrella brand** (marca sombrilla) covering a family of products that, together, form a household-level recycling system installed in residential buildings, offices, and schools. The user separates waste at home, resi picks it up — *already separated* — and delivers it to a trusted recycler. Households see their environmental and economic impact monthly.

The slogan is **"Cuidamos lo importante"** (we take care of what matters), and it deliberately doesn't say "recycling" so the brand can grow into adjacent caring-for-the-planet products.

### Sub-brands (all prefixed `resi`, suffix in UPPERCASE, 4 letters)

| Sub-brand     | What it is                                                                 | Visual cue           |
| ------------- | -------------------------------------------------------------------------- | -------------------- |
| **resiCUBO**  | Mini household sorter, 4 compartments / 8 categories                       | 4 colored squares    |
| **resiCUBO+** | Larger version of resiCUBO                                                 | same, larger         |
| **resiBOTE**  | 100× resiCUBO — the building-level bin that keeps the sort                 | tall container frame |
| **resiTUBO**  | Automated chute — drop your sorted bag from your floor                     | "falling" letters    |
| **resiSHUT**  | The clean waste room that houses resiBOTE                                  | letters w/ reflection|
| **resiLONA**  | Reusable tote that lives inside resiCUBO; replaces plastic bags            | fabric-textured type |
| **resiCLUB**  | Anyone (customer or not) who takes care of what matters; brand community   | heart-topped L       |
| **resiTIPS**  | Their social channel — tips on caring for what matters                     | speech-bubble frame  |
| **resiKIDS**  | School-program persona; bigger, friendlier rounded type                    | round terminals      |
| **resiDUOS**  | The brand currency — coins that signal waste-has-value                     | coin motif           |

There is also a mascot, **Kraby**, a hermit crab using a plastic bottle cap for a shell. Kraby is used for emotional/storytelling moments and in `resiKIDS` contexts. We now have a **full 6-view turnaround, an iso hero pose, and two scenes** in `assets/kraby/` — see `preview/17-kraby.html`.

---

## Source materials

| Source                                              | Where                                                | Access      |
| --------------------------------------------------- | ---------------------------------------------------- | ----------- |
| Manual de Marca resi 2024 (PDF, 59 pp.)             | `assets/Manual de Marca - resi 2024.pdf`             | in-project  |
| Master logo + 9 sub-brand logos (PNG) — only `resiDUOS` pending  | `assets/logos/*.png`                                 | in-project  |
| resiCubo lid SVGs — 6 waste-category line icons     | `assets/categories/*.svg`                            | in-project  |
| Codebase                                            | *not provided*                                       | —           |
| Figma file                                          | *not provided*                                       | —           |
| Live web/app product screenshots                    | *not provided*                                       | —           |

The UI kits in this project are extrapolated from the brand manual — they follow the brand's visual rules but are **not pixel-recreations of an existing resi product**, because no codebase or Figma was attached. If those exist, please send them and we will tighten the kit to match.

---

## Repo index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← skill manifest (works in Claude Code)
├── colors_and_type.css        ← single source of truth for tokens
├── assets/
│   ├── Manual de Marca - resi 2024.pdf
│   ├── kraby.png            ← iso hero (legacy path)
│   ├── kraby/               ← turnaround (6 views) + iso + scenes
│   ├── categories/         ← lid SVGs + extracted *-icon.svg & *-name.svg (per category)
│   ├── fonts/              ← Arciform.otf (brand lid/category face)
│   └── logos/
│       ├── resi.png           ← master mark
│       ├── resiCubo.png
│       ├── resiCubo-azul.png  ← negative version on navy
│       ├── resiCuboPlus.png
│       ├── resiBote.png
│       ├── resiTubo.png
│       ├── resiShut.png
│       ├── resiLona.png
│       ├── resiClub.png
│       ├── resiKids.png
│       └── resiTips.png
├── preview/                   ← Design System tab cards
├── ui_kits/
│   └── web/                   ← marketing site components + index.html
└── fonts/                     ← (Nunito is via Google Fonts; no local files)
```

Open any HTML file under `preview/` or `ui_kits/web/` in a browser. They all import `colors_and_type.css`.

---

## Content fundamentals

**Language.** Spanish (Colombia). All product copy, microcopy, button labels, error states, and marketing material are written in Spanish unless specifically asked otherwise. English is an export, never the default.

**Voice.** Two archetypes from the brand manual sit on top of each other:
- *Cuidador* (caretaker) — protective, generous, warm. Speaks of "lo importante" — your time, your family, your money, the planet — never about "trash."
- *Creador* (creator) — innovative, playful, slightly disruptive. Reframes the boring problem of garbage as a system worth designing.

**Tone in practice.**
- **Cercano, not corporate.** We use *tú*, never *usted*. ("Cuidamos *tu* tiempo", not "su tiempo".)
- **Affirmative.** The brand leans on the literal *sí* hidden in re**si**. Copy is "Cuidamos…", "Sí puedes…", "Hagamos…". Avoid "no", "evita", "prohibido" unless rewriting a rule.
- **Plural first-person.** *Nosotros* — "Cuidamos lo importante", "Te ayudamos a…". The system is communal.
- **Concrete numbers.** "Aprovechamos hasta el 98% de tus residuos", "5 veces más que los demás". Numbers earn trust.
- **Reframe, don't lecture.** A bag of trash is "residuos clasificados que valen *resiDUOS*." A waste room is a "espacio limpio". Renaming is the work.

**Casing.**
- `resi` is **always lowercase**, even when starting a sentence: "resi cuida lo importante."
- Sub-brand suffixes are **always UPPERCASE** and run together: `resiCUBO`, `resiBOTE`, `resiTIPS`. Never `Resicubo` or `Resi Cubo`.
- Headlines: sentence-case in Spanish ("Cuidamos lo importante" — only first word + proper nouns capitalised).
- Buttons: sentence-case verbs in imperative ("Empezar", "Pedir mi resiCUBO", "Ver mi impacto").

**Emoji.** Not part of the brand. The manual prescribes 2D and 3D icon systems instead. **Do not use emoji** in product UI, marketing, or slides. If you need a visual marker, use the icon system (Lucide stand-ins until the resi icon set ships — see ICONOGRAPHY).

**Example copy — yes / no.**
> ✅ "Tu hogar separa. Nosotros recogemos. Un reciclador de confianza aprovecha. Tú ves el impacto cada mes."
> ❌ "Don't throw away! Recycle now! ♻️🌍"

> ✅ "Pide tu resiCUBO" · "Únete al resiCLUB" · "Mira lo que cuidaste este mes"
> ❌ "Get Started" · "Join Community" · "View Dashboard"

---

## Visual foundations

**Overall vibe.** Clean, calm, optimistic, generous use of white. The brand is the opposite of the typical "eco" cliché — no kraft cardboard textures, no leafy drop shadows, no chalkboard fonts. Instead: lots of breathing room, rounded everything, two confident brand colors (navy + green) with bright primaries dropped in as accents on category surfaces.

**Color split (per manual).**
- **60% white** — every background defaults to white; cards float on white.
- **20% green(s)** — sustainability anchor; primary CTA, success, accents, the "e" in *resi*.
- **20% complementary** — navy (institutional, text, footers), and the four category colors (blue, orange, pink, secondary green) used **sparingly**, mostly tied to waste categories or sub-brand identity.

A blue-dominant page (e.g. `resiTUBO` product page) is allowed where the sub-brand owns that color, but the *system* page is always white-first.

**Waste-category identity colors.** Beyond the brand palette, each waste classification has its own identity color — the color users see on the physical **resiCubo / resiBote** lids and in **resiTips**. Tokens live in `colors_and_type.css` as `--resi-category-*` and are always paired with their lid line-icon (`assets/categories/`), never recolored. See `preview/04-colors-categories.html`.

| Category        | Token                            | Hex       | Status                          |
| --------------- | -------------------------------- | --------- | ------------------------------- |
| Cartones        | `--resi-category-carton`         | `#F26A2C` | ✓                               |
| Bolsas          | `--resi-category-envolturas`     | `#E45DBF` | ✓                               |
| Metales         | `--resi-category-metal`          | `#D4A017` | ✓ (oro — antes navy)            |
| Papeles         | `--resi-category-papel`          | `#4CA548` | ✓                               |
| Plásticos       | `--resi-category-plastico`       | `#008ECA` | ✓                               |
| Vidrio          | `--resi-category-vidrio`         | `#2D2147` | navy propio (ya distinto) · lid TBD |
| Orgánicos       | `--resi-category-organicos`      | *TBD*     | placeholder = `--resi-fg-disabled` |
| Sanitarios      | `--resi-category-sanitarios`     | *TBD*     | placeholder = `--resi-fg-disabled` |

Each of the five active categories ships a **chip artwork** (`assets/categories/<cat>-chip.svg`) — the two icons **and** the name, kept together exactly as drawn on the lid, with only the lid's outer frame removed. The **canonical chip library** (`preview/18-category-chips.html`) drops that single artwork into a square: a simple chip (lid-faithful, no color fill) plus extended `resiCubo` / `resiBote` partner-label variants. **Icon and name are one indivisible vector illustration from the lid** — the name is vector artwork, NOT type, and is never substituted with a font. This produces **5 chips**: `cartones`, `bolsas`, `metales`, `papeles`, `plásticos`. Vidrio, Orgánicos and Sanitarios join the set once their lids have final art. Use these for resiTips, impact reports, and partner labels.

**The chip is a proportional component, not a fixed size.** A single knob — `--chip-size` (the square's side) — drives everything; `font-size` is set to it so `1em == the chip` and every inner measure is a fraction that holds at any scale, from a 2×4 cm partner label to a 1080×1920 poster. **The artwork is scaled as one unit**, so the lid's visual hierarchy is preserved verbatim — the size ratio *and the line-weight ratio* between icon and name are identical on every chip and at every scale, never re-normalized. All five arts share **one common viewBox**, so names land at the same cap height and every stroke carries the same weight across the set. The square adds **padding 8–10%** (equal on all four sides), **border 1.5%** (replicates the lid's real outer-frame weight and carries the category color so the chip reads as its container), **radius 14%**. To place a chip, set `--chip-size` and `--c` (category color) on the wrapper. The library page documents the anatomy and ramps the same chip from label to poster.


**Type.**
- Display: **Quicksand** standing in for *Arciform* (see Caveats). Rounded geometric sans, soft terminals. Used at large sizes for hero headlines and product names.
- Category / lid labels: these are **vector artwork**, not type — the name on each lid is an indivisible path pulled from the SVG (bundled together with the icons in `assets/categories/<cat>-chip.svg`), used as-is in the category chips. **Arciform** (`--font-category`, embedded at `assets/fonts/Arciform.otf`) is the real brand face and remains available for logotype/lockup work, but category names in chips are never set in a font.
- Body: **Nunito** — three weights (200 ExtraLight, 400 Regular, 700 Bold) plus italics. Hierarchy is built with size and weight, not with multiple typefaces.

**Corner radii — the cardinal rule.**
> "Todo lo rectangular tiene esquinas redondeadas."

Every rectangle in resi UI is rounded. Defaults: `--r-md` (16 px) for cards/inputs, `--r-lg` (24 px) for feature cards, `--r-pill` (999 px) for buttons/chips/tags. Sharp corners are reserved for the inside of the resiCUBO grid logo and nothing else.

**Backgrounds.** Predominantly solid white or `--resi-bg-soft` (#F7F8FA) for grouping. The four category colors and navy are used as **full-bleed feature panels** — never as gradients. The only allowed gradient is a subtle protection-layer (`rgba(7,7,78, 0.0 → 0.4)`) over photography to keep the logo legible (per manual §FONDOS PERMITIDOS).

**Imagery.**
- Real photography of households, nature, urban-vs-clean contrasts.
- Color treatment is **natural, warm, slightly green-leaning** — no heavy filters, no grayscale, no duotones, no grain.
- Isometric illustrations are used for product anatomy (resiCUBO parts → Lego-like). Outline weight is **thin grey**.
- Photography always lives **inside a rounded mask** (radius matches surrounding card).
- No stock-illustration "people-with-laptops" — we use either real photography or the brand's isometric illustration style.

**Borders.** Default 1 px solid `--resi-line` (#E2E5EC). Cards on white pages often use **shadow only, no border**. When a card is on a colored surface, switch to `1 px solid rgba(255,255,255,0.18)` or remove the border entirely.

**Shadows.** Soft, navy-tinted, never gray.
```
--shadow-sm: 0 2px 6px  rgba(7, 7, 78, .07);
--shadow-md: 0 8px 24px rgba(7, 7, 78, .08);
--shadow-lg: 0 20px 48px rgba(7, 7, 78, .10);
```
The shadow color is **navy at low alpha**, never neutral grey — this keeps elevation in the brand family.

**Hover states.**
- Solid buttons → darken background by ~8% (e.g. green → green-dark).
- Outline buttons → fill in with the brand color.
- Cards → lift by `translateY(-2px)` + step up one shadow.
- Links → switch from blue to blue-dark + underline appears.

**Press states.** `transform: scale(0.98)` + reduce shadow by one step. Duration `--dur-fast` (140 ms).

**Focus.** Always-visible **blue focus ring**: `0 0 0 4px rgba(0,156,215,0.25)`. Never remove outlines.

**Animation.**
- **Easing.** `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`) for most enters. No bounces — the brand is calm, not playful-twee.
- **Durations.** 140 / 220 / 400 ms. Anything longer feels heavy and breaks the *facilidad* (ease) value.
- **Motion vocabulary.** Fades, soft slides (8–12 px), gentle scale (0.98 → 1). The only branded motion is the *falling residue* metaphor on resiTUBO product pages — short downward slide with overshoot.

**Transparency & blur.** Used sparingly. Header/nav can use `backdrop-filter: blur(8px)` over white with `rgba(255,255,255,0.7)` to feel airy. Modals use a 40% navy scrim, not black.

**Layout rules.**
- Max content width on marketing pages: 1200 px.
- Generous gutters: 24 px on mobile, 48 px on desktop.
- Section vertical padding: minimum 80 px on desktop.
- Prefer **flex/grid with `gap`** over inline flow — see project conventions.

**Cards.** White background, `--r-md` to `--r-lg`, no border on white pages, `--shadow-sm` resting state, `--shadow-md` on hover. When a card represents a waste category or sub-brand, the *top edge* or *icon* takes the category color, never the whole card body.

**Fixed elements.** Nav bar is sticky-top, 72 px tall on desktop, white with subtle bottom border on scroll. Footer is full-width navy.

---

## Iconography

The brand manual specifies **three icon systems**, each for a different context:

1. **2D line icons** — 24×24 bounding box, **1.5 pt stroke**, minimalist, homogeneous. Used in product UI, lists, infographics. Stroke must convert to fill at larger sizes to preserve proportion.
2. **3D volumetric icons** — used in marketing pieces and packaging where extra emphasis is needed. Soft lighting, brand-color shading.
3. **resiLONA icons** — informal, drawn-on-fabric category marks. Used on the reusable tote.

**Our state.** We were not given an icon library. We use **Lucide** (https://lucide.dev) on CDN as the 2D stand-in: stroke width 1.5, 24 px box — matches the manual's spec almost exactly. **This is a substitution; flag it.** When the real resi icon set ships, drop the Lucide CDN and swap.

Usage:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="recycle"></i>
<script>lucide.createIcons();</script>
```

3D and resiLONA icons → use the real assets when supplied; **do not draw approximations**. In the meantime, leave a placeholder rectangle with the label "ícono 3D — pendiente".

**Emoji.** Not part of the brand. Do not use.

**Unicode glyphs as icons.** Avoided. The arrow in nav and CTAs uses Lucide's `arrow-right`, not `→`.

**Logos.** Master `resi` and sub-brand logos live in `assets/logos/`. They are PNG — vector versions should be requested from the brand owner.

---

## Caveats & open questions

The following items are flagged as either **missing**, **substituted**, or **assumed**. The user (you) should confirm or hand us better materials.

1. **Display font.** The brand manual specifies **Arciform** (Matt Ellis) for the logotype. Arciform is a **single-weight** face with no true bold and is weak at small sizes, so it does not hold up across a full interface. The **system uses Quicksand** — the closest rounded-geometric face that ships multiple weights — for all display type. The actual Arciform file is now in-project (`assets/fonts/Arciform.otf`, token `--font-category`) and is used for category / lid labels and one-off logotype/lockup work only.
2. **🚨 No codebase, no Figma, no live product.** The UI kit is built from the brand manual + logos only. If a resi web app or marketing site exists, please attach it (Import → codebase / Figma URL) and we will recut the kit against the real components.
3. **🚨 Icon set is a stand-in.** Lucide is filling in for the 2D icon system. 3D icons are placeholders.
4. **Kraby mascot.** Character art lives in `assets/kraby/`: a **6-view orthographic turnaround** (`frontal`, `posterior`, `lateral-izquierdo`, `lateral-derecho`, `superior`, `inferior`), the **iso hero** pose (`iso.png`, also at the legacy path `assets/kraby.png`), and two **scenes** (`escena-playa.png`, `escena-saludo.png`). See `preview/17-kraby.html` for poses + usage rules. Use for emotional/storytelling moments and `resiKIDS`; keep the original palette and give it generous white space. Request additional expressions only if a specific flow needs one the turnaround can't cover.
5. **Photography.** No brand-approved photo library exists in-project. Demo screens use neutral placeholder rectangles where a hero photo would go.
6. **resiDUOS coin** — the only sub-brand asset still missing (the brand currency). When supplied we'll add a coin/badge mini-system.
7. **Category colors pending.** `Vidrio` currently reuses `Metal`'s navy (`#2D2147`) — it needs its own hue to be distinguishable on lids. `Restos de comida` and `Sanitarios` have no assigned color yet; their tokens point to a neutral placeholder. Supply the final hues to close these out.

---

## Index

| File / folder              | Purpose                                                    |
| -------------------------- | ---------------------------------------------------------- |
| `colors_and_type.css`      | Tokens (colors, type, radii, spacing, shadow, motion)      |
| `assets/kraby/`            | Kraby mascot — turnaround (6 views) + iso + scenes        |
| `assets/kraby.png`         | Kraby iso hero — transparent PNG (legacy path)            |
| `assets/categories/`       | resiCubo lid SVGs + `*-icon.svg` (icon-only crops)        |
| `assets/logos/`            | PNG logos, master + sub-brands                             |
| `assets/Manual…2024.pdf`   | The source brand manual                                    |
| `preview/`                 | One HTML card per concept, rendered in the DS tab          |
| `ui_kits/web/index.html`   | Marketing-site recreation — clickable demo                 |
| `ui_kits/web/*.jsx`        | Reusable React components (Header, Hero, Cards, etc.)      |
| `SKILL.md`                 | Skill manifest — also runs in Claude Code                  |
