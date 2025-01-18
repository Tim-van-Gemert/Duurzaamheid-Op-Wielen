/** @type {import('tailwindcss').Config} */

// Plugins
import tailwindCssTypography from '@tailwindcss/typography';
import tailwindCssContainerQueries from '@tailwindcss/container-queries';
import setContainerMaxWidth from './_tailwind/plugins/containerMaxWidth.js';
import buttonComponents from './_tailwind/plugins/buttons.js';
import iconComponents from './_tailwind/plugins/fontIcons.js';



// Config
import colors from './_tailwind/config/colors.js';
import buttons from './_tailwind/config/buttons.js';
import typography from './_tailwind/config/typography.js';
import { fontFamily, fontSize } from './_tailwind/config/fonts.js';
import grid from './_tailwind/config/grid.js';
import spacing from './_tailwind/config/spacing.js';
import shadows from './_tailwind/config/shadows.js';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...grid,
      spacing,
      colors,
      ...shadows,
      buttons,
      fontFamily,
      fontSize,
      typography,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    tailwindCssTypography,
    tailwindCssContainerQueries,
    setContainerMaxWidth,
    buttonComponents,
    iconComponents,
  ],
};
