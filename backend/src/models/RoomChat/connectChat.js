import { messengerModel } from "./messengetModel";

function connectChat(io) {
  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
    });

    socket.on("send_message",async (data) => {
      const res = await messengerModel.createMessage(data);
      socket.to(data.code).emit("receive_message", res);
    });
    socket.on("delete_message", async (data) => {
      const deletedMessage = await messengerModel.setDeleted(data._id);
      socket.to(data.code).emit("deleted_message", deletedMessage);
    });
    socket.on("leave_room", () => {
      //console.log("User disconnected");
    });
  });
}

export default connectChat;
