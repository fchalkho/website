// Renders a Figma-exported SVG inline (not via <img>) so its paths keep their
// ids and can be targeted by GSAP for the stroke/reveal animation pass later.
// The markup already maps neutral grays to design tokens (see ../diagrams.ts);
// the wrapper controls the box size via `className`.
export default function Diagram({
  markup,
  className,
}: {
  markup: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={className}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
