import store from "store2";
import { LogLevels } from "@suki-web/suki-business";

import axios from "./config";
import { Actor, LOCAL_STORE } from "../constants";

interface Message {
  message: string;
  payload?: any;
}

interface LogMessage extends Message {
  level: LogLevels;
}

const logMessage = ({ level, message, payload }: LogMessage) => {
  const organizationId = store.get(LOCAL_STORE.ORGANIZATION_ID);
  const sessionToken = store.get(LOCAL_STORE.OKTA_SESSION_TOKEN);
  const userAgent = window?.navigator?.userAgent;
  const userId = store.get(LOCAL_STORE.USER_ID);

  if (process.env.NODE_ENV !== "local") {
    console[level](`${message}: ${JSON.stringify(payload)}`);
  }

  return axios.post("/log-message", {
    level,
    message,
    organizationId,
    payload: JSON.stringify(payload),
    role: Actor.USER,
    sessionToken,
    userAgent,
    userId
  });
};

class Logger {
  private sendLogBuilder =
    (level: LogLevels) =>
    ({ message, payload }: Message) =>
      logMessage({ level, message, payload });

  info = this.sendLogBuilder(LogLevels.INFO);
  warn = this.sendLogBuilder(LogLevels.WARN);
  error = this.sendLogBuilder(LogLevels.ERROR);
  debug = this.sendLogBuilder(LogLevels.DEBUG);
}

const logger = new Logger();

export { logMessage, logger };
