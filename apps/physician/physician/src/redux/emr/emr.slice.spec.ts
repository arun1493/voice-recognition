import { emrReducer } from "./emr.slice";

describe("tasks reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      connectionStatus: "PENDING",
      emrData: {},
      isEmrIntegrated: false,
      loadingStatus: "not loaded",
      tokens: {}
    };

    expect(emrReducer(undefined, { type: "" })).toEqual(expected);
  });
});
