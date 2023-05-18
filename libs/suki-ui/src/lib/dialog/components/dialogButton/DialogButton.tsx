import _noop from "lodash/noop";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

import { useBreakpoint } from "../../../hooks";
import { ScreenSize } from "../../../constants";
import { StyledDialogButton } from "./dialogButton.styled";

type DialogButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType?: "secondary" | "primary";
  onClick?: () => void;
  text: string | React.ReactNode;
};

const DialogButton: FunctionComponent<DialogButtonType> = ({ onClick = _noop, text, ...buttonProps }) => {
  const breakpoint = useBreakpoint();
  const isXXSScreen = breakpoint === ScreenSize.XXS;

  return (
    <StyledDialogButton
      data-cy="dialog-button"
      isXXSScreen={isXXSScreen}
      onClick={onClick}
      text={text}
      {...buttonProps}
    >
      {text}
    </StyledDialogButton>
  );
};

export default DialogButton;

export { DialogButton, DialogButtonType };
