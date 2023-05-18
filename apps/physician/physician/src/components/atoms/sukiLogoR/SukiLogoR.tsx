import { FunctionComponent } from "react";
import { SUKI_AI_URL } from "@suki-web/suki-business";
import { SukiLogoR as SukiLogoRSvg } from "@suki-web/suki-ui";

import { StyledSukiLogoR } from "./sukiLogoR.styled";

interface SukiLogoRProps {
  color?: "black" | "white";
}

const SukiLogoR: FunctionComponent<SukiLogoRProps> = ({ color = "white" }) => {
  const handleRedirect = () => {
    window.location.href = SUKI_AI_URL;
  };

  return (
    <StyledSukiLogoR data-cy="suki-logo" onClick={handleRedirect}>
      <SukiLogoRSvg color={color} />
    </StyledSukiLogoR>
  );
};

export { SukiLogoR };

export default SukiLogoR;
