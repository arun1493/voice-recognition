import _isEmpty from "lodash/isEmpty";
import { EMPTY_OBJECT, Process } from "@suki-web/suki-business";
import { ClientReceiveEventTypes, S2_RESPONSE_TYPES } from "@suki-web/suki-business";

import { convertSmsCompositionFromProtoForS2Clients } from "../../../../../helpers";

const isFailureServerResponse = (next: any, params: any) => {
  const { response_type } = params;
  if (
    response_type === S2_RESPONSE_TYPES.SERVER_RESPONSE.FAILURE ||
    response_type !== S2_RESPONSE_TYPES.SERVER_RESPONSE.SUCCESS
  ) {
    return;
  }

  return next(params);
};

const isCompositionCreatedInNotepad = (next: any, params: any) => {
  const { socket, composition_created_response = EMPTY_OBJECT } = params;
  if (!_isEmpty(composition_created_response)) {
    socket.emit(ClientReceiveEventTypes.COMPOSITION_CREATED_IN_NOTEPAD, composition_created_response);
    return;
  }

  return next(params);
};

const isNewComposition = (next: any, params: any) => {
  const { socket, composition_response } = params;
  if (!_isEmpty(composition_response)) {
    const { note_composition, composition_response_type } = composition_response;
    if (composition_response_type === S2_RESPONSE_TYPES.SERVER_RESPONSE.NEW) {
      socket.emit(ClientReceiveEventTypes.CREATE_COMPOSITION_ACKNOWLEDGEMENT, {
        compositionId: note_composition?.id
      });
      return;
    }
  }
  return next(params);
};

const isUpdatedComposition = (next: any, params: any) => {
  const { socket, composition_response } = params;

  if (_isEmpty(composition_response)) return;

  const { note_composition = EMPTY_OBJECT, composition_response_type, section_in_focus_id } = composition_response;

  if (composition_response_type !== S2_RESPONSE_TYPES.SERVER_RESPONSE.UPDATED) return;

  if (!_isEmpty(section_in_focus_id)) {
    socket.emit(ClientReceiveEventTypes.UNDO, {
      composition: convertSmsCompositionFromProtoForS2Clients(note_composition, true),
      sectionInFocusId: section_in_focus_id
    });

    return;
  }

  socket.emit(ClientReceiveEventTypes.COMPOSITION_UPDATED, {
    composition: convertSmsCompositionFromProtoForS2Clients(note_composition, true)
  });
};

const HANDLING_SERVER_RESPONSE_PROCESS = new Process()
  .addHandler(isFailureServerResponse)
  .addHandler(isCompositionCreatedInNotepad)
  .addHandler(isNewComposition)
  .addHandler(isUpdatedComposition);

function handleServerResponse(response: any, socket: any) {
  const { composition_created_response, composition_response, response_type, section_in_focus_id } = response;
  HANDLING_SERVER_RESPONSE_PROCESS.run({
    composition_created_response,
    composition_response,
    response_type,
    section_in_focus_id,
    socket
  });
}

export default handleServerResponse;
