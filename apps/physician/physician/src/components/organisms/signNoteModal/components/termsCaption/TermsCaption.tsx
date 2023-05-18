import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";

import { Terms, TermsButton } from "./termsCaption.styled";

const TermsCaption: FunctionComponent = () => {
  const { t } = useTranslation();
  const [isFullTermsVisible, setIsFullTermsVisible] = useState(false);

  const termsString = t("components.termsCaption.terms");
  const disclaimerString = t("components.termsCaption.disclaimer");

  if (isFullTermsVisible) {
    return <Terms>{termsString}</Terms>;
  }

  return (
    <Terms>
      {disclaimerString}
      <TermsButton onClick={() => setIsFullTermsVisible(true)}>{t("components.termsCaption.buttonText")}.</TermsButton>
    </Terms>
  );
};

export default TermsCaption;

export { TermsCaption };
