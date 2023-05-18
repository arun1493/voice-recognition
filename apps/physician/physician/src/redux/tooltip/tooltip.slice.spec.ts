import { initialTooltipState, tooltipReducer } from "./tooltip.slice";

describe("tooltip reducer", () => {
  it("should handle initial state", () => {
    expect(tooltipReducer(undefined, { type: "" })).toEqual(initialTooltipState);
  });
});
