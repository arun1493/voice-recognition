import dialogPolyfill from "dialog-polyfill";
import { useFirstMountState, useKeyPress } from "react-use";
import { FunctionComponent, useEffect, useRef } from "react";

import {
  DialogButton,
  DialogButtonType,
  DialogCloseButton,
  DialogContent,
  DialogFooter,
  DialogHeader,
  StyledDialog
} from "./";
import { Header } from "../header";
import { ScreenSize } from "../constants";
import { useBreakpointIncludes } from "../hooks";
import { NavigationIcon } from "../navigationIcon";
import { DialogPolyfillCss } from "./DialogPolyfillCss";
import { ModalMask } from "../modal/components/modalMask";

type DialogElementType = HTMLDialogElement & {
  close: () => void;
  returnValue: string | undefined;
  showModal: () => void;
};

interface DialogButtonsProps {
  end?: DialogButtonType;
  hasCloseBtn?: boolean;
  middle?: DialogButtonType;
  start?: DialogButtonType;
}

interface DialogProps {
  buttonProps: DialogButtonsProps;
  isLongFooter?: boolean;
  isOpen: boolean;
  onClose: (from?: string | undefined) => void;
  title?: string;
}

const Dialog: FunctionComponent<DialogProps> = ({
  buttonProps,
  children,
  isLongFooter,
  isOpen,
  onClose,
  title = ""
}) => {
  const ref = useRef() as React.MutableRefObject<DialogElementType>;
  const [isEscapeKey] = useKeyPress("Escape");
  const dialog = ref.current;

  const { XXS, XS } = ScreenSize;
  const isLargerScreen = useBreakpointIncludes(XXS, XS);
  const headerLevel = isLargerScreen ? "h6" : "h5";

  const handleCloseAnimationEnd = () => {
    dialog.classList.remove("hide");
    dialog.close();
    dialog.removeEventListener("animationend", handleCloseAnimationEnd, false);
  };

  const isFirstMount = useFirstMountState();

  const { end, hasCloseBtn, middle, start } = buttonProps;

  useEffect(() => {
    const dialog = ref.current;
    if (isFirstMount) {
      if (typeof dialog.showModal === "undefined") {
        dialog.classList.add("with-polyfill"); // The dialog polyfill css rules are in the theme folder
      }
      dialogPolyfill.registerDialog(dialog);
    }
    if (isOpen && isEscapeKey) {
      onClose("x-close");
      return;
    }
    if (isOpen) {
      dialog.showModal();
    }
    return () => dialog.close();
  }, [isOpen, isEscapeKey, isFirstMount, onClose]);

  const isIndented = !!(hasCloseBtn && !title);

  return (
    <>
      <DialogPolyfillCss />
      <div>
        {isOpen && <ModalMask isActive={isOpen} isTransparent={false} />}
        <StyledDialog ref={ref}>
          {hasCloseBtn && (
            <DialogCloseButton>
              <NavigationIcon icon="close" size="xs" onClick={() => onClose("x-close")} />
            </DialogCloseButton>
          )}
          {title && (
            <DialogHeader>
              <Header level={headerLevel}>{title}</Header>
            </DialogHeader>
          )}
          <DialogContent isIndented={isIndented}>{children}</DialogContent>
          <DialogFooter isLongFooter={isLongFooter}>
            {start && <DialogButton {...start} />}
            {middle && <DialogButton btnType="secondary" {...middle} />}
            {end && <DialogButton btnType="primary" {...end} />}
          </DialogFooter>
        </StyledDialog>
      </div>
    </>
  );
};

export { Dialog, DialogButtonsProps, DialogProps, DialogElementType };

export default Dialog;
