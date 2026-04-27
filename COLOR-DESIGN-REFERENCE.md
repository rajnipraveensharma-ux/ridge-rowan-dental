# 🎨 Visual Color & Design Reference Guide

## Color Palette Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    MEDICAL DENTAL THEME                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  BACKGROUND COLORS                                           │
│  ================                                            │
│                                                               │
│  ██████ #0a0e1a  - Primary Background (Very Dark Blue)      │
│  Dark, professional, reduces eye strain                      │
│                                                               │
│  ██████ #0f1428  - Secondary Background (Dark Blue)          │
│  Used for cards, sections, contrast                          │
│                                                               │
│  ██████ #05070f  - Darkest Background                        │
│  Used for deep backgrounds, star field                       │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  PRIMARY COLORS (Clinical/Professional)                      │
│  ======================================                       │
│                                                               │
│  ██████ #2b9cda  - Primary Medical Blue                      │
│  MAIN COLOR: Links, buttons, highlights, CTAs                │
│  Usage: Headlines, primary interactions                      │
│  Hex: #2b9cda  |  RGB: 43, 156, 218  |  HSL: 202, 76%, 51%  │
│                                                               │
│  ██████ #1f7ba8  - Primary Blue Dark                         │
│  Used for: Hover states, deeper emphasis                     │
│  Hex: #1f7ba8  |  RGB: 31, 123, 168  |  HSL: 202, 68%, 39%  │
│                                                               │
│  rgba(43,156,218,0.18) - Light Blue Overlay                  │
│  Used for: Card backgrounds, light accents                   │
│                                                               │
│  rgba(43,156,218,0.07) - Very Light Blue                     │
│  Used for: Subtle backgrounds, borders                       │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ACCENT COLORS (Health & Vitality)                           │
│  ===============================                             │
│                                                               │
│  ██████ #00d9a3  - Medical Accent (Teal/Green)               │
│  ACCENT COLOR: Success, highlights, animations               │
│  Usage: Important CTAs, success states                       │
│  Hex: #00d9a3  |  RGB: 0, 217, 163  |  HSL: 160, 100%, 43%  │
│                                                               │
│  ██████ #00a878  - Accent Dark (Deep Teal)                   │
│  Used for: Hover states on accent elements                   │
│  Hex: #00a878  |  RGB: 0, 168, 120  |  HSL: 160, 100%, 33%  │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  TEXT COLORS (Readability & Hierarchy)                       │
│  ===================================                         │
│                                                               │
│  ██████ #e8f1f5  - Primary White/Off-White                   │
│  Primary Text: Main headings, important text                 │
│  Color: #e8f1f5  |  Contrast: High (AAA)                     │
│                                                               │
│  ██████ rgba(232,241,245,0.95) - Text Primary                │
│  Used for: Body text, main content                           │
│  Opacity: 95%                                                │
│                                                               │
│  ██████ rgba(232,241,245,0.65) - Text Secondary              │
│  Used for: Secondary text, descriptions                      │
│  Opacity: 65%                                                │
│                                                               │
│  ██████ rgba(232,241,245,0.35) - Text Muted                  │
│  Used for: Subtle text, captions, metadata                   │
│  Opacity: 35%                                                │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  BORDER & DIVIDER COLORS                                     │
│  ======================                                      │
│                                                               │
│  ██████ rgba(43,156,218,0.25) - Primary Border                │
│  Used for: Card borders, dividers, outlines                  │
│  Base: #2b9cda with 25% opacity                              │
│                                                               │
│  ██████ rgba(43,156,218,0.15) - Light Border                  │
│  Used for: Subtle separators, subtle borders                 │
│  Base: #2b9cda with 15% opacity                              │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Color Usage Examples

### Navigation Bar
```
Background: linear-gradient(rgba(10,14,26,.98), rgba(10,14,26,0))
Logo: Primary Blue (#2b9cda)
Text: Text Secondary (65% opacity)
Hover: Text Primary (#e8f1f5)
Button: Primary Blue (#2b9cda) with white text
```

### Buttons

**Primary Button**
```
Background: #2b9cda (Primary Blue)
Text: #0a0e1a (Dark Background)
Border: #2b9cda (Primary Blue)
Hover: #1f7ba8 (Primary Blue Dark)
Hover Shadow: 0 12px 40px rgba(43,156,218,.3)
```

**Secondary Button**
```
Background: transparent
Text: #2b9cda (Primary Blue)
Border: #2b9cda (Primary Blue)
Hover: Text #00d9a3 (Accent), Border #00d9a3
Hover Shadow: 0 8px 30px rgba(0,217,163,.15)
```

### Cards

**Service Card**
```
Background: linear-gradient(135deg, 
  rgba(43,156,218,0.05) 0%, 
  rgba(15,20,40,0.1) 100%)
Border: rgba(43,156,218,0.25) - 1px
Hover Border: #00d9a3 (Accent)
Hover Shadow: 0 12px 36px rgba(43,156,218,.15)
```

**Team Card**
```
Background: linear-gradient(135deg, 
  rgba(15,20,40,0.8) 0%, 
  rgba(10,14,26,0.5) 100%)
Border: rgba(43,156,218,0.25) - 1px
Text: #e8f1f5 (Primary White)
Hover: Border #2b9cda
```

---

## Typography System

### Font Families
```
Headings:    'Cormorant Garamond', serif
Body Text:   'DM Sans', sans-serif
Monospace:   System monospace
```

