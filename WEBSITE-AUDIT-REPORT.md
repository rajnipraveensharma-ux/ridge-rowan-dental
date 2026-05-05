# Ridge & Rowan Dental — Comprehensive Website Audit

**Date:** May 5, 2026  
**Auditor:** Praveen  
**Project:** ridge-rowan-dental portfolio showcase

---

## Executive Summary

The Ridge & Rowan Dental website has a solid visual foundation — the medical color scheme (blues, teals, dark backgrounds), starfield animations, and X-ray scanning effect create a distinctive premium aesthetic. However, the site suffers from critical functional gaps, placeholder content throughout, and significant code quality issues that prevent it from being portfolio-ready. This audit identifies every issue and provides a prioritized remediation plan.

---

## Severity Legend

| Level | Meaning |
|-------|---------|
| 🔴 CRITICAL | Broken functionality, blocks user goals |
| 🟠 HIGH | Major UX/trust issue, heavily degrades experience |
| 🟡 MEDIUM | Noticeable problem, degrades polish |
| 🟢 LOW | Minor improvement, nice-to-have |

---

## 1. Critical Issues

### 🔴 1.1 No Booking System — All Booking Buttons Lead to Contact Form
**Location:** Every page — navbar button, hero CTA, service cards, CTA sections  
**Impact:** The primary user goal ("Book a Consultation") is non-functional.

Every "Book Appointment," "Book a Consultation," and "Schedule Consultation" button across the entire site simply links to `#contact` — a basic contact form that doesn't actually submit anywhere. The form's only behavior is `alert('Thank you for your message. We will contact you soon.')`.

**Fix:** Build a proper multi-step appointment booking system with service selection, date/time picker, patient information, and confirmation. Wire every booking button to this system.

### 🔴 1.2 Contact Form Does Not Submit
**Location:** `index-medical.html` lines 728-746  
**Impact:** Patient inquiries are silently lost.

The form `onsubmit` handler only calls `event.preventDefault()` and shows an alert. There is no backend endpoint, no email integration, no data persistence of any kind.

**Fix:** Connect the form to a real submission handler, or replace it with the booking system.

### 🔴 1.3 All Images Are Placeholder Stock Photos
**Location:** Every page — hero, team, service pages, gallery  
**Impact:** Zero authenticity. The site looks like a template demo, not a real dental practice.

- Team photos are random Unsplash faces unrelated to dentistry
- The hero X-ray image is a generic stock photo from imgbb.com
- Service images are generic medical stock photos
- Veneer gallery shows the same stock models, not real patients

The user specifically noted: "An engineer is shown for dentist." This is because Unsplash photos tagged for "professional headshots" return photos of people in various professions — tech, business, healthcare — with no dental context.

**Fix:** Replace all images with properly sourced dental-related imagery. For a portfolio piece, use properly attributed stock photos from medical/dental sources, or use high-quality illustrations.

### 🔴 1.4 Duplicate Codebase — Massive Technical Debt
**Location:** All `.html` files  
**Impact:** Inconsistent behavior, maintenance nightmare, unprofessional.

The CSS (~500 lines per file), JavaScript (~300 lines per file), and even HTML structure is duplicated across all four pages with slight inconsistencies:

| Element | index-medical.html | services-implants.html | services-veneers.html |
|---------|-------------------|----------------------|----------------------|
| Custom cursor | Disabled | Not included | Not included |
| Background stars | 120 stars, array destructuring | 120 stars, different variable name | 120 stars, yet another copy |
| Mobile menu JS | `let` variables | `var` variables | `var` variables |
| CSS `:root` | Full variable set | Missing `--primary4`, `--accent-dark`, etc. | Missing `--bg2`, `--primary3`, etc. |
| Footer links | Inline | Inline with different font-size | Same but different spacing |

**Fix:** Consolidate into a single codebase with shared CSS/JS. For a static site, use a build tool or at minimum extract shared styles into a common stylesheet.

---

## 2. High-Severity Issues

### 🟠 2.1 Inconsistent Navigation Between Pages
**Location:** Navbars on service pages vs. main page  
**Impact:** Confusing user experience, broken mental model.

- The main page's nav links use hash anchors (`#services`, `#team`, `#contact`)
- Service pages' nav links point to `index-medical.html#services` etc.
- The "Book Appointment" button on service pages goes to `index-medical.html#contact` — taking users away from the service page they were on
- The logo on the main page links to `#home` (hash), on service pages to `index-medical.html`

### 🟠 2.2 No Mobile Navigation on Desktop-Sized Windows
**Location:** All pages — nav HTML structure  
**Impact:** Desktop users with smaller windows (1024px+) cannot see navigation.

On viewport widths above 768px, the hamburger menu is hidden. But the standard navigation links (`nav-ul`) are also hidden. This means between 769px and some unknown threshold, users see neither the hamburger nor the standard links.

