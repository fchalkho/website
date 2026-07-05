import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
