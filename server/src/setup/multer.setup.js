//@ts-check
const multer = require("multer");
const uuid = require("uuid").v4;
const path = require("path");
const config = require("../config");

const UPLOADS_DIR = config.app.uploadsDir;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const id = uuid();
    cb(null, id + ext);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
