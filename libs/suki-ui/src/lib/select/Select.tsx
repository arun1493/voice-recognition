import Downshift from "downshift";
import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";
import { FunctionComponent, useState } from "react";

import { Icon, ICON_COLORS, Text } from "../../";
import { filterOptions } from "./select.helpers";
import { SelectOption, SelectProps } from "./select.types";
import { StyledExpandButton, StyledInput, StyledLi, StyledRoot, StyledSelect, StyledUl } from "./select.styled";

const Select: FunctionComponent<SelectProps> = ({
  alwaysIncludedOptions = [],
  hasError = false,
  hasSearch = true,
  onChange,
  options,
  placeholder,
  value = "",
  ...restSelectProps
}) => {
  const [inputValue, setInputValue] = useState("");
  const onItemChange = (item: unknown) => {
    onChange(item as SelectOption);
  };

  const getItemLabel = (options: SelectOption[], inputValue?: string | null, placeholder?: string) => {
    const selectedOption = options.find((option) => option.value === inputValue);
    return selectedOption?.label || placeholder || "";
  };

  const onInputValueChange = (value: string) => {
    if (!hasSearch) {
      return;
    }

    setInputValue(value);
    onChange({ label: inputValue, value: inputValue });
  };

  const optionToString = (item: unknown): string => {
    const { value } = (item as SelectOption) ?? {};
    if ((typeof item !== "string" || _isEmpty(item)) && hasSearch) {
      const objectExists = options.find((option) => option.label.toLowerCase() === inputValue.toLowerCase());
      if (objectExists) {
        return value || objectExists.label;
      } else {
        return inputValue;
      }
    }

    return value;
  };

  return (
    <Downshift
      initialSelectedItem={value}
      itemToString={optionToString}
      onChange={onItemChange}
      onInputValueChange={onInputValueChange}
    >
      {({
        getInputProps,
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps
      }) => {
        const toggleButtonProps = getToggleButtonProps();
        const rootToggleButtonProps = hasSearch ? {} : toggleButtonProps;
        const inputPropsValue = getInputProps()?.value as string;

        return (
          <StyledSelect hasError={hasError} isOpen={isOpen} {...restSelectProps}>
            <StyledRoot
              isSelected={!!inputValue}
              tabIndex="0"
              {...rootToggleButtonProps}
              {...getRootProps({ refKey: "" }, { suppressRefError: true })}
            >
              {hasSearch && (
                <StyledInput
                  onFocus={(e: { target: { select: () => any } }) => e.target.select()}
                  {...getInputProps()}
                  placeholder={placeholder}
                  value={getItemLabel(options, inputPropsValue) || inputPropsValue}
                />
              )}
              {!hasSearch && <Text cursor="pointer">{getItemLabel(options, inputValue, placeholder)}</Text>}
            </StyledRoot>
            <StyledExpandButton tabIndex="-1" {...toggleButtonProps}>
              <Icon color={ICON_COLORS.lightGray} height={4} icon="arrowDown" width={6} />
            </StyledExpandButton>
            <StyledUl isOpen={isOpen} {...getMenuProps()}>
              {filterOptions(hasSearch, inputValue, options, alwaysIncludedOptions).map((item, index) => (
                <StyledLi
                  isHighlighted={highlightedIndex === index}
                  isSelected={selectedItem === item}
                  {...getItemProps({ index, item, key: item.value })}
                >
                  {item.label}
                </StyledLi>
              ))}
            </StyledUl>
          </StyledSelect>
        );
      }}
    </Downshift>
  );
};

export default Select;

export { Select };
