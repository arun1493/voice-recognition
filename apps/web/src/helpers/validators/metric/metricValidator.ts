import isArray from "lodash/isArray";
import { body } from "express-validator";

const postEventsValidator = (events: any) => {
  if (isArray(events)) {
    if (events.length > 0 && events.length <= 50) {
      return true;
    }
    throw new Error("body should contain event in the range 1-50");
  }
  throw new Error("body should be an array of events");
};

const metricValidations = [body().custom(postEventsValidator)];

export { metricValidations };
