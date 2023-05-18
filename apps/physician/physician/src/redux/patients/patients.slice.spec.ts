import { patientsReducer } from "./patients.slice";

describe("patients reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      scheduleAppointents: [],
      patientsList: []
    };

    expect(patientsReducer(undefined, { type: "" })).toEqual(expected);
  });
});
