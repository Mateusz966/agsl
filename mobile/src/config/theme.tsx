import {DefaultTheme} from 'react-native-paper';

export const colors = {
  colors: {
    ...DefaultTheme.colors,
    error: '#443D53',
  },
  ...DefaultTheme.colors,
  primary: '#6152BE',
  secondary: '#414757',
  error: '#f13a59',
  primaryButton: '#6152BE',
  sceneContainerBackground: '#ededed',
  white: '#ffffff',
  primaryTextColor: '#4D4952',
};
export const typography = {
  small: {
    fontFamily: 'roboto',
    fontSize: 14,
    lineHeight: 16,
  },
  medium: {
    fontFamily: 'roboto',
    fontSize: 20,
    lineHeight: 22,
  },
  large: {
    fontFamily: 'roboto',
    fontSize: 24,
    lineHeight: 26,
  },
  form: {
    fontFamily: 'roboto',
    fontSize: 16,
  },
};

export const components = {
  button: {
    style: {
      primary: {
        backgroundColor: colors.primaryButton,
        paddingVertical: 5,
        borderRadius: 50,
      },
      secondary: {backgroundColor: colors.white},
    },
    textColor: {
      primary: colors.white,
      secondary: colors.primary,
    },
  },
};

export const theme = {
  ...DefaultTheme,
  ...colors,
  ...typography,
  ...components,
};
