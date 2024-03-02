import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';

const useMenuVisibilty = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisiblity = useCallback(
    () => setMenuVisible(!menuVisible),
    [menuVisible],
  );

  useFocusEffect(
    useCallback(() => {
      return () => setMenuVisible(false);
    }, []),
  );

  return {menuVisible, handleMenuVisiblity};
};

export default useMenuVisibilty;
