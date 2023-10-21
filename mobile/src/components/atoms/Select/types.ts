export interface Option<T> {
  label: string;
  value: T;
}

export interface SelectProps {
  options: Option<string>[];
  title: string;
  onChange: () => void;
  value: Option<string>;
}
