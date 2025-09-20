import type { Option } from "./SelectProps.types";

export type DropdownProps = {
  id: string;
  options: Option[];
  value?: string | null;
  onPick: (opt: Option) => void;
  noResultsText?: string;
  className?: string;
  listClassName?: string;
  optionClassName?: string;
  selectedClassName?: string;
  stopPropagation?: boolean;
}