const roomHandler = (socket) => {
    socket.on('create-room', (room_id) => {
        console.log("Creating Room")
        socket.join(room_id);
        socket.emit("room-created", room_id);
    });
}

module.exports = { roomHandler }