//MODULE IMPORT
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");

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

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.route("/").get((req, res) => {
    res.status(200).send({
        message: "SET UP"
    });
});

//SOCKET HANDLING
io.on("connection", socket => {
    console.log(`${socket.id} has connected`);
})

//SERVER INIT
server.listen(config.port, () => {
    console.log(`@${Date(Date.now()).toString()}: Server is running on PORT:${config.port}`);
});