import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "./components/Section";
import Diagram from "./components/Diagram";
import CrosshairDiagram from "./components/CrosshairDiagram";
import DrupeletDiagram from "./components/DrupeletDiagram";
import {
  chevronBack,
  ex2Flower,
  ex2Trio,
  dirFlowerA,
  dirChevronRight,
  dirFlowerB,
} from "./diagrams";

export const metadata: Metadata = {
  title: "Frambuesa",
  description: "A visual identity built on restraint.",
};

// Body copy shared style (Mobile/Body/Regular: 15/24, tracking 0.12px).
const body = "text-[15px] leading-[24px] tracking-[0.12px] text-[var(--label-primary)]";
// Italic caption under a diagram (Mobile/Caption1, italic, tertiary, centered).
const caption =
  "text-[13px] italic leading-[20px] tracking-[0.12px] text-[var(--label-tertiary)] text-center";

export default function Frambuesa() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-10 bg-[var(--background)] px-6 pt-[120px] pb-6 text-[var(--label-primary)]">
      {/* Hero — back chevron + project title + tagline */}
      <header className="flex w-full max-w-[500px] items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              aria-label="Back to home"
              className="relative size-4 shrink-0 text-[var(--label-secondary)] transition-colors duration-200 hover:text-[var(--label-primary)]"
            >
              <Diagram
                markup={chevronBack}
                className="absolute inset-[16.67%_47.77%_16.67%_13.83%]"
              />
            </Link>
            <p className="text-[15px] font-medium leading-[24px] tracking-[0.08px] text-[var(--label-primary)]">
              Frambuesa
            </p>
          </div>
          <p className="text-[15px] leading-[24px] tracking-[0.12px] text-[var(--label-secondary)]">
            A visual identity built on restraint
          </p>
        </div>
      </header>

      {/* Manifesto */}
      <div className="w-full max-w-[500px]">
        <Section title="Manifesto">
          <p className={body}>
            Some brands need to shout to be heard. Berry is the opposite. This
            territory starts from a simple conviction: when someone trusts a
            platform with their money, they&apos;re not looking for excitement —
            they&apos;re looking for certainty. No artifice, no trends that age
            in six months. Just the clarity of someone who knows exactly what
            they do — and doesn&apos;t need to prove it.
          </p>
        </Section>
      </div>

      {/* Quote */}
      <div className="flex w-full max-w-[500px]">
        <p className="text-[15px] leading-[24px] tracking-[0.12px]">
          <span className="italic text-[var(--label-primary)]">
            “Certainty is built by understanding silence, space, and every
            detail in its exact place.”
          </span>{" "}
          <span className="text-[13px] leading-[20px] text-[var(--label-secondary)]">
            — Berry team.
          </span>
        </p>
      </div>

      {/* Inspiration/Core */}
      <div className="w-full max-w-[500px]">
        <Section title="Inspiration/Core">
          <p className={body}>
            Before it became a mark, it was simply a fruit — dense, imperfect,
            made of dozens of tiny spheres pressed into one form. Berry&apos;s
            new identity begins here: not with a metaphor, but with an object
            studied closely enough to become a system.
          </p>
          <div className="relative h-[217px] w-[258px] overflow-hidden">
            <Image
              src="/frambuesa/raspberry.webp"
              alt="A cluster of raspberries seen from above"
              fill
              // Source is 4096×4096 (headroom); next/image ships a device-sized
              // variant, never the 4K. Desktop oversamples the 258px box (~2×)
              // for extra crispness; mobile stays at box size to spare cellular
              // data. Quality bumped for the small crop.
              sizes="(min-width: 768px) 516px, 258px"
              quality={90}
              draggable={false}
              // Non-draggable / non-saveable, like the inline SVGs: pointer-events
              // off kills the drag + right-click "Save image" affordances.
              className="pointer-events-none object-cover select-none [-webkit-user-drag:none]"
              style={{ objectPosition: "center 56%" }}
            />
          </div>
          <p className={body}>
            Seen from above, that density resolves into something else: a radial
            pattern, almost architectural in its repetition. That single
            observation became the starting point for everything that followed.
          </p>
        </Section>
      </div>

      {/* Exploration (I) */}
      <div className="w-full max-w-[500px]">
        <Section title="Exploration">
          <p className={body}>
            Berry&apos;s symbol is built from a top-down view of a raspberry — an
            image that gave both meaning and coherence to the construction of the
            mark from the very first sketch.
          </p>
          <CrosshairDiagram className="size-[150px]" />
          <p className={body}>
            The crosshair sets the mark&apos;s core proportions. A single
            drupelet — one of the fruit&apos;s small, clustered segments —
            it&apos;s height and anchors first, as the reference point every
            other unit will measure against.
          </p>
          <div className="flex flex-col items-center gap-5">
            <DrupeletDiagram className="size-[150px]" />
            <p className={caption}>
              Once the foundational guidelines are set, everything else falls
              into place.
            </p>
          </div>
          <p className={body}>
            A raspberry isn&apos;t perfectly ordered, though: each drupelet sits
            at a slight tilt against its neighbors. The yellow rectangle marks
            that first tilt, set at 45° — turning the fruit&apos;s natural
            asymmetry into a rule the rest of the symbol repeats around the
            center. Once found, that single angle did most of the work: five
            rotations, and the circle closed itself.
          </p>
        </Section>
      </div>

      {/* Exploration (II) */}
      <div className="w-full max-w-[500px]">
        <Section title="Exploration">
          <p className={body}>
            With the base angle set, the five drupelets rotate into place,
            closing into the mark&apos;s finished form.{" "}
            <span className="line-through">
              Its precise, elegant lines carry hand-made interventions that give
              it a character of its own — achieving greater recognition and
              differentiation for the brand.
            </span>
          </p>
          <Diagram markup={ex2Flower} className="size-[150px]" />
          <p className={body}>
            Once the geometry was locked, we tested how far it could flex —
            different weights, different densities — without ever breaking the
            symmetry holding it together.
          </p>
          <div className="flex flex-col items-center gap-5">
            <Diagram markup={ex2Trio} className="h-[50px] w-[196px]" />
            <p className={caption}>
              It&apos;s awesome how a symmetric system let you/allows you to
              explore/play with them.
            </p>
          </div>
          <p className={body}>
            The exploration gave us more than one valid form — each one
            geometrically sound, each one recognizably Berry. What remained
            wasn&apos;t a question of correctness, but of choice: which version
            carries the brand best.
          </p>
        </Section>
      </div>

      {/* Direction */}
      <div className="w-full max-w-[500px]">
        <Section title="Direction">
          <p className={body}>
            Across the exploration, more than one path could have worked. We
            chose the one that felt most Berry — then began shaping it further,
            sharpening the cut between drupelets so each segment reads as its own
            distinct part of the fruit, rather than a blur of overlapping curves.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Diagram markup={dirFlowerA} className="size-[80px]" />
            <Diagram
              markup={dirChevronRight}
              className="relative size-6 [&>svg]:absolute [&>svg]:inset-[16.67%_30.8%]"
            />
            <Diagram markup={dirFlowerB} className="size-[80px]" />
          </div>
          <p className={body}>
            This is where the mark stops being an experiment and starts becoming
            a decision. The drupelets were trimmed and re-separated, tightening
            the negative space between each one and giving the form the
            definition it needed to hold as a single, legible symbol.
          </p>
        </Section>
      </div>
    </main>
  );
}
