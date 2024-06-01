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
import connectChat from "./models/RoomChat/connectChat";

const START_SERVER = () => {
  const app = express();

  // Handle cors
  app.use(cors(corsOptions));

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "https://web-or9v.vercel.app",
      methods: ["GET", "POST"],
    },
  });
  // call medthod io
  connectChat(io);

  // Enable req.body json data
  app.use(express.json());

  // Use APIs V1
  app.use("/api", APIs);

  // Middleware handles errors collectively
  app.use(errorHandlingMiddleware);
  if (env.BUILD_MODE === "production") {
    server.listen(process.env.PORT, () => {
      console.log("PRODUCTION-run at PORT:", process.env.PORT);
    });
  } else {
    server.listen(env.APP_PORT, env.APP_HOST, () => {
      console.log(`DEV-http://${env.APP_HOST}:${env.APP_PORT}`);
    });
  }

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
