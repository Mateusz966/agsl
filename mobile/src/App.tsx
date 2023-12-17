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
import {NavigationContainer} from '@react-navigation/native';
import DefaultNavigation from './navigators/DefaultNavigation';
import {SnackbarProvider} from './common/contexts/SnackbarContext/SnackbarProvider';
import {DishProvider} from './common/contexts/DishContext/DishProvider';
import {ShoppingListProvider} from './common/contexts/ShoppingListContext/ShoppingListProvider';

const queryClient = new QueryClient();

const NavigationContent = () => {
  return (
    <NavigationContainer>
      <SnackbarProvider>
        <DefaultNavigation />
      </SnackbarProvider>
    </NavigationContainer>
  );
};

const Content = () => {
  return (
    <DishProvider>
      <ShoppingListProvider>
        <NavigationContent />
      </ShoppingListProvider>
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
