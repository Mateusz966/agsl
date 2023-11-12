/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-native-paper';
import {theme} from './config/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SnackbarProvider} from './components/atoms/SnackbarMessage/SnackbarProvider';
import {DishProvider} from './components/organisms/DishForm/hooks/DishContext/DishProvider';
import {NavigationContainer} from '@react-navigation/native';
import DefaultNavigation from './navigators/DefaultNavigation';

const queryClient = new QueryClient();

const Content = () => {
  return (
    <DishProvider>
      <SnackbarProvider>
        <NavigationContainer>
          <DefaultNavigation />
        </NavigationContainer>
      </SnackbarProvider>
    </DishProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider theme={theme}>
        <Content />
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
