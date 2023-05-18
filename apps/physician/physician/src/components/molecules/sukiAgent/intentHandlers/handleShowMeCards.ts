import i18n from "i18next";
import _isNil from "lodash/isNil";
import { batch } from "react-redux";
import _includes from "lodash/includes";
import { Location } from "react-router-dom";
import { ClientEmitEventTypes, Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { noteActions } from "../../../../redux/note";
import { cardTypeReader } from "../../../../readers";
import { agentActions } from "../../../../redux/agent";
import { toastsActions } from "../../../../redux/toast";
import { SocketTransmitEvent } from "../../../../socket";
import { SukiAgentState, TOAST_TYPES } from "../../../../constants";
import { isOrgEmrIntegrated } from "../../../../pages/settings/helpers";
import { compositionReader, metadataReader, noteReader, patientReader } from "../../../../readers";

function handleShowMeCards(
  location: Location,
  cardType: string,
  dispatch: Dispatch,
  getReduxStoreState: any,
  transmitEvent: (event: SocketTransmitEvent) => void
) {
  const isNotePage = _includes(location?.pathname, Paths.Note);
  const isPatientProfilePage = _includes(location?.pathname, Paths.PatientProfile);

  const { agent, note } = getReduxStoreState();
  const composition = noteReader.composition(note);
  const metadata = compositionReader.metadata(composition);
  const patient = metadataReader.patient(metadata);
  const hasPatient = !!patientReader.id(patient);
  const cardTypes = cardTypeReader.cardTypes(note);
  const { isActive: isAgentActive } = agent;
  const { isReadOnly: isNoteReadOnly, activeSectionId } = note;

  if (isNotePage && !hasPatient) {
    dispatch(toastsActions.add({ message: i18n.t("errors.notes.unknownPatient"), type: TOAST_TYPES.ERROR }));
  }

  if ((isNotePage || isPatientProfilePage) && !isOrgEmrIntegrated()) {
    dispatch(toastsActions.add({ message: i18n.t("errors.s2.showMeCommand"), type: TOAST_TYPES.ERROR }));
  }

  // If User Note does not have any card types in Redux, don't show it in Show me cards
  // As Redux is already updated with the expected cards.
  // Also return if its not in note/patient profile context, the card type is nil and not a intergrated user.
  if (
    !_includes(cardTypes, cardType) ||
    (!isNotePage && !isPatientProfilePage) ||
    _isNil(cardType) ||
    !isOrgEmrIntegrated() ||
    (isNotePage && !hasPatient)
  ) {
    dispatch(agentActions.setAgentState(SukiAgentState.CANCELLED));
    playSound(AgentSounds.ERROR);
    return;
  }

  playSound(AgentSounds.END_OF_UTTERANCE);
  batch(() => {
    dispatch(noteActions.setCardsVisibility(true));
    dispatch(noteActions.setCurrentCardType(cardType));
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  });

  isNotePage &&
    !isNoteReadOnly &&
    isAgentActive &&
    activeSectionId &&
    transmitEvent({
      type: ClientEmitEventTypes.CHANGE_SECTION,
      data: {
        sectionId: activeSectionId
      }
    });
}

export default handleShowMeCards;
