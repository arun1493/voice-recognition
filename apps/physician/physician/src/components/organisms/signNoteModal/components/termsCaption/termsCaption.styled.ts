import styled from "styled-components";

const Terms = styled.div`
  margin-top: 32px;
  padding: 0 24px;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
`;

const TermsButton = styled.u`
  cursor: pointer;
  margin-left: 4px;
  color: ${({ theme }) => theme.components.termsCaption.linkColor};
`;

export { Terms, TermsButton };
