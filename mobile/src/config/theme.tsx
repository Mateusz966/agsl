import {DefaultTheme} from 'react-native-paper';

export const colors = {
  ...DefaultTheme.colors,
  primary: '#6152BE',
  secondary: '#414757',
  error: '#f13a59',
  primaryButton: '#6152BE',
  sceneContainerBackground: '#ededed',
  white: '#ffffff',
  primaryTextColor: '#4D4952',
  cardBackground: '#cccccc',
  success: '#048a50',
};

export const typography = {
  small: {
    fontSize: 14,
    lineHeight: 16,
  },
  form: {
    fontSize: 16,
  },
  medium: {
    fontSize: 20,
    lineHeight: 22,
  },
  large: {
    fontSize: 24,
    lineHeight: 26,
  },
  h1: {
    fontSize: 34,
    lineHeight: 34,
  },
};

export const components = {
  button: {
    style: {
      primary: {
        backgroundColor: colors.primaryButton,
        minWidth: 150,
      },
      secondary: {backgroundColor: colors.white},
    },
    textColor: {
      primary: colors.white,
      secondary: colors.secondary,
    },
  },
};

export const theme = {
  ...DefaultTheme,
  ...colors,
  ...typography,
  ...components,
};
