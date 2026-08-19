# Northern Venture Drone Services

Marketing site for [Northern Venture Drone Services](https://www.northernventure.ca/), a Kitchener, Ontario-based
provider of aerial mapping, inspection, and imaging for construction, mining,
agriculture, and preservation work.

Built with [Astro](https://astro.build), React islands for the interactive
bits, Tailwind for styling, and GSAP for scroll animation.

## Stack

- **Astro** - pages, routing, static output
- **React** - interactive components (nav, hero, animated sections)
- **Tailwind CSS v4** - styling, via the Vite plugin
- **GSAP** (+ `@gsap/react`) - scroll-triggered animation
- **Partytown** - offloads Google Analytics to a web worker

## Project structure

```text
src/
├── assets/           fonts, images used at build time
├── components/
│   ├── common/       NavBar, Footer, Button, LoadingScreen
│   └── home/         Hero, About, Services, Contact, Story (unused)
├── layouts/
│   └── Layout.astro  base HTML shell, fonts, GA tag
├── pages/
│   └── index.astro   the one page
└── styles/
public/
├── images/, video/    static media served as-is
└── site.webmanifest, favicons
```

Path aliases (see `tsconfig.json`): `@/*`, `@assets/*`, `@styles/*`,
`@layouts/*`.

## Commands

Run from the project root:

| Command             | Action                                         |
| ------------------- | ---------------------------------------------- |
| `npm install`       | Install dependencies                           |
| `npm run dev`       | Start the dev server at `localhost:4321`       |
| `npm run build`     | Build the production site to `./dist/`         |
| `npm run preview`   | Preview the production build locally           |
| `npm run astro ...` | Run any Astro CLI command (e.g. `astro check`) |
| `npm run commit`    | Commitizen prompt for a conventional commit    |

## Notes

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/)
  via commitizen (`cz-conventional-changelog`) - use `npm run commit` instead
  of `git commit` if you want the prompts.
- The `Story` section exists but is commented out of `index.astro`.
- Google Analytics is loaded through Partytown; the tracking ID lives in
  `src/layouts/Layout.astro`.
