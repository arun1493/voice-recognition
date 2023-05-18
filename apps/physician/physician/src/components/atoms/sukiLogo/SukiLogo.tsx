import styled from "styled-components";
import { FunctionComponent } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SukiLogo as SukiLogoSvg } from "@suki-web/suki-ui";

import { Pages } from "../../../constants";
import { getRoute } from "../../../helpers";

const StyledLink = styled(Link)<LinkProps & { height: number; width: number }>`
  color: ${({ theme }) => theme.components.appSkeleton.color};
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
`;

interface SukiLogoProps {
  size?: "sm" | "lg";
}

const SukiLogo: FunctionComponent<SukiLogoProps> = ({ size = "sm" }) => {
  const homeRoute = getRoute(Pages.Home) || "/";

  return (
    <StyledLink data-cy="suki-logo" height={24} to={homeRoute} width={74}>
      <SukiLogoSvg />
    </StyledLink>
  );
};

export { SukiLogo, SukiLogoProps };

export default SukiLogo;
