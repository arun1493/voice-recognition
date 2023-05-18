import i18n from "i18next";

import { TOAST_TYPES } from "../../../../constants";
import { toastsActions } from "../../../../redux/toast";

function handleResourceExhaustedError(payload: any, { dispatch }: any): void {
  dispatch(
    toastsActions.add({
      message: i18n.t("errors.s2.resourceExhausted"),
      type: TOAST_TYPES.ERROR
    })
  );
}

export default handleResourceExhaustedError;
