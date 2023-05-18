import { FunctionComponent } from "react";

import { PAGES } from "../../../constants";
import { PatientAge, PatientCellContainer, PatientGender, PatientName, TruncatedText } from "./patientCell.styled";

const getPatientInfoText = (value?: string) => (value ? value : "__");

interface PatientCellProps {
  age?: string;
  fullName?: string;
  gender?: string;
  isDisabled?: boolean;
  isNarrow?: boolean;
  textContent?: string;
  type?: string;
}

const PatientCell: FunctionComponent<PatientCellProps> = ({
  age,
  fullName,
  gender,
  isDisabled = false,
  isNarrow = false,
  textContent,
  type = ""
}) => {
  const isBold = ![PAGES.NOTE_TYPE, PAGES.SCRIPTS].includes(type);

  return (
    <PatientCellContainer isNarrow={isNarrow} type={type}>
      <PatientName cursor="pointer" data-cy="patient-name" isBold={isBold} size={"md"}>
        {fullName}
      </PatientName>

      {(age || gender) && (
        <>
          <PatientAge data-cy="patient-age">{getPatientInfoText(age)}</PatientAge>
          <PatientGender data-cy="patient-gender">{getPatientInfoText(gender)}</PatientGender>
        </>
      )}

      {textContent && <TruncatedText size="sm">{textContent}</TruncatedText>}
    </PatientCellContainer>
  );
};

export { PatientCell, PatientCellProps };

export default PatientCell;
