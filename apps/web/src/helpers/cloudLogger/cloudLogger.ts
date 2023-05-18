import { Request } from "express";
import { LogLevels } from "@suki-web/suki-business";

import logger from "../logger";
import { getIds } from "../general";

type Meta = {
  [key: string]: any;
};

const cloudLogMessage = ({ level, message, meta }: { level: LogLevels; message: string; meta?: Meta }) => {
  logger[level](message, meta);
};

class CloudLogger {
  private sendCloudLogBuilder = (level: LogLevels) => (message: string, req?: Request, meta?: Meta) => {
    const { organizationId, userId, userAgent } = getIds(req);
    return cloudLogMessage({ level, message, meta: { organizationId, userId, userAgent, ...meta } });
  };

  info = this.sendCloudLogBuilder(LogLevels.INFO);
  warn = this.sendCloudLogBuilder(LogLevels.WARN);
  error = this.sendCloudLogBuilder(LogLevels.ERROR);
  debug = this.sendCloudLogBuilder(LogLevels.DEBUG);
}

const cloudLogger = new CloudLogger();

export { cloudLogMessage, cloudLogger };
