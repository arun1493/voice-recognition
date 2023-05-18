import { FunctionComponent } from "react";
import { IntercomProvider } from "react-use-intercom";

import { isProductionEnvironment } from "../helpers/environment";

const INTERCOM_ID = isProductionEnvironment() ? "mrausu9h" : "tfrr9ikc";

function withIntercom(WrappedComponent: FunctionComponent): FunctionComponent {
  return () => {
    return (
      <IntercomProvider appId={INTERCOM_ID} autoBoot={true} autoBootProps={{ hideDefaultLauncher: true }}>
        <WrappedComponent />
      </IntercomProvider>
    );
  };
}

export { withIntercom };
