//MODULE IMPORT
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");

//CONFIG
const config = require("../config/env");

//APP INIT
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

//ROUTER
const api = require("./routes/api.js");
const error = require("./routes/error.js");

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);
app.use(/[\s\S]*/, error);

//ESTABLISH DBCONNECTION
mongoose.connect(config.dbUrl, 
    () => { console.log("DB CONNECTED"); }, 
    (e) => { console.log(e);}
);

//SOCKET HANDLING
io.on("connection", socket => {
    console.log(`${socket.id} has connected`);

    socket.on('disconnect', () => {});
})

//SERVER INIT
server.listen(config.port, () => {
    console.log(`@${Date(Date.now()).toString()}: Server is running on PORT:${config.port}`);
});