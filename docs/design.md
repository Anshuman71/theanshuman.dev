# Design System

Neo-brutalist design system built on Tailwind CSS with custom tokens defined in `tailwind.config.js` and utility classes in `styles/globals.css`.

---

## Colors

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#705d00` | Text accents, borders, timeline bar |
| `primary-container` | `#ffd700` | Highlight backgrounds, active states, CTAs, tag badges |
| `primary-fixed` | `#ffe16d` | Input focus bg, container hover states |
| `on-primary` | `#ffffff` | Text on primary backgrounds |
| `on-primary-container` | `#705e00` | Text on primary-container |
| `on-primary-fixed` | `#221b00` | Deep text on primary |
| `tertiary` | `#006e1c` | Green text, Subscribe CTA bg |
| `tertiary-container` | `#8bf088` | Journey card accent bg |
| `tertiary-fixed` | `#94f990` | Tag badge bg |
| `on-tertiary-fixed-variant` | `#005313` | Dark green text |

### Surface Tokens

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#f9f9f9` | Page background |
| `surface-container` | `#eeeeee` | Card image placeholder bg |
| `surface-container-low` | `#f3f3f3` | — |
| `surface-container-high` | `#e8e8e8` | — |
| `surface-container-highest` | `#e2e2e2` | — |
| `surface-container-lowest` | `#ffffff` | White surfaces (replaces `bg-white`) |
| `surface-variant` | `#e2e2e2` | — |
| `on-surface` | `#1b1b1b` | Primary body/headline text |
| `on-surface-variant` | `#4d4732` | Muted text, descriptions |
| `error` | `#ba1a1a` | Destructive actions, clear-filter borders |

### Dark Surface (Footer)

| Token | Hex | Usage |
|---|---|---|
| `dark-surface` | `#1a1816` | Footer background |
| `on-dark-surface` | `#f4efe8` | Footer text |
| `accent-hover` | `#f6d36b` | Footer link hover |
| `accent-red` | `#ff5a4f` | Heart icon, emotional accents |

---

## Shadows

Neo-brutalist hard-shadow system. All shadows use solid black (`rgba(0,0,0,1)`) with no blur.

| Utility Class | Value | Usage |
|---|---|---|
| `neubrutal-shadow-sm` | `2px 2px 0px 0px` | Social icons, small interactive elements |
| `neubrutal-shadow` | `4px 4px 0px 0px` | Cards, buttons, tags, dropdowns, headers (default) |
| `neubrutal-shadow-md` | `6px 6px 0px 0px` | Code blocks in blog prose |
| `neubrutal-shadow-lg` | `8px 8px 0px 0px` | Hero CTAs, "Load More" button |
| `neubrutal-shadow-xl` | `10px 10px 0px 0px` | Blog page hero sections, cover images |

### Interaction Pattern

Pressed/active state removes shadow and translates element by the same offset as the shadow:

| Shadow | Active Transform | Class Pattern |
|---|---|---|
| `neubrutal-shadow-sm` | `active:translate-x-[2px] active:translate-y-[2px]` | Used for social icons |
| `neubrutal-shadow` | `active:translate-x-1 active:translate-y-1` | Used for sort button, subscribe CTA |
| `neubrutal-shadow-lg` | `active:translate-x-2 active:translate-y-2` | Used for "Load More" |

All active states pair with `active:shadow-none` to create the "press" effect.

---

## Borders

Two tiers only. No border-radius — all corners are sharp.

| Width | Tailwind Class | Usage |
|---|---|---|
| 2px | `border-2` | Tags, social icons, small badges, inline labels |
| 4px | `border-4` | Cards, inputs, buttons, dropdowns, CTA blocks, section dividers |

Border color is always `border-black` unless using semantic tokens like `border-error` or `border-primary`.

### Special Border Patterns

| Pattern | Classes | Usage |
|---|---|---|
| Bottom border | `border-b-4 border-black` | TopAppBar separator |
| Left accent | `border-l-8 border-primary` | Section headings, descriptions |
| Left muted | `border-l-4 border-primary` | Captions, secondary info |
| Top+bottom | `border-t-2 border-b-2 border-black` | Timeline horizontal bar |

---

## Typography

Font family: `var(--font-epilogue)` (sans-serif) for all tokens.

| Token | Size | Weight | Line Height | Tracking | Usage |
|---|---|---|---|---|---|
| `display-lg` | 72px | 900 | 1.0 | -0.04em | Hero section titles |
| `headline-lg` | 40px | 800 | 1.1 | -0.02em | Section headings |
| `headline-md` | 32px | 800 | 1.2 | — | Card titles, journey items |
| `body-lg` | 18px | 500 | 1.6 | — | Body text, descriptions |
| `body-md` | 16px | 400 | 1.6 | — | Secondary body, captions |
| `label-bold` | 14px | 700 | 1.0 | — | Tags, badges, labels, nav links |

All headings use `uppercase` unless context requires sentence case.

---

## Spacing & Layout

| Pattern | Value | Usage |
|---|---|---|
| Page padding | `px-8 py-12` | Feed content main |
| Section gap | `mb-12` to `mb-16` | Between content sections |
| Card padding | `p-5` to `p-8` | Inside cards |
| Tag padding | `px-2 py-0.5` to `px-4 py-1` | Tag chips |
| Grid gap | `gap-gutter` | Article card grid |
| Max width | `max-w-screen-2xl` | Page content container |

---

## Component Patterns

### ArticleCard

- `border-4 border-black neubrutal-shadow` on outer container
- Tags: `border border-black` with `bg-primary-container` (hero) or `bg-tertiary-fixed` (default)
- Reading time badge: `bg-black text-white` absolute positioned `left-3 top-3`
- Hover: `group-hover:scale-110` on image with `duration-500` transition
- Read More link: `hover:translate-x-1` with arrow icon

### Buttons

- Default: `bg-white border-4 border-black neubrutal-shadow`
- Active: `active:translate-x-1 active:translate-y-1 active:shadow-none`
- Primary: `bg-primary-container` instead of `bg-white`
- Hover: `hover:bg-primary-container` or `hover:bg-primary-fixed`

### Input Fields

- `bg-white border-4 border-black` with `focus:bg-primary-fixed`
- Icon embedded in absolute-positioned `bg-black text-white` container

### JourneySection

- Timeline marker: `w-12 h-12 border-4 neubrutal-shadow`
- Cards: `border-4 border-black neubrutal-shadow hover:translate-x-1 hover:-translate-y-1`
- Variants: `bg-primary-container` (present), `bg-tertiary-container` (accent), `bg-white` (default)

### Footer

- Dark surface: `bg-dark-surface text-on-dark-surface`
- Links: `hover:text-accent-hover`
- Dot pattern overlay via `radial-gradient` at 18px grid

---

## Rules of Thumb

1. **Shadows**: Always use named `neubrutal-shadow-*` utilities — never inline `shadow-[...]` values.
2. **Borders**: Use `border-2` for small elements, `border-4` for everything else. No `border-[3px]`.
3. **Colors**: Use design tokens (`bg-primary-container`, `text-on-surface`) — never hardcode hex values in components. Add new tokens to `tailwind.config.js`.
4. **Accent color**: Use `primary-container` (`#ffd700`) for all highlight/active backgrounds. For lighter hover states, use `primary-fixed` (`#ffe16d`).
5. **Dark surfaces**: Use `bg-dark-surface` / `text-on-dark-surface` tokens, not arbitrary colors.
6. **Border radius**: None. All elements use sharp corners.
7. **Active states**: Translate by shadow offset + remove shadow for the press effect.