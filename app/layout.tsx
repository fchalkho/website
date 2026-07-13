import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dieGrotesk = localFont({
  variable: "--font-die-grotesk",
  display: "swap",
  src: [
    { path: "./fonts/DieGrotesk-A-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/DieGrotesk-A-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/DieGrotesk-A-Semibold.otf", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chalkho.com"),
  title: {
    default: "Felipe Chalkho",
    template: "%s · Felipe Chalkho",
  },
  description:
    "Felipe Chalkho is a Product & Design Engineer and Founding Designer at Berry, based in Buenos Aires, Argentina.",
  applicationName: "Felipe Chalkho",
  authors: [{ name: "Felipe Chalkho", url: "https://x.com/felipechalkho" }],
  creator: "Felipe Chalkho",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://chalkho.com",
    siteName: "Felipe Chalkho",
    title: "Felipe Chalkho",
    description:
      "Product & Design Engineer and Founding Designer at Berry, based in Buenos Aires, Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Chalkho",
    description:
      "Product & Design Engineer and Founding Designer at Berry, based in Buenos Aires, Argentina.",
    creator: "@felipechalkho",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dieGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
