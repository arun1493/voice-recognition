import styled from "styled-components";
import { Button, flexCenter, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const WhatCanISayOptions = styled.ul`
  height: max-content;
`;

const WhatCanISayOption = styled.li`
  align-items: center;
  display: flex;
  padding: 12px 8px;

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 16px 8px;
  }
`;

const StyledCommandText = styled(Text)`
  margin-right: 8px;
`;

const StyledPlaceholderText = styled(Text)`
  color: ${({ theme }) => theme.components.whatCanISay.placeholderColor};
`;

const StyledButtonContainer = styled.div`
  ${flexCenter};
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.components.whatCanISay.helpButtonColor};
  color: ${({ theme }) => theme.components.whatCanISay.helpButtonColor};
  font-size: 18px;
  font-weight: 600;
`;

export {
  StyledButton,
  StyledButtonContainer,
  StyledCommandText,
  StyledPlaceholderText,
  WhatCanISayOption,
  WhatCanISayOptions
};
