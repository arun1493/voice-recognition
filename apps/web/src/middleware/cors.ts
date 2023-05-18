import _includes from "lodash/includes";

import { WHITE_LISTED_ORIGINS } from "../constants";

const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (!origin || _includes(WHITE_LISTED_ORIGINS, origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Access not allowed to ${origin} due to CORS violation`));
    }
  }
};

export { corsOptions };
