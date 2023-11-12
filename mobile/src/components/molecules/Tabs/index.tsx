import React, {memo, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../../config/theme';
import {styles} from './styles';
import {TabProps} from './types';

const Tabs = ({
  index,
  setIndex,
  scenesToRender,
  routesToDisplay,
  displayType,
}: TabProps) => {
  const layout = useWindowDimensions();
  const renderScene = SceneMap(scenesToRender);
  const [routes] = useState(routesToDisplay);

  return (
    <TabView
      navigationState={{index, routes}}
      sceneContainerStyle={styles.container}
      renderScene={renderScene}
      tabBarPosition={displayType}
      renderTabBar={props => (
        <TabBar
          indicatorStyle={styles.indicatorStyle}
          activeColor={colors.white}
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
