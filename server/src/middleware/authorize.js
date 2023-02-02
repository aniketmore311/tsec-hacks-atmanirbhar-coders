//@ts-check
const config = require("../config");
const guard = require("express-jwt-permissions")({
  requestProperty: "user",
  permissionsProperty: "role",
});

/**
 * @param {string} role
 * @returns {import("express").RequestHandler}
 */
function authorize(role) {
  return guard.check(role);
}

module.exports = authorize;
