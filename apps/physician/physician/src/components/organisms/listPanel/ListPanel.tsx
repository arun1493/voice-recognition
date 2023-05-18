import { format } from "date-fns";
import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { PatientModes, Text } from "@suki-web/suki-ui";
import { FunctionComponent, useEffect, useState } from "react";

import { getPatientNotes } from "../../../api";
import { ListPanelProps } from "./listPanel.types";
import { NoteOrComposition } from "../../../pages";
import { PAGES, QUERY_NAMES } from "../../../constants";
import { PatientCell, StatusCell } from "../../molecules";
import { StyledBody, StyledDateLabel, StyledExtraItemInfo, StyledTime } from "./listPanel.styled";
import { getMultipleNotesStatus, getNotesDate, isNoteCreatedByUser, isTodaysNote } from "../../../helpers";

const ListPanel: FunctionComponent<ListPanelProps> = ({
  age,
  createdAt,
  dateOfService,
  fullName,
  gender,
  id = "",
  isDeleteEnabled = true,
  isDisabled = false,
  onClick,
  onDelete,
  startsAt,
  status,
  testId = "",
  type = "",
  textContent
}) => {
  const { t } = useTranslation();
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  let hasDeleteButton = false;
  if (type === PatientModes.PATIENTS_LIST || Object.values(PAGES).includes(type)) {
    hasDeleteButton = isDeleteButtonVisible && isDeleteEnabled;
  }

  const isSettingsType = type === PAGES.NOTE_TYPE || type === PAGES.SCRIPTS || type === PAGES.SETTINGS;
  const isUnfinishedNotesType = type === PAGES.UNFINISHED_NOTES;
  const isLong = isUnfinishedNotesType && !!gender && !!textContent;

  const isNotesFetchingEnabled = !!id && type === PatientModes.PATIENTS_LIST;

  const { data: notes, refetch: refetchNotes } = useQuery<NoteOrComposition[]>(
    [`${QUERY_NAMES.PATIENT_NOTES}-${id}`],
    () => getPatientNotes(id),
    {
      enabled: isNotesFetchingEnabled
    }
  );

  const userNotes = _filter(notes, isNoteCreatedByUser);
  const todaysUserNotes = _filter(userNotes, isTodaysNote);

  const cellStatus =
    type === PatientModes.PATIENTS_LIST && !_isEmpty(todaysUserNotes)
      ? getMultipleNotesStatus(todaysUserNotes)
      : status;

  useEffect(() => {
    isNotesFetchingEnabled && refetchNotes();
  }, [id, type]);

  const dateToDisplay = dateOfService || createdAt;

  return (
    <StyledBody
      data-cy={testId}
      isDisabled={isDisabled}
      isLong={isLong}
      isSettingsType={isSettingsType}
      isUnfinishedNotesType={isUnfinishedNotesType}
      onClick={onClick}
      onMouseEnter={() => setIsDeleteButtonVisible(true)}
      onMouseLeave={() => setIsDeleteButtonVisible(false)}
    >
      <PatientCell
        age={age}
        fullName={fullName}
        gender={gender}
        isDisabled={isDisabled}
        isNarrow={isUnfinishedNotesType && !dateOfService}
        textContent={textContent}
        type={type}
      />
      <StyledExtraItemInfo>
        {type !== PatientModes.PATIENTS_LIST && (
          <StyledTime>
            {type === PatientModes.SCHEDULE && startsAt && (
              <Text cursor="pointer" data-cy="patient-appointment-time" isBold={true} size="sm">
                {format(new Date(startsAt), "p")}
              </Text>
            )}

            {isUnfinishedNotesType && dateToDisplay && (
              <>
                {!dateOfService && (
                  <StyledDateLabel>
                    <Text color="darkGray" cursor="pointer" data-cy="unfinished-notes-time-label" size="xs">
                      {t("pages.unfinishedNotes.createdLabel")}
                    </Text>
                  </StyledDateLabel>
                )}
                <Text cursor="pointer" data-cy="unfinished-notes-time" size="sm">
                  {getNotesDate(dateToDisplay)}
                </Text>
              </>
            )}
          </StyledTime>
        )}
        <StatusCell hasDeleteButton={hasDeleteButton} onDelete={onDelete} status={cellStatus} type={type} />
      </StyledExtraItemInfo>
    </StyledBody>
  );
};

export { ListPanel };

export default ListPanel;
