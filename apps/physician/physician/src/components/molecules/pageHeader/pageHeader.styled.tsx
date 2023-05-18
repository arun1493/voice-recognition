import styled from "styled-components";

const StyledHeader = styled.header<{ hasBorderBottom?: boolean }>`
  background-color: ${({ theme }) => theme.components.pageHeader.backgroundColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  ${({ hasBorderBottom, theme }) =>
    hasBorderBottom && `border-bottom: 1px solid ${theme.components.pageHeader.border}`};
`;

StyledHeader.defaultProps = {
  hasBorderBottom: false
};

export { StyledHeader };
