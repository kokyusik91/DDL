import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global-styles';
import theme from '../src/styles/theme';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import darkTheme from '../src/styles/darkTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : theme}>
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
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#797979',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
    ],
  },
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
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
  },
};
