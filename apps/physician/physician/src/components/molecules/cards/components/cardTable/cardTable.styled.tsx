import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

const BORDER_RADIUS = "4px";

const StyledTable = styled.table`
  width: 100%;
  border-radius: ${BORDER_RADIUS};
  border-collapse: separate;
  border: 1px solid ${({ theme }) => theme.pages.note.card.vitals.border};
  border-bottom: 0;
`;

const StyledTBody = styled.tbody``;

const StyledRow = styled.tr`
  &:first-child {
    td:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
    }
    td:last-child {
      border-top-right-radius: ${BORDER_RADIUS};
    }
  }

  &:last-child {
    td:first-child {
      border-bottom-left-radius: ${BORDER_RADIUS};
    }
    td:last-child {
      border-bottom-right-radius: ${BORDER_RADIUS};
    }
  }

  &:nth-child(odd) {
    background: ${({ theme }) => theme.pages.note.card.vitals.background};
  }
`;

const StyledCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.pages.note.card.vitals.border};

  &:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.pages.note.card.vitals.border};
  }

  &:first-child {
    width: 108px;
  }
`;

const StyledTableWrapper = styled.div`
  padding: 0 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 24px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 48px;
  }
`;

export { StyledCell, StyledRow, StyledTable, StyledTableWrapper, StyledTBody };
