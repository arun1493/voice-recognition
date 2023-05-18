import { AxiosResponseHeaders } from "axios";
import { LoadingStatus } from "../../constants";

import { getUserDetails, userReducer } from "./user.slice";

describe("user reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      loadingStatus: LoadingStatus.NOT_LOADED,
      userDetails: null
    };

    expect(userReducer(undefined, { type: "" })).toEqual(expected);
  });

  it("should handle getUserDetails", () => {
    let state = userReducer(undefined, getUserDetails.pending("", ""));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.LOADING
      })
    );

    state = userReducer(
      state,
      getUserDetails.fulfilled(
        {
          data: { user: { userType: "test" } },
          config: {},
          headers: "" as AxiosResponseHeaders,
          status: 200,
          statusText: "OK"
        },
        "",
        "test@suki.ai"
      )
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.LOADED,
        userDetails: { userType: "test" }
      })
    );

    state = userReducer(state, getUserDetails.rejected(new Error("error"), "", ""));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: LoadingStatus.ERROR,
        userDetails: { userType: "test" }
      })
    );
  });
});
