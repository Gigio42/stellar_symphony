/**
 * Base path the app is served from (e.g. "/stellar_symphony" on GitHub Pages).
 * Set via NEXT_PUBLIC_BASE_PATH at build time; empty for root deployments.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an absolute app path (starting with "/") with the base path. */
export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
