import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { buildScope, cloudLogger, getContext, getDateFromString } from "../../helpers";
import EmrNotesService from "../../services/EmrNotesService";
import { ERROR_STATEMENTS } from "../../constants";

class EmrNotesController {
  refreshEmrNotes = async (req: Request, res: Response) => {
    const body = _get(req, "body", EMPTY_OBJECT);
    const {
      sukiUserId,
      emrUserId,
      sukiPatientId,
      emrPatientId,
      sukiCompositionId,
      sukiNoteId,
      maxAppointments,
      status,
      fromDate,
      toDate
    } = body;

    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      suki_user_id: sukiUserId,
      emr_user_id: emrUserId,
      suki_patient_id: sukiPatientId,
      emr_patient_id: emrPatientId,
      status: status,
      from_date: getDateFromString(fromDate),
      to_date: getDateFromString(toDate),
      max_appointments: maxAppointments,
      suki_composition_id: sukiCompositionId,
      suki_note_id: sukiNoteId
    };

    try {
      cloudLogger.debug("Received epic emr notes refresh request", req, { rpcInput });
      const response = await EmrNotesService.refreshEmrNotes(rpcInput, ctx);

      cloudLogger.info("Successfully refreshed epic emr notes", req, { response });
      res.status(StatusCodes.OK).json({
        success: true
      });
    } catch (error) {
      cloudLogger.error("Error in refreshing epic emr notes", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new EmrNotesController();
