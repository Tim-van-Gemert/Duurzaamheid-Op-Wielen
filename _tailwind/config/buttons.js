
import colors from './colors.js';

const buttons = {

    'white': {
      'background': colors.white,
      'color': colors.black,
      'border': colors.black,
      'hover': {
        'background': colors.black,
        'color': colors.white,
        'border': colors.black,
      }
    },

    'smoke': {
      'background': colors.smoke.DEFAULT,
      'color': colors.black,
      'border': colors.black,
      'hover': {
        'background': colors.black,
        'color': colors.white,
        'border': colors.black,
      }
    },



    'black-bare': {
      'color': colors.black,
      'hover': {
        'color': colors.black.DEFAULT,
      },
    },


};


export default buttons;
