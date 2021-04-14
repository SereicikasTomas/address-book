import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    boxShadowHover: string;
    colorSecondary: string;
    colorPrimary: string;
    accentColor: string;
    backgroundColor: string;
    backdropColor: string;
  }
}
