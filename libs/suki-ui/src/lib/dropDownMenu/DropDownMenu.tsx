import _noop from "lodash/noop";
import React, { FunctionComponent } from "react";

import { StyledDropDownMenu } from "./dropDownMenu.styled";

interface DropDownMenuProps {
  align?: string;
  children: string | React.ReactNode;
  onClick?: void | VoidFunction;
}

const DropDownMenu: FunctionComponent<DropDownMenuProps> = ({ align = "center", children, onClick = _noop }) => (
  <StyledDropDownMenu align={align} data-cy="drop-down-menu-list-item" onClick={onClick}>
    {children}
  </StyledDropDownMenu>
);

export { DropDownMenu, DropDownMenuProps };

export default DropDownMenu;
