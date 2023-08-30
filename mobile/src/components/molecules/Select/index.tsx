import * as React from 'react';
import {List, RadioButton} from 'react-native-paper';
import {SelectProps} from './types';

const Select = ({
  options,
  onChange,
  value,
  expanded,
  handlePress,
  title,
}: SelectProps) => (
  <List.Accordion title={title} expanded={expanded} onPress={handlePress}>
    <RadioButton.Group onValueChange={onChange} value={value}>
      {options.map((option, index) => {
        return (
          <RadioButton.Item
            key={index}
            label={option.option}
            value={option.value}
          />
        );
      })}
    </RadioButton.Group>
  </List.Accordion>
);

export default Select;
