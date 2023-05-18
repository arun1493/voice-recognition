import _get from "lodash/get";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";
import { Icon, Link, Text } from "@suki-web/suki-ui";

import {
  StyledAnnotation,
  StyledDropDownContainer,
  StyledDropDownContent,
  StyledDropDownTitle,
  StyledUnorderedList
} from "./importSchedule.styled";
import csvExample from "../../assets/images/csvExample.svg";

const DropDown: FunctionComponent = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropDown = () => setIsExpanded((isExpanded) => !isExpanded);

  return (
    <StyledDropDownContainer>
      <StyledDropDownTitle isExpanded={isExpanded} onClick={toggleDropDown}>
        <Text color="blackGray" size="md">
          {t("pages.importSchedule.dropdown.title")}
        </Text>
        <Icon icon="DropDownArrow" />
      </StyledDropDownTitle>
      <StyledDropDownContent isExpanded={isExpanded}>
        <Text color="blackGray" isBold={true} marginBottom="4px">
          {t("pages.importSchedule.dropdown.title1")}
        </Text>
        <Text color="darkCharcoal" marginBottom="16px" size="sm">
          {t("pages.importSchedule.dropdown.description1")}
        </Text>
        <Text color="blackGray" isBold={true} marginBottom="4px">
          {t("pages.importSchedule.dropdown.title2")}
        </Text>
        <Text color="darkCharcoal" marginBottom="16px" size="sm">
          {t("pages.importSchedule.dropdown.description2")}
        </Text>
        <Link
          fontSize="14px"
          onClick={() => window.open("https://storage.googleapis.com/suki-x/Schedule%20CSV%20Template.csv")}
          target="_blank"
          textDecoration="underline"
          to="#"
        >
          {t("pages.importSchedule.dropdown.link")}
        </Link>
        <Text color="blackGray" isBold={true} marginBottom="4px" marginTop="16px">
          {t("pages.importSchedule.dropdown.title3")}
        </Text>
        <Text color="darkCharcoal" marginBottom="16px" size="sm">
          {t("pages.importSchedule.dropdown.description3")}
        </Text>
        <img alt="not found" src={csvExample} width="100%" />
        <StyledUnorderedList>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem1")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem2")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem3")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem4")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem5")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem6")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem7")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.listItem8")}
          </Text>
        </StyledUnorderedList>
        <Text color="darkCharcoal" marginBottom="16px" marginTop="16px" size="sm">
          {t("pages.importSchedule.dropdown.text1")}
        </Text>
        <Text color="darkCharcoal" marginBottom="16px" size="sm">
          {t("pages.importSchedule.dropdown.text2")}
        </Text>
        <Text color="blackGray" isBold={true} marginBottom="4px">
          {t("pages.importSchedule.dropdown.title4")}
        </Text>
        <Text color="darkCharcoal" marginBottom="16px" size="sm">
          {t("pages.importSchedule.dropdown.description4")}
        </Text>
        <StyledAnnotation>
          <Text color="darkCharcoal" isBold={true} marginBottom="4px" size="sm">
            {t("pages.importSchedule.dropdown.note")}
          </Text>
          <Text color="darkCharcoal" size="sm">
            {t("pages.importSchedule.dropdown.noteContent")}
          </Text>
        </StyledAnnotation>
      </StyledDropDownContent>
    </StyledDropDownContainer>
  );
};

export default DropDown;

export { DropDown };
