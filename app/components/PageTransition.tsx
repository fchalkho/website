"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

// Crossfade page transition (adapted from the Osmo "Cross Fade" snippet to Next's
// App Router — no Barba). Two phases over a backdrop:
//  1. LEAVE — snapshot of the outgoing page fades out to the backdrop.
//  2. push the new route, wait until it's ready.
//  3. ENTER — the backdrop fades out, revealing the destination (so the new page
//     fades in instead of popping in).
// Deferring the push until after LEAVE keeps /ascii's synchronous shader init
// from freezing GSAP. The backdrop matches the destination bg (black for the
// ASCII canvas, themed page bg otherwise) so nothing jumps.
type NavOptions = { backdrop?: string; waitForCanvas?: boolean };
type Ctx = { navigate: (href: string, opts?: NavOptions) => void };
const TransitionContext = createContext<Ctx | null>(null);

export function usePageTransition(): Ctx {
  return (
    useContext(TransitionContext) ?? {
      navigate: (href) => {
        window.location.href = href;
      },
    }
  );
}

const LEAVE = 0.15; // seconds — outgoing page fades out
const ENTER = 0.15; // seconds — incoming page fades in

type Transition = { html: string; backdrop: string; waitForCanvas: boolean };

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [tx, setTx] = useState<Transition | null>(null);
  const pendingRef = useRef<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback(
    (href: string, opts: NavOptions = {}) => {
      const main = document.querySelector("main");
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduce || !main) {
        router.push(href);
        return;
      }

      pendingRef.current = href;
      setTx({
        html: main.outerHTML,
        backdrop: opts.backdrop ?? "var(--background)",
        waitForCanvas: !!opts.waitForCanvas,
      });
    },
    [router],
  );

  useEffect(() => {
    if (!tx) return;
    const clone = cloneRef.current;
    const overlay = overlayRef.current;
    if (!clone || !overlay) {
      setTx(null);
      return;
    }

    gsap.set(overlay, { autoAlpha: 1 });
    gsap.set(clone, { autoAlpha: 1 });

    const leave = gsap.to(clone, {
      autoAlpha: 0,
      duration: LEAVE,
      ease: "power1.inOut",
      onComplete: () => {
        // Snapshot faded to the backdrop — mount the destination behind it.
        const href = pendingRef.current;
        if (href) router.push(href);

        const start = performance.now();
        const revealWhenReady = () => {
          const ready = tx.waitForCanvas
            ? !!document.querySelector("canvas")
            : true;
          if (ready || (performance.now() - start) / 1000 > 2) {
            // One more frame so we're past any synchronous mount work
            // (e.g. the shader init), then fade the backdrop out to reveal it.
            requestAnimationFrame(() => {
              if (!overlayRef.current) {
                setTx(null);
                return;
              }
              gsap.to(overlayRef.current, {
                autoAlpha: 0,
                duration: ENTER,
                ease: "power1.inOut",
                onComplete: () => setTx(null),
              });
            });
            return;
          }
          requestAnimationFrame(revealWhenReady);
        };
        requestAnimationFrame(revealWhenReady);
      },
    });

    return () => {
      leave.kill();
    };
  }, [tx, router]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      {tx && (
        <div
          ref={overlayRef}
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            pointerEvents: "none",
            background: tx.backdrop,
          }}
        >
          <div ref={cloneRef} dangerouslySetInnerHTML={{ __html: tx.html }} />
        </div>
      )}
    </TransitionContext.Provider>
  );
}
