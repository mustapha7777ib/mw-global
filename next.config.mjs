import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this folder. Without it Turbopack walks up the
  // directory tree, finds a stray package-lock.json in the home directory and
  // warns about inferring the wrong root.
  // The root layout lives under `app/[lang]`, so there is no single layout a
  // 404 for an unmatched URL could render inside. `app/global-not-found.tsx`
  // handles those instead.
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
