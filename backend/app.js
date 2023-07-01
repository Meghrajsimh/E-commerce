const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
// Route imports
const product = require("./routes/produtRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api", product);
app.use("/api", user);
app.use("/api",order)
//middleware for Error
app.use(errorMiddleware);
module.exports = app;
