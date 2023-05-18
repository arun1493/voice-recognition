import _noop from "lodash/noop";

import { modalsReducer } from "./modals.slice";
import { SubmissionModals } from "../../constants";

describe("modals reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      addToScheduleOrList: {
        isActive: false
      },
      deleteNote: {
        isActive: false
      },
      emrSignIn: {
        isActive: false
      },
      ICD10Lookup: {
        isActive: false
      },
      noteRefresh: {
        isActive: false
      },
      noteTypeDetails: {
        isActive: false
      },
      noteTypes: {
        isActive: false
      },
      scriptDetails: {
        isActive: false,
        scriptId: ""
      },
      scriptsList: {
        isActive: false
      },
      searchPatients: {
        isActive: false,
        type: "general",
        onAddPatient: _noop
      },
      searchPatientsInHeader: {
        isActive: false
      },
      signNote: {
        hasIgnoreMissingICDCodes: false,
        isActive: false,
        successTipMessage: "",
        type: SubmissionModals.CONFIRM_CODES
      },
      whatCanISay: {
        isActive: false,
        type: "general"
      }
    };

    expect(modalsReducer(undefined, { type: "" })).toEqual(expected);
  });
});
