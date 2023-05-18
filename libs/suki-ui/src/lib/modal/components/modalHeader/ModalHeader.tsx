import { FunctionComponent } from "react";

import { Text } from "../../../text";
import { ScreenSize } from "../../../constants";
import { useBreakpointIncludes } from "../../../hooks";
import { StyledModalHeader, StyledModalTitle } from "./modalHeader.styled";

interface StyledModalHeaderProps {
  height?: number;
  verticalAlignment?: "bottom" | "center" | "top";
}

interface ModalHeaderProps extends StyledModalHeaderProps {
  subtitle?: string;
  title: string;
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({ height, subtitle, title, verticalAlignment }) => {
  const isSmallScreen = useBreakpointIncludes(ScreenSize.XXS, ScreenSize.XS);

  const titleTextSize = isSmallScreen ? "lg" : "xl";
  const subTitleTextSize = isSmallScreen ? "xs" : "sm";

  return (
    <StyledModalHeader height={height} verticalAlignment={verticalAlignment}>
      <StyledModalTitle verticalAlignment={verticalAlignment}>
        <Text isBold={true} size={titleTextSize}>
          {title}
        </Text>
        {!!subtitle && (
          <Text color="gray" size={subTitleTextSize}>
            {subtitle}
          </Text>
        )}
      </StyledModalTitle>
    </StyledModalHeader>
  );
};

export { ModalHeader, ModalHeaderProps, StyledModalHeaderProps };
export default ModalHeader;
