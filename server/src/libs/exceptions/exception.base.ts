export interface SerializedException {
  message: string;
  code: string;
  metadata?: unknown;
}

/**
 * Base class for custom exceptions.
 *
 * @abstract
 * @class ExceptionBase
 * @extends {Error}
 */
export abstract class ExceptionBase extends Error {
  abstract code: string;

  /**
   * @param {string} message
   * **BE CAREFUL** not to include sensitive info in 'metadata'
   * to prevent leaks since all exception's data will end up
   * in application's log files. Only include non-sensitive
   * info that may help with debugging.
   * @param metadata
   */
  constructor(readonly message: string, readonly metadata?: unknown) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * By default in NodeJS Error objects are not
   * serialized properly when sending plain objects
   * to external processes. This method is a workaround.
   * Keep in mind not to return a stack trace to user when in production.
   * https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af
   */
  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      metadata: this.metadata,
    };
  }
}
