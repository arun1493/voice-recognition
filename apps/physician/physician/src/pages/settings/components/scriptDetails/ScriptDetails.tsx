import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { StyledContainer, StyledContent } from "../../settings.styled";
import { ScriptDetails as ScriptDetailsComponent } from "../../../../components/organisms/scriptDetails";

const ScriptDetails: FunctionComponent = () => {
  const { scriptId = "" } = useParams<{ scriptId: string }>();

  return (
    <StyledContainer>
      <StyledContent>
        <ScriptDetailsComponent scriptId={scriptId} />
      </StyledContent>
    </StyledContainer>
  );
};

export { ScriptDetails };

export default ScriptDetails;
