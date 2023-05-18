import _isEmpty from "lodash/isEmpty";

import { SelectOption } from "./select.types";

const filterOptions = (
  hasSearch: boolean,
  inputValue: string | null,
  list: SelectOption[],
  alwaysIncludedOptions: SelectOption[]
) => {
  if (!hasSearch) {
    return list;
  }

  const filteredList = list.filter(
    (item) => !inputValue || (item.label.toLowerCase() as string).includes(inputValue.toLowerCase())
  );

  if (_isEmpty(alwaysIncludedOptions)) {
    return filteredList;
  }

  return [...alwaysIncludedOptions, ...filteredList];
};

const convertToSelectOptions = (options: string[]) => {
  return options.map((value) => ({ label: value, value }));
};

export { convertToSelectOptions, filterOptions };
