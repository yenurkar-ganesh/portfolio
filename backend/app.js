const express = require("express");
const connectDb = require("./database/connect.js");
const app = express();
const PORT = process.env.PORT || 3100;
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
// const {projectRoute} = require('./routes/projects.routes.js')

// middlewares
app.use(express.json());
require("dotenv").config();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(bodyParser.json());

// database connection
connectDb();

// route
app.use("/api/projects", require("./routes/projects.routes.js"));
app.use("/new/user", require("./routes/user.route.js"));
app.use("/send-mail", require("./routes/mail.routes.js"));

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
