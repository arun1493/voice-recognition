import styled from "styled-components";
import { flexCenter, flexCenterEnd } from "@suki-web/suki-ui";

const StyledLinksContainer = styled.div`
  ${flexCenterEnd};
  margin: 24px 0;
`;

const StyledEmrLink = styled.button<{ isXXSScreen: boolean }>`
  background: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.components.dialog.button.color.primary};
  ${flexCenter}
  font-size: ${({ isXXSScreen }) => (isXXSScreen ? "14px" : "16px")};
  font-weight: 600;
  height: ${({ isXXSScreen }) => (isXXSScreen ? "32px" : "22px")};
  line-height: 24px;
  margin: 0 12px 0 56px;
  padding: 0 8px;
`;

const EmrModalContent = styled.div`
  height: 100%;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { EmrModalContent, StyledEmrLink, StyledLinksContainer };
