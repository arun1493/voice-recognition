import { settingsReducer } from "./settings.slice";

describe("settings reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      theme: "light"
    };
    expect(settingsReducer(undefined, { type: "" })).toEqual(expected);
  });
});
