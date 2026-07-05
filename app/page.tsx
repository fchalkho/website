import AsciiShader, { DEFAULT_CONFIG } from "./components/AsciiShader";

export default function Home() {
  return (
    <>
      <AsciiShader config={DEFAULT_CONFIG} svgScale={2.4} theme="dark" />
      <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 300 271"
          fill="#686B6E"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="X"
        >
          <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
        </svg>
      </div>
    </>
  );
}
