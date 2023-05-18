import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { logger } from "../../../api";
import { queryClient } from "../../../app";
import { NoteActionHandlerArguments } from "../../../types";
import { QUERY_NAMES, USER_REQUEST_TYPE } from "../../../constants";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../../../readers";

const handleSaveToUnfinishedNotes = ({ getState, dispatch, transmitEvent }: NoteActionHandlerArguments) => {
  const { note } = getState();
  const { composition, compositionStatus } = note;

  // Whenever doctor leaves note without submission save it to unfinished note
  // TODO: Check while submission you are not saving it to unfinished notes
  const isSubmissionSuccessful = compositionStatus?.noteSubmissionSuccess;
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);

  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);
  const noteTypeId = metadataReader.noteTypeId(metadata);

  const patientId = patientReader.id(patient);
  const appointmentId = appointmentReader.id(appointment);

  if (!isSubmissionSuccessful) {
    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        appointmentId,
        compositionId,
        noteTypeId,
        patientId,
        requestType: USER_REQUEST_TYPE.SAVE_COMPOSITION_TO_UNFINISHED
      }
    });

    queryClient.invalidateQueries([QUERY_NAMES.UNFINISHED_NOTES]);
  } else {
    logger.error({ message: "Issue unsetting doc context. noteId is empty or socket disabled" });
  }
};

export { handleSaveToUnfinishedNotes };
