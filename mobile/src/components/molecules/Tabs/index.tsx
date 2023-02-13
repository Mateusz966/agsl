import React, {memo, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LoginComponent from '../LoginComponent';
import RegisterComponent from '../RegisterComponent';
import {TabProps} from './types';

const Tabs = ({index, setIndex}: TabProps) => {
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    login: LoginComponent,
    register: RegisterComponent,
  });
  const [routes] = useState([
    {key: 'login', title: 'Sign in'},
    {key: 'register', title: 'Sign up'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      sceneContainerStyle={{backgroundColor: '#ededed'}}
      renderScene={renderScene}
      renderTabBar={props => (
        <TabBar
          indicatorStyle={{backgroundColor: '#FFFFFF'}}
          activeColor="#FFFFFF"
          indicatorContainerStyle={{backgroundColor: '#6152BE'}}
          {...props}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: layout.height}}
    />
  );
};

export default memo(Tabs);
