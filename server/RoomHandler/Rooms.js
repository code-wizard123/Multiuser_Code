const { v4: uuidv4 } = require('uuid');

const roomHandler = (socket) => {
    socket.on('create-room', () => {
        const room_id = uuidv4();
        socket.join(room_id);
        socket.emit("room-created", room_id);
        console.log("user created room")
    });

    socket.on('join-room', () => {
        console.log("user joined room")
    });
}

module.exports = { roomHandler }