"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ex1Crosshair } from "../diagrams";
import { splitLineInward } from "./svgAnim";

gsap.registerPlugin(DrawSVGPlugin);

// First Frambuesa diagram (the crosshair), animated as a proof-of-concept for
// the SVG reveal language. Each Figma path keeps its id, so we can choreograph
// them independently:
//   • MainCircle  — the raspberry-pink ring, drawn on like a loader
//   • Xaxi / Yaxi — the gray axes, grown from the center outward
//   • Yaxi_2/3/4  — the indigo center ticks, popped in
//   • Gajo        — the translucent drupelet, faded + micro-scaled in
// Plays once when it scrolls into view. Honors prefers-reduced-motion by
// showing the final state with no motion. The container starts hidden (inline
// style) so there's no flash of the fully-drawn mark before GSAP sets the
// initial states.
export default function CrosshairDiagram({
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

    const byId = (id: string) => svg.querySelector<SVGElement>(`#${id}`);
    const circle = byId("MainCircle");
    const axes = [byId("Xaxi"), byId("Yaxi")].filter(Boolean) as SVGElement[];
    const ticks = [byId("Yaxi_2"), byId("Yaxi_3"), byId("Yaxi_4")].filter(
      Boolean,
    ) as SVGElement[];
    const gajo = byId("Gajo");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal the container now that we're about to set initial states.
    gsap.set(root, { autoAlpha: 1 });
    if (reduce) return; // final state, no motion

    // Absolute positions keep the total at exactly 1.5s and the axes strictly
    // after the circle finishes:
    //   circle 0→0.70 · axes 0.70→1.15 · ticks 1.05→1.45 · gajo 1.00→1.50
    const tl = gsap.timeline({ paused: true });

    if (circle) {
      // Loader-style sweep, left → right: draw from the collapsed end backward
      // ("100% 100%") so the leading edge runs counter to the path direction.
      tl.from(
        circle,
        { drawSVG: "100% 100%", duration: 0.7, ease: "power1.inOut" },
        0,
      );
    }
    // Split each axis into two halves and draw them from the outer ends inward,
    // so the crosshair converges on the center — only after the circle is done.
    const axisHalves = axes.flatMap((axis) => splitLineInward(axis));
    if (axisHalves.length) {
      tl.from(
        axisHalves,
        { drawSVG: "0% 0%", duration: 0.45, ease: "power2.out" },
        0.7,
      );
    }
    if (ticks.length) {
      tl.from(
        ticks,
        {
          autoAlpha: 0,
          scale: 0.3,
          transformOrigin: "center",
          duration: 0.3,
          ease: "back.out(2)",
          stagger: 0.05,
        },
        1.05,
      );
    }
    if (gajo) {
      tl.from(
        gajo,
        {
          autoAlpha: 0,
          scale: 0.9,
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.out",
        },
        1.0,
      );
    }

    // Play once when it enters the viewport (deterministic — fires immediately
    // if it's already visible, otherwise on scroll-in). rootMargin trims the
    // bottom so it triggers a bit before the mark is fully on screen.
    // Play once when it enters the viewport (deterministic — fires immediately
    // if it's already visible, otherwise on scroll-in). rootMargin trims the
    // bottom so it triggers a bit before the mark is fully on screen.
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
      dangerouslySetInnerHTML={{ __html: ex1Crosshair }}
    />
  );
}
