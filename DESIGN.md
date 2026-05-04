---
name: Magno Skin Care Clinic - Pasig City
colors:
  surface: '#fdf8f9'
  surface-dim: '#ddd9da'
  surface-bright: '#fdf8f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3ecee'
  surface-container: '#ece3e5'
  surface-container-high: '#e6dade'
  surface-container-highest: '#e0d1d6'
  on-surface: '#1c1b1c'
  on-surface-variant: '#554244'
  inverse-surface: '#313031'
  inverse-on-surface: '#f4eff0'
  outline: '#6b5457'
  outline-variant: '#dbc0c2'
  surface-tint: '#9f3d50'
  primary: '#410013'
  on-primary: '#ffffff'
  primary-container: '#630d25'
  on-primary-container: '#ffb2bc'
  inverse-primary: '#ffb2bc'
  secondary: '#72575c'
  on-secondary: '#ffffff'
  secondary-container: '#fbd7dc'
  on-secondary-container: '#3d2529'
  tertiary: '#022200'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d3905'
  on-tertiary-container: '#75a564'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#ffb2bc'
  on-primary-fixed: '#400012'
  on-primary-fixed-variant: '#591223'
  secondary-fixed: '#fedadf'
  secondary-fixed-dim: '#e1bec3'
  on-secondary-fixed: '#2a161a'
  on-secondary-fixed-variant: '#594044'
  tertiary-fixed: '#bdf1a8'
  tertiary-fixed-dim: '#a2d48f'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#25501a'
  background: '#fdf8f9'
  on-background: '#1c1b1c'
  surface-variant: '#e6e1e2'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.3'
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

This design system establishes a visual language that balances clinical precision with high-end aesthetic wellness. The brand personality is authoritative, nurturing, and sophisticated, targeting a clientele that values medical expertise as much as a premium experience. 

The chosen style is **Modern Corporate with Tonal Minimalism**. It utilizes expansive white space to denote cleanliness (clinical), while employing rich, deep accents to convey luxury (premium). The interface avoids the coldness of typical medical software by using soft, layered backgrounds and a refined typographic hierarchy. The emotional response is one of safety, professional care, and serene transformation.

## Colors

The palette is rooted in the "Deep Burgundy" of the heritage logo, used primarily for high-level branding, primary buttons, and critical headlines to instill trust and authority. "Petal Pink" and "Blush Mist" serve as functional backgrounds and soft dividers, mimicking the softness of skin and reducing visual "noise." 

"Botanical Green" is used sparingly as an accent for success states, health indicators, or natural product highlights, providing a fresh contrast to the warmer tones. The background remains predominantly "Clinical White" or "Blush Mist" to maintain a sterile, professional environment.

## Typography

This design system uses a dual-font strategy to bridge the gap between "medical" and "spa." **Noto Serif** provides the editorial, premium feel required for headings, suggesting a legacy of knowledge. **Manrope** is used for all functional and body text; its geometric but approachable proportions ensure high legibility for clinical data and instructions. All labels use a tracked-out, uppercase Manrope to provide clear categorization without overwhelming the page.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a contained, boutique feel, while transitioning to a fluid layout for tablet and mobile. A strict 8px base unit governs all dimensions. 

Generous "Section Padding" (80px+) is used to separate clinical services, ensuring the UI never feels cluttered. Gutters are kept wide (24px) to allow content to breathe, reflecting the calm atmosphere of a physical clinic. Elements should favor vertical stacking with ample white space over dense horizontal packing.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines**. Surfaces do not "float" with heavy shadows; instead, they are defined by subtle shifts in background color (e.g., a white card on a Blush Mist background). 

When elevation is required for interactive elements like modals or dropdowns, use "Ambient Shadows"—soft, extremely diffused shadows (20-30px blur) with a tiny hint of the burgundy hue at 4% opacity. This maintains a flat, modern aesthetic while providing just enough depth to guide the user's eye.

## Shapes

The shape language is **Soft**. A 0.25rem (4px) base radius is applied to most UI components to suggest precision and medical discipline. However, "Container" elements like large cards or featured images may use the `rounded-lg` (8px) setting to soften the overall composition. Buttons and input fields should strictly adhere to the base soft radius to avoid a "bubbly" or "playful" look that could undermine medical credibility.

## Components

### Buttons
Primary buttons use a solid Deep Burgundy fill with white Manrope text in semi-bold. Secondary buttons use a Botanical Green outline for "Action/Health" items, or a simple 1px burgundy border for "Navigational" items.

### Input Fields
Inputs feature a 1px border in a muted pink-grey. Focus states transition the border to Deep Burgundy with a 2px "Soft Pink" glow. Labels sit above the field in the `label-caps` style.

### Cards
Cards are flat with a 1px border in #F9D5DA (Petal Pink). They should not have shadows unless they are interactive "hover" states. Cards used for skin treatments should feature high-quality photography with a slight "desaturated" clinical filter.

### Progress Indicators (Clinical)
Use thin, 4px rounded bars. Use Botanical Green for "Healthy/Completed" and Deep Burgundy for "Required/Active."

### Chips/Tags
Used for skin types (e.g., "Oily," "Sensitive"). These should be pill-shaped with a Petal Pink background and Deep Burgundy text to ensure high contrast and readability.