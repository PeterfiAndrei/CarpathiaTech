// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// GitHub Pages configuration
// ---------------------------------------------------------------------------
// For a project page served at  https://<username>.github.io/<repo-name>/
//   - set `site`  to  https://<username>.github.io
//   - set `base`  to  /<repo-name>
//
// TODO: replace USERNAME and REPO-NAME with the real GitHub values before deploy.
//
// To use a CUSTOM DOMAIN later (e.g. https://carpathia.tech):
//   1. set `site: 'https://carpathia.tech'` and `base: '/'` (or remove `base`)
//   2. add a file `public/CNAME` containing just `carpathia.tech`
//   3. configure the DNS A/CNAME records at your registrar and enable the
//      custom domain in the repo's Settings → Pages.
// ---------------------------------------------------------------------------
const SITE = 'https://peterfiandrei.github.io';
const BASE = '/CarpathiaTech';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
