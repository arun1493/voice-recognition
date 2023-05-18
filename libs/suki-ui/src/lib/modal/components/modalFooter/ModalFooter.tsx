import _noop from "lodash/noop";
import { FunctionComponent } from "react";

import { Text } from "../../../text";
import { StyledModalFooter } from "./modalFooter.styled";

interface StyledModalFooterProps {
  cursor?: string;
  hasDivider?: boolean;
  height?: number;
  maxHeight?: number;
  onClick?: void | VoidFunction;
  verticalAlignment?: "bottom" | "center" | "top";
}

interface ModalFooterProps extends StyledModalFooterProps {
  onClick?: void | VoidFunction;
  title: string;
}

const ModalFooter: FunctionComponent<ModalFooterProps> = ({
  cursor = "default",
  hasDivider = true,
  height,
  onClick = _noop,
  title,
  verticalAlignment,
  ...props
}) => {
  return (
    <StyledModalFooter
      cursor={cursor}
      hasDivider={hasDivider}
      height={height}
      onClick={onClick}
      verticalAlignment={verticalAlignment}
      {...props}
    >
      <Text cursor="pointer" isBold={true} size="md">
        {title}
      </Text>
    </StyledModalFooter>
  );
};

export { ModalFooter, ModalFooterProps, StyledModalFooterProps };

export default ModalFooter;
