// Artwork row for Frambuesa. Non-navigating for now — there's no destination yet.
//
// Desktop (lg+): "Frambuesa" with a hover-revealed "work in progress", and the
// date on the right.
// iPad / mobile (< lg): no hover, so the date slot is replaced by a permanent
// "work in progress" (same tertiary/caption styling as the date).
// Pure CSS, so no client component needed.
export default function FrambuesaRow({ date }: { date: string }) {
  return (
    <div className="group flex w-full items-end justify-between pt-4 pb-2 shadow-[0_1px_0_0_var(--separator-non-opaque)]">
      <p className="text-[15px] leading-[24px] tracking-[0.12px]">
        <span className="text-[var(--label-primary)]">Frambuesa</span>{" "}
        <span className="hidden text-[var(--label-tertiary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none lg:inline">
          work in progress
        </span>
      </p>
      {/* Desktop: date. iPad / mobile: "work in progress" in the date's slot. */}
      <span className="hidden text-[11px] leading-[16px] tracking-[0.16px] text-[var(--label-tertiary)] lg:inline">
        {date}
      </span>
      <span className="text-[11px] leading-[16px] tracking-[0.16px] text-[var(--label-tertiary)] lg:hidden">
        Work in progress
      </span>
    </div>
  );
}
