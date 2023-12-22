import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");
socket.on("connect", () => {
  console.log(`Player connected on Client with id: ${socket.id}`);
});
socket.on("create-match", (arg, call) => {
  console.log(arg);
  call("room1");
});
socket.on("all", (arg) => {
  console.log(arg);
});
