import styled from "styled-components";
import { flexCenter } from "@suki-web/suki-ui";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${flexCenter};
  background-color: ${({ theme }) => theme.components.appSkeleton.background};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  ${flexCenter};
`;

export { StyledContainer, StyledContent };
