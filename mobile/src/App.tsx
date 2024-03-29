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
import {
  SnackbarProvider,
  DishProvider,
  ShoppingListProvider,
} from './common/contexts';
import RootNavigation, {navigationRef} from 'navigators/RootNavigation';

const queryClient = new QueryClient();

if (__DEV__) {
  // @ts-ignore
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const NavigationContent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SnackbarProvider>
        <RootNavigation />
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
