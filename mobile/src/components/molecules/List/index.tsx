import React from 'react';
import {List as PaperList, ListSectionProps} from 'react-native-paper';

const List = ({children}: ListSectionProps) => {
  return <PaperList.Section>{children}</PaperList.Section>;
};
export default List;
