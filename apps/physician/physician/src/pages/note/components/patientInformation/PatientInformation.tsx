import {
  DatePicker,
  FlexLeftColumn,
  FlexRightColumn,
  ScreenSize,
  Text,
  useBreakpointIncludes
} from "@suki-web/suki-ui";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import _debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClientEmitEventTypes } from "@suki-web/suki-business";
import { addHours, addMinutes, getHours, getMinutes } from "date-fns";

import {
  DEBOUNCE_DELAY,
  DEFAULT_APPOINTMENT_DURATION,
  GENDER,
  SEARCH_PATIENTS_RESULTS_LIMIT,
  USER_REQUEST_TYPE
} from "../../../../constants";
import {
  StyledAgeAndGender,
  StyledDateOfBirth,
  StyledDateOfService,
  StyledLeftBlock,
  StyledMRN,
  StyledPatientInfo
} from "./patientInformation.styled";
import { useSocket } from "../../../../socket";
import { Composition, Patient, Patients } from "../../../../types";
import { NotePatientsSearch } from "../../../../components/molecules";
import { logger, searchPatient, updatePatients } from "../../../../api";
import { noteActions, selectIsPatientsListVisible } from "../../../../redux/note";
import { getAge, getFullName, getGender, isDateInFuture } from "../../../../helpers";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../../../../readers";

const DATE_INPUT_PROPS = {
  fontSize: "14px",
  height: "initial",
  letterSpacing: "normal",
  name: "dateOfServiceDatePicker",
  textAlign: "right",
  width: "initial"
};

