// src/lib/cloudflare-loader.js
export default function cloudflareLoader({ src, width, quality }) {
  // Skip processing for local images (both development and production)
  const isLocalImage =
    (src.startsWith("/") && !src.startsWith("//")) ||
    src.startsWith("./") ||
    src.startsWith("../");

  if (isLocalImage) {
    // Return the local path as-is without transformation
    return src;
  }

  // Only process remote images with Cloudflare parameters
  const params = new URLSearchParams({
    width: width.toString(),
    quality: (quality || 75).toString(),
    format: "auto",
    fit: "cover",
  });

  return `${src}?${params}`;
}
