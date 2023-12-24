import { io } from "socket.io-client";

export const socket = io("http://localhost:3003");
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
socket.on("opponent_attack_start", (data) => {
  //store.dispatch(opponent_attack_start(data.data))
  console.log(data.data);
});
export const emit_attack_start = (info: any) => {
  socket.emit("attack_start", {
    ...info,
  });
};
