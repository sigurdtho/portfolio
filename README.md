# sigurd.dev — personal portfolio

My personal portfolio site. Built with Astro, styled with Tailwind CSS, deployed on Render.

## Stack

- **[Astro 5](https://astro.build)** — static site generator with content collections
- **[Tailwind CSS v3](https://tailwindcss.com)** — utility-first styling, dark mode via class strategy
- **TypeScript** — throughout
- **Render** — hosting

## Project structure

```
src/
├── components/       # Nav, ProjectCard, etc.
├── content/
│   └── blog/         # Markdown blog posts
├── layouts/          # BaseLayout wrapping all pages
├── pages/            # index, projects, blog, about
└── styles/           # global CSS, CSS custom properties
public/
└── avatar.png        # profile illustration
```

## Running locally

```bash
npm install
npm run dev
```

Then open [localhost:4321](http://localhost:4321).

## Building

```bash
npm run build       # outputs to dist/
npm run preview     # preview the build locally
```

## Features

- Dark / light mode toggle, persisted to `localStorage`
- Bento-grid project section on the homepage
- Projects page with filter bar, hero SVG placeholders, and `<dialog>` modals
- Blog via Astro content collections (Markdown)
- Animated orbital ring on the hero — teal, no green
- Fully responsive, mobile-first
