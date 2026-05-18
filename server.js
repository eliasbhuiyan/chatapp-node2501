const express = require("express");
const { createServer } = require("http");
const cookieParser = require("cookie-parser");
const app = express();
const httpServer = createServer(app);
const io = require("socket.io")(httpServer);
global.io = io;

app.use(express.json());
const route = require("./routes");
require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const dbConfig = require("./configs/dbConfig");
dbConfig();
app.use(cookieParser());
app.use(route);
httpServer.listen(8000, () => {
  console.log("Server is running");
});
