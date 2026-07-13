// ASCII now follows the system light/dark preference (like the rest of the
// site). This backdrop uses the themed --ascii-bg token so it matches the shader
// canvas — no flash before it paints.
export default function AsciiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="fixed inset-0 bg-[var(--ascii-bg)]">{children}</div>;
}
