import styled from "styled-components";
import { flexCenter, FormInput, Link, mediaScreenWidth, SukiButton } from "@suki-web/suki-ui";

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter};
`;

const StyledLoginContent = styled.div`
  height: 100vh;
  min-height: 640px;
  ${flexCenter};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.md}) {
    flex-direction: row;
    min-height: 340px;
  }
`;

const StyledSukiTextFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;

const StyledSukiLogo = styled.div`
  display: flex;
  transition: ease all 1s;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 220px;
    height: 268px;

    @media (min-width: ${mediaScreenWidth.xs}) {
      width: 252px;
      height: 308px;
    }

    @media (min-width: ${mediaScreenWidth.md}) {
      margin-right: 36px;
    }

    @media (min-width: ${mediaScreenWidth.lg}) {
      margin-right: 76px;
    }

    @media (min-width: ${mediaScreenWidth.xl}) {
      width: 316px;
      height: 364px;
      margin-right: 100px;
    }
  }
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  transition: ease all 0.5s;
  margin-top: 28px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 340px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 292px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 340px;
  }
`;

const StyledFormInput = styled(FormInput)<{ autoFocus?: boolean }>`
  margin-bottom: 16px;
  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.components.formInput.borderColor.focused};
  }
`;

const StyledLoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin: 16px 0;

  .button {
    cursor: pointer;
  }
`;

const StyledSukiButton = styled(SukiButton)`
  margin: 36px 0;
`;

const StyledForgotPasswordLink = styled(Link)`
  margin: 0 8px 0 auto;
`;

const StyledAnchorTag = styled.a`
  margin: 0 0 0 16px;
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.components.link.color.visited};
  }
`;

export {
  StyledAnchorTag,
  StyledForgotPasswordLink,
  StyledFormInput,
  StyledLogin,
  StyledLoginButtonWrapper,
  StyledLoginContent,
  StyledLoginForm,
  StyledSukiButton,
  StyledSukiLogo,
  StyledSukiTextFields
};
