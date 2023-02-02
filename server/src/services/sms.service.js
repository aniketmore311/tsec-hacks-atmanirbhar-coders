//@ts-check
const config = require("../config");

const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const client = new SNSClient({
  region: config.aws.defaultRegion,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
  },
});

async function sendSMS({ message, to }) {
  const resp = await client.send(
    new PublishCommand({
      Message: message,
      PhoneNumber: "+91" + to,
    })
  );
  return resp;
}

const smsService = {
  sendSMS,
};

module.exports = smsService;
