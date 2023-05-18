import { oobeReducer } from "./oobe.slice";

describe("oobe reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      isOobeCompleted: false,
      notesToBeCompleted: 5,
      tasksStatus: {},
      tasksCompleted: 0,
      tasksToBeCompleted: 5
    };

    expect(oobeReducer(undefined, { type: "" })).toEqual(expected);
  });
});
