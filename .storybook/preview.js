import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  dgdr: {
    name: 'DGDR Main viewport',
    styles: {
      width: '360px',
      height: '600px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
};
