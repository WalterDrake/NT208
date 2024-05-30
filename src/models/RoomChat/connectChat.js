import { messageModel } from "../Hocnhom/ChatRealTime/messageModel";
import { messengerModel } from "./messengetModel";

function connectChat(io) {
  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
      socket
        .to(data.code)
        .emit("join_room_res", messengerModel.getAllChatOfGroup(data.code));
    });

    socket.on("send_message", (data) => {
      socket.to(data.code).emit("receive_message", data);
      messengerModel.createMessage(data);
    });
  });
}

export default connectChat;
