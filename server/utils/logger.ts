import * as winston from "winston";

var logger = new winston.Logger({
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

export = logger;
