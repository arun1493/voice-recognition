import ReactDOM from "react-dom";
import { FunctionComponent, useCallback, useEffect, useRef } from "react";

import "./baseModal.css";
import { ModalPositionType } from "../..";

interface BaseModalProps {
  modalRootEl: HTMLElement;
  position?: ModalPositionType;
}

const BaseModal: FunctionComponent<BaseModalProps> = ({ children, modalRootEl, position = "mc" }) => {
  const thisEl = useRef(document.createElement("div"));

  const setStyles = useCallback(
    (rootEl: HTMLElement, modalEl: HTMLElement) => {
      const [vPos, hPos] = position.split("");
      if (hPos === "l") {
        modalEl.classList.add("justify-left");
        modalEl.classList.remove("justify-right");
      }
      if (hPos === "r") {
        modalEl.classList.add("justify-right");
        modalEl.classList.remove("justify-left");
      }
      if (vPos === "t") {
        modalEl.classList.add("align-top");
        modalEl.classList.remove("align-bottom");
      }
      if (vPos === "b") {
        modalEl.classList.add("align-bottom");
        modalEl.classList.remove("align-top");
      }
      rootEl.style.position = "relative";
      rootEl.style.zIndex = "999";
      rootEl.style.visibility = "hidden";
    },
    [position]
  );

  useEffect(() => {
    const thisElCurrent = thisEl.current;
    thisElCurrent.className = "modal";
    setStyles(modalRootEl, thisElCurrent);
    modalRootEl.appendChild(thisElCurrent);
    return function cleanup() {
      modalRootEl.removeChild(thisElCurrent);
    };
  }, [modalRootEl, setStyles]);

  return ReactDOM.createPortal(children, thisEl.current);
};

export { BaseModal, BaseModalProps };

export default BaseModal;
