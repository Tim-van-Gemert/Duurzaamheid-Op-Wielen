import plugin from 'tailwindcss/plugin.js';

// Override container max-width behaviour
const containerMaxWidth = plugin(({addComponents, theme}) => {

  // Get the containerMaxWidth config
  const containerMaxWidthConfig = theme('container.maxWidth', '1440px');

  // Set the container max-width to 100%
  // Set a breakpoint at the containerMaxWidth size and set the max-width to that same size
  addComponents({
    '.container': {
      maxWidth: '100%',
      [`@media (min-width: ${containerMaxWidthConfig})`]: {
        maxWidth: containerMaxWidthConfig,
      },
    }
  });

})

export default containerMaxWidth;
