# AI Space Telescope

<div>
  <a href="https://ai-space-telescope.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Website-6A5ACD?style=for-the-badge&logoColor=white" alt="Website Badge"/></a>
  <img src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fai-space-telescope.com" alt="Website Status" />
  <img src="https://img.shields.io/github/license/KyleGough/ai-space-telescope?style=for-the-badge" alt="MIT License" />
</div>

<br />

Curated gallery of science-fiction themed images generated using text-to-image AI models. These pictures are a hand-picked selection of my favourite generated images.

<br />

![homepage](https://github.com/user-attachments/assets/c77ec597-ba3b-4d84-adaf-62423b4a78dc)

## Deploying

The production site is a static Create React App build published with GitHub Pages. Pushes to `master` run [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds the app and deploys the `build` folder.

After the first workflow run, the site is available at [https://kylegough.github.io/ai-space-telescope/](https://kylegough.github.io/ai-space-telescope/).

```sh
npm install
npm run build
```

Preview the production build locally with `npx serve -s build`. `npm start` still serves the same build through the Express app if you need that locally.
