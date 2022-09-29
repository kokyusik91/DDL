const palette = {
  common: {
    black: '#000',
    white: '#FFF',
  },
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#F8F8F8',
    300: '#F0F0F0',
    400: '#DFDFDF',
    500: '#C9C9C9',
    600: '#ABABAB',
    700: '#797979',
    800: '#2F3E39',
  },
  // green
  primary: {
    main: '#00D4AA', // green
    light: '#E6FBF7', // subGreen
    dark: '#18806A', // deepGreen
  },
  // blue
  secondary: {
    main: '#467FF7',
    light: '#E6ECF8',
    dark: '#185ef3',
  },

  // red
  error: {
    main: '#FE6A6A',
    light: '#FFF0F0',
    dark: '#fa3232',
  },

  // yellow
  warning: {
    main: '#FCB707',
    light: '#FFF5D6',
    dark: '#d09604',
  },

  // purple
  info: {
    main: '#BB39FA',
    light: '#FAF0FF',
    dark: '#a917ef',
  },

  // eq green
  success: {
    main: '#00D4AA', // green
    light: '#E6FBF7', // subGreen
    dark: '#18806A', // deepGreen
  },
};

export type Color = typeof palette;

export default palette;
