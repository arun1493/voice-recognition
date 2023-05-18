import styled from "styled-components";
import { mediaScreenWidth, ThemeProvider } from "@suki-web/suki-ui";

import { ServiceStatusProps, ServiceStatusType } from "./ServiceStatus";

const StyledServiceStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 24px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 32px 28px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 32px 36px;
  }
`;

const StyledServiceStatusText = styled.div<ServiceStatusProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    background-color: ${({ theme, status }) => getStatusColor(theme, status)};
    border-radius: 12px;
  }
`;

// helpers
const getStatusColor = (theme: ThemeProvider, status: ServiceStatusType): string => {
  const { lightGray, lightOrange, orange, yellowGreen, yellowOrange } = theme.pages.help.statusColors;
  const colors = [yellowGreen, lightOrange, yellowOrange, orange, lightGray];
  return colors[status] || yellowGreen;
};

export { StyledServiceStatus, StyledServiceStatusText };
