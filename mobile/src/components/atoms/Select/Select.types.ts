import {Option} from '../../../common/types/option';

export interface SelectProps {
  options: Option<string>[];
  title: string;
  onChange: () => void;
  value: Option<string>;
}
