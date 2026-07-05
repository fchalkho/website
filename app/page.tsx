import AsciiShader, { DEFAULT_CONFIG } from "./components/AsciiShader";

export default function Home() {
  return (
    <>
      <AsciiShader config={DEFAULT_CONFIG} svgScale={2.4} theme="dark" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 flex justify-center pb-[calc(env(safe-area-inset-bottom)+18px)] sm:bottom-8 sm:pb-0">
        <a
          href="https://x.com/felipechalkho"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="pointer-events-auto text-[#35373B] transition-colors duration-300 ease-out hover:text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 300 271"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
          </svg>
        </a>
      </div>
    </>
  );
}
