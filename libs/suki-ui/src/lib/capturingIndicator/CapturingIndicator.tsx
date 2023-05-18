import { FunctionComponent } from "react";

import { DotIndicator1, DotIndicator2, DotIndicator3, StyledWrapper } from "./capturingIndicator.styled";

type CapturingIndicatorProps = {
  dotSize?: number;
};

const CapturingIndicator: FunctionComponent<CapturingIndicatorProps> = ({ dotSize = 8, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <DotIndicator1 dotSize={dotSize} />
      <DotIndicator2 dotSize={dotSize} />
      <DotIndicator3 dotSize={dotSize} />
    </StyledWrapper>
  );
};

export default CapturingIndicator;

export { CapturingIndicator };
