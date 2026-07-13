import AsciiShader, { DEFAULT_CONFIG } from "../components/AsciiShader";

export default function Ascii() {
  return <AsciiShader config={DEFAULT_CONFIG} svgScale={2.4} theme="dark" />;
}
