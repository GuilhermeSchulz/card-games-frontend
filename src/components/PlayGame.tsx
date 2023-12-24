"use client";
import { emit_attack_start, socket } from "@/controller/socket.controller";
import { userStore } from "@/store/user.store";

export function PlayGame() {
  const { token } = userStore();
  function createGame() {
    // socket.connect();
    // socket.emit("create-match", token, (data: any) => {
    //   console.log(data);
    //   return "judas";
    // });
    // socket.on("judas", (arg, callback) => {
    //   console.log(arg);
    //   return "judas";
    // });
    emit_attack_start({ attack: 123 });
  }
  return (
    <div className="absolute bottom-[100px] flex w-full justify-center">
      <button
        onClick={createGame}
        className="play_btn px-12 py-5 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-blue-50 text-2xl"
      >
        PLAY
      </button>
    </div>
  );
}
