import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { FunctionComponent, useRef, useState } from "react";
import { EMPTY_OBJECT, isEmailValid, Paths } from "@suki-web/suki-business";
import { Checkbox, Icon, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  EMR_ALWAYS_INCLUDED_OPTIONS,
  EMR_OPTIONS,
  MAX_TEXT_FIELD_LENGTH,
  MIN_TEXT_FIELD_LENGTH,
  PHONE_NUMBER_LENGTH,
  SPECIALITY_OPTIONS,
  SUFFIX_OPTIONS
} from "../../constants";
import {
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
} from "./signUpForm.styled";
import { getFormFieldErrorMessage, removeNumbers } from "./helpers";
import { FormData, FormFieldRenderProps, FormSubmitHandler, SignUpFormFields } from "../../constants";

interface SignupFormProps {
  initialFormValues: FormData;
  isSignUpInProgress: boolean;
  onSignUp: FormSubmitHandler;
}

const SignUpForm: FunctionComponent<SignupFormProps> = ({ initialFormValues, isSignUpInProgress, onSignUp }) => {
  const { t } = useTranslation();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const isLargeScreen = useBreakpointIncludes(ScreenSize.LG, ScreenSize.XL);
  const isXXSScreen = useBreakpointIncludes(ScreenSize.XXS);

  const [showRecaptchaError, setShowRecaptchaError] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
    setValue
  } = useForm({ defaultValues: initialFormValues });

  const handleRecaptchaSuccess = () => {
    setShowRecaptchaError(false);
  };

  const handleRecaptchaError = () => {
    setShowRecaptchaError(true);
  };

  const onSubmit = (formData: FormData) => {
    const isAgreemendAccepted = formData[SignUpFormFields.AGREEMENT];
    if (!isAgreemendAccepted) return;

    const captchaToken = captchaRef?.current?.getValue();
    if (!captchaToken) {
      setShowRecaptchaError(true);
      return;
    }

    onSignUp(formData);
  };

  const renderLoadingIcon = () => {
    return <Icon icon="loader" size="md" />;
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle level={isLargeScreen ? "h5" : "h6"}>{t("pages.signUp.title")}</StyledTitle>
      <StyledNameBlock>
        <StyledFirstName>
          <Controller
            control={control}
            name={SignUpFormFields.FIRST_NAME}
            render={({ field: { onChange, ref, ...rest } }: FormFieldRenderProps) => (
              <StyledFormInput
                autoComplete="none"
                hasBorder={true}
                hasError={!!errors[SignUpFormFields.FIRST_NAME]}
                inputRef={ref}
                onChange={(e) => {
                  const value = removeNumbers(e.target.value);
                  onChange(value);
                }}
                placeholder={t("pages.signUp.placeholder.firstName")}
                {...rest}
              />
            )}
            rules={{
              required: true,
              maxLength: MAX_TEXT_FIELD_LENGTH,
              minLength: MIN_TEXT_FIELD_LENGTH
            }}
          />
          {errors[SignUpFormFields.FIRST_NAME] && (
            <StyledError>{getFormFieldErrorMessage(errors, SignUpFormFields.FIRST_NAME, t)} </StyledError>
          )}
        </StyledFirstName>

        <StyledLastName>
          <Controller
            control={control}
            name={SignUpFormFields.LAST_NAME}
            render={({ field: { onChange, ref, ...rest } }: FormFieldRenderProps) => (
              <StyledFormInput
                autoComplete="none"
                hasBorder={true}
                hasError={!!errors[SignUpFormFields.LAST_NAME]}
                inputRef={ref}
                onChange={(e) => {
                  const value = removeNumbers(e.target.value);
                  onChange(value);
                }}
                placeholder={t("pages.signUp.placeholder.lastName")}
                {...rest}
              />
            )}
            rules={{ required: true, maxLength: MAX_TEXT_FIELD_LENGTH, minLength: MIN_TEXT_FIELD_LENGTH }}
          />
          {errors[SignUpFormFields.LAST_NAME] && (
            <StyledError>{getFormFieldErrorMessage(errors, SignUpFormFields.LAST_NAME, t)}</StyledError>
          )}
        </StyledLastName>

        <Controller
          control={control}
          name={SignUpFormFields.SUFFIX}
          render={({ field: { onChange, ref, ...rest } }: FormFieldRenderProps) => (
            <StyledRoleSelect
              hasSearch={false}
              onChange={onChange}
              options={SUFFIX_OPTIONS}
              placeholder={t("pages.signUp.placeholder.suffix")}
              {...rest}
            />
          )}
        />
      </StyledNameBlock>

      <Controller
        control={control}
        name={SignUpFormFields.PHONE_NUMBER}
        render={({ field: { ref, ...rest } }: FormFieldRenderProps) => (
          <StyledPhoneInput
            country="us"
            disableCountryCode={true}
            disableDropdown={true}
            hasError={!!errors[SignUpFormFields.PHONE_NUMBER]}
            inputProps={{
              autoComplete: "none"
            }}
            masks={{ us: "(...) ...-...." }}
            onlyCountries={["us"]}
            placeholder={t("pages.signUp.placeholder.phoneNumber")}
            {...rest}
          />
        )}
        rules={{
          validate: () => {
            const phone = getValues(SignUpFormFields.PHONE_NUMBER);
            return phone ? phone.length === PHONE_NUMBER_LENGTH : true;
          }
        }}
      />
      {errors[SignUpFormFields.PHONE_NUMBER] && <StyledError>{t("pages.signUp.errors.phoneNumber")}</StyledError>}

      <Controller
        control={control}
        name={SignUpFormFields.EMAIL}
        render={({ field: { ref, ...rest } }: FormFieldRenderProps) => (
          <StyledFormInput
            autoComplete="none"
            hasBorder={true}
            hasError={!!errors[SignUpFormFields.EMAIL]}
            inputRef={ref}
            placeholder={t("pages.signUp.placeholder.email")}
            type="email"
            {...rest}
          />
        )}
        rules={{
          maxLength: MAX_TEXT_FIELD_LENGTH,
          validate: () => {
            const email = getValues(SignUpFormFields.EMAIL);
            return isEmailValid(email);
          }
        }}
      />
      {errors[SignUpFormFields.EMAIL] && (
        <StyledError>{getFormFieldErrorMessage(errors, SignUpFormFields.EMAIL, t)}</StyledError>
      )}

      <Controller
        control={control}
        name={SignUpFormFields.SPECIALTY}
        render={({ field: { onChange, ref, ...rest } }: FormFieldRenderProps) => (
          <StyledSpecialtiesSelect
            hasError={!!errors[SignUpFormFields.SPECIALTY]}
            hasSearch={false}
            onChange={onChange}
            options={SPECIALITY_OPTIONS}
            placeholder={t("pages.signUp.placeholder.specialty")}
            {...rest}
          />
        )}
        rules={{ required: true }}
      />
      {errors[SignUpFormFields.SPECIALTY] && <StyledError>{t("pages.signUp.errors.specialty")}</StyledError>}

      <Controller
        control={control}
        name={SignUpFormFields.ORGANIZATION_NAME}
        render={({ field: { ref, ...rest } }: FormFieldRenderProps) => (
          <StyledFormInput
            hasBorder={true}
            hasError={!!errors[SignUpFormFields.ORGANIZATION_NAME]}
            inputRef={ref}
            placeholder={t("pages.signUp.placeholder.organizationName")}
            {...rest}
          />
        )}
        rules={{ required: true, maxLength: 75, minLength: 3 }}
      />
      {errors[SignUpFormFields.ORGANIZATION_NAME] && (
        <StyledError>{getFormFieldErrorMessage(errors, SignUpFormFields.ORGANIZATION_NAME, t)}</StyledError>
      )}

      <Controller
        control={control}
        name={SignUpFormFields.EMR}
        render={({ field: { onChange, ref, ...rest } }: FormFieldRenderProps) => (
          <StyledEmrSelect
            alwaysIncludedOptions={EMR_ALWAYS_INCLUDED_OPTIONS}
            hasError={!!errors[SignUpFormFields.EMR]}
            hasSearch={true}
            onChange={onChange}
            options={EMR_OPTIONS}
            placeholder={t("pages.signUp.placeholder.emr")}
            {...rest}
          />
        )}
        rules={{ maxLength: MAX_TEXT_FIELD_LENGTH, required: true }}
      />
      {errors[SignUpFormFields.EMR] && (
        <StyledError>{getFormFieldErrorMessage(errors, SignUpFormFields.EMR, t)}</StyledError>
      )}

      <StyledAgreement>
        <Controller
          control={control}
          name={SignUpFormFields.AGREEMENT}
          render={({ field: { ref, value, ...rest } }: FormFieldRenderProps) => (
            <Checkbox checked={!!value} hasError={!!errors[SignUpFormFields.AGREEMENT]} {...rest} />
          )}
          rules={{ required: true }}
        />
        <StyledAgreementText size="sm">
          {t("pages.signUp.agreement1")}
          <StyledLink href={Paths.TechnologyServicesAgreement} target="_blank">
            {t("pages.signUp.agreement2")}
          </StyledLink>
          &nbsp;{t("pages.signUp.agreement3")}
          <StyledLink href={Paths.BusinessAssociateAgreement} target="_blank">
            {t("pages.signUp.agreement4")}
          </StyledLink>
          .
        </StyledAgreementText>
      </StyledAgreement>
      {errors[SignUpFormFields.AGREEMENT] && (
        <StyledAgreementError>{t("pages.signUp.errors.agreement")}</StyledAgreementError>
      )}

      <StyledRecaptcha>
        <ReCAPTCHA
          onChange={handleRecaptchaSuccess}
          onErrored={handleRecaptchaError}
          onExpired={handleRecaptchaError}
          ref={captchaRef}
          sitekey={process.env.NX_GOOGLE_RECAPTCHA_SITE_KEY as string}
        />
        {showRecaptchaError && <StyledRecaptchaError>{t("pages.signUp.errors.recaptcha")}</StyledRecaptchaError>}
      </StyledRecaptcha>

      <StyledButton
        formNoValidate={true}
        height={isXXSScreen ? "48px" : "56px"}
        type="submit"
        {...(isSignUpInProgress ? { startIcon: renderLoadingIcon() } : EMPTY_OBJECT)}
        {...{ reset, setValue }}
      >
        <Text isBold={true} size={isXXSScreen ? "lg" : "xl"}>
          {isSignUpInProgress ? t("pages.signUp.processing") : t("pages.signUp.submitButton")}
        </Text>
      </StyledButton>
    </StyledForm>
  );
};

export { SignUpForm };
export default SignUpForm;
