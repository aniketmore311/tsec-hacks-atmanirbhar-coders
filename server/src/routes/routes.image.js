//@ts-check
const express = require("express");
const { param } = require("express-validator");
const createHttpError = require("http-errors");
const validate = require("../middleware/validate");
const s3Service = require("../services/s3.service");
const { catchAsync } = require("../utils");

const imagesRouter = express.Router();

imagesRouter.get(
  "/:imagename",
  param("imagename").isString().notEmpty(),
  validate(),
  catchAsync(async (req, res) => {
    const filename = req.params.imagename;
    try {
      const stream = await s3Service.getFile(filename);
      stream.pipe(res);
      return;
    } catch (err) {
      throw new createHttpError.NotFound("file not found");
    }
  })
);

module.exports = imagesRouter;
