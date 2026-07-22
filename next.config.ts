import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires opting into each next/image `quality` value used. 75 is
    // the default; 90 is for the Frambuesa raspberry photo (small crop, retina).
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // The home lives at the root — guard against /home and /main (matching is
      // case-insensitive, so /Home, /MAIN, etc. are covered too). 308 = permanent.
      { source: "/home", destination: "/", permanent: true },
      { source: "/main", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
