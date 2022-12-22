import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite'
import {  presetUno } from '@unocss/preset-uno'
import { presetIcons } from '@unocss/preset-icons'

export default defineConfig(() => {
  return {
    plugins: [UnoCSS({
      shortcuts: [
        { logo: 'i-logos-qwik w-6em h-6em transform transition-800 hover:rotate-180' },
      ],
      presets: [
        presetUno(),

        presetIcons({
          scale: 1.2,
          cdn: 'https://esm.sh/',
        }),
      ],
    }), qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
