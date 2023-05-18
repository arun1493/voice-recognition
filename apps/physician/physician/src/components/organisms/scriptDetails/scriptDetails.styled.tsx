import styled, { css } from "styled-components";
import { flexCenter, FormInput, mediaScreenWidth, styledCenterContent } from "@suki-web/suki-ui";

const StyledFooter = styled.div`
  ${flexCenter};
  height: 64px;
  align-items: end;
  text-align: center;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.gray};
`;

const StyledContentContainer = styled.div<{ isEmbedded?: boolean }>`
  align-self: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 64px);
  width: 100%;

  ${({ isEmbedded }) =>
    !isEmbedded &&
    css`
      @media (min-width: ${mediaScreenWidth.xs}) {
        width: 484px;
      }

      @media (min-width: ${mediaScreenWidth.sm}) {
        width: 664px;
      }

      @media (min-width: ${mediaScreenWidth.lg}) {
        width: 782px;
      }
    `}

  ${({ isEmbedded }) =>
    isEmbedded &&
    css`
      @media (min-width: ${mediaScreenWidth.xs}) {
        height: calc(100vh - 120px);
      }
    `};
}`;

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

const StyledCenterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  button {
    font-size: 16px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 0 24px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    button {
      font-size: 18px;
    }
  }
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24px 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    margin: 24px 74px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin: 24px 128px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    margin: 24px 184px;
  }
`;

const StyledNameInput = styled(FormInput)`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.components.formInput.backgroundColor.normal};
  box-shadow: none;
  outline: none;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  font-size: 18px;
  padding: 8px;
  width: inherit;

  &:hover {
    background: ${({ theme }) => theme.components.formInput.backgroundColor.hovered};
  }

  &:focus {
    border: solid 2px ${({ theme }) => theme.components.formInput.borderColor.focused};
  }
`;

export {
  StyledCenter,
  StyledCenterContainer,
  StyledCenterContent,
  StyledContentContainer,
  StyledFooter,
  StyledNameInput
};
