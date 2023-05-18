import _some from "lodash/some";
import _filter from "lodash/filter";
import { v4 as uuidv4 } from "uuid";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { ToastProps } from "../../components/molecules";

const TOASTS_FEATURE_KEY = "toasts";

interface ToastsState {
  toastList: Array<ToastProps>;
}

const initialToastsState: ToastsState = {
  toastList: []
};

const isMatchingToastId = (id: string) => (toast: ToastProps) => {
  return toast.id !== id;
};

const isExistedToast = (newToast: ToastProps) => (toast: ToastProps) => {
  return newToast.message === toast.message && newToast.type === toast.type;
};

const toastsSlice = createSlice({
  name: TOASTS_FEATURE_KEY,
  initialState: initialToastsState,
  reducers: {
    add: (state, action) => {
      const isExisted = _some(state.toastList, isExistedToast(action.payload));
      if (isExisted) return;
      const newItem = { ...action.payload, id: uuidv4() };
      state.toastList.unshift(newItem);
    },
    remove: (state, action) => {
      state.toastList = _filter(state.toastList, isMatchingToastId(action.payload.id));
    }
  }
});

const toastsReducer = toastsSlice.reducer;

const toastsActions = toastsSlice.actions;

const getToastsState = (rootState: RootState): ToastsState => rootState[TOASTS_FEATURE_KEY];

const selectToastList = createSelector(getToastsState, (state) => state.toastList);

export { initialToastsState, selectToastList, TOASTS_FEATURE_KEY, toastsActions, toastsReducer };
