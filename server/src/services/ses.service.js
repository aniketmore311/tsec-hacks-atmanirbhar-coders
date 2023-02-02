//@ts-check
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const config = require("../config");

const client = new SESClient({
  region: config.aws.defaultRegion,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

async function sendEmail({ to, subject, text, html }) {
  const resp = await client.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Text: {
            Data: text,
          },
          Html: {
            Data: html,
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: config.aws.ses.sender,
    })
  );
  return resp;
}

const emailService = {
  sendEmail,
};

module.exports = emailService;
