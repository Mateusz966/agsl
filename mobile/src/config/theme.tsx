import {DefaultTheme} from 'react-native-paper';

export const colors = {
  ...DefaultTheme.colors,
  primary: '#600EE6',
  secondary: '#414757',
  error: '#f13a59',
  primaryButton: '#6152BE',
  sceneContainerBackground: '#ededed',
  tabActive: '#FFFFFF',
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
};

export const components = {
  button: {
    primary: {
      backgroundColor: colors.primaryButton,
      color: colors.tabActive,
    },
    secondary: {
      backgroundColor: colors.tabActive,
      color: colors.primary,
    },
  },
};

export const theme = {
  ...DefaultTheme,
  ...colors,
  ...typography,
  ...components,
};
