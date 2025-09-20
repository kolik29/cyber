import type { ButtonSize, ButtonStyle } from "./ButtonProps.types";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | null;
  defaultValue?: string | null;
  options: Option[];
  onChange?: (value: string, option: Option) => void;
  filterable?: boolean;
  noResultsText?: string;
  filterFn?: (opt: Option, q: string) => boolean;
};

export type ButtonSelectProps = Omit<SelectProps, 'label' | 'filterable' | 'noResultsText' | 'filterFn'> & {
  type?: ButtonStyle;
  size?: ButtonSize;
};
