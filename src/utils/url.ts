/**
 * Build a URL to a file in `public/` that respects the configured `base`
 * (needed for GitHub Pages project sites served under /<repo-name>/).
 */
export function getImageUrl(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/REPO-NAME/" or "/"
  const clean = path.replace(/^\/+/, '');
  return `${base.replace(/\/+$/, '')}/${clean}`;
}
