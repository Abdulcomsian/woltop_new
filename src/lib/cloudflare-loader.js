// src/lib/cloudflare-loader.js
export default function cloudflareLoader({ src, width, quality }) {
  const params = new URLSearchParams({
    width: width.toString(),
    quality: (quality || 75).toString(),
    format: "auto",
    fit: "cover", // Add Cloudflare-specific params as needed
  });
  return `${src}?${params}`;
}
