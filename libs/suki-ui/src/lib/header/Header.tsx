import { FunctionComponent, HtmlHTMLAttributes } from "react";

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 } from "./header.styled";

type HeaderTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeaderProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  isHidden?: boolean;
  level?: HeaderTypes;
}

const Header: FunctionComponent<HeaderProps> = ({ children, level = "h1", ...props }) => {
  const componentMap = {
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    h6: StyledH6
  };

  const Component = componentMap[level];

  return <Component {...props}>{children}</Component>;
};

export { Header, HeaderProps, HeaderTypes };

export default Header;
