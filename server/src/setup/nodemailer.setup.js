//@ts-check
const nodemailer = require("nodemailer");
const config = require("../config");

const OUTLOOK_EMAIL = config.email.address;
const OUTLOOK_PASSWORD = config.email.password;

const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: OUTLOOK_EMAIL,
    pass: OUTLOOK_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },

});
// const transport = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: OUTLOOK_EMAIL,
//     pass: OUTLOOK_PASSWORD,
//   },
// });

module.exports = transport;
