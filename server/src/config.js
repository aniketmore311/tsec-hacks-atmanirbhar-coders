//@ts-check
const { getEnvOrDefault } = require("./utils");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

//@ts-check
const config = {
  NODE_ENV: getEnvOrDefault("NODE_ENV", "development"),
  app: {
    port: getEnvOrDefault("PORT", "8080"),
    mongoURI: getEnvOrDefault("MONGO_URI"),
    host: "localhost",
    secretkey: getEnvOrDefault("SECRET_KEY"),
    accessTokenExpiresInStr: "7d",
    rootDir: ROOT_DIR,
    uploadsDir: getEnvOrDefault("UPLOADS_DIR", path.join(ROOT_DIR, "uploads")),
  },
  email: {
    address: getEnvOrDefault("OUTLOOK_EMAIL"),
    password: getEnvOrDefault("OUTLOOK_PASSWORD"),
  },
  aws: {
    bucketName: getEnvOrDefault("AWS_BUCKET_NAME"),
    accessKeyId: getEnvOrDefault("AWS_ACCESS_KEY_ID"),
    secretAccessKey: getEnvOrDefault("AWS_SECRET_ACCESS_KEY"),
    defaultRegion: getEnvOrDefault("AWS_DEFAULT_REGION", "ap-south-1"),
    ses: {
      sender: getEnvOrDefault("SES_SENDER"),
    },
  },
};

module.exports = config;
