import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
