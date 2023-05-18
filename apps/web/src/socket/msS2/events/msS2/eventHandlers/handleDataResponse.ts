import _isEmpty from "lodash/isEmpty";
import { ClientReceiveEventTypes, S2_RESPONSE_TYPES } from "@suki-web/suki-business";

import {
  convertEMRSubmissionStatusFromProto,
  convertMetadataFromProto,
  convertS2SectionsFromProto,
  convertSmsCompositionFromProtoForS2Clients
} from "../../../../../helpers";
import handleServerResponse from "./handleServerResponse";
import { DialogResponse } from "../../../../../grpc/generated/suki/pb/s2/DialogResponse";

function handleDataResponse(s2Response: DialogResponse, { socket }: any) {
  const {
    error,
    get_composition_or_note_response,
    intent,
    response,
    section_response,
    server_response,
    server_submit_composition_response
  } = s2Response;

  if (!_isEmpty(error)) {
    socket.emit(ClientReceiveEventTypes.S2_ERROR, { error });
    return;
  }

  if (!_isEmpty(intent)) {
    socket.emit(ClientReceiveEventTypes.INTENT, intent);
    return;
  }

  if (!_isEmpty(section_response)) {
    const { sections, section_response_type } = section_response;

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.SCRIPT_INSERT) {
      return socket.emit(ClientReceiveEventTypes.SCRIPT_INSERT_SUCCESS, {
        sections: convertS2SectionsFromProto(sections)
      });
    }

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.SCRIPT_CHANGE_SECTION) {
      return socket.emit(ClientReceiveEventTypes.SCRIPT_CHANGE_SECTION, {
        sections: convertS2SectionsFromProto(sections)
      });
    }

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.COPY_FORWARD_SECTION) {
      return socket.emit(ClientReceiveEventTypes.COPY_FORWARD_SECTION, {
        sections: convertS2SectionsFromProto(sections)
      });
    }

    if (
      section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.UPDATE ||
      section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.SECTION_FORMATTED
    ) {
      return socket.emit(ClientReceiveEventTypes.SECTION_UPDATE, {
        sections: convertS2SectionsFromProto(sections)
      });
    }

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.UNDO_DELETE_THIS_UPDATE) {
      return socket.emit(ClientReceiveEventTypes.UNDO_LAST_UPDATE, {
        sections: convertS2SectionsFromProto(sections)
      });
    }

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.ADD) {
      const response = {
        sections: convertS2SectionsFromProto(sections)
      };
      return socket.emit(ClientReceiveEventTypes.SECTION_ADD_RESPONSE, response);
    }

    if (section_response_type === S2_RESPONSE_TYPES.SECTION_RESPONSE.DELETE) {
      const response = {
        sections: convertS2SectionsFromProto(sections)
      };
      return socket.emit(ClientReceiveEventTypes.SECTION_DELETE_RESPONSE, response);
    }

    if (section_response_type) {
      return socket.emit(ClientReceiveEventTypes.SECTION_RESPONSE_TYPE, section_response_type);
    }
  }

  if (server_submit_composition_response) {
    const { submit_composition_response_type, submit_composition_response, submit_composition_response_error_message } =
      server_submit_composition_response;

    const response = {
      submitCompositionResponseType: submit_composition_response_type,
      submitCompositionResponse: submit_composition_response && {
        noteId: submit_composition_response.note_id,
        submissionStatus: convertEMRSubmissionStatusFromProto(submit_composition_response.submission_status),
        metadata: convertMetadataFromProto(submit_composition_response.metadata)
      },
      submitCompositionResponseErrorMessage: submit_composition_response_error_message
    };

    return socket.emit(ClientReceiveEventTypes.SERVER_SUBMIT_COMPOSITION_RESPONSE, response);
  }

  if (!_isEmpty(get_composition_or_note_response)) {
    const response = {
      composition: convertSmsCompositionFromProtoForS2Clients(get_composition_or_note_response.composition, true),
      note: "",
      compositionOrNote: get_composition_or_note_response.composition_or_note
    };
    return socket.emit(ClientReceiveEventTypes.COMPOSITION_OR_NOTE_RESPONSE, response);
  }

  if (!_isEmpty(server_response)) {
    handleServerResponse(server_response, socket);
  }

  // This is for testing purpose only and soon be deprecated!
  socket.emit("s2", s2Response);
}

export default handleDataResponse;
