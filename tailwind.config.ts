import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx,json}'
  ],
  theme: {
    fontFamily: {
      system: [
        '-apple-system',
        'BlinkMacSystemFont',
        'helvetica neue',
        'helvetica',
        'ubuntu',
        'roboto',
        'noto',
        'segoe ui',
        'arial',
        'sans-serif'
      ]
    },
    extend: {}
  },
  plugins: []
} satisfies Config;
