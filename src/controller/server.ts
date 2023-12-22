//EXEMPLO USADO NO SERVER LOCAL

// io.on("connection", (socket) => {
//   const playerId = socket.id;
//   console.log(`> Player connected: ${playerId}`);
//   const rooms = ["room1", "room2"];
//   socket.emit("create-match", rooms, (call: any) => {
//     console.log(call);
//     socket.join(call);
//   });
//   let time = 30;
//   socket.on("judas", (arg, callback) => {
//     console.log(arg);

//     callback(time);
//   });
//   socket.broadcast.to("room1").emit("all", "Todos");
//   socket.on("disconnect", () => {
//     console.log(`> Player disconnected: ${playerId}`);
//   });
// });
