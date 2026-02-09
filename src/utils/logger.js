/**
 * Logger Utility
 * Helps with debugging and error tracking
 */

const LOG_LEVELS = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG',
};

const log = (level, message, data = null) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${message}`;

  switch (level) {
    case LOG_LEVELS.ERROR:
      console.error(logEntry, data);
      break;
    case LOG_LEVELS.WARN:
      console.warn(logEntry, data);
      break;
    case LOG_LEVELS.DEBUG:
      if (process.env.NODE_ENV === 'development') {
        console.debug(logEntry, data);
      }
      break;
    case LOG_LEVELS.INFO:
    default:
      console.log(logEntry, data);
  }
};

export const logger = {
  info: (message, data) => log(LOG_LEVELS.INFO, message, data),
  warn: (message, data) => log(LOG_LEVELS.WARN, message, data),
  error: (message, data) => log(LOG_LEVELS.ERROR, message, data),
  debug: (message, data) => log(LOG_LEVELS.DEBUG, message, data),
};
