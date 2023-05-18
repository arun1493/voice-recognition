import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { compareDesc } from "date-fns";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { NoteSources } from "@suki-web/suki-business";

import SMSService from "../../services/SMSService";
import AppointmentsService from "../../services/AppointmentsService";
import { ERROR_STATEMENTS, METADATA, NOTE_STATUS } from "../../constants";
import { cloudLogger, convertCompositionFromProto, convertNoteFromProto, getContext } from "../../helpers";

class CompositionsController {
  getUnfinishedCompositions = async (req: Request, res: Response) => {
    const includeMetadata = _get(req, "query.includeMetadata");
    const includeSections = _get(req, "query.includeSections");
    const ctx = getContext(req, true);

    const rpcInput = {
      include_metadata: includeMetadata,
      include_sections: includeSections,
      organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID],
      source: {
        source_type: NoteSources.USER
      },
      user_id: ctx[METADATA.SUKI_USER_ID]
    };

    try {
      cloudLogger.info("Getting unfinished compositions");
      const [incomplete, needsReview, needDocSignOff] = await Promise.all([
        SMSService.getComposition({ ...rpcInput, status: NOTE_STATUS.INCOMPLETE }, ctx),
        SMSService.getComposition({ ...rpcInput, status: NOTE_STATUS.NEEDS_REVIEW }, ctx),
        SMSService.getComposition({ ...rpcInput, status: NOTE_STATUS.NEED_DOCTOR_SIGN_OFF }, ctx)
      ]);
      const combinedResults = _get(incomplete, "compositions", [])
        .concat(_get(needsReview, "compositions", []))
        .concat(_get(needDocSignOff, "compositions", []));

      cloudLogger.info("Getting the results");
      const results = combinedResults.map(convertCompositionFromProto);

      cloudLogger.info("Sorting the results");
      results.sort((a, b) => {
        const aDate = a.metadata.appointment?.startsAt || a.createdAt;
        const bDate = b.metadata.appointment?.startsAt || b.createdAt;

        return compareDesc(new Date(aDate), new Date(bDate));
      });

      cloudLogger.info("Completed getting unfinished compositions", req);
      res.status(StatusCodes.OK).json({ count: results.length, results });
    } catch (error) {
      cloudLogger.error("Error in getting unfinished compositions", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getCompletedNotes = async (req: Request, res: Response) => {
    const includeMetadata = _get(req, "query.includeMetadata");
    const includeSections = _get(req, "query.includeSections");
    const ctx = getContext(req, true);

    const rpcInput = {
      include_metadata: includeMetadata,
      include_sections: includeSections,
      organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID],
      user_id: ctx[METADATA.SUKI_USER_ID]
    };

    try {
      cloudLogger.info("Getting completed notes");
      const response = await SMSService.getNote(rpcInput, ctx);
      const results = response?.notes?.map(convertNoteFromProto);
      cloudLogger.info("Successfully completed getting completed notes", req, { rpcInput });
      res.status(StatusCodes.OK).json({ count: response?.notes?.length, data: results });
    } catch (error) {
      cloudLogger.error("Error in getting completed notes", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  deleteComposition = async (req: Request, res: Response) => {
    const compositionId = _get(req, "params.compositionId");

    const ctx = getContext(req, true);

    // Before deleting a composition, we need to fetch them so that we can update their appointments
    const rpcCompositionInput = {
      ids: [compositionId],
      include_metadata: true,
      organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID],
      source: {
        source_type: NoteSources.USER
      },
      user_id: ctx[METADATA.SUKI_USER_ID]
    };

    try {
      cloudLogger.info("Getting composition response");
      const compositionsResponse = await SMSService.getComposition(rpcCompositionInput, ctx);

      const rpcInput = {
        organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID],
        ids: [compositionId]
      };
      cloudLogger.info("Deleting the composition response");
      const deleteCompositionResponse = await SMSService.deleteComposition(rpcInput, ctx);

      const { status } = deleteCompositionResponse;
      const { compositions } = compositionsResponse as any;

      // Once composition is successfully deleted, we iterate through the deleted compositions
      // and update each of their appointments to not be associated with that composition any more.
      cloudLogger.info("Updating appointments in each deleted compositions");
      status &&
        compositions?.forEach(async (comp) => {
          const appt = _get(comp, "metadata.appointment");
          if (!_isEmpty(appt) && appt?.id) {
            const updateApptReq = {
              appointment_id: appt.id,
              composition_id: compositionId,
              organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID]
            };

            await AppointmentsService.removeCompositionFromAppointment(updateApptReq, ctx);
          }
        });
      cloudLogger.info("Deleted composition successfully", req, { rpcCompositionInput });
      res.status(StatusCodes.OK).json({
        success: true
      });
    } catch (error) {
      cloudLogger.error("Error in deleting composition", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new CompositionsController();
