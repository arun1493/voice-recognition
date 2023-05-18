import _includes from "lodash/includes";
import { useLocation } from "react-router-dom";
import { EmbedPartners } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useState } from "react";

import { withAmwellAuth } from ".";
import { useQueryParams } from "../../hooks";
import { EmbedError } from "../../components/molecules";

const EMBED = "embed";

function withEmbedAuth(WrappedComponent: FunctionComponent): FunctionComponent {
  return (props) => {
    const { pathname } = useLocation();
    const [isEmbed, setIsEmbed] = useState(false);

    const queryParams = useQueryParams();
    const tenantName = queryParams.get("tenantName");
    const source = queryParams.get("src");

    useEffect(() => {
      if (source === EMBED) {
        setIsEmbed(true);
      } else {
        setIsEmbed(false);
      }
    }, [pathname]);

    if (isEmbed) {
      let Component: FunctionComponent = EmbedError; // If embed, valid tenantname needs to be present, otherwise error out

      if (tenantName === EmbedPartners.Amwell) {
        Component = withAmwellAuth(WrappedComponent);
      }
      return <Component {...props} />;
    }

    return <WrappedComponent {...props} />;
  };
}

export { withEmbedAuth };
