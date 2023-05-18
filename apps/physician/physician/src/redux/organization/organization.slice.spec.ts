import { organizationReducer } from "./organization.slice";

describe("organization reducer", () => {
  it("should handle initial state", () => {
    expect(organizationReducer(undefined, { type: "" })).toEqual({});
  });

  it("should handle real data", () => {
    const payload = {
      id: "293ba45a-e6a5-4c4e-b4b5-f57b50f8709d",
      name: "Epic AppOrchard (OAuth)",
      enhancedReview: "DEFAULT_ON",
      gcpAccountId: ""
    };
    const action = { payload, type: "organization/updateOrganization" };
    expect(organizationReducer(undefined, action)).toEqual(payload);
  });
});
