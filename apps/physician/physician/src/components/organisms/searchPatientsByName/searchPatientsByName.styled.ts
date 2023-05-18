import styled from "styled-components";
import { flexCenter, Modal, ModalContent, Text } from "@suki-web/suki-ui";

const StyledModal = styled(Modal)`
  margin-top: 120px;
`;

const StyledModalContent = styled(ModalContent)`
  padding-bottom: 24px;
  padding-top: 10px;
`;

const StyledEmptyResults = styled(Text)`
  ${flexCenter};
  margin-top: 16px;
  color: ${({ theme }) => theme.components.searchPatients.color};
  user-select: none;
`;

export { StyledEmptyResults, StyledModal, StyledModalContent };
