const palette = {
  common: {
    black: '#000',
    white: '#FFF',
  },
  grey: {
    50: '#FFF',
    100: '#FFF',
    200: '#FFF',
    300: '#F0F0F0',
    400: '#FFF',
    500: '#FFF',
    600: '#FFF',
    700: '#FFF',
    800: '#FFF',
  },
  dgdrDeepGreen: '#18806A',
  main: {
    green: '#00D4AA',
    orangeRed: '#FE6A6A',
    blue: '#467FF7',
    purple: '#BB39FA',
    yellow: '#FCB707',
  },
  sub: {
    green: '#E6FBF7',
    orangeRed: '#FFF0F0',
    blue: '#EDF2FE',
    purple: '#F2E5F8',
    yellow: '#FFF5D6',
  },
};

export type Color = typeof palette;

export default palette;
