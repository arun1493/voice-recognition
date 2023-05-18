import styled from "styled-components";

import { flexCenterStart } from "../../helpers";
import { StyledOptionsList } from "./select.types";

const EXPAND_BUTTON_WIDTH = 26;
const SELECT_OPEN_BORDER_WIDTH = 2;
const UL_PADDING = 8;

const StyledRoot = styled.div<{ isSelected: boolean }>`
  display: inline-block;
  font-size: 16px;
  text-align: start;
  padding-left: 8px;
  ${({ isSelected, theme }) => (isSelected ? "" : `color: ${theme.components.select.color}`)};
  width: calc(100% - ${EXPAND_BUTTON_WIDTH}px - 8px);
  outline: none;
`;

const StyledSelect = styled.div<StyledOptionsList & { hasError: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: ${({ isOpen }) => (isOpen ? "8px 8px 0 0" : "8px")};
  border-style: solid;
  border-width: ${({ isOpen }) => (isOpen ? SELECT_OPEN_BORDER_WIDTH : 1)}px;
  border-color: ${({ theme }) => theme.components.select.borderColor};
  ${({ hasError, isOpen, theme }) => hasError && !isOpen && `border: 2px solid ${theme.components.select.errorColor}`};
  background: ${({ theme }) => theme.components.select.backgroundColor};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  &:hover,
  &:hover input {
    ${({ isOpen, theme }) => !isOpen && `background: ${theme.components.select.hoveredItemBackgroundColor}`};
  }

  &:has(div:focus) {
    border-width: 2px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  height: 32px;
  font-size: 16px;
  background: ${({ theme }) => theme.components.select.backgroundColor};
`;

const StyledExpandButton = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;
  width: ${EXPAND_BUTTON_WIDTH}px;
  border-radius: 8px;
  height: 100%;
  box-sizing: border-box;
  outline: none;

  & > svg {
    margin-bottom: 2px;
  }
`;

const StyledUl = styled.ul<StyledOptionsList>`
  width: calc(100% + ${SELECT_OPEN_BORDER_WIDTH * 2}px);
  height: fit-content;
  position: absolute;
  left: -${SELECT_OPEN_BORDER_WIDTH}px;
  ${({ isOpen }) => !isOpen && "visibility: hidden"};
  background: ${({ theme }) => theme.components.select.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: initial;
  max-height: 300px;
  overflow-y: auto;
  outline: none;
  border-radius: 0 0 8px 8px;
  border: 2px solid ${({ theme }) => theme.components.select.borderColor};
  box-shadow: none;
  box-sizing: border-box;
  padding: ${UL_PADDING}px;
  z-index: 9;
`;

const StyledLi = styled.li<{ isHighlighted: boolean }>`
  width: calc(100% - ${UL_PADDING * 2}px);
  min-height: 40px;
  cursor: pointer;
  background: ${({ isHighlighted, theme }) =>
    isHighlighted ? theme.components.select.hoveredItemBackgroundColor : "inherit"};
  padding: 0 ${UL_PADDING}px;
  border-radius: 8px;
  ${flexCenterStart};

  &:hover {
    background: ${({ theme }) => theme.components.select.hoveredItemBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.select.activeItemBackgroundColor};
  }
`;

export { StyledExpandButton, StyledInput, StyledLi, StyledRoot, StyledSelect, StyledUl };
