// ASCII is deliberately excluded from the site's design system and light/dark
// theming. This backdrop pins a static black background behind the shader so the
// route looks identical regardless of the visitor's system theme.
export default function AsciiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="fixed inset-0 bg-black">{children}</div>;
}
