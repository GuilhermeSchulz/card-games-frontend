"use client";
import { socket } from "@/controller/socket";
export const Button = () => {
  function createGame() {
    socket.connect();
    console.log(socket.connected);

    socket.emit("judas", "abacaxi", (call: any) => {
      console.log(call);
    });
  }
  function closeGame() {
    socket.close();
    console.log(socket.connected);
  }
  return (
    <>
      {" "}
      {/* <button onClick={createGame} className="bg-gray-400 p-2 rounded-lg">
        Encontrar partida
      </button>
      <button onClick={closeGame} className="bg-gray-400 p-2 rounded-lg">
        Encerrar partida
      </button> */}
    </>
  );
};
