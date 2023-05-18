import axios from "axios";

import { FormData } from "../constants";

const PARDOT_FORM_SUBMISSION_URL = "https://go.suki.ai/l/971003/2023-02-24/3gwrz";

const submitRegistrationData = (formData: string) => {
  return axios.post(PARDOT_FORM_SUBMISSION_URL, formData);
};

const encodeFormData = (formData: FormData | any) => {
  let urlEncodedData = "";
  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      if (typeof formData[key] === "object") {
        // If the value is an object, stringify it first
        urlEncodedData += `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(formData[key]))}&`;
      } else {
        urlEncodedData += `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}&`;
      }
    }
  }
  // Remove the trailing "&"
  urlEncodedData = urlEncodedData.slice(0, -1);
  return urlEncodedData;
};

export { encodeFormData, submitRegistrationData };
