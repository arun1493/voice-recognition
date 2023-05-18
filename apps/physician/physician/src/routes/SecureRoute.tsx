import _isEmpty from "lodash/isEmpty";
import { FunctionComponent } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Paths } from "@suki-web/suki-business";
import { Navigate, Outlet } from "react-router-dom";

import Loading from "./Loading";
import { AppIdleTimer, AppSkeleton } from "../components/organisms";

const SecureRoute: FunctionComponent = () => {
  const { authState } = useOktaAuth();

  if (_isEmpty(authState)) {
    // TODO: replace this Loading component with something from our design system
    return <Loading />;
  }

  return authState?.isAuthenticated ? (
    <AppSkeleton>
      <AppIdleTimer>
        <Outlet />
      </AppIdleTimer>
    </AppSkeleton>
  ) : (
    <Navigate to={Paths.Login} />
  );
};

export { SecureRoute };

export default SecureRoute;
