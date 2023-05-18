import { ElementType, FunctionComponent } from "react";

import { StyledCardFooter } from "./card.styled";

interface CardFooterProps {
  as?: ElementType;
  hasBorder?: boolean;
}

const CardFooter: FunctionComponent<CardFooterProps> = ({ as = "footer", children, hasBorder = true }) => {
  return (
    <StyledCardFooter as={as} hasBorder={hasBorder}>
      <div className="cardFooter-wrapper">{children}</div>
    </StyledCardFooter>
  );
};

export { CardFooter, CardFooterProps };

export default CardFooter;
