import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";

import { EMR_FEATURE_KEY, emrReducer } from "./emr";
import { OOBE_FEATURE_KEY, oobeReducer } from "./oobe";
import { USER_FEATURE_KEY, userReducer } from "./user";
import { NOTE_FEATURE_KEY, noteReducer } from "./note";
import { PAGE_FEATURE_KEY, pageReducer } from "./page";
import { AGENT_FEATURE_KEY, agentReducer } from "./agent";
import { TOASTS_FEATURE_KEY, toastsReducer } from "./toast";
import { MODALS_FEATURE_KEY, modalsReducer } from "./modals";
import { SCRIPTS_FEATURE_KEY, scriptsReducer } from "./scripts";
import { TOOLTIP_FEATURE_KEY, tooltipReducer } from "./tooltip";
import { PASSWORD_FEATURE_KEY, passwordReducer } from "./password";
import { PATIENTS_FEATURE_KEY, patientsReducer } from "./patients";
import { SETTINGS_FEATURE_KEY, settingsReducer } from "./settings";
import { NOTE_TYPES_FEATURE_KEY, noteTypesReducer } from "./noteTypes";
import { INTRODUCTION_FEATURE_KEY, introReducer } from "./introduction";
import { THIN_CLIENT_FEATURE_KEY, thinClientReducer } from "./thinClient";
import { ORGANIZATION_FEATURE_KEY, organizationReducer } from "./organization";
import { FEATURE_FLAGS_FEATURE_KEY, featureFlagsReducer } from "./featureFlags";

const reducers = combineReducers({
  [AGENT_FEATURE_KEY]: agentReducer,
  [EMR_FEATURE_KEY]: emrReducer,
  [FEATURE_FLAGS_FEATURE_KEY]: featureFlagsReducer,
  [INTRODUCTION_FEATURE_KEY]: introReducer,
  [MODALS_FEATURE_KEY]: modalsReducer,
  [NOTE_TYPES_FEATURE_KEY]: noteTypesReducer,
  [NOTE_FEATURE_KEY]: noteReducer,
  [OOBE_FEATURE_KEY]: oobeReducer,
  [ORGANIZATION_FEATURE_KEY]: organizationReducer,
  [PAGE_FEATURE_KEY]: pageReducer,
  [PATIENTS_FEATURE_KEY]: patientsReducer,
  [PASSWORD_FEATURE_KEY]: passwordReducer,
  [SCRIPTS_FEATURE_KEY]: scriptsReducer,
  [SETTINGS_FEATURE_KEY]: settingsReducer,
  [THIN_CLIENT_FEATURE_KEY]: thinClientReducer,
  [TOASTS_FEATURE_KEY]: toastsReducer,
  [TOOLTIP_FEATURE_KEY]: tooltipReducer,
  [USER_FEATURE_KEY]: userReducer
});

const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
    devTools: process.env.NODE_ENV !== "production",
    enhancers: [],
    preloadedState
  });

const store = setupStore();

type AppDispatch = typeof store.dispatch;
type GetReduxStoreStateType = () => RootState;
type RootState = ReturnType<typeof reducers>;

const getReduxStoreState = store.getState;

export { AppDispatch, getReduxStoreState, GetReduxStoreStateType, RootState, setupStore };

export default store;
