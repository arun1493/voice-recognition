import _noop from "lodash/noop";
import { useClickAway } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { NavigationIcon, Text } from "@suki-web/suki-ui";
import { FunctionComponent, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppointmentTypes, ClientEmitEventTypes } from "@suki-web/suki-business";

import { NoteMenu } from "../noteMenu";
import { useSocket } from "../../../../socket";
import { NoteOnAction } from "../../../../types";
import { modalsActions } from "../../../../redux/modals";
import { selectIsEmrIntegrated } from "../../../../redux/emr";
import { selectCurrentComposition } from "../../../../redux/note";
import { selectIsWithDelay, tooltipActions } from "../../../../redux/tooltip";
import { NoteActionType, SecondaryEmr, USER_REQUEST_TYPE } from "../../../../constants";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../../../../readers";
import { StyledBackIcon, StyledControlIcon, StyledControlMenu, StyledPatientInfo } from "./controlMenu.styled";
import { getAge, getFullName, getGender, handleNavigateBackFromNote, isNoteReadOnly } from "../../../../helpers";

interface ControlMenuPropTypes {
  isMinimized?: boolean;
  onUndo?: void;
  onAction?: NoteOnAction;
}

const ControlMenu: FunctionComponent<ControlMenuPropTypes> = ({
  isMinimized = false,
  onAction = _noop,
  onUndo = _noop
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { transmitEvent } = useSocket();
  const { noteId } = useParams<{ noteId: string }>();

  const isEmrIntegrated = useSelector(selectIsEmrIntegrated);
  const [isNoteMenuVisible, setIsNoteMenuVisible] = useState(false);
  const isWithDelay = useSelector(selectIsWithDelay);
  const composition = useSelector(selectCurrentComposition);

  const compositionId = compositionReader.compositionId(composition) || noteId;
  const metadata = compositionReader.metadata(composition);

  const noteTypeId = metadataReader.noteTypeId(metadata);
  const appointment = metadataReader.appointment(metadata);
  const isNotePulledFromEmr = metadataReader.pulledNoteFromEmr(metadata);

  const emrType = metadataReader.emrType(metadata);
  const isElationEMR = emrType === SecondaryEmr.ELATION_EMR;

  const patient = metadataReader.patient(metadata);
  const status = metadataReader.status(metadata);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);

  const appointmentId = appointmentReader.id(appointment);
  const patientId = patientReader.id(patient);

  const isDefaultAppointment = appointmentReader.type(appointment) === AppointmentTypes.DEFAULT;
  const isRefreshNoteEnabled =
    patientId && appointmentId && !isNotePulledFromEmr && !isDefaultAppointment && !isElationEMR;
  const isReadOnlyMode = isNoteReadOnly(status);

  const toggleOpen = () => {
    setIsNoteMenuVisible(!isNoteMenuVisible);
    onAction({
      payload: { forceBlur: true },
      type: NoteActionType.SECTION_BLUR
    });
  };

  const handleClose = () => {
    setIsNoteMenuVisible(false);
  };

  useClickAway(ref, handleClose);

  const handleNoteRefresh = () => {
    onAction({
      payload: { forceBlur: true },
      type: NoteActionType.SECTION_BLUR
    });

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        appointmentId,
        compositionId,
        noteTypeId,
        patientId,
        requestType: USER_REQUEST_TYPE.CLICK_NOTES_PULL
      }
    });
    dispatch(modalsActions.showNoteRefreshModal());
  };

  const onMouseEnter = () => {
    dispatch(tooltipActions.setIsWithDelay(true));
  };

  const resetTooltip = () => {
    dispatch(tooltipActions.setIsWithDelay(false));
  };

  const renderPatientInfo = () => {
    const age = getAge(patientReader.personDateOfBirth(patient));
    const gender = getGender(patientReader.personGender(patient));
    const fullName = getFullName(patientReader.person(patient));

    return (
      <StyledPatientInfo isMinimized={isMinimized}>
        {patient && <Text>{fullName}</Text>}
        {patient && <Text>{`${age} • ${gender} `}</Text>}
      </StyledPatientInfo>
    );
  };

  return (
    <StyledControlMenu data-cy="control-menu" onMouseEnter={onMouseEnter} ref={ref}>
      <StyledBackIcon>
        <NavigationIcon
          icon="back"
          onClick={() => handleNavigateBackFromNote(location, navigate, patient)}
          size="2xs"
          testId="note-back-button"
        />
      </StyledBackIcon>
      {renderPatientInfo()}
      {/* TODO[Rohit]: https://sukiai.atlassian.net/browse/DIGI-1173 */}
      {/* <StyledControlIcon>
        <NavigationIcon icon="undo" isDisabled={isUndoDisabled} onClick={onUndo} />
      </StyledControlIcon> */}
      {isEmrIntegrated && !isPartialDictationComposition && (
        <StyledControlIcon>
          <NavigationIcon
            icon="emrSync"
            isDisabled={!isRefreshNoteEnabled || isReadOnlyMode}
            isWithDelay={isWithDelay}
            onClick={handleNoteRefresh}
            resetTooltip={resetTooltip}
          />
        </StyledControlIcon>
      )}
      <NavigationIcon
        icon="kebabMenu"
        isActive={isNoteMenuVisible}
        isWithDelay={isWithDelay}
        onClick={toggleOpen}
        resetTooltip={resetTooltip}
      />
      {isNoteMenuVisible && <NoteMenu isReadOnlyMode={isReadOnlyMode} onClose={handleClose} />}
    </StyledControlMenu>
  );
};

export { ControlMenu };

export default ControlMenu;
