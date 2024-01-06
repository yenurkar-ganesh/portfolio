const express = require("express");
const connectDb = require("./database/connect.js");
const app = express();
const PORT = process.env.PORT || 3100;
// const {projectRoute} = require('./routes/projects.routes.js')

// middlewares
app.use(express.json());
require("dotenv").config();

// database connection
connectDb();

// route
app.use("/api/projects", require("./routes/projects.routes.js"));
app.use("/api/projects", require("./routes/projects.routes.js"));


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
