import styled from "styled-components";
import { DialogButton, Modal } from "@suki-web/suki-ui";

const StyledModal = styled(Modal)`
  padding: 24px;
`;

const StyledButton = styled(DialogButton)`
  width: fit-content;
  border: 0;
  margin-top: 24px;
`;

export { StyledButton, StyledModal };
