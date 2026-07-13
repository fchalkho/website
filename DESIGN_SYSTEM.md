# Design System — Grays

Source of truth: Figma → chalkho.com → **Grays** section (`node-id=37-98`).
Implemented as CSS custom properties in `app/globals.css` (light on `:root`, dark
under `@media (prefers-color-scheme: dark)`), consumed via `text-[var(--…)]` /
`bg-[var(--…)]` Tailwind arbitrary values.

The whole site is grayscale — there are no other hues. Everything (Main homepage
**and** the ASCII route) draws from this one scale.

## Tokens

| Token (Figma)          | CSS var                 | Light     | Dark      | Use |
|------------------------|-------------------------|-----------|-----------|-----|
| Backgrounds/Primary    | `--background`          | `#ffffff` | `#0a0a0b` | Page background — Main **and** ASCII |
| Backgrounds/Light      | `--background-light`    | `#fcfcfd` | —         | Reserved (near-white surface) |
| Backgrounds/Secondary  | `--background-secondary`| `#f7f7f8` | `#151619` | Raised/secondary surfaces |
| Backgrounds/Dark       | `--background-dark`     | —         | `#020203` | Reserved (near-black surface) |
| Labels/Primary         | `--label-primary`       | `#1d1d1f` | `#f5f5f7` | Primary text |
| Labels/Secondary       | `--label-secondary`     | `#6c6f75` | `#a3a6a8` | Secondary text |
| Labels/Tertiary        | `--label-tertiary`      | `#a7abae` | `#686b6e` | Tertiary text / dates |
| Separators/Opaque      | `--separator-opaque`    | `#e7e8e9` | `#35373b` | List title divider |
| Separators/Non-opaque  | `--separator-non-opaque`| `#e7e8e980` | `#35373b80` | List item dividers |

## Notes

- **ASCII surface** uses `Backgrounds/Primary` — the same `--background` as the
  rest of the site — exposed as `--ascii-bg` (alias of `--background`). Using the
  same color makes entering ASCII a seamless same-color crossfade. The shader
  canvas and the page-transition backdrop read the same value via
  `app/lib/ascii.ts` (`ASCII_BG_LIGHT` / `ASCII_BG_DARK`), so layout, shader, and
  transition can never drift.
- The ASCII shader's character ramp uses the Labels grays: light ramps
  `Labels/Tertiary → Labels/Primary`; dark ramps `Separators/Opaque → Labels/Secondary`.
- Theming is automatic via `prefers-color-scheme` — no manual toggle.

## Adding a token

1. Add the swatch to the Figma **Grays** section.
2. Add the CSS var to both blocks in `app/globals.css`.
3. Update this table.
