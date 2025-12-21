import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use static export for compatibility with standard static hosting (Render Static Site, Cloudflare Pages, Netlify)
  output: "export",

  // Cloudflare Pages requires unoptimized images unless using a custom loader
  images: {
    unoptimized: true,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
