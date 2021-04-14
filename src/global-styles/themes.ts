import { DefaultTheme } from 'styled-components';

const generalStyles = {
  borderRadius: '15px',
  boxShadow: '0 1rem 2rem 0 rgba(0, 0, 0, 0.2)',
  boxShadowHover: '0 2rem 4rem 0 rgba(0, 0, 0, 0.4)',
};

export const darkTheme: DefaultTheme = {
  ...generalStyles,
  colorPrimary: '#324B4C',
  colorSecondary: '#F5F5F5',
  accentColor: '#00C6CF',
  backgroundColor: '#253839',
  backdropColor: 'rgba(0, 0, 0, 0.5)',
};

export const lightTheme: DefaultTheme = {
  ...generalStyles,
  colorPrimary: '#F5F5F5',
  colorSecondary: '#324B4C',
  accentColor: '#068488',
  backgroundColor: '#eaeaea',
  backdropColor: 'rgba(240, 240, 240, 0.5)',
};
