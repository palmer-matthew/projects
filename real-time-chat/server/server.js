const { instrument } = require("@socket.io/admin-ui");
const server = require("socket.io")(5050, {
    cors: {
        origin: ['http://localhost:8080', "https://admin.socket.io/"]
    }
});

// Namespaces
const user = server.of("/user");

user.on("connection", socket => {
    console.log("connected to user namespace with username " + socket.username);
});

function getUsernameFromToken(token){
    return token;
}
// Middleware
user.use((socket, next) => {
    if(socket.handshake.auth.token){
        socket.username = getUsernameFromToken(socket.handshake.auth.token);
        next();
    }else {
        next(new Error("Please send token"));
    }
})

server.on("connection", socket => {
    console.log(socket.id);
    socket.on("connected", (data) => {
        console.log(data);
    });
    socket.on("message-sent", (message, room) => {
        // server.emit("receive-message", message); Sends message to all sockets
        // socket.broadcast.emit("receive-message", message)
        if(room === ""){
            socket.broadcast.emit("receive-message", message)
        }else{
            socket.to(room).emit("receive-message", message)
        }
        // console.log(message);
    });
    socket.on("join-room", (room, func) => {
        socket.join(room);
        func(`Joined Room: ${room}`);
    });
    // socket.on("ping", count => console.log(count));
});

instrument(server, { auth: false});