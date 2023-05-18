import { FunctionComponent, useEffect, useState } from "react";

import { ModalMask } from "../modal/components";
import { StyledDatePickerModal } from "./datePicker.styled";

interface DatePickerModalProps {
  hasMask: boolean;
  isModalAlignRight?: boolean;
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.MutableRefObject<HTMLDivElement>;
  width?: number;
}

const OFFSET = 6;
const OFFSET_TOP = 40;

const DatePickerModal: FunctionComponent<DatePickerModalProps> = ({
  children,
  hasMask = true,
  isModalAlignRight = false,
  isOpen = false,
  onClose = () => null,
  triggerRef,
  width = 350
}) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const { left: triggerLeft, right: triggerRight } = triggerRef.current.getBoundingClientRect();
    const { left: bodyLeft, right: bodyRight } = document.body.getBoundingClientRect();
    const widthAvailable = isModalAlignRight ? triggerRight - bodyLeft : bodyRight - triggerLeft;
    const widthRequired = width + OFFSET;

    if (widthAvailable < widthRequired) {
      const setDirection = isModalAlignRight ? setRight : setLeft;
      setDirection(widthAvailable - widthRequired);
    }
  }, [isModalAlignRight, triggerRef, width]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <StyledDatePickerModal
        data-cy="date-picker-modal"
        isModalAlignRight={isModalAlignRight}
        left={left}
        right={right}
        top={OFFSET_TOP}
        width={width}
      >
        {children}
      </StyledDatePickerModal>
      {hasMask && <ModalMask onClick={onClose} />}
    </>
  );
};

export { DatePickerModal };
export default DatePickerModal;
