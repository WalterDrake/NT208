function connectChat(io) {
  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
    });

    socket.on("send_message", (data) => {
      socket.to(data.code).emit("receive_message", data);
    });
  });
}

export default connectChat;
