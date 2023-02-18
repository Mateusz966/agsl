/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-native-paper';
import Navigation from './navigators';
import {theme} from './utils/theme';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const Content = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
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
