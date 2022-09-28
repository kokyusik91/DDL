import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme/index';

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

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      {/* <StylesProvider injectFirst> */}
      <GlobalStyle />
      <Story />
      {/* </StylesProvider> */}
    </ThemeProvider>
  ),
];
