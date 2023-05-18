import styled from "styled-components";
import { DialogButton, flexCenterEnd, Modal } from "@suki-web/suki-ui";

const StyledModal = styled(Modal)`
  padding: 16px 16px 24px;
`;

const StyledButtonWrapper = styled.div`
  ${flexCenterEnd};
  margin-top: 32px;
`;

const StyledOkButton = styled(DialogButton)`
  border: 0;
  text-transform: uppercase;
`;

export { StyledButtonWrapper, StyledModal, StyledOkButton };
