import styled from "styled-components";

import { Text } from "../text";

const Month = styled.div.attrs(() => ({
  role: "grid"
}))`
  padding: 8px;
`;

const DaysOfWeek = styled.div.attrs(() => ({
  role: "row"
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
`;

const DayOfWeek = styled(Text).attrs(() => ({
  role: "columnheader"
}))`
  padding-bottom: 4px;
  color: ${({ theme }) => theme.components.datePicker.color.dateControls};
  text-align: center;

  > abbr {
    text-decoration: none;
  }
`;

const DaysOfMonth = styled.div.attrs(() => ({
  role: "rowgroup"
}))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 6px;
  text-align: center;
`;

const DayOfMonth = styled.button`
  background-color: inherit;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.components.datePicker.color.primary};
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  width: 40px;
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

  &.is-secondary {
    color: ${({ theme }) => theme.components.datePicker.color.secondary};
  }

  &.is-secondary:hover,
  &.is-secondary.is-selected {
    color: ${({ theme }) => theme.components.datePicker.color.active};
  }

  &:hover {
    opacity: 0.8;
  }

  &.is-disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.components.datePicker.backgroundColor.primary};
    color: ${({ theme }) => theme.components.datePicker.color.secondary};
  }
`;

export { DayOfMonth, DayOfWeek, DaysOfMonth, DaysOfWeek, Month };
