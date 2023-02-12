import React, {useState} from 'react';
import LoginComponent from '../../molecules/LoginComponent';
import RegisterComponent from '../../molecules/RegisterComponent';
import Tabs from '../../molecules/Tabs';

const LoginOrRegisterTab = () => {
  const [value, setValue] = useState('login');
  return (
    <>
      <Tabs value={value} setValue={setValue} />
      {value === 'login' ? <LoginComponent /> : <RegisterComponent />}
    </>
  );
};

export default LoginOrRegisterTab;
