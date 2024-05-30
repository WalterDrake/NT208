function connectChat(io) {
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on("join_room", (data) => {
      socket.join(data);
    });
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  });
}

export default connectChat;
