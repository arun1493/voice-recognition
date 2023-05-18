import _get from "lodash/get";
import _union from "lodash/union";
import _split from "lodash/split";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  cloudLogger,
  convertDiagnosisWithChildrenFromProto,
  convertExistingDiagnosisToProto,
  convertHCCSuggestionFromProto,
  getContext
} from "../../helpers";
import { ERROR_STATEMENTS, METADATA } from "../../constants";
import DiagnosisService from "../../services/DiagnosisService";

class DiagnosisController {
  searchDiagnosis = async (req: Request, res: Response) => {
    const patientId = _get(req, "query.patientId");
    const searchTitle = _get(req, "query.searchTitle");
    const emrEncounterId = _get(req, "query.emrEncounterId");
    const searchDescription = _get(req, "query.searchDescription");

    const ctx = getContext(req, true);

    const rpcInput = {
      search_title: searchTitle,
      search_description: searchDescription,
      patient_id: patientId,
      emr_encounter_id: emrEncounterId
    };

    try {
      cloudLogger.info("Searching diagnosis");
      const response = await DiagnosisService.searchDiagnosis(rpcInput, ctx);

      cloudLogger.info("Successfully completed searching the diagnosis", req, { rpcInput });
      res.status(StatusCodes.OK).json({
        diagnoses: response.diagnoses.map(convertDiagnosisWithChildrenFromProto),
        suggestions: response.suggestions.map(convertDiagnosisWithChildrenFromProto)
      });
    } catch (error) {
      cloudLogger.error("Error in searching diagnosis", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getHCCSuggestions = async (req: Request, res: Response) => {
    const patientId = _get(req, "query.patientId");
    const existingDiagnoses = _get(req, "query.existingDiagnoses");
    const emrEncounterId = _get(req, "query.emrEncounterId");
    const specialties = _get(req, "query.specialties");

    const ctx = getContext(req, true);

    const rpcInput = {
      patient_id: patientId,
      specialties,
      existing_diagnoses: existingDiagnoses && existingDiagnoses.map(convertExistingDiagnosisToProto),
      emr_encounter_id: emrEncounterId
    };

    try {
      cloudLogger.info("Getting the HCC suggestions");
      const response = await DiagnosisService.getHCCSuggestions(rpcInput, ctx);
      cloudLogger.info("Successfully completed getting the HCC suggestions", req, { rpcInput });
      res.status(StatusCodes.OK).json({
        suggestions: response.suggestions.map(convertHCCSuggestionFromProto)
      });
    } catch (error) {
      cloudLogger.error("Error in getting HCC suggestions", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  lookupEDG = async (req: Request, res: Response) => {
    const icd10 = _get(req, "query.icd10");
    const icd10Codes = _union(_split(icd10, ","));
    const ctx = getContext(req, true);

    const rpcInput = {
      icd10_code: icd10Codes,
      org_id: ctx[METADATA.SUKI_ORGANIZATION_ID]
    };

    try {
      cloudLogger.info("Looking up EDG");
      const response = await DiagnosisService.lookupEDG(rpcInput, ctx);
      cloudLogger.info("Successfully completed looking up EDG", req, { rpcInput });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      cloudLogger.error("Error in looking up EDG", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new DiagnosisController();
