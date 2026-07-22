"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ex1Drupelet } from "../diagrams";
import { bboxCenter, splitLineInward, splitRectFromTopRight } from "./svgAnim";

gsap.registerPlugin(DrawSVGPlugin);

// Second Frambuesa diagram (the drupelet construction). Same reveal language as
// the crosshair — loader ring + guide lines converging on the center — then the
// sequence the design calls for:
//   1. MainCircle  — pink ring drawn on like a loader, left → right
//   2. spokes      — the gray diameters grown from the outside inward
//   3. drupelets   — the four cardinal drupelets faded in together (at once)
//   4. Square      — the yellow rectangle marking the 45° tilt, drawn on
//   5. tilted      — the fifth, tilted drupelet, revealed last
// The tilted drupelet is found geometrically (the filled drupelet whose center
// is nearest the yellow square) so it doesn't depend on a specific path id.
// Plays once on scroll-in; honors prefers-reduced-motion.
export default function DrupeletDiagram({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const svg = root.querySelector("svg");
    if (!svg) return;

    const circle = svg.querySelector<SVGElement>("#MainCircle");
    const square = svg.querySelector<SVGElement>("#Square");
    // Filled drupelets carry fill-opacity; guide diameters carry stroke-opacity.
    const drupelets = Array.from(
      svg.querySelectorAll<SVGElement>("path[fill-opacity]"),
    );
    const spokes = Array.from(
      svg.querySelectorAll<SVGElement>("path[stroke-opacity]"),
    );

    // The tilted (5th) drupelet is the one sitting under the yellow square.
    let tilted: SVGElement | null = null;
    if (square && drupelets.length) {
      const sc = bboxCenter(square);
      let best = Infinity;
      for (const d of drupelets) {
        const c = bboxCenter(d);
        const dist = (c.x - sc.x) ** 2 + (c.y - sc.y) ** 2;
        if (dist < best) {
          best = dist;
          tilted = d;
        }
      }
    }
    const cardinals = drupelets.filter((d) => d !== tilted);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(root, { autoAlpha: 1 });
    if (reduce) return; // final state, no motion

    // Absolute positions → total 2.5s:
    //   circle 0→0.70 · spokes 0.70→1.15 · drupelets 1.20→1.60 ·
    //   square 1.65→2.00 · tilted 2.05→2.50
    const tl = gsap.timeline({ paused: true });

    if (circle) {
      tl.from(
        circle,
        { drawSVG: "100% 100%", duration: 0.7, ease: "power1.inOut" },
        0,
      );
    }

    const spokeHalves = spokes.flatMap((s) => splitLineInward(s));
    if (spokeHalves.length) {
      tl.from(
        spokeHalves,
        { drawSVG: "0% 0%", duration: 0.45, ease: "power2.out" },
        0.7,
      );
    }

    if (cardinals.length) {
      // All four cardinal drupelets at once (no stagger).
      tl.from(
        cardinals,
        {
          autoAlpha: 0,
          scale: 0.85,
          transformOrigin: "center",
          duration: 0.4,
          ease: "power2.out",
        },
        1.2,
      );
    }

    if (square) {
      // Draw the rectangle line-by-line, like the circle — two mirrored L-shaped
      // halves growing from the top-right corner (the circle's center) out to
      // the bottom-left, both at once.
      const squareHalves = splitRectFromTopRight(square);
      tl.from(
        squareHalves,
        { drawSVG: "0% 0%", duration: 0.4, ease: "power2.out" },
        1.65,
      );
    }

    if (tilted) {
      tl.from(
        tilted,
        {
          autoAlpha: 0,
          scale: 0.85,
          transformOrigin: "center",
          duration: 0.45,
          ease: "power2.out",
        },
        2.1,
      );
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          tl.play();
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={className}
      style={{ visibility: "hidden" }}
      dangerouslySetInnerHTML={{ __html: ex1Drupelet }}
    />
  );
}
