import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { Patient } from "../../../types";
import { GENDER } from "../../../constants";
import { InitialsAvatar } from "../../atoms";
import { getAge, getDOB, getGender } from "../../../helpers";
import { StyledProfileMinimal } from "./profileMinimal.styled";

interface ProfileMinimalProps {
  isMinimized?: boolean;
  profile?: Patient;
}

const ProfileMinimal: FunctionComponent<ProfileMinimalProps> = ({ isMinimized = false, profile }) => {
  const { t } = useTranslation();
  const mrn = profile?.mrn || "";

  const { dateOfBirth, firstName, gender, lastName } = profile?.person ?? {};

  let fullName;
  if (!firstName && !lastName) {
    fullName = t<string>("components.profileMinimal.notAvailable");
  } else {
    fullName = `${firstName ?? ""} ${lastName ?? ""}`;
  }

  const fullNameTextSize = isMinimized ? "lg" : "2xl";

  const renderPatientInfo = () => {
    const data = [];
    if (dateOfBirth) data.push(getAge(dateOfBirth));
    if (gender && gender !== GENDER.UNKNOWN) data.push(getGender(gender));
    if (dateOfBirth) data.push(getDOB(dateOfBirth));
    const dataToShow = data.join(" • ");

    return dataToShow;
  };

  return (
    <StyledProfileMinimal data-cy="profile-minimal" isMinimized={isMinimized}>
      <InitialsAvatar firstName={firstName} isMinimized={isMinimized} lastName={lastName} />
      <Text size={fullNameTextSize}>{fullName}</Text>
      <Text size="sm">{renderPatientInfo()}</Text>
      {!isMinimized && <Text size="sm">{mrn && ` ${t("components.profileMinimal.mrn")} ${mrn}`}</Text>}
    </StyledProfileMinimal>
  );
};

export { ProfileMinimal };

export default ProfileMinimal;
