import loggers from "./logger";

export default loggers.get(process.env.NODE_ENV);
