import {
  flexCenter,
  flexCenterStart,
  FormInput,
  Header,
  mediaScreenWidth,
  Select,
  SukiButton,
  Text
} from "@suki-web/suki-ui";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";

const marginBottom = "margin-bottom: 16px";

const StyledNameBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledTitle = styled(Header)`
  margin: 32px 0;
`;

const StyledFormInput = styled(FormInput)<{ autoComplete?: string; hasError?: boolean }>`
  ${marginBottom};
  height: 40px;
  padding: 8px 12px;
  box-shadow: none;
  font-size: 16px;
  background: ${({ theme }) => theme.pages.signUp.formBackground};
  border: 1px solid ${({ theme }) => theme.pages.signUp.fieldBorderColor};
  ${({ hasError, theme }) => hasError && `border: 2px solid ${theme.pages.signUp.errorColor}`};
`;

const StyledPhoneInput = styled(PhoneInput)<{ hasError?: boolean }>`
  .form-control {
    ${marginBottom};
    height: 40px;
    padding: 0 12px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.pages.signUp.fieldBorderColor};
    ${({ hasError, theme }) => hasError && `border: 2px solid ${theme.pages.signUp.errorColor}`};
    background: ${({ theme }) => theme.pages.signUp.formBackground};
    border-radius: 8px;
    outline: none;
  }

  .form-control:hover {
    background: ${({ theme }) => theme.components.formInput.backgroundColor.hovered};
  }

  .form-control:focus {
    border: solid 2px ${({ theme }) => theme.components.formInput.borderColor.focused};
  }

  .special-label {
    display: none;
  }
`;

const StyledFirstName = styled.div`
  width: 328px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 140px;
    margin-right: 8px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 160px;
  }
`;

const StyledLastName = styled.div`
  width: 232px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 140px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 160px;
  }
`;

const StyledSpecialtiesSelect = styled(Select)`
  ${marginBottom};

  &:focus {
    border: 2px solid ${({ theme }) => theme.pages.signUp.fieldBorderColor};
    outline: 0;
    box-shadow: none;
  }
`;

const StyledEmrSelect = styled(Select)`
  ${marginBottom};

  &:focus {
    border: 2px solid ${({ theme }) => theme.pages.signUp.fieldBorderColor};
    outline: 0;
    box-shadow: none;
  }
`;

const StyledForm = styled.form`
  flex-grow: 1;
  width: ${mediaScreenWidth.xxs};
  background: ${({ theme }) => theme.pages.signUp.formBackground};
  border: 1px solid ${({ theme }) => theme.pages.signUp.formBorderColor};
  ${flexCenterStart};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 776px;
  }

  & input {
    width: 100%;
  }

  & > *,
  ${StyledNameBlock}, ${StyledSpecialtiesSelect} {
    width: 328px;

    @media (min-width: ${mediaScreenWidth.xs}) {
      width: 376px;
    }

    @media (min-width: ${mediaScreenWidth.sm}) {
      width: 416px;
    }
  }
`;

const StyledButton = styled(SukiButton)<{ height: string }>`
  margin: 40px 0;
  height: ${({ height }) => height};
  padding: 0 24px;
  width: 280px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 32px;
    width: 320px;
  }
`;

const StyledRoleSelect = styled(Select)`
  width: 80px;
  ${marginBottom};
  margin-left: 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    margin-left: 8px;
  }
`;

const StyledAgreement = styled.div`
  ${flexCenter};
  align-items: flex-start;
`;

const StyledAgreementText = styled(Text)`
  text-align: start;
  margin-left: 16px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.pages.signUp.linkColor};
  margin-left: 4px;
  text-decoration: underline;
`;

const StyledError = styled.div`
  text-align: start;
  font-size: 14px;
  ${marginBottom};
  margin-top: -8px;
  color: ${({ theme }) => theme.pages.signUp.errorColor};
`;

const StyledAgreementError = styled(StyledError)`
  margin: 8px 0 0 84px;
`;

const StyledRecaptcha = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 32px;
  width: fit-content;
`;

const StyledRecaptchaError = styled(StyledError)`
  margin-top: 8px;
  margin-bottom: 0px;
  width: 100%;
  display: flex;
`;

export {
  StyledAgreement,
  StyledAgreementError,
  StyledAgreementText,
  StyledButton,
  StyledEmrSelect,
  StyledError,
  StyledFirstName,
  StyledForm,
  StyledFormInput,
  StyledLastName,
  StyledLink,
  StyledNameBlock,
  StyledPhoneInput,
  StyledRecaptcha,
  StyledRecaptchaError,
  StyledRoleSelect,
  StyledSpecialtiesSelect,
  StyledTitle
};
