import { v4 as uuidv4 } from "uuid";

import axios from "./config";

const uploadFile = ({ file }: { file: Blob }) => {
  const postId = uuidv4();
  const blob = file.slice(0, file.size, "text/csv");
  const timestamp = new Date().valueOf();
  const newFile = new File([blob], `${postId}_${timestamp}.csv`);
  const formData = new FormData();
  formData.append("csvFile", newFile);

  return axios.post("/import-export", formData);
};

export { uploadFile };
