import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      gridTemplateRows: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      colors: {
        bg: {
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
