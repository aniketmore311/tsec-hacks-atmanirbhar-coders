//@ts-check
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/errorHandler");
const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const adminRouter = require("./routes/admin.routes");
const verificationRouter = require("./routes/verification.routes");
const verificationApproveRouter = require("./routes/verification.approve.routes");
const imagesRouter = require("./routes/routes.image");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        status: "ok",
    });
});

//add routers here
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
//@ts-ignore
app.use("/api/v1/verify", verificationRouter);
app.use("/api/v1/verify/approve", verificationApproveRouter);
app.use("/api/v1/images", imagesRouter);

//404
app.use((req, res, next) => {
    const err = createHttpError.NotFound("resource not found");
    next(err);
});

//error handler
app.use(errorHandler());

module.exports = app;
