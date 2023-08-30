import {Option} from '../../atoms/ControlledSelect/types';

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  expanded: boolean;
  handlePress: () => void;
  title: string;
}
