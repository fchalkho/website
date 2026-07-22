// Shared helpers for the Frambuesa SVG reveal animations.

const SVG_NS = "http://www.w3.org/2000/svg";

// DrawSVG animates a single contiguous segment per element, so a symmetric
// "outside → center" grow isn't possible on one straight line that passes
// through the center. We replace such a line with two <line> halves (each
// running from an outer endpoint to the midpoint), copying every attribute
// (stroke, style, width, opacity…) so they render identically, and each half
// can then be drawn inward. Returns the inserted halves (empty if the geometry
// can't be measured).
export function splitLineInward(path: SVGElement): SVGLineElement[] {
  const geom = path as unknown as SVGGeometryElement;
  const parent = path.parentNode;
  if (!parent || typeof geom.getTotalLength !== "function") return [];

  const len = geom.getTotalLength();
  const a = geom.getPointAtLength(0);
  const b = geom.getPointAtLength(len);
  const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };

  const half = (from: { x: number; y: number }) => {
    const line = document.createElementNS(SVG_NS, "line");
    // Carry over every paint attribute (stroke, style, stroke-width,
    // stroke-opacity, …); only the geometry differs.
    for (const attr of Array.from(path.attributes)) {
      if (attr.name !== "d" && attr.name !== "id") {
        line.setAttribute(attr.name, attr.value);
      }
    }
    line.setAttribute("x1", String(from.x));
    line.setAttribute("y1", String(from.y));
    line.setAttribute("x2", String(mid.x));
    line.setAttribute("y2", String(mid.y));
    parent.insertBefore(line, path);
    return line;
  };

  const halves = [half(a), half(b)];
  path.remove();
  return halves;
}

// bbox center of an SVG element.
export function bboxCenter(el: SVGElement): { x: number; y: number } {
  const b = (el as unknown as SVGGraphicsElement).getBBox();
  return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
}

// Split an axis-aligned rectangle outline into two mirrored L-shaped halves that
// both start at the top-right corner and meet at the bottom-left corner:
//   A: top-right → top-left → bottom-left   (top + left edges)
//   B: top-right → bottom-right → bottom-left (right + bottom edges)
// Drawing both from 0% reveals the rect outward from its top-right corner (which
// sits at the circle's center) toward the opposite corner. Attributes are copied
// so the halves render identically. Returns the inserted halves.
export function splitRectFromTopRight(rect: SVGElement): SVGPathElement[] {
  const parent = rect.parentNode;
  const b = (rect as unknown as SVGGraphicsElement).getBBox();
  if (!parent) return [];

  const tr = `${b.x + b.width} ${b.y}`;
  const tl = `${b.x} ${b.y}`;
  const bl = `${b.x} ${b.y + b.height}`;
  const br = `${b.x + b.width} ${b.y + b.height}`;

  const make = (d: string) => {
    const p = document.createElementNS(SVG_NS, "path");
    for (const attr of Array.from(rect.attributes)) {
      if (attr.name !== "d" && attr.name !== "id") {
        p.setAttribute(attr.name, attr.value);
      }
    }
    p.setAttribute("d", d);
    parent.insertBefore(p, rect);
    return p;
  };

  const halves = [make(`M${tr}L${tl}L${bl}`), make(`M${tr}L${br}L${bl}`)];
  rect.remove();
  return halves;
}
