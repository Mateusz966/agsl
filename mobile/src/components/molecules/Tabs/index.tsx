import React, {memo, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../../utils/theme';
import LoginComponent from '../../organisms/LoginComponent';
import RegisterComponent from '../../organisms/RegisterComponent';
import {styles} from './styles';
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
      sceneContainerStyle={styles.container}
      renderScene={renderScene}
      renderTabBar={props => (
        <TabBar
          indicatorStyle={styles.indicatorStyle}
          activeColor={colors.tabActive}
          indicatorContainerStyle={styles.indicatorContainerStyle}
          {...props}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: layout.height}}
    />
  );
};

export default memo(Tabs);
