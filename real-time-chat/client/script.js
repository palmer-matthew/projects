import { io } from "socket.io-client";

const joinRoomButton = document.getElementById("room-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");
const socket = io('http://localhost:5050');
const useSock = io('http://localhost:5050/user' , { auth: { token: "Test"}});

socket.on("connect", () => {
    displayMessage(`You connected with id: ${socket.id}`);
    // socket.emit("connected", { user:  socket.id , username: "radnomness"})
})

socket.on("receive-message", message => {
    displayMessage(message);
})

useSock.on("connect_error", error => {
    displayMessage(error);
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const message = messageInput.value;
    const room = roomInput.value;

    if(message === "") return ;
    displayMessage(message);
    socket.emit("message-sent", message, room)

    messageInput.value = "";
    roomInput.value = "";
});

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value;
    socket.emit('join-room', room, message => {
        displayMessage(message);
    })
});

function displayMessage(message){
    const div = document.createElement("div");
    div.textContent = message;
    document.getElementById("message-container").append(div);
}

document.addEventListener("keydown", event => {
    if(event.target.matches('input')) return

    if(event.key === "c") socket.connect()
    if(event.key === "d") socket.disconnect()
})

let count = 0;

// setInterval(() => {
//     // socket.emit("ping", ++count); 
//     socket.volatile.emit("ping", ++count);
// }, 1000)
