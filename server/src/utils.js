//@ts-check
/**
 * @callback AsyncRequestHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} [next]
 * @returns {Promise<any>}
 */
/**
 * @param {AsyncRequestHandler} fn
 * @returns {import('express').RequestHandler}
 */
function catchAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

/**
 * @param {string} envName
 * @param {string} [defaultValue]
 * @returns {string}
 */
function getEnvOrDefault(envName, defaultValue) {
  const envValue = process.env[envName];
  if (envValue == undefined || envValue == null) {
    if (defaultValue != undefined) {
      return defaultValue;
    } else {
      throw Error(`environment variable ${envName} not found`);
    }
  } else {
    return envValue;
  }
}

module.exports = {
  catchAsync,
  getEnvOrDefault,
};
