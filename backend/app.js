const express = require("express");
const connectDb = require("./database/connect.js");
const app = express();
const PORT = process.env.PORT || 3100;
const cors = require('cors')
// const {projectRoute} = require('./routes/projects.routes.js')

// middlewares
app.use(express.json());
require("dotenv").config();
app.use(
  cors({
    Credentials: true,
    origin: `http://localhost:5173`,
  })
);

// database connection
connectDb();

// route
app.use("/api/projects", require("./routes/projects.routes.js"));
app.use("/new/user", require("./routes/user.route.js"));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
