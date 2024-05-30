import { messageModel } from "../Hocnhom/ChatRealTime/messageModel";
import { messengerModel } from "./messengetModel";

function connectChat(io) {
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on("join_room", (data) => {
      socket.join(data);
      //Lay du lieu
      socket
        .to(data.code)
        .emit("receive_message", messengerModel.getAllChatOfGroup(data.code));
    });
    socket.on("send_message", (data) => {
      socket.to(data.code).emit("receive_message", data); // data :" userid , code  , message, username,linkimage"
      //Luu thong tin tin nhan
      messengerModel.createMessage(data);
    });
  });
}

export default connectChat;
