# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
npm install @nuxtjs/axios
npm i --save-dev @types/node
npm install @fortawesome/fontawesome-free

# npm install leaflet.markercluster leaflet.heat
npm install leaflet @types/leaflet leaflet.markercluster leaflet.heat
npx nuxi@latest module add @vesp/nuxt-fontawesome
npx nuxi@latest module add @nuxtjs/leafletnpm install @fortawesome/fontawesome-free
npx nuxi@latest module add nuxt-mdi
npx nuxi@latest module add tailwindcss

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
