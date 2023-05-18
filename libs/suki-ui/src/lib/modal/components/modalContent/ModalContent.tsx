import { FunctionComponent } from "react";

import { useScrollTop } from "../../../../hooks";
import { StyledModalContent } from "./modalContent.styled";

interface ModalContentProps {
  hasPadding?: boolean;
  height?: number | string;
  maxHeight?: number | string;
  onModalScroll?: any;
  width?: number | string;
}

interface StyleModalContentProps extends ModalContentProps {
  hasTopBorder?: boolean;
}

const ModalContent: FunctionComponent<ModalContentProps> = ({
  children,
  hasPadding = true,
  height = "auto",
  maxHeight,
  onModalScroll,
  width,
  ...remainingModalContentProps
}) => {
  const [scrollTop, scrollProps] = useScrollTop();

  return (
    <StyledModalContent
      hasPadding={hasPadding}
      hasTopBorder={scrollTop > 0}
      height={height}
      maxHeight={maxHeight}
      width={width}
      {...remainingModalContentProps}
      {...scrollProps}
    >
      {children}
    </StyledModalContent>
  );
};

export { ModalContent, ModalContentProps, StyleModalContentProps };

export default ModalContent;
