/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import { corsOptions } from "~/config/cors";
import exitHook from "async-exit-hook";
import { CONNECT_DB, CLOSE_DB } from "~/config/mongodb";
import { env } from "~/config/environment";
import { APIs } from "~/routes/api";
import { errorHandlingMiddleware } from "~/middlewares/errorHandlingMiddleware";
const { Server } = require("socket.io");
const http = require("http");

const START_SERVER = () => {
  const app = express();

  // Handle cors
  app.use(cors(corsOptions));

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
      socket.to(data.code).emit("receive_message", data);
      console.log(`Message from ${socket.id} to room ${data.code}: ${data.message}`);
    });
  });

  // Enable req.body json data
  app.use(express.json());

  // Use APIs V1
  app.use("/api", APIs);

  // Middleware handles errors collectively
  app.use(errorHandlingMiddleware);

  server.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`http://${env.APP_HOST}:${env.APP_PORT}`);
  });

  // Clean up task before stopping server
  exitHook(() => {
    CLOSE_DB();
    console.log("Disconnected from server");
  });
};

// Start server back-end when connected database successfully
(async () => {
  try {
    await CONNECT_DB();
    console.log("Connected to MongoDB");
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();