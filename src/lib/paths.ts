/**
 * Prefixes a root-relative path with the configured GitHub Pages base path.
 * Needed for any asset referenced via a plain string (img src, anchor href to
 * /resume.pdf, etc.) since those aren't rewritten automatically the way
 * next/image and next/link are.
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
