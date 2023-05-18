import { FunctionComponent } from "react";

import { StyledBackdrop } from "./modalMask.styled";

interface ModalMaskProps {
  isActive?: boolean;
  isTransparent?: boolean;
  onClick?: () => void;
}

const ModalMask: FunctionComponent<ModalMaskProps> = ({ isActive, isTransparent, onClick }) => (
  <StyledBackdrop isActive={isActive} isTransparent={isTransparent} onClick={onClick} />
);

export { ModalMask, ModalMaskProps };

export default ModalMask;
