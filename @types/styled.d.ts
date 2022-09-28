import 'styled-components';

import { Color } from '../styles/theme/palette';
import { Typo } from '../styles/theme/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Color;
    typography: Typo;
  }
}
