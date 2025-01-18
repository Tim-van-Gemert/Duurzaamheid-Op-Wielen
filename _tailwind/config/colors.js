import Color from 'color';

const colors = {

  'blue': {
    DEFAULT: '#3526f5',
    'dark': Color('#3526f5').darken(0.2).hex(),
  },
  'violet': {
    DEFAULT: '#100B49',
    'dark': Color('#100B49').darken(0.2).hex(),
    'translucent': '#100B4940'
  },
  'smoke': {
    DEFAULT: '#F5F5F9',
    'dark': Color('#F5F5F9').darken(0.2).hex(),
  },

  'pink': {
    DEFAULT: '#EE63CB',
    'dark': Color('#EE63CB').darken(0.2).hex(),
    'light': Color('#EE63CB').lighten(0.35).hex(),
  },
  
  'lightblue': '#ACCEF7',
  'red': '#f30',
  'white': '#ffffff',
  'cloud': '#ffffff',
  'black': '#000000',
  'jet-black': '#050524',
  'gray': {
    100: '#e5e5e5',
    500: '#777777',
  },




  'yellow':'#E7B000',
};

const aliases = {
  primary: colors.blue,
  secondary: colors.yellow,
  inverse: colors.white,
  accent: colors.pink,
  error: colors.red,
  page: colors.white,
}

export default {
  transparent: 'transparent',
  current: 'currentColor',
  ...colors,
  ...aliases,
};
