import axios from "axios";
import _get from "lodash/get";
import { FhirEnvironment, getCurrentEnvironment, isDevelopmentEnvironment, isProductionEnvironment } from "../helpers";

class ReleaseNotesService {
  getMatchingEnvironment = () => {
    if (isProductionEnvironment()) {
      return FhirEnvironment.Production;
    } else if (isDevelopmentEnvironment()) {
      return FhirEnvironment.Development;
    }

    return getCurrentEnvironment();
  };

  fetchReleaseNotesJson = async () => {
    const releaseNoteEnvironment = this.getMatchingEnvironment();
    const releaseNoteUrl = `https://storage.googleapis.com/windows-release-notes_${releaseNoteEnvironment}/windows-release-notes-suki-x.json`;

    const HEADERS = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    };

    return axios
      .get(releaseNoteUrl, {
        headers: HEADERS
      })
      .then((response) => {
        const contentType = _get(response?.headers, "content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("[Release Notes]: JSON content type not received, instead received:", contentType);
          throw new TypeError(`Incorrect contentType received, ${contentType}`);
        }
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

export default new ReleaseNotesService();
