import { TOAST_TYPES } from "../../constants";
import { initialToastsState, toastsActions, toastsReducer } from "./toasts.slice";

describe("toasts reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      toastList: []
    };
    expect(toastsReducer(undefined, { type: "" })).toEqual(expected);
  });

  it("should handle addToast", () => {
    const state = toastsReducer(
      undefined,
      toastsActions.add({ message: "This is severe error", type: TOAST_TYPES.ERROR })
    );

    expect(state.toastList[0].type).toEqual("severe");
    expect(state.toastList[0].message).toEqual("This is severe error");
  });

  it("should handle removeToast", () => {
    const state = toastsReducer(
      { ...initialToastsState, toastList: [{ id: "id", message: "This is severe error", type: "severe" }] },
      toastsActions.remove({ id: "id" })
    );

    expect(state).toEqual({
      toastList: []
    });
  });
});
