import styled from "styled-components";
import { flexCenter, Header } from "@suki-web/suki-ui";

const StyledModal = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin: 12px;
`;

const StyledSignNoteHeader = styled(Header)`
  margin-bottom: 24px;
  text-align: center;
`;

export { StyledModal, StyledSignNoteHeader };
