import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";

import { TOAST_TYPES } from "../../../constants";
import { useNavigatorOnline } from "../../../hooks";
import { toastsActions } from "../../../redux/toast";

const NetworkConnectivity: FunctionComponent = () => {
  const { isOffline } = useNavigatorOnline();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.network.offline"), type: TOAST_TYPES.ERROR }));
    }
  }, [isOffline]);

  return null;
};

export { NetworkConnectivity };
export default NetworkConnectivity;
