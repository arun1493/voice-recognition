import { FunctionComponent } from "react";

import { ScreenSize } from "../constants";
import { useBreakpointIncludes } from "../hooks";
import { StyledCardHeader, StyledCardTitle } from "./card.styled";

interface CardHeaderProps {
  actionPrimary?: string | JSX.Element;
  actionSecondary?: string | JSX.Element;
  hasBorder?: boolean;
  isSticky?: boolean;
  title?: string | JSX.Element;
}

const CardHeader: FunctionComponent<CardHeaderProps> = ({
  actionPrimary = " ",
  actionSecondary = " ",
  hasBorder = false,
  isSticky = false,
  title = " "
}) => {
  const { MD, LG, XL } = ScreenSize;
  const isLargeScreen = useBreakpointIncludes(MD, LG, XL);

  return (
    <StyledCardHeader hasBorder={hasBorder} isSticky={isSticky}>
      <div className="cardHeader-wrapper">
        <div className="cardHeader-action">{actionSecondary}</div>
        <StyledCardTitle isBold={true} size={isLargeScreen ? "xl" : "lg"}>
          {title}
        </StyledCardTitle>
        <div className="cardHeader-action">{actionPrimary}</div>
      </div>
    </StyledCardHeader>
  );
};

export { CardHeader };

export default CardHeader;
