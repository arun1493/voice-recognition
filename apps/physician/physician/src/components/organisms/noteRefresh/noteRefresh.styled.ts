import styled from "styled-components";
import { flexCenter } from "@suki-web/suki-ui";

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  ${flexCenter};
  flex-direction: row;
`;

const LoaderContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  height: 100%;
  padding: 8px;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export { ContentContainer, LoaderContainer, MessageContainer };
