import plugin from 'tailwindcss/plugin.js';

/**
 * Plugin to create css variables for buttons
 */
const buttons = plugin(({addComponents, theme}) => {

  let buttonComponents = {};

  // Create background, color, border and hover variables per button style
  for (const [style, properties] of Object.entries(theme('buttons'))) {

    /** Set basic variables (default to theme black and white):
      * background, color
      */
    const basics = {
      '--btn-background': properties.background ?? theme('colors.black'),
      '--btn-color': properties.color ?? theme('colors.white'),
    }

    /** Set border variables (default to 0 and transparent):
      * border-width, border-color
      */
    properties.border = properties.border ?? {};;
    const border = {
      '--btn-border-width': properties.border.width ?? '0',
      '--btn-border-color': properties.border.color ?? 'transparent',
    }


    /** Set hover basic variables (defaults to unhovered values):
      * background, color
      */
    properties.hover = properties.hover ?? {};
    const hoverBasics = {
      '--btn-hover-background': properties.hover.background ?? basics['--btn-background'],
      '--btn-hover-color': properties.hover.color ?? basics['--btn-color'],
    };

    /** Set hover border variables (defaults to unhovered values):
      * border-width, border-color
      */
    properties.hover.border = properties.hover.border ?? {};
    const hoverBorder = {
      '--btn-hover-border-width': properties.hover.border.width ?? border['--btn-border-width'],
      '--btn-hover-border-color': properties.hover.border.color ?? border['--btn-border-color'],
    };

    // Merge the variables to the buttonComponents with the style as key
    buttonComponents[`.btn-${style}`] = {...basics, ...border, ...hoverBasics, ...hoverBorder};

  }

  addComponents(buttonComponents);

});

export default buttons;
