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
import {BottomNavigation, Provider} from 'react-native-paper';
import {theme} from './config/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {SnackbarProvider} from './common/contexts/SnackbarContext/SnackbarProvider';
import {DishProvider} from './common/contexts/DishContext/DishProvider';
import {ShoppingListProvider} from './common/contexts/ShoppingListContext/ShoppingListProvider';
import BottomNavigationBar from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigationBar';
import BottomBar from './navigators/BottomNavigation';
import {Navigation} from './navigators/DefaultNavigation';

const queryClient = new QueryClient();

const NavigationContent = () => {
  return (
    <NavigationContainer>
      <SnackbarProvider>
        <Navigation />
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
