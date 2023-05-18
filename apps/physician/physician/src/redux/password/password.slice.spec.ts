import { LoadingStatus } from "../../constants";
import { passwordReducer, resetPassword } from "./password.slice";

describe("password reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      loadingStatus: LoadingStatus.NOT_LOADED,
      userEmail: ""
    };

    expect(passwordReducer(undefined, { type: "" })).toEqual(expected);
  });

  it("should handle postPasswords", () => {
    let state = passwordReducer(undefined, resetPassword.pending("", ""));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.LOADING
      })
    );

    state = passwordReducer(state, resetPassword.fulfilled(undefined, "", ""));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.LOADED
      })
    );

    state = passwordReducer(state, resetPassword.rejected(new Error("Something went wrong"), "", ""));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.ERROR
      })
    );
  });
});
