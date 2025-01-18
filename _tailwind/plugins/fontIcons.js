import plugin from 'tailwindcss/plugin.js';
import iconCodes from '../config/icons.js';

const icons = plugin(({addComponents, theme}) => {

  let iconComponents = {
    '.icon': {
      fontFamily: theme('fontFamily.icon'),
      speak: 'never',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
    },
  };

  for (const [iconName, code] of Object.entries(iconCodes)) {

    let beforeContent = `@apply before:content-['\\${code}']`;

    iconComponents[`.icon.icon-${iconName}`] = {};
    iconComponents[`.icon.icon-${iconName}`][beforeContent] = {};
  }

  addComponents(iconComponents);
});

export default icons;
