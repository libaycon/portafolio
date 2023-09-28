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
        "auto-fit-1fr": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fit2-1fr": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "auto-1fr-auto": "auto 1fr auto",
      },
      boxShadow: {
        violet50: "0 0 50px #9c27b09c",
        violet25: "0 0 25px #3d3ab766"
      },
      colors: {
        bg: {
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)'
        }
      },
      screens: {
        tablet: {min: "481px"},
      },
      backgroundImage: {
        linerDk: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(17,23,43,1) 80px, rgba(17,23,43,1) calc(100% - 80px), rgba(255,255,255,0) 100%)",
        linerWt: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(216 222 240) 80px, rgb(214 219 236) calc(100% - 80px), rgba(255,255,255,0) 100%)"
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
