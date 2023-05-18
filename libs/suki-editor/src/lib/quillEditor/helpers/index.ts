import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

const getDataField = (value: string) => {
  if (_isEmpty(value)) {
    return;
  }

  try {
    const jsonValue = JSON.parse(value);
    return _get(jsonValue, "document.data", EMPTY_OBJECT);
  } catch (error) {
    console.error("Unable to parse json");
    return;
  }
};

export { getDataField };
