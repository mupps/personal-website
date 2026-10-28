# mupps.info

My personal website, built with Next.js App Router, TypeScript, and Tailwind CSS.
Content lives in local data files; pages are statically generated.

## Development

Use Node.js 20.9+ and pnpm 10 (the package manager version is pinned in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Updating content

- Homepage introduction: `app/page.tsx`
- Work experience (also supplies the homepage's current role): `app/about/work-data.tsx`
- Projects: `app/projects/project-data.tsx`
- Library: `app/library/library-data.tsx`
- Site metadata and social links: `app/lib/config.ts`
- Colors, spacing, and typography: `app/globals.css`

## Homepage backdrop

`app/components/hero-backdrop.tsx` owns the decorative wireframe surface.
It loads Three.js separately when the introduction is visible, caps rendering at
30 frames per second and 1.5× pixel density, and pauses when the page or hero is
hidden. A static SVG remains available before loading, for reduced motion or data
saving, and if WebGL fails. It does not capture pointer or scroll input.

Light and dark themes follow the system preference until a visitor chooses a
theme. Vercel Analytics and Speed Insights are retained.

## License

MIT. Originally adapted from Nextfolio.
