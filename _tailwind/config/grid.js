// Breakpoints

const maxGrid = '1440px';

const screens = {
  'xs': '414px',
  'mobile': {'max': '639px'},
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'nav-drawer': {'max': '899px'},
  'nav-bar': '900px',
  'xl': '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
  '4xl': '2400px',
  'mg': maxGrid,
}

// Container class
const container = {
  center: true,
  maxWidth: maxGrid,
  padding: {
    DEFAULT: '16px',
    'md': '32px',
    'lg': '48px',
    'xl': '64px',
  },
}

export default {
  screens: screens,
  container: container,
}
