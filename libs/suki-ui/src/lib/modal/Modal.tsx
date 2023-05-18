import _noop from "lodash/noop";
import { useKeyPress } from "react-use";
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react";

import { useBreakpoint } from "../hooks";
import { ScreenSize } from "../constants";
import { StyledModal } from "./modal.styled";
import { BaseModal, ModalMask } from "./components";
import { ModalCloseButton } from "./ModalCloseButton";

type ModalCloseType = "mask" | "closeBtn" | null;
// first letter t:top, m:middle, b:bottom; second letter l:left, c:center, r:right
type ModalPositionType = "tl" | "tc" | "tr" | "ml" | "mc" | "mr" | "bl" | "bc" | "br";

interface ModalProps {
  closeDuration?: number;
  hasCloseButton?: boolean;
  hasMask?: boolean;
  headerHeight?: number | string;
  height?: number | string;
  isFullscreen?: boolean;
  isMaskClosable?: boolean;
  isMaskTransparent?: boolean;
  isWithTooltip?: boolean;
  margin?: string;
  maxHeight?: number | string;
  modalRootEl?: HTMLElement;
  onClose: () => void;
  onModalClose?: () => void;
  position?: ModalPositionType;
  skipClosing?: boolean;
  testId?: string;
  width?: number | string;
}
interface StyledModalProps {
  closeDuration?: number;
  breakpoint: ScreenSize;
  height: number | string;
  isActive: boolean;
  isFullscreen?: boolean;
  margin: string;
  maxHeight?: number | string;
  width?: number | string;
}

const Modal: FunctionComponent<ModalProps> = ({
  children,
  closeDuration = 800,
  hasCloseButton = true,
  hasMask = true,
  headerHeight = 56,
  height = "auto",
  isMaskClosable = false,
  isMaskTransparent = false,
  isWithTooltip = true,
  margin = "0",
  maxHeight = 0,
  modalRootEl = document.getElementById("modal-root"),
  onClose,
  onModalClose = _noop,
  position = "mc",
  skipClosing = false,
  testId = "",
  width,
  ...props
}) => {
  const [isEscapeKey] = useKeyPress("Escape");

  if (!modalRootEl) {
    modalRootEl = document.createElement("div");
    document.body.appendChild(modalRootEl);
  }

  const breakpoint = useBreakpoint();

  const [isActive, setIsActive] = useState(true);

  const transitionEl = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!isActive) {
      onModalClose();
    }

    transitionEl.current.onanimationend = function (event) {
      if (!isActive) {
        onClose();
      }
    };

    isEscapeKey && onClose();
  }, [isActive, onClose, isEscapeKey]);

  const handleClose = (closedFrom: ModalCloseType) => () => {
    if (closedFrom === "mask" && !isMaskClosable) {
      return;
    }

    if (skipClosing) {
      onClose();
    } else {
      setIsActive(false);
    }
  };

  return (
    <BaseModal modalRootEl={modalRootEl} position={position}>
      {hasMask && <ModalMask isActive={isActive} isTransparent={isMaskTransparent} onClick={handleClose("mask")} />}
      <StyledModal
        breakpoint={breakpoint}
        closeDuration={closeDuration}
        data-cy={testId}
        height={height}
        isActive={isActive}
        margin={margin}
        maxHeight={maxHeight}
        ref={transitionEl}
        width={width}
        {...props}
      >
        {hasCloseButton && (
          <ModalCloseButton height={headerHeight} isWithTooltip={isWithTooltip} onClick={handleClose("closeBtn")} />
        )}
        {children}
      </StyledModal>
    </BaseModal>
  );
};

export { Modal, ModalProps, ModalPositionType, StyledModalProps };

export default Modal;
