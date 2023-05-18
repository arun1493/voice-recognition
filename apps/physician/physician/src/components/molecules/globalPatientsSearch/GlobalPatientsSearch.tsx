import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect, useRef } from "react";
import { SukiIcon, SukiIconType, SukiListItem, SukiListItemSubtitle, SukiListItemTitle } from "@suki-web/suki-ui";

import {
  StyledPatientsListDropDown,
  StyledPatientsSearch,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchInput
} from "./globalPatientsSearch.styled";
import { ClearInputButton } from "./components";
import { patientReader } from "../../../readers";
import { EMPTY_STRING } from "../../../constants";
import { Patient, Patients } from "../../../types";
import { getAge, getFullName, getGender } from "../../../helpers";

const PatientListItem: FunctionComponent<{ onClick: (patient: Patient) => void; patient: Patient }> = ({
  onClick,
  patient
}) => {
  const { t } = useTranslation();

  const person = patientReader.person(patient);

  const gender = getGender(patientReader.personGender(patient));
  const age = getAge(patientReader.personDateOfBirth(patient));
  const mrn = patientReader.mrn(patient);

  let subtitle = `${age} • ${gender}`;
  if (mrn) {
    subtitle = subtitle + ` • ${t("pages.note.patientInformation.medicalRecordNumber")} ${mrn}`;
  }

  return (
    <SukiListItem onClick={() => onClick(patient)} testId="listItem" variant="simple">
      <SukiListItemTitle isTitleBold={true} title={getFullName(person)} variant="simple" />
      <SukiListItemSubtitle subtitle={subtitle} variant="simple" />
    </SukiListItem>
  );
};

interface GlobalPatientsSearchProps {
  hasBorder: boolean;
  hasCloseInInput: boolean;
  hasShadow: boolean;
  onPatientClick: (patient: Patient) => void | VoidFunction;
  onSearch: (value: string) => void;
  patients?: Patients;
  prefixIcon?: SukiIconType;
  value: string;
}

const GlobalPatientsSearch: FunctionComponent<GlobalPatientsSearchProps> = ({
  hasCloseInInput,
  onPatientClick,
  onSearch,
  patients,
  prefixIcon = "search",
  value,
  ...restGlobalPatientsSearchProps
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClearSearchValue = () => {
    onSearch(EMPTY_STRING);
    if (inputRef.current) {
      inputRef.current.value = EMPTY_STRING;
    }
  };

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus());
  }, []);

  const placeholder = t("components.patientsSearch.input.placeholder");

  return (
    <StyledPatientsSearch {...restGlobalPatientsSearchProps}>
      <StyledSearchContainer>
        {!!prefixIcon && (
          <StyledSearchIcon>
            <SukiIcon color="secondary" icon={prefixIcon} />
          </StyledSearchIcon>
        )}

        <StyledSearchInput
          data-testid="input"
          hasBorder={false}
          hasCloseInInput={hasCloseInInput}
          inputRef={inputRef}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
        />
        {!_isEmpty(value) && (
          <ClearInputButton hasCloseInInput={hasCloseInInput} onClearSearchValue={onClearSearchValue} />
        )}
      </StyledSearchContainer>

      {!_isEmpty(patients) && (
        <StyledPatientsListDropDown data-cy="patients-list-dropdown">
          {patients?.map((patient) => (
            <PatientListItem key={patientReader.id(patient)} onClick={onPatientClick} patient={patient} />
          ))}
        </StyledPatientsListDropDown>
      )}
    </StyledPatientsSearch>
  );
};

export { GlobalPatientsSearch, GlobalPatientsSearchProps };

export default GlobalPatientsSearch;
