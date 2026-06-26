# Developer Profile

Modern IT profile / portfolio built with React, Vite, CSS and GSAP. The project is ready for static deployment on GitHub Pages.

## Tech Stack

- React
- Vite
- GSAP ScrollTrigger
- CSS
- GitHub Pages workflow

## Run Locally

```bash
npm install
npm run dev
```

Local URL:

```txt
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy With GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

After pushing to GitHub:

1. Open the GitHub repository.
2. Go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.

GitHub will build the Vite app and publish the generated static site.

## Customize

Edit the profile data and project list in:

```txt
src/main.jsx
```

Edit the visual style in:

```txt
src/styles.css
```
