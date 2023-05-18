import { ElementType, FunctionComponent } from "react";

import { StyledCardContent } from "./card.styled";

interface CardContentProps {
  as?: ElementType;
  overflow?: "auto" | "hidden";
}
const CardContent: FunctionComponent<CardContentProps> = ({
  children,
  overflow = "hidden",
  as = "div",
  ...restCardContentProps
}) => (
  <StyledCardContent overflow={overflow} as={as} {...restCardContentProps}>
    {children}
  </StyledCardContent>
);

export { CardContent, CardContentProps };

export default CardContent;
