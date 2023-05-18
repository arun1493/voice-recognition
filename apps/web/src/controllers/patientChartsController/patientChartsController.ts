import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  DYNAMIC_CHARTS_DATA_TYPES,
  ERROR_STATEMENTS,
  LAB_DATA_TYPES,
  METADATA,
  VITALS_CHARTS_DATA_TYPES
} from "../../constants";
import patientChartsService from "../../services/PatientChartsService";
import { cloudLogger, convertDynamicChartDataFromProto, getContext } from "../../helpers";

type dynamicChartsDataType = keyof typeof DYNAMIC_CHARTS_DATA_TYPES;

const { ALLERGIES, PAST_MEDICAL_HISTORY, PAST_SURGICAL_HISTORY, CURRENT_MEDICATION } = DYNAMIC_CHARTS_DATA_TYPES;

const patientChartsControllerCreator =
  (requestedData: dynamicChartsDataType | typeof VITALS_CHARTS_DATA_TYPES | typeof LAB_DATA_TYPES) =>
  async (req: Request, res: Response) => {
    const sukiPatientId = _get(req, "query.sukiPatientId");
    const emrPatientId = _get(req, "query.emrPatientId");
    const fhirPatientId = _get(req, "query.fhirPatientId");
    const emrAppointmentDepartmentId = _get(req, "query.emrAppointmentDepartmentId");
    const refreshData = _get(req, "query.refreshData") === "true";

    const ctx = getContext(req, true);

    try {
      cloudLogger.info("Initializing patient charts controller creator");
      const rpcInput = {
        organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID],
        suki_patient_id: sukiPatientId,
        emr_patient_id: emrPatientId,
        fhir_patient_id: fhirPatientId,
        emr_appointment_department_id: emrAppointmentDepartmentId,
        requested_data: Array.isArray(requestedData) ? requestedData : [requestedData],
        refresh_data: refreshData
      };

      const dynamicCharts = await patientChartsService.getDynamicChartsData(rpcInput, ctx);

      cloudLogger.info("Completed patient charts controller creator", req, {
        rpcInput
      });
      res.status(StatusCodes.OK).json({
        data: dynamicCharts.data.map(convertDynamicChartDataFromProto)
      });
    } catch (error) {
      cloudLogger.error("Error in patients chart controller creator", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }
  };

class PatientChartsController {
  syncChartsData = async (req: Request, res: Response) => {
    const sukiPatientId = _get(req, "query.sukiPatientId");
    const emrPatientId = _get(req, "query.emrPatientId");
    const fhirPatientId = _get(req, "query.fhirPatientId");
    const emrAppointmentDepartmentId = _get(req, "query.emrAppointmentDepartmentId");
    const emrEncounterId = _get(req, "query.emrEncounterId");
    const fhirEncounterId = _get(req, "query.fhirEncounterId");
    const sukiAppointmentId = _get(req, "query.sukiAppointmentId");

    const ctx = getContext(req, true);

    try {
      cloudLogger.info("Syncing charts data", req);
      const rpcInput = {
        scope: {
          organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID]
        },
        suki_patient_id: sukiPatientId,
        emr_patient_id: emrPatientId,
        fhir_patient_id: fhirPatientId,
        emr_appointment_department_id: emrAppointmentDepartmentId,
        emr_encounter_id: emrEncounterId,
        fhir_encounter_id: fhirEncounterId,
        suki_appointment_id: sukiAppointmentId
      };

      const patientCharts = await patientChartsService.syncChartsData(rpcInput, ctx);

      cloudLogger.info("Finished sycning charts data", req);
      res.status(StatusCodes.OK).json({
        numActiveProblemsSyncd: patientCharts.num_active_problems_syncd,
        numInactiveProblemsSyncd: patientCharts.num_inactive_problems_syncd,
        numEncounterDiagnosesSyncd: patientCharts.num_encounter_diagnoses_syncd
      });
    } catch (error) {
      cloudLogger.error("Error in syncing charts data", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }
  };

  getPatientMedications = patientChartsControllerCreator(CURRENT_MEDICATION as dynamicChartsDataType);

  getPatientAllergies = patientChartsControllerCreator(ALLERGIES as dynamicChartsDataType);

  getPatientMedicalHistory = patientChartsControllerCreator(PAST_MEDICAL_HISTORY as dynamicChartsDataType);

  getPatientVitals = patientChartsControllerCreator(VITALS_CHARTS_DATA_TYPES);

  getPatientSurgicalHistory = patientChartsControllerCreator(PAST_SURGICAL_HISTORY as dynamicChartsDataType);

  gePatientLabsData = patientChartsControllerCreator(LAB_DATA_TYPES);
}

export default new PatientChartsController();
