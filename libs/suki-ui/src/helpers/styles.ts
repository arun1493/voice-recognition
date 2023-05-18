import styled, { css, keyframes } from "styled-components";

import { mediaScreenWidth } from "../lib/constants";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const flexCenterAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const flexCenterStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const flexCenterEnd = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const FlexLeftColumn = styled.div`
  ${flexColumn};
  justify-items: flex-start;
`;

const FlexRightColumn = styled.div`
  ${flexColumn};
  justify-items: flex-end;
  text-align: right;
`;

const noWrap = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

const zoomOut = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;

const styledCenterContent = css`
  margin-top: 24vh;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  width: 100%;
`;

const scrollOnHover = css`
  overflow: hidden;
  scrollbar-gutter: stable;

  &:hover {
    overflow: auto;
  }
`;

const verticalScrollOnHover = css`
  overflow: hidden;
  scrollbar-gutter: stable;

  &:hover {
    overflow-y: auto;
  }
`;

const gradient = css`
  position: absolute;
  width: calc(100% - 20px);
  height: 72px;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -39.29%,
    ${({ theme }) => theme.pages.note.backgroundColor} 71.43%
  );

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 460px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 500px;
  }
`;

export {
  flexCenter,
  flexCenterAround,
  flexCenterBetween,
  flexCenterEnd,
  flexCenterStart,
  FlexLeftColumn,
  FlexRightColumn,
  gradient,
  noWrap,
  scrollOnHover,
  styledCenterContent,
  verticalScrollOnHover,
  zoomIn,
  zoomOut
};
