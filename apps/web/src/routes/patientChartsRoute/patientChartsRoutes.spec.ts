import { StatusCodes } from "http-status-codes";

import { request } from "../../helpers/tests";
import PatientChartsService from "../../services/PatientChartsService";

describe("PatientCharts Routes", function () {
  let getDynamicChartsData;

  beforeEach(() => {
    getDynamicChartsData = jest.spyOn(PatientChartsService, "getDynamicChartsData");
  });

  it("get /allergies success", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.resolve({ data: [] }));
    const res = await request.get("/patient-charts/allergies");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /allergies failure", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject());
    const res = await request.get("/patient-charts/allergies");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("get /medical-history success", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.resolve({ data: [] }));
    const res = await request.get("/patient-charts/medical-history");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /medical-history failure", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject());
    const res = await request.get("/patient-charts/medical-history");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("get /vitals success", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.resolve({ data: [] }));
    const res = await request.get("/patient-charts/vitals");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /vitals failure", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject());
    const res = await request.get("/patient-charts/vitals");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("get /surgical-history success", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.resolve({ data: [] }));
    const res = await request.get("/patient-charts/surgical-history");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /surgical-history failure", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject());
    const res = await request.get("/patient-charts/surgical-history");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("get /medications success", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.resolve({ data: [] }));
    const res = await request.get("/patient-charts/medications");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /medications failure", async () => {
    getDynamicChartsData.mockImplementation(() => Promise.reject());
    const res = await request.get("/patient-charts/medications");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });
});
