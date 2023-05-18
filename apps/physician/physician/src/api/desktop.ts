import axios from "./config";

const getWindowsReleaseNotes = () => {
  return axios.get("/desktop/windows-release-notes");
};

export { getWindowsReleaseNotes };
