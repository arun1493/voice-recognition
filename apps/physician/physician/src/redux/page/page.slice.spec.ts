import { pageReducer } from "./page.slice";

describe("page reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      isNotFoundPage: false
    };

    expect(pageReducer(undefined, { type: "" })).toEqual(expected);
  });
});
