import styled from "styled-components";
import { flexCenterBetween, Header, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const StyledCodeLabel = styled.span`
  background: ${({ theme }) => theme.components.icd10Lookup.list.background};
  padding: 4px 8px;
  color: ${({ theme }) => theme.components.icd10Lookup.list.codeColor};
  font-size: 12px;
  margin-left: 4px;
  border-radius: 4px;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.components.icd10Lookup.list.color};
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  min-height: 56px;
  cursor: pointer;
  position: relative;
  margin: 8px 0;
  box-sizing: border-box;
  ${flexCenterBetween};

  &:after {
    content: " ";
    position: absolute;
    bottom: -4px;
    left: 8px;
    width: calc(100% - 16px);
    height: 1px;
    background: ${({ theme }) => theme.components.icd10Lookup.list.border};
  }

  strong {
    color: ${({ theme }) => theme.components.icd10Lookup.list.boldColor};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    background: ${({ theme }) => theme.components.icd10Lookup.list.hovered};
    border-radius: 4px;
  }

  &:active {
    background: ${({ theme }) => theme.components.icd10Lookup.list.active};
  }
`;

const StyledList = styled.ul`
  position: relative;
`;

const StyledSectionContent = styled.div`
  padding: 0 8px;

  &:last-child {
    margin-bottom: 10px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 0 16px;
  }
`;

const StyledIcon = styled.div<{ hasPadding?: boolean }>`
  position: relative;
  ${({ hasPadding }) => hasPadding && "padding: 0 8px"};
`;

const StyledMoreResultsText = styled(Text)`
  color: ${({ theme }) => theme.components.icd10Lookup.moreResultsTextColor};
  margin-left: 16px;
`;

const StyledHeader = styled(Header)`
  padding: 0 16px;
`;

export {
  StyledCodeLabel,
  StyledHeader,
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledMoreResultsText,
  StyledSectionContent
};
