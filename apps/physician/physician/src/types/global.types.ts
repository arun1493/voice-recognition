import { Action, Dispatch } from "@reduxjs/toolkit";

import { FeatureFlagKeys } from "../constants";

type DispatchType = Dispatch<Action<string>>;

type Timestamp = {
  seconds: number;
  nanos: number;
};

type FeatureFlag = {
  enabled: boolean;
  key: FeatureFlagKeys;
};

export { DispatchType as Dispatch, FeatureFlag, Timestamp };
