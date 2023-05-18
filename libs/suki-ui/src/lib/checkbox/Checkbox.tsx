import _noop from "lodash/noop";
import { FunctionComponent } from "react";

import { Icon } from "../icon";
import { StyledCheckbox } from "./checkbox.styled";

interface CheckboxProps {
  checked?: boolean;
  hasError?: boolean;
  onChange?: (checked: boolean) => void;
  tabIndex?: number;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked = false,
  hasError = false,
  onChange = _noop,
  tabIndex = 0,
  ...restCheckboxProps
}) => {
  return (
    <StyledCheckbox hasError={hasError} onClick={() => onChange(!checked)} tabIndex={tabIndex} {...restCheckboxProps}>
      {checked && <Icon icon="check" size="2xs" />}
    </StyledCheckbox>
  );
};

export default Checkbox;

export { Checkbox };