const PatientInformation: FunctionComponent<{
  composition: Composition;
  compositionId: string;
  isAddPatientEnabled: boolean;
  isDOSEditable: boolean;
  noteTypeId: string;
  patient: Patient | null;
  readOnly: boolean;
}> = ({ composition, compositionId, isAddPatientEnabled, isDOSEditable, noteTypeId, patient, readOnly }) => {
  const { t } = useTranslation();
  const { transmitEvent } = useSocket();
  const dispatch = useDispatch();

  const [patients, setPatients] = useState<Patients>();
  const [isMRNEditable, setIsMRNEditable] = useState<boolean>(false);
  const [isGenderEditable, setIsGenderEditable] = useState<boolean>(false);

  const { LG, XL, MD } = ScreenSize;
  const isLargeScreen = useBreakpointIncludes(MD, LG, XL);
  const textSize = isLargeScreen ? "3xl" : "2xl";
  const lineHeight = isLargeScreen ? "32px" : "36px";
  const isPatientsListVisible = useSelector(selectIsPatientsListVisible);
  const metadata = compositionReader.metadata(composition);
  const appointment = metadataReader.appointment(metadata);
  const createdAt = compositionReader.createdAt(composition);

  const handleSearchPatient = _debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    try {
      const patientsRes = await searchPatient(value, SEARCH_PATIENTS_RESULTS_LIMIT);
      setPatients(patientsRes?.data?.results);
      dispatch(noteActions.setPatientsListVisibility(true));
    } catch (error) {
      logger.error({ message: "error fetching patients", payload: error });
    }
  }, DEBOUNCE_DELAY);

  const attachPatientToNote = (patient: Patient) => {
    if (!_isEmpty(patient)) {
      transmitEvent({
        type: ClientEmitEventTypes.USER_REQUEST,
        data: {
          compositionId: compositionId,
          noteTypeId: noteTypeId,
          patientId: patient.id,
          patient,
          requestType: USER_REQUEST_TYPE.ATTACH_PATIENT
        }
      });
    }
  };

  const handleClose = () => dispatch(noteActions.setPatientsListVisibility(false));

  const updatePatient = async (patient: Patient) => {
    if (_isEmpty(patient)) {
      return;
    }
    dispatch(noteActions.updatePatient(patient));
    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        compositionId: compositionId,
        noteTypeId: noteTypeId,
        patientId: patient.id,
        patient,
        requestType: USER_REQUEST_TYPE.UPDATE_PATIENT
      }
    });
    try {
      await updatePatients([patient]);
    } catch (err) {
      logger.error({ message: "Error updating patient", payload: err });
    }
  };

  const handleDateOfBirthChange = (timestamp: number) => {
    if (!timestamp || _isEmpty(patient)) {
      return;
    }

    const date = new Date(timestamp);
    const utcTimestamp = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

    const currentPatient = patient as Patient;
    const person = patientReader.person(currentPatient);

    const updatedPatient: Patient = {
      ...currentPatient,
      person: { ...person, dateOfBirth: new Date(utcTimestamp).toISOString() }
    };

    updatePatient(updatedPatient);
  };

  const handleMRNChange = (evt: any) => {
    setIsMRNEditable(false);

    const currentPatient = patient as Patient;
    const mrn = patientReader.mrn(currentPatient);
    if (_isEmpty(patient) || evt.target.value === mrn) {
      return;
    }

    const updatedPatient: Patient = {
      ...currentPatient,
      mrn: evt.target.value
    };
    updatePatient(updatedPatient);
  };

  const handleGenderChange = (evt: any) => {
    setIsGenderEditable(false);

    const currentPatient = patient as Patient;
    const gender = patientReader.personGender(currentPatient);

    if (_isEmpty(patient) || evt.target.value === gender) {
      return;
    }

    const person = patientReader.person(currentPatient);
    const updatedPatient: Patient = {
      ...currentPatient,
      person: { ...person, gender: evt.target.value }
    };
    updatePatient(updatedPatient);
  };

  const handleDateOfServiceChange = (timestamp: number) => {
    if (!timestamp || _isEmpty(patient)) {
      return;
    }

    const currentHour = getHours(new Date(appointmentReader.startsAt(appointment)));
    const currentMins = getMinutes(new Date(appointmentReader.startsAt(appointment)));

    const startTimeWithHours = addHours(timestamp, currentHour);
    const startTimeWithMins = addMinutes(startTimeWithHours, currentMins);

    const startsAt = startTimeWithMins.toISOString();
    const endsAt = addMinutes(startTimeWithMins, DEFAULT_APPOINTMENT_DURATION).toISOString();

    const updatedAppointment = {
      ...appointment,
      patient,
      startsAt,
      endsAt
    };
    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        compositionId: compositionId,
        noteTypeId: noteTypeId,
        appointment: updatedAppointment,
        requestType: USER_REQUEST_TYPE.UPDATE_APPOINTMENT
      }
    });
  };

  const renderMRN = () => {
    if (_isEmpty(patient)) {
      return <StyledMRN>{t("pages.note.patientInformation.mrnUnknown")}</StyledMRN>;
    }
    const mrn = patientReader.mrn(patient as Patient);

    return (
      <StyledMRN>
        <span onClick={() => setIsMRNEditable(true)}>{`${t(
          "pages.note.patientInformation.medicalRecordNumber"
        )} `}</span>
        {isMRNEditable && !readOnly ? (
          <input autoFocus defaultValue={mrn} onBlur={handleMRNChange} placeholder={mrn} />
        ) : (
          <span onClick={() => setIsMRNEditable(true)}>{mrn}</span>
        )}
      </StyledMRN>
    );
  };

  const renderAgeAndGender = () => {
    if (_isEmpty(patient)) {
      return;
    }
    const age = getAge(patientReader.personDateOfBirth(patient as Patient));
    const gender = patientReader.personGender(patient as Patient);

    const genderText = getGender(gender);

    return (
      <StyledAgeAndGender>
        <span>{`${age} • `}</span>
        {isGenderEditable && !readOnly ? (
          <select autoFocus defaultValue={gender} onChange={handleGenderChange}>
            <option value={GENDER.MALE}>{t("global.gender.male")}</option>
            <option value={GENDER.FEMALE}>{t("global.gender.female")}</option>
            <option value={GENDER.UNKNOWN}>{t("global.gender.unknown")}</option>
          </select>
        ) : (
          <span onClick={() => setIsGenderEditable(true)}>{genderText}</span>
        )}
      </StyledAgeAndGender>
    );
  };

  const renderDateOfBirth = () => {
    if (_isEmpty(patient)) {
      return <Text size="sm">{t("pages.note.patientInformation.dateUnknown")}</Text>;
    }

    const patientDob = patientReader.personDateOfBirth(patient as Patient);
    let dateOfBirthSetToUTCDate = null;
    let utcDobStartOfTheDay = null;
    if (!_isEmpty(patientDob)) {
      const dateOfBirth = new Date(patientDob);
      const today = new Date();
      /**
       * DOB is returned in UTC format from the backend.
       * To keep the date consistent independent of the timezone of the logged in user
       * we are setting the date to UTC date.
       * date.setDate returns date in milliseconds
       */
      dateOfBirthSetToUTCDate = today.setFullYear(
        dateOfBirth.getUTCFullYear(),
        dateOfBirth.getUTCMonth(),
        dateOfBirth.getUTCDate()
      );

      // As this is date of birth we only care about date and not time. hence, converting time to zero
      utcDobStartOfTheDay = today.setUTCHours(0);
      utcDobStartOfTheDay = today.setUTCMinutes(0);
      utcDobStartOfTheDay = today.setUTCSeconds(0);
      utcDobStartOfTheDay = today.setUTCMilliseconds(0);
    }

    if (utcDobStartOfTheDay === 0) {
      dateOfBirthSetToUTCDate = null;
    }

    return (
      <DatePicker
        customDate={dateOfBirthSetToUTCDate}
        disabledDate={(day) => isDateInFuture(day.timestamp)}
        inputProps={{
          isCalenderIconHidden: true,
          style: { ...DATE_INPUT_PROPS, textAlign: "left" }
        }}
        isTodayAsDefaultDate={!_isNil(dateOfBirthSetToUTCDate) && dateOfBirthSetToUTCDate !== 0}
        onChange={handleDateOfBirthChange}
        readOnly={readOnly}
      />
    );
  };

  const renderDateOfService = () => {
    if (_isEmpty(patient)) {
      return <Text size="sm">{t("pages.note.patientInformation.dateUnknown")}</Text>;
    }

    const dateOfService = appointmentReader.startsAt(appointment) || createdAt;

    return (
      <DatePicker
        customDate={new Date(dateOfService).getTime()}
        inputProps={{ isCalenderIconHidden: true, style: DATE_INPUT_PROPS }}
        isModalAlignRight={true}
        isTodayAsDefaultDate={false}
        onChange={handleDateOfServiceChange}
        readOnly={readOnly || !isDOSEditable}
      />
    );
  };

  return (
    <StyledPatientInfo data-cy="patient-information">
      <FlexLeftColumn>
        {patient ? (
          <Text lineHeight={lineHeight} size={textSize}>
            {getFullName(patientReader.person(patient))}
          </Text>
        ) : (
          <NotePatientsSearch
            isAddPatientEnabled={isAddPatientEnabled}
            isPatientsListVisible={isPatientsListVisible}
            onClose={handleClose}
            onPatientClick={attachPatientToNote}
            onSearch={handleSearchPatient}
            patients={patients}
          />
        )}

        <StyledLeftBlock>
          {renderAgeAndGender()}
          {renderMRN()}
        </StyledLeftBlock>
        <StyledDateOfBirth>
          <Text isBold={true} size="xs">
            {t("pages.note.patientInformation.dateOfBirth")}
          </Text>
          {renderDateOfBirth()}
        </StyledDateOfBirth>
      </FlexLeftColumn>

      <FlexRightColumn>
        <StyledDateOfService>
          <Text isBold={true} size="xs">
            {t("pages.note.patientInformation.dateOfService")}
          </Text>
          {renderDateOfService()}
        </StyledDateOfService>
      </FlexRightColumn>
    </StyledPatientInfo>
  );
};

export { PatientInformation };

export default PatientInformation;