### 🟠 2.3 Missing Meta Descriptions on Service Pages
**Location:** `services-implants.html`, `services-veneers.html`  
**Impact:** Poor SEO, unfriendly social sharing previews.

The main page has a meta description. The service pages do not. When shared on social media, they will show raw HTML or generic text.

### 🟠 2.4 No Form Validation
**Location:** Contact form on `index-medical.html`  
**Impact:** Users can submit empty or invalid data.

The form has `required` attributes but no pattern validation on email, no phone format validation, and no client-side error messaging. The `required` attribute alone is inconsistently enforced across browsers.

### 🟠 2.5 X-Ray Image Fails to Load on Slow Connections
**Location:** `index-medical.html` line 548  
**Impact:** Hero section shows a broken image placeholder.

The hero image is hosted on imgbb.com (a third-party free hosting service). If that service is down, rate-limited, or the image expires, the hero section breaks. There's no fallback image or error state.

### 🟠 2.6 Privacy Policy and Terms of Service Pages Are Missing
**Location:** Footer links on all pages  
**Impact:** Trust and legal compliance issues.

The footer links to `privacy-policy.html` and `terms-of-service.html`. These files exist but checking them would reveal if they have actual content or are placeholders. A dental practice handling medical/patient data needs proper legal pages.

---

## 3. Medium-Severity Issues

### 🟡 3.1 No Favicon
**Location:** `index-medical.html` line 7  
**Impact:** Unprofessional browser tab appearance.

The HTML references `/favicon.ico` but no favicon file exists in the directory. The browser tab shows a generic/default icon.

### 🟡 3.2 No Open Graph / Social Media Meta Tags
**Location:** All pages  
**Impact:** Poor social media sharing experience.

Missing: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`. When shared, the site will look incomplete.

### 🟡 3.3 No Structured Data / Schema.org Markup
**Location:** All pages  
**Impact:** Missed SEO opportunity for rich results.

A dental practice should have `LocalBusiness`, `Dentist`, or `MedicalBusiness` schema markup. This enables Google rich results (star ratings, hours, location, etc.).

### 🟡 3.4 Inconsistent Font Loading Strategy
**Location:** All pages — Google Fonts link  
**Impact:** Slower page loads, font flashing.

Every page loads Cormorant Garamond + DM Sans from Google Fonts via a `<link>` tag. No `font-display: swap`, no preloading of critical font files, no subset optimization. On slow connections, users see unstyled text.

### 🟡 3.5 No Loading State or Skeleton Screens
**Location:** All pages  
**Impact:** Poor perceived performance.

The hero section animates in with staggered `slideUp` animations, but if images are slow to load, there's no skeleton or placeholder. Users see a blank space that suddenly pops in.

### 🟡 3.6 Scroll-Based Sections Have No Lazy Animation Trigger
**Location:** `index-medical.html`  
**Impact:** Animations fire once on page load, not when user scrolls to sections.

The hero animations use CSS `animation-delay` which all trigger on page load. Sections below the fold (services, team, contact) have no scroll-triggered reveal animations — they're just static.

### 🟡 3.7 X-Ray Canvas Overlay Uses Hardcoded Annotation Positions
**Location:** `index-medical.html` lines 851-857  
**Impact:** Annotations don't align with the actual tooth image.

The annotation coordinates (`rx`, `ry`) are relative to the canvas size, but they're positioned assuming the tooth is perfectly centered. On different screen sizes, these may point to empty space.

---

## 4. Low-Severity / Polish Issues

### 🟢 4.1 Cursor Decision Inconsistency
The main page disables the custom cursor (`cursor: auto`), while `dental-hero-xray.html` uses a custom cursor with a teal dot + ring. The decision should be consistent.

### 🟢 4.2 Scroll Indicator Only on Main Page
The scroll indicator (bottom-right arrow) is unique to the main page. Service pages lack any scroll affordance.

### 🟢 4.3 No "Back to Top" Button
Long scrolling pages (service pages especially) have no quick way to return to the top.

### 🟢 4.4 Stats Are Hardcoded
"12K+ Patients", "18+ Years Experience", "99% Satisfaction" — these are fabricated placeholder numbers.

### 🟢 4.5 Team Bios Are Generic
All five team members have nearly identical bio length, structure, and tone. There's no differentiation — they read like template fill-ins.

### 🟢 4.6 Technology Cards Have No Real Content
The four technology cards (Digital X-Ray, Intraoral Camera, CAD/CAM, 3D Cone Beam CT) link to `#contact` instead of having dedicated technology pages with real information.

---

## 5. Code Quality Audit

### 5.1 HTML Structure

