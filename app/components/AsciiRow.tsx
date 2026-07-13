"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const HEAD = "A"; // stays static — the scramble skips the initial letter
const TAIL = "SCII";
const GLYPHS = "◊▯∆|";
const DURATION = 0.75; // 750ms

// Artwork row linking to the legacy ASCII site. On hover, only the tail ("SCII")
// scrambles with glyph characters and resolves back — the initial "A" is left
// untouched. Stays labels/primary. The mouseenter listener is attached natively
// via the span's closest anchor (next/link doesn't forward refs/onMouseEnter
// reliably to the underlying <a>).
export default function AsciiRow({ date }: { date: string }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    const link = el?.closest("a");
    if (!link || !el) return;

    const onEnter = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Seed with glyphs first: scrambling "SCII" → "SCII" is a no-op since the
      // text is unchanged, so we start from a different string and resolve back.
      gsap.killTweensOf(el);
      el.textContent = GLYPHS.repeat(TAIL.length).slice(0, TAIL.length);
      // No revealDelay → ScrambleText reveals left-to-right, so characters lock
      // in order (S, then C, then I, …) for a sequential cascade.
      gsap.to(el, {
        duration: DURATION,
        scrambleText: { text: TAIL, chars: GLYPHS },
        overwrite: true,
      });
    };

    link.addEventListener("mouseenter", onEnter);
    return () => {
      link.removeEventListener("mouseenter", onEnter);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <Link
      href="/ascii"
      className="flex w-full items-end justify-between pt-4 pb-2 shadow-[0_1px_0_0_var(--separator-non-opaque)]"
    >
      <span className="text-[15px] leading-[24px] tracking-[0.12px] text-[var(--label-primary)]">
        {HEAD}
        <span ref={textRef}>{TAIL}</span>
      </span>
      <span className="text-[11px] leading-[16px] tracking-[0.16px] text-[var(--label-tertiary)]">
        {date}
      </span>
    </Link>
  );
}
