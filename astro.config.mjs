// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'FRINCO',
      cssVariable: '--font-frinco',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/FRINCO.woff2'],
            weight: 'normal',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-ibm-plex-mono',
    },
  ],
  integrations: [
    react(),
    icon({
      include: {
        mdi: ['linkedin', 'instagram', 'email-outline'],
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
