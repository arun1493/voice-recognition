import styled from "styled-components";

const StyledDropDownMenu = styled.div<{ align?: string }>`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  display: flex;
  align-items: ${({ align }) => align || "center"};
  flex-direction: column;
  text-align: left;
`;

export { StyledDropDownMenu };
