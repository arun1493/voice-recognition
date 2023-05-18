import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import PatientChartsController from ".";
import PatientChartsService from "../../services/PatientChartsService";

describe("PatientCharts controller test", () => {
  let getDynamicChartsData, res, req;

  beforeEach(() => {
    getDynamicChartsData = jest.spyOn(PatientChartsService, "getDynamicChartsData");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getPatientAllergies function success", async () => {
    getDynamicChartsData.mockImplementation(() =>
      Promise.resolve({ data: [{ type: "ALLERGIES", content: "Some content" }] })
    );

    await PatientChartsController.getPatientAllergies(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ data: [{ type: "ALLERGIES", content: "Some content" }] });
  });

  it("getPatientAllergies function failed", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientChartsController.getPatientAllergies(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientMedications function success", async () => {
    getDynamicChartsData.mockImplementation(() =>
      Promise.resolve({ data: [{ type: "CURRENT_MEDICATION", content: "Some content" }] })
    );

    await PatientChartsController.getPatientMedications(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ data: [{ type: "CURRENT_MEDICATION", content: "Some content" }] });
  });

  it("getPatientMedications function failed", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientChartsController.getPatientMedications(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientMedicalHistory function success", async () => {
    getDynamicChartsData.mockImplementation(() =>
      Promise.resolve({ data: [{ type: "PAST_MEDICAL_HISTORY", content: "Some content" }] })
    );

    await PatientChartsController.getPatientMedicalHistory(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ data: [{ type: "PAST_MEDICAL_HISTORY", content: "Some content" }] });
  });

  it("getPatientMedicalHistory function failed", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientChartsController.getPatientMedicalHistory(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientVitals function success", async () => {
    getDynamicChartsData.mockImplementation(() =>
      Promise.resolve({ data: [{ type: "VITALS_CHARTS_DATA_TYPES", content: "Some content" }] })
    );

    await PatientChartsController.getPatientVitals(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ data: [{ type: "VITALS_CHARTS_DATA_TYPES", content: "Some content" }] });
  });

  it("getPatientVitals function failed", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientChartsController.getPatientVitals(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientSurgicalHistory function success", async () => {
    getDynamicChartsData.mockImplementation(() =>
      Promise.resolve({ data: [{ type: "PAST_SURGICAL_HISTORY", content: "Some content" }] })
    );

    await PatientChartsController.getPatientSurgicalHistory(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ data: [{ type: "PAST_SURGICAL_HISTORY", content: "Some content" }] });
  });

  it("getPatientSurgicalHistory function failed", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientChartsController.getPatientSurgicalHistory(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
