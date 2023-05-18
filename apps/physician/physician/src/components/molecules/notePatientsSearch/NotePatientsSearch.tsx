import _map from "lodash/map";
import _get from "lodash/get";
import _split from "lodash/split";
import _isEmpty from "lodash/isEmpty";
import { DebouncedFunc } from "lodash";
import { useClickAway } from "react-use";
import { Text } from "@suki-web/suki-ui";
import _startCase from "lodash/startCase";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  StyledPatientsListDropDown,
  StyledPatientsListItem,
  StyledSearchContainer,
  StyledSearchInput
} from "./notePatientsSearch.styled";
import { patientReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { Patient, Patients } from "../../../types";
import { createPatients, logger } from "../../../api";
import { getAge, getFullName, getGender } from "../../../helpers";

interface NotePatientsSearchProps {
  isAddPatientEnabled: boolean;
  isPatientsListVisible: boolean;
  onClose: () => void;
  onPatientClick: (patient: Patient) => void | VoidFunction;
  onSearch: DebouncedFunc<(e: React.ChangeEvent<HTMLInputElement>) => Promise<void>>;
  patients?: Patients;
}

const NotePatientsSearch: FunctionComponent<NotePatientsSearchProps> = ({
  isAddPatientEnabled,
  isPatientsListVisible,
  onClose,
  onPatientClick,
  onSearch,
  patients
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainer = useRef(null);

  useClickAway(searchContainer, onClose);

  const renderPatient = (patient: Patient) => {
    const person = patientReader.person(patient);

    const gender = getGender(patientReader.personGender(patient));
    const age = getAge(patientReader.personDateOfBirth(patient));
    const mrn = patientReader.mrn(patient);

    return (
      <StyledPatientsListItem
        data-testid="listItem"
        key={patientReader.id(patient)}
        onClick={() => onPatientClick(patient)}
        value={patientReader.personFirstName(patient)}
      >
        <Text isBold={true}>{getFullName(person)}</Text>
        <Text size="xs">
          {age} • {gender}
          {mrn && [` • ${t("pages.note.patientInformation.medicalRecordNumber")} `, mrn]}
        </Text>
      </StyledPatientsListItem>
    );
  };

  const patientMutation = useMutation(createPatients, {
    onSuccess: (response) => {
      const patient = _get(response, "data.data.0");
      dispatch(noteActions.updatePatient(patient));
      onPatientClick(patient);
    },
    onError: (error) => {
      logger.error({ message: t("errors.patient.create"), payload: error });
    }
  });

  const handleCreateNewPatient = (patient: Patient) => {
    patientMutation.mutate([patient]);
  };

  const renderCreateNewPatient = () => {
    const newPatient = _split(_startCase(inputRef?.current?.value), " ");
    const person = {
      firstName: "",
      middleName: "",
      lastName: ""
    };

    if (newPatient?.length === 3) {
      const [firstName, middleName, lastName] = newPatient;
      person.firstName = firstName;
      person.middleName = middleName;
      person.lastName = lastName;
    }

    if (newPatient?.length === 2) {
      const [firstName, lastName] = newPatient;
      person.firstName = firstName;
      person.lastName = lastName;
    }

    return (
      <StyledPatientsListItem
        onClick={() =>
          handleCreateNewPatient({
            person,
            emrId: "",
            emrIdType: "",
            fhirId: "",
            id: "",
            mrn: ""
          })
        }
      >
        <Text isBold={true}>
          {t("pages.note.patientInformation.createNewPatient")} "{_startCase(inputRef?.current?.value)}"
        </Text>
      </StyledPatientsListItem>
    );
  };

  const placeholder = t("components.patientsSearch.input.placeholder");

  return (
    <StyledSearchContainer ref={searchContainer}>
      <StyledSearchInput data-testid="input" inputRef={inputRef} onChange={onSearch} placeholder={placeholder} />
      {!_isEmpty(patients) && isPatientsListVisible && (
        <StyledPatientsListDropDown data-cy="patients-list-dropdown">
          {_map(patients, renderPatient)}
          {isAddPatientEnabled && renderCreateNewPatient()}
        </StyledPatientsListDropDown>
      )}
      {_isEmpty(patients) && isPatientsListVisible && isAddPatientEnabled && (
        <StyledPatientsListDropDown data-cy="patients-list-dropdown">
          {renderCreateNewPatient()}
        </StyledPatientsListDropDown>
      )}
    </StyledSearchContainer>
  );
};

export { NotePatientsSearch };

export default NotePatientsSearch;
