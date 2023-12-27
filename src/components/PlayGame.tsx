"use client";
import { Service } from "@/controller/Service.controller";
import { emit_attack_start } from "@/controller/socket.controller";
import { userStore } from "@/store/user.store";
import { useRouter } from "next/navigation";

export function PlayGame() {
  const router = useRouter();
  const api = new Service();
  const { token } = userStore();
  async function createGame() {
    // socket.connect();
    // socket.emit("create-match", token, (data: any) => {
    //   console.log(data);
    //   return "judas";
    // });
    // socket.on("judas", (arg, callback) => {
    //   console.log(arg);
    //   return "judas";
    // });
    const res = await api.updateDeck(
      { name: "judas", cards: [] },
      "51a0459c-c932-470d-a5d8-90222b7c288c"
    );
    console.log(res);
    if (!res) {
      router.push("/login");
    }
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
