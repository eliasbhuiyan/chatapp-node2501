const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
const route = require("./routes");
require("dotenv").config();
const dbConfig = require("./configs/dbConfig");
dbConfig();
app.use(cookieParser());
app.use(route);
app.listen(8000, () => {
  console.log("Server is running");
});
