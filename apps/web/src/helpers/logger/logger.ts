import { configure, format, loggers, transports } from "winston";

import { Environment } from "../../helpers";

const { timestamp, combine, errors, json } = format;

loggers.add(Environment.Development, {
  format: combine(timestamp(), errors({ stack: true }), json()),
  transports: [new transports.Console()]
});

loggers.add(Environment.Production, {
  format: combine(timestamp(), errors({ stack: true }), json()),
  defaultMeta: { service: "suki-web-server" },
  transports: [new transports.Console()]
});

configure({
  exitOnError: false,
  handleExceptions: true,
  handleRejections: true
});

export default loggers;
