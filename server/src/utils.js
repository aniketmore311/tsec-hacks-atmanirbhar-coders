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

function getPercentageMatch(profile, otherProfile) {
  let matched = 0;
  let total = 0;
  const propsToMatch = [
    "maritalStatus",
    "type",
    "institute",
    "field",
    "company",
    "role",
    "gender",
    "smokingPreference",
    "foodPreference",
    "country",
    "state",
    "city",
    "locality",
  ];
  for (const prop of propsToMatch) {
    if (profile[prop] && otherProfile[prop]) {
      if (profile[prop] == otherProfile[prop]) {
        total = total + 1;
        matched = matched + 1;
      } else {
        total = total + 1;
      }
    }
  }
  if (profile.interests && otherProfile.interests) {
    for (const interest of profile.interests) {
      if (otherProfile.interests.includes(interest)) {
        matched = matched + 1;
      }
      total = total + 1;
    }
  }
  return Math.floor((matched * 100) / total);
}
module.exports = {
  catchAsync,
  getEnvOrDefault,
  getPercentageMatch,
};
