// ASCII surface colors. ASCII now follows the system light/dark preference (like
// the rest of the site) so entering it isn't a jarring background flip. These are
// the one source of truth shared by the route layout, the shader canvas, and the
// page-transition backdrop, so they can never drift.
// ASCII uses the design system's Backgrounds/Primary — the SAME surface as the
// rest of the site (Figma Grays, node 37:98) — so entering it is a seamless
// same-color crossfade. Must match --background in globals.css / --ascii-bg.
export const ASCII_BG_LIGHT = "#ffffff";
export const ASCII_BG_DARK = "#0a0a0b";

// Current ASCII surface color for the visitor's system theme — reads the
// themed --ascii-bg CSS token so the transition backdrop always matches the
// layout/shader exactly (client-only; falls back to dark on the server).
export function asciiSurface(): string {
  if (typeof window === "undefined") return ASCII_BG_DARK;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--ascii-bg")
    .trim();
  return v || ASCII_BG_DARK;
}
