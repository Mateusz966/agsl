export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  title: string;
  onChange: () => void;
  value: Option;
}
