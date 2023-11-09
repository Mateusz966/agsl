import {useCallback, useState} from 'react';

export const useModalVisibility = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnModalDissmiss = useCallback(
    () => setModalVisible(!modalVisible),
    [modalVisible],
  );

  return {modalVisible, setModalVisible, handleOnModalDissmiss};
};
