import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { USER_REQUEST_TYPE } from "../../../constants";
import { NoteActionHandlerArguments } from "../../../types";
import { compositionReader, metadataReader } from "../../../readers";

const handleAddNewProblem = ({ getState, payload, transmitEvent }: NoteActionHandlerArguments) => {
  const { sectionId } = payload;

  const { note } = getState();
  const { composition } = note;

  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);

  const requestType = USER_REQUEST_TYPE.ADD_SECTION;
  transmitEvent({
    type: ClientEmitEventTypes.USER_REQUEST,
    data: { compositionId, noteTypeId, requestType, sectionId }
  });
};

export { handleAddNewProblem };
