import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frambuesa",
};

// Placeholder route. Real content TBD — kept minimal and on-theme.
export default function Frambuesa() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-10 bg-[var(--background)] px-6 pt-[120px] pb-6 text-[var(--label-primary)]">
      <div className="flex w-full max-w-[500px] flex-col">
        <p className="font-medium leading-[24px] tracking-[-0.02em] text-[var(--label-primary)]">
          Frambuesa
        </p>
        <Link
          href="/"
          className="text-[15px] leading-[24px] tracking-[0.12px] text-[var(--label-secondary)] transition-colors hover:text-[var(--label-primary)]"
        >
          ← Felipe Chalkho
        </Link>
      </div>
    </main>
  );
}
