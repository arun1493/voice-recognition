import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

const NoteCellContainer = styled.div`
  p {
    &:last-child {
      color: ${({ theme }) => theme.components.noteCell.color.subtitle};
    }

    &:first-child {
      color: ${({ theme }) => theme.components.noteCell.color.title};
    }
  }

  min-width: 126px;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    min-width: 220px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    min-width: 240px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    min-width: 252px;
  }
`;

export { NoteCellContainer };
