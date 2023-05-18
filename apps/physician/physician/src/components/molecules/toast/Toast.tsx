import { useDispatch } from "react-redux";
import { ButtonProps } from "@suki-web/suki-ui";
import { FunctionComponent, memo, useEffect, useRef } from "react";

import {
  StyledBody,
  StyledCloseButton,
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledToast
} from "./toast.styled";
import { TOAST_DURATION } from "../../../constants";
import { toastsActions } from "../../../redux/toast";
import { TOAST_TRANSITION_DURATION } from "./constants";
import { ToastProps, ToastTypes } from "./ToastContainer";

interface StyledButtonProps extends ButtonProps {
  toastType: ToastTypes;
}

type StyledBodyProps = {
  hasTitle: boolean;
};

const Toast: FunctionComponent<ToastProps> = ({
  duration = TOAST_DURATION.MEDIUM,
  hasCloseOnClick,
  icon,
  id,
  message,
  title,
  type
}) => {
  const dispatch = useDispatch();

  const toastRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    dispatch(toastsActions.remove({ id }));
  };

  useEffect(() => {
    if (toastRef.current) toastRef.current.style.top = "0";

    const durationWithoutTransition = duration - 2 * TOAST_TRANSITION_DURATION;
    setTimeout(() => {
      if (toastRef.current) toastRef.current.style.top = "-200px";
    }, durationWithoutTransition);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!hasCloseOnClick) {
      timer = setTimeout(() => {
        handleClose();
        clearTimeout(timer);
      }, duration);
    }
  }, []);

  return (
    <StyledContainer ref={toastRef} type={type}>
      <StyledContent>
        {icon}
        <StyledToast>
          {title && <StyledTitle level="h6">{title}</StyledTitle>}
          <StyledBody hasTitle={Boolean(title)}>{message}</StyledBody>
        </StyledToast>
      </StyledContent>
      {hasCloseOnClick && <StyledCloseButton onClick={handleClose} toastType={type} />}
    </StyledContainer>
  );
};

export default memo(Toast);

export { StyledBodyProps, StyledButtonProps, Toast };
