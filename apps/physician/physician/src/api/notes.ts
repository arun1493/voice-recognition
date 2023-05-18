import _get from "lodash/get";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import axios from "./config";
import { logger } from "./logMessage";

const getNoteLockStatus = async (noteId: string) => {
  try {
    const results = await axios.get("/note-lock", { params: { noteId } });
    return _get(results, "data", EMPTY_OBJECT);
  } catch (error) {
    logger.error({ message: "Failed to get NoteLock", payload: error });
    return EMPTY_OBJECT;
  }
};

export { getNoteLockStatus };
