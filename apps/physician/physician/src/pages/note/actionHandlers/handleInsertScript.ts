import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { NoteActionHandlerArguments } from "../../../types";
import { LOCAL_STORE, USER_REQUEST_TYPE } from "../../../constants";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../../../readers";

const transmitInsertScript = (
  scriptId: string,
  activeSectionId: string,
  compositionId: string,
  noteTypeId: string,
  transmitEvent: any
) => {
  transmitEvent({
    type: ClientEmitEventTypes.USER_REQUEST,
    data: {
      compositionId: compositionId,
      noteTypeId: noteTypeId,
      scriptId: scriptId,
      sectionId: activeSectionId,
      requestType: USER_REQUEST_TYPE.CLICK_INSERT_SCRIPT
    }
  });
};

const handleInsertScript = ({ getState, payload, transmitEvent }: NoteActionHandlerArguments) => {
  const { activeSectionId, scriptId } = payload;

  if (_isEmpty(scriptId)) {
    return;
  }

  const { note } = getState();
  const { composition } = note;

  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);

  const noteTypeId = metadataReader.noteTypeId(metadata);
  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);

  const patientId = patientReader.id(patient);
  const appointmentId = appointmentReader.id(appointment);

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  if (isEmrUser && patientId) {
    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        appointmentId,
        compositionId,
        noteTypeId,
        patientId,
        requestType: USER_REQUEST_TYPE.CLICK_REFRESH_VITALS_ON_SCREEN
      }
    });
    setTimeout(() => {
      transmitInsertScript(scriptId, activeSectionId, compositionId, noteTypeId, transmitEvent);
    }, 0);
  } else {
    transmitInsertScript(scriptId, activeSectionId, compositionId, noteTypeId, transmitEvent);
  }
};

export { handleInsertScript };
