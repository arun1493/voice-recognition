import { initialScriptsState, scriptsReducer } from "./scripts.slice";

describe("scripts reducer", () => {
  it("should handle initial state", () => {
    expect(scriptsReducer(undefined, { type: "" })).toEqual(initialScriptsState);
  });
});
