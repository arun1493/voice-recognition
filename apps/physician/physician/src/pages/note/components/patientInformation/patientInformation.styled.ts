import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

const StyledPatientInfo = styled.div`
  height: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 48px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 80px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 96px;
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    padding: 0 110px;
  }
`;

const StyledDateOfService = styled.div`
  margin-top: 64px;
  white-space: nowrap;

  @media (min-width: ${mediaScreenWidth.md}) {
    margin-top: 60px;
  }
`;

const StyledLeftBlock = styled.div`
  margin-top: 4px;
  font-size: 14px;
  line-height: 20px;
`;

const StyledDateOfBirth = styled.div`
  margin-top: 8px;
  white-space: nowrap;
`;

const StyledAgeAndGender = styled.span`
  margin-right: 16px;
`;

const StyledMRN = styled.span`
  margin-top: 8px;
`;

export { StyledAgeAndGender, StyledDateOfBirth, StyledDateOfService, StyledLeftBlock, StyledMRN, StyledPatientInfo };
