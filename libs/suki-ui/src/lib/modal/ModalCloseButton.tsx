import { FunctionComponent } from "react";

import { NavigationIcon } from "../navigationIcon";
import { StyledCloseButton } from "./modal.styled";

interface ModalCloseButtonProps {
  height?: number | string;
  isWithTooltip?: boolean;
  onClick: () => void;
}

const ModalCloseButton: FunctionComponent<ModalCloseButtonProps> = ({ height = "auto", isWithTooltip, onClick }) => {
  return (
    <StyledCloseButton aria-label="Close" className="modal-close" height={height}>
      <NavigationIcon icon="close" isWithTooltip={isWithTooltip} onClick={onClick} size="xs" />
    </StyledCloseButton>
  );
};

export { ModalCloseButton };
