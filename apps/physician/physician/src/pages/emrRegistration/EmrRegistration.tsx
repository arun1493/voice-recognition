import store from "store2";
import _isNil from "lodash/isNil";
import startCase from "lodash/startCase";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Emr, Products, UserSubscriptionPayload } from "@suki-web/suki-business";
import { Icon, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledCalendlyButton,
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledLink,
  StyledText,
  StyledTitle
} from "./emrRegistration.styled";
import { LOCAL_STORE } from "../../constants";
import { createCheckoutSession } from "../../api";
import { SukiLogoR } from "../../components/atoms";
import { checkoutSessionReader } from "../../readers";
import { createCheckoutPayload } from "../signUp/helpers";

const EmrRegistration: FunctionComponent = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { targetEmr = "" } = useParams<{ targetEmr: string }>();
  const { XXS } = ScreenSize;
  const isXXSmallcreen = useBreakpointIncludes(XXS);
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const product = searchParams.get("product") as Products;
  const [isSignUpInProgress, setIsRegistrationInProgress] = useState(false);

  const handleCalendlyForm = () => {
    if (targetEmr === Emr.ATHENA.toLowerCase()) {
      window.location.href = `https://calendly.com/d/2d3-z53-n6z?name=${name}&email=${email}`;
    } else if (targetEmr === Emr.EPIC.toLowerCase()) {
      window.location.href = `https://calendly.com/d/y2p-mdk-rh4?name=${name}&email=${email}`;
    } else if (targetEmr === Emr.CERNER.toLowerCase()) {
      window.location.href = `https://calendly.com/d/z5d-z89-g7s?name=${name}&email=${email}`;
    } else if (targetEmr === Emr.ELATION.toLowerCase()) {
      window.location.href = `https://calendly.com/d/ypp-7tt-dmh?name=${name}&email=${email}`;
    }
  };

  const handleCheckoutSession = async () => {
    setIsRegistrationInProgress(true);
    const formDataFromLocalStore = store.get(LOCAL_STORE.SIGN_UP_FORM_DATA);

    if (_isNil(formDataFromLocalStore)) {
      setIsRegistrationInProgress(false);
      return;
    }

    const userCheckoutPayload: UserSubscriptionPayload = createCheckoutPayload(formDataFromLocalStore, product);
    const { session } = await createCheckoutSession(userCheckoutPayload);
    window.location.href = checkoutSessionReader.url(session);

    store.remove(LOCAL_STORE.SIGN_UP_FORM_DATA);
    setIsRegistrationInProgress(false);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <SukiLogoR />
      </StyledHeader>
      <StyledContent>
        <Icon
          height={isXXSmallcreen ? "48px" : "64px"}
          icon="checkWithCircle"
          width={isXXSmallcreen ? "48px" : "64px"}
        />
        <StyledTitle>
          <Text isBold={true} size={"3xl"}>
            {t("pages.emrRegistration.title")}
          </Text>
          <Text color="darkCharcoal" lineHeight={"24px"} size={"lg"}>
            {t("pages.emrRegistration.text1") + startCase(targetEmr) + "."}
          </Text>
        </StyledTitle>
        <StyledText>
          <Text color="darkCharcoal">
            {t("pages.emrRegistration.text2") + startCase(targetEmr) + t("pages.emrRegistration.text3")}
          </Text>
        </StyledText>
        <StyledCalendlyButton onClick={handleCalendlyForm}>
          {t("pages.emrRegistration.nextSteps") + startCase(targetEmr) + t("pages.emrRegistration.nextSteps1")}
        </StyledCalendlyButton>
        <StyledLink onClick={handleCheckoutSession}>
          {isSignUpInProgress ? t("pages.signUp.processing") : t("pages.emrRegistration.skipToPayment")}
        </StyledLink>
      </StyledContent>
    </StyledContainer>
  );
};

export default EmrRegistration;

export { EmrRegistration };
