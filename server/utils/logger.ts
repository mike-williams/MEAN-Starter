import * as winston from "winston";

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      timestamp: true,
      prettyPrint: true,
      colorize: true
    })
  ],
  exitOnError: false
});
