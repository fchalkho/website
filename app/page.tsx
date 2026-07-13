import XIcon from "./components/XIcon";
import FrambuesaRow from "./components/FrambuesaRow";
import AsciiRow from "./components/AsciiRow";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-10 bg-[var(--background)] px-6 pt-[120px] pb-6 text-[var(--label-primary)]">
      {/* Hero */}
      <header className="flex w-full max-w-[500px] items-start justify-between">
        <div className="flex flex-col text-[15px]">
          <p className="font-medium leading-[24px] tracking-[-0.02em] text-[var(--label-primary)]">
            Felipe Chalkho
          </p>
          <p className="leading-[24px] tracking-[0.12px] text-[var(--label-secondary)]">
            Product Designer. Founding team at{" "}
            <a
              href="https://x.com/getberryapp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[var(--label-primary)]"
            >
              Berry
            </a>
            .
          </p>
        </div>
        <div className="flex items-center pt-[2px]">
          <a
            href="https://x.com/felipechalkho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-[var(--label-secondary)] transition-colors duration-200 hover:text-[var(--label-primary)]"
          >
            <XIcon className="size-4" />
          </a>
        </div>
      </header>

      {/* Artwork list */}
      <section className="flex w-full max-w-[500px] flex-col">
        <div className="flex w-full pb-2 shadow-[0_1px_0_0_var(--separator-opaque)]">
          <h2 className="text-[13px] leading-[20px] tracking-[0.12px] text-[var(--label-secondary)]">
            Artwork
          </h2>
        </div>
        <FrambuesaRow date="07/12/26" />
        <AsciiRow date="07/05/26" />
      </section>
    </main>
  );
}
