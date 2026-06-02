---
name: Aspirational Sustainability
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#404a3c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#707a6b'
  outline-variant: '#bfcab8'
  surface-tint: '#096e17'
  primary: '#096e17'
  on-primary: '#ffffff'
  primary-container: '#4ca548'
  on-primary-container: '#003405'
  inverse-primary: '#80db77'
  secondary: '#655881'
  on-secondary: '#ffffff'
  secondary-container: '#ddcdfd'
  on-secondary-container: '#62557e'
  tertiary: '#006591'
  on-tertiary: '#ffffff'
  tertiary-container: '#279bd8'
  on-tertiary-container: '#002e46'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9bf890'
  primary-fixed-dim: '#80db77'
  on-primary-fixed: '#002202'
  on-primary-fixed-variant: '#00530c'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#cfbfef'
  on-secondary-fixed: '#20143a'
  on-secondary-fixed-variant: '#4d4068'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built upon the pillars of clarity, professional environmentalism, and modern efficiency. It targets eco-conscious citizens and municipal partners, evoking a sense of organized responsibility and optimism. 

The visual style is **Minimalist-Modern**. It leverages significant whitespace to project "cleanliness"—a literal and metaphorical necessity for a waste management and sustainability platform. By combining a fresh, natural green with a deep, authoritative dark blue, the system balances the warmth of ecological action with the reliability of a high-tech utility. Every interface element is designed to feel light, airy, and high-end, moving away from "gritty" industrial tropes towards an aspirational lifestyle aesthetic.

## Colors

The palette is anchored by **Sustainability Green (#4CA548)**, used for primary actions and brand presence, and **Deep Midnight (#2D2147)**, used for high-level navigation, headings, and grounding the UI.

To facilitate waste categorization, three distinct secondary colors are utilized:
- **Blue (#008ECA):** Dedicated to paper/recyclables.
- **Orange (#F26A2C):** Dedicated to plastics/organics as per regional standards.
- **Pink (#E45DBF):** Reserved for specialty waste or specific campaign highlights.

The background must remain **Pure White (#FFFFFF)** to ensure the "Cleanliness" brand pillar is maintained. Neutral grays should be used sparingly, primarily for subtle borders and secondary text, to keep the interface feeling bright and high-contrast.

## Typography

The design system exclusively utilizes **Manrope**, a modern sans-serif that strikes a perfect balance between geometric precision and friendly roundness. 

- **Headlines:** Use Bold (700) or ExtraBold (800) weights with slightly tighter letter spacing to create a strong, professional hierarchy.
- **Body Text:** Use Regular (400) for long-form content to maximize readability.
- **UI Labels:** Use Medium (600) or SemiBold (700) for buttons and navigation items to ensure they stand out against the white background.
- **Scaling:** For mobile devices, the Headline XL should scale down to Headline LG sizes to maintain visual balance on smaller viewports.

## Layout & Spacing

The design system employs a **Fluid Grid** model to ensure seamless transitions across devices. 

- **Desktop (1440px+):** 12-column grid with a 24px gutter and 64px side margins.
- **Tablet (768px - 1439px):** 8-column grid with a 24px gutter and 32px side margins.
- **Mobile (0px - 767px):** 4-column grid with a 16px gutter and 16px side margins.

Spacing follows an 8px rhythmic scale. Generous vertical padding (using the `lg` and `xl` tokens) should be applied between major sections to maintain the minimalist and "breathable" aesthetic required by the brand identity.

## Elevation & Depth

To maintain a clean and professional look, depth is achieved through **Tonal Layering** and **Soft Ambient Shadows**. 

1. **Surface Layers:** The primary canvas is #FFFFFF. Secondary containers (like cards or sidebars) may use #F8F9FA to create a subtle distinction without adding visual noise.
2. **Shadows:** Use extremely diffused, low-opacity shadows for interactive elements. A 10-15% opacity of the Deep Midnight (#2D2147) color is preferred over pure black shadows to maintain a sophisticated feel.
3. **Ghost Borders:** For non-interactive layout divisions, use 1px solid borders in a very light neutral (e.g., #EDF0F2) instead of shadows to preserve the minimalist aesthetic.

## Shapes

The shape language reflects the "rounded" nature of the typography and the "soft" approach to sustainability. 

- **Standard Elements:** Buttons, input fields, and cards utilize a **0.5rem (8px)** corner radius.
- **Large Components:** Hero images or prominent containers use **1rem (16px)** to emphasize a modern, friendly appearance.
- **Chips/Pills:** Category tags and status badges should be fully rounded (pill-shaped) to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons use Sustainability Green (#4CA548) with white text. Secondary buttons use an outline of Deep Midnight (#2D2147) with a transparent background. All buttons have a medium-rounded corner (8px).
- **Cards:** White backgrounds with a 1px light gray border or a very soft shadow. Cards should have ample internal padding (24px) to ensure content doesn't feel cramped.
- **Input Fields:** Use a light neutral fill (#F8F9FA) with a bottom-only border or a full subtle border that turns Green (#4CA548) on focus.
- **Waste Category Chips:** These are essential components. They must use the specific secondary colors (Blue, Orange, Pink) as background tints with high-contrast text or icons to clearly identify waste streams.
- **Lists:** Clean, borderless lists with generous vertical spacing and Sustainability Green icons/bullets to reinforce brand identity.
- **Progress Indicators:** Use the Primary Green for "positive" progress (recycling goals) and the Deep Midnight for "structural" progress (app loading/navigation).