"use client";

import { useEffect, useState } from "react";
import AsciiShader, { DEFAULT_CONFIG } from "../components/AsciiShader";

function systemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Drives the ASCII shader with the visitor's system theme so the route is
// responsive like the rest of the site. The lazy initializer reads the scheme
// up front (correct from the first frame on client-side navigation, which is how
// ASCII is entered), and it updates live if the OS theme changes.
export default function AsciiScene() {
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mq.matches ? "dark" : "light");
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return <AsciiShader config={DEFAULT_CONFIG} svgScale={2.4} theme={theme} />;
}
