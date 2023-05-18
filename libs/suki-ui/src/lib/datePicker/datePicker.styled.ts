import styled, { css } from "styled-components";

import { Text } from "../text";
import { flexCenterBetween, flexCenterStart } from "../../helpers";

const DatePickerWrapper = styled.div`
  position: relative;

  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const StyledTriggerWrapper = styled.div.attrs({ "data-cy": "date-picker-trigger" })`
  ${flexCenterStart};
  cursor: pointer;
`;

const StyledDateInputWrapper = styled.div<{ isHidden?: boolean }>`
  width: ${({ isHidden }) => (isHidden ? "0" : "150px")};
  height: ${({ isHidden }) => (isHidden ? "0" : "30px")};
  overflow: hidden;
  border-radius: 8px;
`;

const StyledDateInput = styled.input.attrs({ "data-cy": "date-picker-input-control" })<{
  isCalenderIconAtStart?: boolean;
  isCalenderIconHidden: boolean;
}>`
  width: 125%;
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 12px;
  height: 30px;
  letter-spacing: 2px;
  text-align: center;

  &:focus {
    outline: none;
  }

  ${({ isCalenderIconAtStart }) =>
    isCalenderIconAtStart &&
    css`
      &::-webkit-datetime-edit-fields-wrapper {
        position: relative;
        left: 10%;
      }
      &::-webkit-datetime-edit {
        position: relative;
        left: 5%;
      }
      &::-webkit-calendar-picker-indicator {
        position: absolute;
        left: -1%;
      }
    `}

  ${({ isCalenderIconHidden }) =>
    isCalenderIconHidden &&
    css`
      &::-webkit-calendar-picker-indicator {
        display: none;
      }
    `}
`;

const DateFormat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.secondary.darkCharcoal};
  font-weight: 600;

  > i {
    margin-left: 8px;
  }
`;

interface StyledDatePickerModalProps {
  isModalAlignRight: boolean;
  left: number;
  right: number;
  top: number;
  width: number;
}
const StyledDatePickerModal = styled.div<StyledDatePickerModalProps>`
  position: absolute;
  ${({ isModalAlignRight, left, right }) => (isModalAlignRight ? `right: ${right}px` : `left:${left}px`)};
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  max-width: 350px;
  min-height: 320px;
  background-color: ${({ theme }) => theme.components.datePicker.backgroundColor.primary};
  border-radius: ${({ theme }) => theme.components.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.components.modal.boxShadow};
  overflow: hidden;
  padding: 12px;
  z-index: 1300;
`;

const StyledDatePickerHeader = styled.header`
  ${flexCenterBetween};
  color: ${({ theme }) => theme.components.datePicker.color.primary};
  font-size: 18px;
  font-weight: 600;
  height: 53px;
  padding: 0 16px;
`;

const DateTitle = styled(Text)`
  cursor: pointer;
  background: transparent;
`;

const DateControls = styled.div`
  color: ${({ theme }) => theme.components.datePicker.color.dateControls};
  display: flex;

  > button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
  }
`;

// icons
interface ChevronIconProps {
  direction: "left" | "right";
}

const ChevronIcon = styled.i<ChevronIconProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;

  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    ${({ direction }) =>
      direction === "left"
        ? css`
            border-left: 2px solid;
            border-bottom: 2px solid;
            left: 6px;
          `
        : css`
            border-right: 2px solid;
            border-top: 2px solid;
            right: 6px;
          `}
    top: 7px;
    transform: rotate(45deg);
  }
  &::after {
    ${({ direction }) =>
      direction === "left"
        ? css`
            left: 11px;
          `
        : css`
            right: 11px;
          `}
  }
`;

interface ArrowIconProps {
  direction: "down" | "left" | "right" | "up";
}

const ArrowIcon = styled.i<ArrowIconProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;

  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;

    ${({ direction }) => {
      switch (direction) {
        case "down":
          return css`
            border-bottom: 2px solid;
            border-right: 2px solid;
            transform: rotate(45deg);
            left: 4px;
            top: 4px;
          `;
        case "left":
          return css`
            border-bottom: 2px solid;
            border-left: 2px solid;
            transform: rotate(45deg);
            left: 2px;
            top: 5px;
          `;
        case "right":
          return css`
            border-bottom: 2px solid;
            border-right: 2px solid;
            transform: rotate(-45deg);
            right: 2px;
            top: 5px;
          `;
        case "up":
          return css`
            border-top: 2px solid;
            border-right: 2px solid;
            transform: rotate(-45deg);
            left: 4px;
            bottom: 2px;
            top: 6px;
          `;
        default:
          return css`
            border-bottom: 2px solid;
            border-right: 2px solid;
            transform: rotate(-45deg);
            right: 2px;
          `;
      }
    }}
    transition: transform 100ms ease-in;
  }
`;

export {
  ArrowIcon,
  ChevronIcon,
  DateControls,
  DateFormat,
  DatePickerWrapper,
  DateTitle,
  StyledDateInput,
  StyledDateInputWrapper,
  StyledDatePickerHeader,
  StyledDatePickerModal,
  StyledTriggerWrapper
};
