import styled, { css } from "styled-components";
import { mediaScreenWidth, Text } from "@suki-web/suki-ui";

import { PAGES } from "../../../constants";

const PatientCellContainer = styled.div<{ isNarrow?: boolean; type?: string }>`
  ${({ type, isNarrow = false }) =>
    type === PAGES.UNFINISHED_NOTES && (isNarrow ? "width: calc(100% - 208px);" : "width: calc(100% - 92px);")};
  min-width: 228px;
  margin-left: 20px;
  @media (min-width: ${mediaScreenWidth.xs}) {
    min-width: ${({ type }) => (type !== PAGES.UNFINISHED_NOTES ? "260px" : "236px")};
  }

  @media (min-width: ${mediaScreenWidth.xxs}) {
    min-width: ${({ type }) => (type !== PAGES.UNFINISHED_NOTES ? "260px" : "142px")};
  }
`;

const PatientName = styled(Text)`
  color: ${({ theme }) => theme.components.patientCell.nameColor};
`;

const TruncatedText = styled(Text)`
  color: ${({ theme }) => theme.components.patientCell.color};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PatientInfoTextStyles = css`
  color: ${({ theme }) => theme.components.patientCell.color};
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

const PatientAge = styled.span`
  ${PatientInfoTextStyles}
  ::after {
    content: " • ";
    white-space: pre;
  }
`;

const PatientGender = styled.span`
  ${PatientInfoTextStyles}
`;

export { PatientAge, PatientCellContainer, PatientGender, PatientName, TruncatedText };
