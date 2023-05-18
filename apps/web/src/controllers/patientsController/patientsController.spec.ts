import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import PatientsController from ".";
import { convertPatientFromProto } from "../../helpers";
import PatientsService from "../../services/PatientsService";
import { Patient } from "../../grpc/generated/learningmotors/pb/patients/Patient";

const patient: Patient = {
  id: "0550e948-bdaa-4639-91ad-44aacca46cd0",
  person: {
    first_name: "Jon",
    middle_name: "",
    last_name: "Zinga",
    prefix: "",
    gender: "FEMALE",
    dob: { seconds: "155941200", nanos: 0 },
    suffix: ""
  },
  mrn: "235235",
  created_at: null,
  updated_at: null,
  deleted_at: null,
  emr_id: "",
  emr_id_type: "",
  fhir_id: "",
  fhir_id_type: ""
};

const patientListItem = {
  id: "0550e948-bdaa-4639-91ad-44aacca46cd0",
  fhirId: "",
  person: {
    firstName: "Jon",
    middleName: "",
    lastName: "Zinga",
    prefix: "",
    suffix: "",
    gender: "FEMALE",
    dateOfBirth: "1974-12-10T21:00:00.000Z"
  },
  mrn: "235235",
  emrId: "",
  emrIdType: ""
};

describe("Patients controller test", () => {
  let addToPatientList, getPatients, getPatientList, removeFromPatientList, searchPatients, res, req;

  beforeEach(() => {
    addToPatientList = jest.spyOn(PatientsService, "addToPatientList");
    getPatients = jest.spyOn(PatientsService, "getPatients");
    getPatientList = jest.spyOn(PatientsService, "getPatientList");
    searchPatients = jest.spyOn(PatientsService, "searchPatients");
    removeFromPatientList = jest.spyOn(PatientsService, "removeFromPatientList");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("addToPatientList function success", async () => {
    addToPatientList.mockImplementation(() => Promise.resolve());
    await PatientsController.addToPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ success: true });
  });

  it("addToPatientList function failed", async () => {
    addToPatientList.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientsController.addToPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientById function success", async () => {
    getPatients.mockImplementation(() => Promise.resolve({ patients: [patient] }));
    await PatientsController.getPatientById(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith(convertPatientFromProto(patient));
  });

  it("getPatientById function failed", async () => {
    getPatients.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientsController.getPatientById(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("getPatientList function success", async () => {
    getPatientList.mockImplementation(() => Promise.resolve({ patient_list: { patients: [patient] } }));
    await PatientsController.getPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ patientList: { patients: [patientListItem] } });
  });

  it("getPatientList function failed", async () => {
    getPatientList.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientsController.getPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("searchPatients function success", async () => {
    searchPatients.mockImplementation(() => Promise.resolve({ patients: [patient] }));
    await PatientsController.searchPatients(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ count: 1, results: [patientListItem] });
  });

  it("searchPatients function failed", async () => {
    searchPatients.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientsController.searchPatients(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("removeFromPatientList function success", async () => {
    removeFromPatientList.mockImplementation(() => Promise.resolve());
    await PatientsController.removeFromPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ success: true });
  });

  it("removeFromPatientList function failed", async () => {
    removeFromPatientList.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientsController.removeFromPatientList(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
