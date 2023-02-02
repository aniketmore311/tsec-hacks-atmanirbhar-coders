//@ts-check
require("dotenv").config({
  path: "./.env",
});
const mongoose = require("mongoose");
const http = require("http");
const config = require("./src/config");
const app = require("./src/app");
const User = require("./src/models/User");
const fs = require("fs");

async function main() {
  if (!fs.existsSync(config.app.uploadsDir)) {
    fs.mkdirSync(config.app.uploadsDir);
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(config.app.mongoURI, {});
  const server = http.createServer(app);
  server.listen(config.app.port, () => {
    console.log(
      `server started on http://${config.app.host}:${config.app.port}, mode: ${config.NODE_ENV}`
    );
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