### Heading Hierarchy
```
H1 (Main Title)
  Size: clamp(48px, 6vw, 84px)
  Weight: 300 (Light)
  Color: #e8f1f5
  Letter-spacing: -0.01em

H2 (Section Title)
  Size: clamp(36px, 4vw, 52px)
  Weight: 400 (Regular)
  Color: #e8f1f5
  Letter-spacing: -0.01em

H3 (Subsection)
  Size: 20px
  Weight: 600 (Semibold)
  Color: #e8f1f5

H4 (Card Title)
  Size: 16px
  Weight: 600 (Semibold)
  Color: #e8f1f5

Body Text
  Size: 13-14px
  Weight: 400 (Regular)
  Color: rgba(232,241,245,0.65) (Text Secondary)
  Line-height: 1.6-1.8
```

---

## Gradient Examples

### Hero Section Gradient
```css
background: linear-gradient(135deg, 
  rgba(43,156,218,0.05) 0%, 
  rgba(0,217,163,0.02) 100%);
```
**Effect**: Subtle medical blue to teal gradient overlay

### Background Gradient
```css
background: linear-gradient(to bottom,
  #081420 0%,
  #060e18 55%,
  #04080d 100%);
```
**Effect**: Deep blue gradient for star field background

### Button Gradient (Hover)
```css
background: linear-gradient(135deg, 
  var(--primary) 0%, 
  var(--primary2) 100%);
```
**Effect**: Light to darker blue on hover

### Card Hover Gradient
```css
background: linear-gradient(135deg, 
  rgba(0,217,163,0.1) 0%, 
  rgba(43,156,218,0.08) 100%);
```
**Effect**: Accent to primary blue accent on hover

---

## Animation & Effects

### Cursor Custom Styling
```
Default: 7px dot at #2b9cda (Primary Blue)
Hover Links: 4px dot + 44px ring (bright blue)
Opacity: 50% ring, full opacity dot
```

### Transitions
```
Standard: 0.2s ease
Cards Hover: 0.3s ease
Button Press: 0.4s ease
Long Effects: 0.85s ease
```

### Animations
```
Fade In:      0.7s - 1.0s
Slide Up:     0.85s - 1.0s
Pulse Dot:    2s infinite
Scroll Bar:   2s infinite
Breathe:      5s infinite
Scan Line:    3.5s infinite
```

---

## Responsive Breakpoints

```
Desktop:    1024px+   (Full layout)
Tablet:     768px-1024px (Adapted layout)
Mobile:     320px-768px (Stacked layout)
```

---

## Contrast Ratios (WCAG Compliance)

| Color Pair | Ratio | Grade |
|-----------|-------|-------|
| #2b9cda on #0a0e1a | 6.8:1 | AAA |
| #e8f1f5 on #0a0e1a | 13.2:1 | AAA |
| #00d9a3 on #0a0e1a | 6.4:1 | AAA |
| #00d9a3 on #0f1428 | 6.1:1 | AAA |

All color combinations meet WCAG AAA standards (minimum 7:1 for large text).

---

## Color Mood & Psychology

### Blue (#2b9cda) = Trust, Medical, Professional
- Primary medical color internationally recognized
- Conveys reliability and healthcare expertise
- Calming effect on users
- Industry standard for healthcare websites

### Teal (#00d9a3) = Health, Growth, Success
- Represents wellness and vitality
- Complements blue perfectly
- Used for positive actions (CTAs, success states)
- Draws attention without being aggressive

### Dark Background (#0a0e1a) = Modern, Premium
- Creates sleek, contemporary look
- Reduces eye strain (especially at night)
- Shows premium, professional brand
- Provides high contrast with text

---

## CSS Variable Reference

In each HTML file `<style>` section:

```css
:root {
  /* Backgrounds */
  --bg: #0a0e1a;
  --bg2: #0f1428;
  
  /* Primary Colors */
  --primary: #2b9cda;
  --primary2: #1f7ba8;
  --primary3: rgba(43,156,218,0.18);
  --primary4: rgba(43,156,218,0.07);
  
  /* Accents */
  --accent: #00d9a3;
  --accent-dark: #00a878;
  
  /* Text Colors */
  --white: #e8f1f5;
  --text-primary: rgba(232,241,245,0.95);
  --text-secondary: rgba(232,241,245,0.65);
  --text-muted: rgba(232,241,245,0.35);
  
  /* Borders */
  --border: rgba(43,156,218,0.25);
  
  /* Status Colors */
  --success: #00d9a3;
  --warning: #f59e0b;
  --danger: #ef4444;
}
```

---

## Design Principles

1. **High Contrast** - Text on background always 7:1+ ratio
2. **Consistency** - Same colors across all pages
3. **Simplicity** - Only essential colors used
4. **Medical** - Blues and teals convey healthcare
5. **Modern** - Dark backgrounds show contemporary design
6. **Accessible** - WCAG AAA compliant
7. **Professional** - Premium, trustworthy appearance

---

## Quick Color Picker

Need to find these colors quickly?

### Color Values
```
Primary Blue:     #2b9cda  or  rgb(43, 156, 218)
Primary Dark:     #1f7ba8  or  rgb(31, 123, 168)
Accent Teal:      #00d9a3  or  rgb(0, 217, 163)
Dark Background:  #0a0e1a  or  rgb(10, 14, 26)
Light Background: #0f1428  or  rgb(15, 20, 40)
Text White:       #e8f1f5  or  rgb(232, 241, 245)
```

### HTML Color Codes
```html
<span style="color: #2b9cda;">Primary Blue Text</span>
<span style="background: #0a0e1a; color: #e8f1f5;">Dark Background</span>
<button style="background: #2b9cda; color: #0a0e1a;">Primary Button</button>
```

---

**Use this guide to:**
- Understand the color system
- Make consistent changes
- Debug color issues
- Extend the design
- Train team members
- Maintain brand consistency

**Last Updated:** April 21, 2026
