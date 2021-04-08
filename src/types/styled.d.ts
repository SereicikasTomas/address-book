import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colorSecondary: string;
    colorPrimary: string;
    accentColor: string;
    backgroundColor: string;
  }
}
