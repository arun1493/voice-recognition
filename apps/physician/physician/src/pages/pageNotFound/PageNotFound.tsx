import { useDispatch } from "react-redux";
import { Header } from "@suki-web/suki-ui";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";

import { pageActions } from "../../redux/page";
import { StyledPageNotFound, StyledPageNotFoundContainer } from "./pageNotFound.styled";

const PageNotFound: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageActions.setIsNotFoundPage(true));

    return () => {
      dispatch(pageActions.setIsNotFoundPage(false));
    };
  }, []);

  return (
    <StyledPageNotFound>
      <StyledPageNotFoundContainer>
        <Header level="h1">{t("pages.pageNotFound.heading")}</Header>
        <Header level="h6">{t("pages.pageNotFound.message")}</Header>
      </StyledPageNotFoundContainer>
    </StyledPageNotFound>
  );
};

export { PageNotFound };

export default PageNotFound;
