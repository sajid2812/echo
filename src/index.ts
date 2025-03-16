import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

//event handler
wss.on("connection", (socket) => {
  console.log("user connected");

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
