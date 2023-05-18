import styled from "styled-components";
import { flexCenter, FormInput, Text } from "@suki-web/suki-ui";

const StyledSearchInput = styled(FormInput)`
  box-shadow: none;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.components.icd10Lookup.background};
  color: ${({ theme }) => theme.components.icd10Lookup.color};
  border-radius: 8px;
  margin-top: 16px;
  font-size: 16px;
  padding-left: 40px;

  &:focus,
  &:hover {
    box-shadow: none;
    background: ${({ theme }) => theme.components.icd10Lookup.hovered};
  }
`;

const StyledSearchIcon = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 4px;
  z-index: 9;
  ${flexCenter};
`;

const StyledHeaderContainer = styled.div<{ hasBottomBorder: boolean }>`
  position: sticky;
  top: 0;
  padding: 0 24px 24px;
  border-bottom: 1px solid
    ${({ hasBottomBorder, theme }) => (hasBottomBorder ? theme.components.icd10Lookup.header.border : "transparent")};
  background: ${({ theme }) => theme.components.icd10Lookup.header.background};
  z-index: 1;

  input {
    margin-top: 0;
  }
`;

const StyledEmptySection = styled.div`
  padding: 20px 32px;
`;

const StyledSubLevelText = styled.div`
  padding: 20px 10px 0;
`;

const StyledBackButton = styled.div`
  position: absolute;
  height: 56px;
  width: 56px;
  ${flexCenter};
`;

const StyledPoweredByText = styled(Text)`
  color: ${({ theme }) => theme.components.icd10Lookup.poweredByTextColor};
  margin-top: 4px;
`;

export {
  StyledBackButton,
  StyledEmptySection,
  StyledHeaderContainer,
  StyledPoweredByText,
  StyledSearchIcon,
  StyledSearchInput,
  StyledSubLevelText
};
