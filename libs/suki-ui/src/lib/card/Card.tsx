import { ElementType, forwardRef, FunctionComponent, RefAttributes } from "react";

import { StyledCard } from "./card.styled";

type CardSizeType = "sm" | "md" | "lg";

interface CardProps {
  as?: ElementType;
  isFullScreenMobile?: boolean;
  size?: CardSizeType;
}

const Card: FunctionComponent<CardProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, CardProps>(
  ({ as = "div", children, isFullScreenMobile = false, size = "sm" }, ref) => {
    return (
      <StyledCard as={as} isFullScreenMobile={isFullScreenMobile} ref={ref} size={size}>
        {children}
      </StyledCard>
    );
  }
);

export { Card, CardProps };

export default Card;
