"use client";
import { Service } from "@/controller/Service.controller";
import { deckStore, userStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function PlayGame() {
  const router = useRouter();
  const { setDeck } = deckStore();
  const api = new Service();
  const { token } = userStore();
  async function createGame() {
    // socket.connect();
    router.push("/game");
    // emit_attack_start({ attack: 123 });
    // emit_change_phase({ message: "trocando de fase" });
  }
  async function getDeck() {
    const decks = await api.getAllDecks();
    console.log(decks);
    setDeck(decks[0]);
  }
  useEffect(() => {
    getDeck();
  }, []);
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
