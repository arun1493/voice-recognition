type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  alwaysIncludedOptions?: SelectOption[];
  hasError?: boolean;
  hasSearch?: boolean;
  onChange: (item: SelectOption) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: SelectOption;
};

type StyledOptionsList = { isOpen: boolean };

export { SelectOption, StyledOptionsList, SelectProps };
