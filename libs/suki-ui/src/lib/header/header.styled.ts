import styled, { css } from "styled-components";

const generalStyles = css`
  line-height: normal;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.components.header.color};
  cursor: default;
`;

const StyledH1 = styled.h1`
  ${generalStyles};
  font-size: 40px;
`;

const StyledH2 = styled.h2`
  ${generalStyles};
  font-size: 32px;
`;

const StyledH3 = styled.h3`
  ${generalStyles};
  font-size: 28px;
`;

const StyledH4 = styled.h4`
  ${generalStyles};
  font-size: 24px;
`;

const StyledH5 = styled.h5`
  ${generalStyles};
  font-size: 20px;
`;

const StyledH6 = styled.h6`
  ${generalStyles};
  font-size: 18px;
`;

export { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 };
