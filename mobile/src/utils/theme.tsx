import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
  },
  typography: {
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
  },
};