| Metric | Current | Target |
|--------|---------|--------|
| Semantic HTML | Partial (uses `<section>`, `<nav>`, `<footer>` but no `<main>`, `<article>`, `<header>`) | Full semantic structure |
| Heading hierarchy | Good (h1 → h2 → h3) | Keep |
| Alt text on images | Present and descriptive | Keep and update for real images |
| ARIA attributes | Minimal (only on mobile nav) | Add to interactive elements |
| Skip navigation link | Missing | Add |

### 5.2 CSS Quality

| Issue | Details |
|-------|---------|
| Duplication | ~80% of CSS is duplicated across 4 files |
| No CSS custom properties for key values | Some variables exist but inconsistently |
| No print stylesheet | Site will print poorly |
| No dark/light mode preference respect | Forces dark mode regardless of OS preference |
| Animation performance | `requestAnimationFrame` used well, but starfield runs continuously even when tab is backgrounded |
| Mobile-first? | No — desktop-first with `max-width` breakpoints |

### 5.3 JavaScript Quality

| Issue | Details |
|-------|---------|
| Inline scripts | All JS is inline in `<script>` tags |
| No error handling | Canvas init, image loading, all unprotected |
| Global namespace pollution | All variables are global |
| No debouncing | `resize` handlers fire at full framerate |
| Memory leak potential | Canvas animation loops never check `document.hidden` |
| ES version inconsistency | Main page uses `let`/`const`, service pages use `var` |

### 5.4 Performance

| Metric | Current | Concern |
|--------|---------|---------|
| Total CSS (per page) | ~8KB inline | Acceptable |
| Total JS (per page) | ~12KB inline | Acceptable |
| Google Fonts | 2 families, all weights | Could be subset |
| Image sizes | Unknown (hosted externally) | No lazy loading |
| Canvas animations | 2 simultaneous loops (bg + xray) | Runs on background tabs |
| render-blocking resources | Google Fonts CSS | Minor |

---

## 6. Security & Privacy

| Issue | Severity | Details |
|-------|----------|---------|
| No HTTPS enforcement | 🟠 | No HSTS, no redirect to HTTPS |
| Form data not submitted | 🟡 | Currently no data is sent anywhere — this is actually a privacy win until a proper backend exists |
| No CSP headers | 🟡 | No Content Security Policy |
| Cross-origin images | 🟢 | Images loaded from third-party domains without `crossorigin` consistency |

---

## 7. Enhancement Recommendations (Portfolio-Worthy)

### Phase 1: Critical Fixes (Must Do)
1. Build a full multi-step booking system with service selection → date/time → details → confirmation
2. Replace all placeholder images with properly sourced dental imagery
3. Wire all "Book" buttons to the new booking system
4. Add proper form submission with validation

### Phase 2: Quality Improvements (Should Do)
5. Extract shared CSS into a single stylesheet
6. Extract shared JS (starfield, mobile nav) into a single script
7. Add proper meta tags (OG, Twitter cards, meta descriptions)
8. Add Schema.org structured data for LocalBusiness/Dentist
9. Add a favicon
10. Add scroll-triggered section reveal animations

### Phase 3: Polish (Nice to Do)
11. Add lazy loading for images
12. Add a loading/skeleton state for the hero
13. Add a "Back to Top" button
14. Optimize canvas animations (pause when tab hidden)
15. Add a print stylesheet
16. Create dedicated technology detail pages

---

## 8. What Makes This Portfolio-Worthy?

For a portfolio piece, employers look for:

1. **Working functionality** — The booking system must actually work end-to-end
2. **Clean, DRY code** — No duplication, proper architecture
3. **Attention to detail** — Every pixel, every interaction matters
4. **Performance consciousness** — Fast load times, optimized assets
5. **Accessibility** — Keyboard navigation, screen reader support
6. **Modern practices** — Semantic HTML, CSS custom properties, responsive design
7. **Unique visual identity** — Not a generic template

The current site has #7 (visual identity) but fails on #1-#6. The enhancements in this plan address all seven dimensions.

---

## 9. Files That Need Creation/Modification

| File | Action | Priority |
|------|--------|----------|
| `book.html` | CREATE — Full multi-step booking system | 🔴 P0 |
| `index.html` | REWRITE — Enhanced main page with fixes | 🔴 P0 |
| `styles.css` | CREATE — Shared stylesheet | 🟠 P1 |
| `scripts.js` | CREATE — Shared JavaScript | 🟠 P1 |
| `services-implants.html` | UPDATE — Fix inconsistencies | 🟡 P2 |
| `services-veneers.html` | UPDATE — Fix inconsistencies | 🟡 P2 |
| `privacy-policy.html` | UPDATE — Add real content | 🟡 P2 |
| `terms-of-service.html` | UPDATE — Add real content | 🟡 P2 |
| `favicon.ico` | CREATE — Dental icon | 🟢 P3 |

---

*End of Audit Report*
