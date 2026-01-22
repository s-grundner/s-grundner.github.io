# Static OpenStemBook Website built with Astro

> Currently in Development

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   ├── content
│   │   └── topics <-- OSB Submodule with md files
│   ├── layouts
│   ├── pages
│   ├── scripts
│   └── styles
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

For including the OpenStemBook content:

- `git submodule update --init --recursive`
- `git sparse-checkout set OpenStemBook/`
- `git read-tree -mu HEAD` (after Changing the sparse-checkout file)
