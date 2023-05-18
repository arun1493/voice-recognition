import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { FunctionComponent, ReactElement, ReactNode } from "react";

import Toast from "./Toast";
import { StyledToastsContainer } from "./toast.styled";
import { selectToastList } from "../../../redux/toast";

type ToastTypes = "severe" | "error" | "tip" | "info" | "confirmation";

interface TypeProps {
  type: ToastTypes;
}

interface ToastProps extends TypeProps {
  duration?: number;
  hasCloseOnClick?: boolean;
  icon?: ReactNode;
  id: string;
  message: string;
  title?: string;
}

interface ToastContainerProps {
  toastsRootEl?: HTMLElement;
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  toastsRootEl = document.getElementById("toast-root")
}) => {
  const toastList: ToastProps[] = useSelector(selectToastList);

  if (!toastsRootEl) {
    toastsRootEl = document.createElement("div");
    document.body.appendChild(toastsRootEl);
  }

  if (!toastList.length) {
    return null;
  }

  const toastContainer = (
    <StyledToastsContainer>
      {toastList.map(
        (toast: ToastProps): ReactElement<ToastProps> => (
          <Toast {...toast} key={toast.id} />
        )
      )}
    </StyledToastsContainer>
  );
  return ReactDOM.createPortal(toastContainer, toastsRootEl);
};

export default ToastContainer;

export { ToastContainer, ToastTypes, TypeProps, ToastProps };
