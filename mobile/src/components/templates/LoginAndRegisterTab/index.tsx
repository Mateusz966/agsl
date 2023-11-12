import React, {useState} from 'react';
import Tabs from '../../molecules/Tabs';
import {LOGIN_AND_REGISTER_ROUTES, LOGIN_AND_REGISTER_SCENES} from './const';

const LoginOrRegisterTab = () => {
  const [index, setIndex] = useState(0);
  return (
    <Tabs
      index={index}
      setIndex={setIndex}
      routesToDisplay={LOGIN_AND_REGISTER_ROUTES}
      scenesToRender={LOGIN_AND_REGISTER_SCENES}
      displayType="top"
    />
  );
};

export default LoginOrRegisterTab;
