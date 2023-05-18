import { FunctionComponent } from "react";
import { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { StyledLink } from "./link.styled";

interface LinkProperties extends ReactRouterLinkProps {
  fontSize?: string;
  textDecoration?: string;
}

const Link: FunctionComponent<LinkProperties> = ({
  children = "Link",
  fontSize = "",
  textDecoration = "",
  ...props
}) => {
  return (
    <StyledLink fontSize={fontSize} textDecoration={textDecoration} {...props}>
      {children}
    </StyledLink>
  );
};

export { Link };

export default Link;
