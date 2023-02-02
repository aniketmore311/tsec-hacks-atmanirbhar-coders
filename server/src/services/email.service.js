//@ts-check
const config = require("../config");
const transport = require("../setup/nodemailer.setup");

const OUTLOOK_EMAIL = config.email.address;

async function sendEmail({ to, subject, text, html }) {
  const from = `sender name <${OUTLOOK_EMAIL}>`;
  return transport.sendMail({ from, to, subject, text, html });
}

const emailService = {
  sendEmail
}
module.exports = emailService
