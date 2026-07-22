import type { ReactNode } from "react";

// One "WorksList" block from the Frambuesa design: a caption-styled title with a
// hairline separator below it, then the content. The separator uses box-shadow
// (not border-b) so its Y matches Figma with no 1px drift — same convention as
// the homepage. Content children are stacked and centered with a 60px gap
// (media is centered; full-width text stretches and stays left-aligned).
export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full pb-2 shadow-[0_1px_0_0_var(--separator-opaque)]">
        <h2 className="text-[13px] leading-[20px] tracking-[0.12px] text-[var(--label-secondary)]">
          {title}
        </h2>
      </div>
      <div className="flex w-full flex-col items-center gap-[60px] pt-4">
        {children}
      </div>
    </section>
  );
}
