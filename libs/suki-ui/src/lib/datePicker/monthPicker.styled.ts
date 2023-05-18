import styled from "styled-components";

const StyledMonths = styled.div.attrs(() => ({
  role: "rowgroup"
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 54px);
  row-gap: 6px;
  column-gap: 6px;
  padding: 16px 6px 0 6px;
  text-align: center;
`;

const StyledMonth = styled.button`
  background-color: inherit;
  border: none;
  border-radius: 4px;

  color: ${({ theme }) => theme.components.datePicker.color.primary};
  cursor: pointer;
  font-size: 16px;

  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-in;

  &.is-current {
    background-color: ${({ theme }) => theme.components.datePicker.backgroundColor.current};
    color: ${({ theme }) => theme.components.datePicker.color.active};
  }

  &:hover,
  &.is-selected {
    background-color: ${({ theme }) => theme.components.datePicker.backgroundColor.active};
    color: ${({ theme }) => theme.components.datePicker.color.active};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export { StyledMonth, StyledMonths };
