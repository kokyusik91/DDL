import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global-styles';
import theme from '../src/styles/theme';

import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
// addDecorator(withThemes(ThemeProvider, [theme]));

// 다양한 뷰포트 제공
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
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
};
