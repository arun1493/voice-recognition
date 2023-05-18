import store from "store2";
import _get from "lodash/get";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useIntercom } from "react-use-intercom";
import { SelectOption } from "@suki-web/suki-ui";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Products, SignUpQueryParameters, UserSubscriptionPayload } from "@suki-web/suki-business";

import {
  createCheckoutPayload,
  encodeFormData,
  getRegisterErrorMessage,
  isAthenaEmr,
  isCernerEmr,
  isElationEmr,
  isEpicEmr,
  submitRegistrationData
} from "./helpers";
import { SignUpForm } from "./components";
import { toastsActions } from "../../redux/toast";
import { SukiLogoR } from "../../components/atoms";
import { checkoutSessionReader } from "../../readers";
import { createCheckoutSession, logger } from "../../api";
import { StyledHeader, StyledSignUp } from "./signUp.styled";
import { LOCAL_STORE, Pages, TOAST_TYPES } from "../../constants";
import { getRoute, isDevelopmentOrLocalEnvironment } from "../../helpers";
import { DEFAULT_SIGNUP_FORM_VALUES, EMR_OPTIONS, FormData, SignUpFormFields, SPECIALITY_OPTIONS } from "./constants";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { show: showIntercom } = useIntercom();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(Products.SUKI_X);

  const [initialFormValues, setInitialFormValues] = useState(DEFAULT_SIGNUP_FORM_VALUES);
  const [isRegistrationInProgress, setIsRegistrationInProgress] = useState<boolean>(false);
  const [formKey, setFormKey] = useState(`sign-up-form-${Date.now()}`);

  useEffect(() => {
    showIntercom();
    createInitialFormValues();
    setProductFromQueryParams();
    clearQueryParams();
  }, []);

  useEffect(() => {
    setFormKey(`sign-up-form-${Date.now()}`);
  }, [initialFormValues]);

  const createInitialFormValues = () => {
    const initialFormValues = getFormValuesFromQueryParams();
    setInitialFormValues(initialFormValues);
  };

  const setProductFromQueryParams = () => {
    const product = searchParams.get(SignUpQueryParameters.PRODUCT);
    if (product === Products.SUKI_X_LITE) {
      setProduct(Products.SUKI_X_LITE);
    } else {
      setProduct(Products.SUKI_X);
    }
  };

  const getFormValuesFromQueryParams = () => {
    const specialityLabelFromQueryParams = searchParams.get(SignUpQueryParameters.SPECIALTY);
    const speciality = SPECIALITY_OPTIONS.find(
      (speciality) =>
        speciality.label === specialityLabelFromQueryParams || speciality.value === specialityLabelFromQueryParams
    ) as SelectOption;

    const emrLabelFromQueryParams = searchParams.get(SignUpQueryParameters.EMR);
    const emr = EMR_OPTIONS.find(
      (targetEmr) => targetEmr.label === emrLabelFromQueryParams || targetEmr.value === emrLabelFromQueryParams
    ) as SelectOption;

    const initialFormValues = {
      ...DEFAULT_SIGNUP_FORM_VALUES,
      [SignUpFormFields.AGREEMENT]: false,
      [SignUpFormFields.EMAIL]: searchParams.get(SignUpQueryParameters.EMAIL) || "",
      [SignUpFormFields.EMR]: emr || "",
      [SignUpFormFields.FIRST_NAME]: searchParams.get(SignUpQueryParameters.FIRST_NAME) || "",
      [SignUpFormFields.LAST_NAME]: searchParams.get(SignUpQueryParameters.LAST_NAME) || "",
      [SignUpFormFields.ORGANIZATION_NAME]: searchParams.get(SignUpQueryParameters.ORGANIZATION_NAME) || "",
      [SignUpFormFields.PHONE_NUMBER]: searchParams.get(SignUpQueryParameters.PHONE_NUMBER) || "",
      [SignUpFormFields.SPECIALTY]: speciality
    };
    return initialFormValues;
  };

  const clearQueryParams = () => {
    searchParams.delete(SignUpQueryParameters.EMAIL);
    searchParams.delete(SignUpQueryParameters.EMR);
    searchParams.delete(SignUpQueryParameters.FIRST_NAME);
    searchParams.delete(SignUpQueryParameters.LAST_NAME);
    searchParams.delete(SignUpQueryParameters.ORGANIZATION_NAME);
    searchParams.delete(SignUpQueryParameters.PHONE_NUMBER);
    searchParams.delete(SignUpQueryParameters.SPECIALTY);
    setSearchParams(searchParams);
  };

  const submitDataToPardot = (formData: FormData) => {
    const formDataCopy = { ...formData } as FormData | any;

    if (formDataCopy?.SPECIALTY?.label) {
      formDataCopy.SPECIALTY = formDataCopy?.SPECIALTY?.label;
    }

    if (formDataCopy?.SUFFIX?.value) {
      formDataCopy.SUFFIX = formDataCopy?.SUFFIX?.value;
    }

    if (formDataCopy?.EMR?.label) {
      formDataCopy.EMR = formDataCopy?.EMR?.label;
    }

    formDataCopy.SKU = product;

    const urlEncodedData = encodeFormData(formDataCopy);

    submitRegistrationData(urlEncodedData)
      .then((response) => {
        logger.info({ message: "Pardot submission successful", payload: response });
      })
      .catch((error) => {
        logger.error({ message: "Pardot submission failed", payload: error });
      });
  };

  const handleUserRegistration = async (formData: FormData) => {
    // If registration is already in progress return
    if (isRegistrationInProgress) {
      return;
    }

    try {
      // Set registration in progress to show loader
      setIsRegistrationInProgress(true);
      !isDevelopmentOrLocalEnvironment() && submitDataToPardot(formData);

      // check if target emr
      if (
        isAthenaEmr(formData?.EMR?.value) ||
        isEpicEmr(formData?.EMR?.value) ||
        isCernerEmr(formData?.EMR?.value) ||
        isElationEmr(formData?.EMR?.value)
      ) {
        store.set(LOCAL_STORE.SIGN_UP_FORM_DATA, formData);
        const emrFormRoute = getRoute(Pages.EmrRegistration, {
          formData,
          product
        });
        navigate(emrFormRoute);
        return;
      }

      // Create registration payload and registration account
      // if not target emr then redirect to payments page
      const userCheckoutPayload: UserSubscriptionPayload = createCheckoutPayload(formData, product);
      const { session } = await createCheckoutSession(userCheckoutPayload);
      window.location.href = checkoutSessionReader.url(session);
    } catch (error) {
      const title = getRegisterErrorMessage(error as Error, navigate, t);
      dispatch(toastsActions.add({ title, type: TOAST_TYPES.ERROR }));
    } finally {
      setIsRegistrationInProgress(false);
    }
  };

  return (
    <StyledSignUp>
      <StyledHeader>
        <SukiLogoR />
      </StyledHeader>
      <SignUpForm
        initialFormValues={initialFormValues}
        isSignUpInProgress={isRegistrationInProgress}
        key={formKey}
        onSignUp={handleUserRegistration}
      />
    </StyledSignUp>
  );
};

export { SignUp };

export default SignUp;
