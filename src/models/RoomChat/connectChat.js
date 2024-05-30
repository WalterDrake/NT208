import { messengerModel } from "./messengetModel";

function connectChat(io) {
  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
      messengerModel.getAllChatOfGroup(data) 
      .then((array) => {
        console.log(array)
        socket
        .to(data)
         .emit("join_room_res",array);
      })
      // socket
      //   .to(data)
      //   .emit("join_room_res", messengerModel.getAllChatOfGroup(data));
    });

    socket.on("send_message", (data) => {
      socket.to(data.code).emit("receive_message", data);
      messengerModel.createMessage(data);
    });
  });
}

export default connectChat;
