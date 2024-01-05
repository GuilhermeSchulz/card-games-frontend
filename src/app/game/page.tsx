"use client";
import { init_game } from "@/controller/socket.controller";
import { deckStore } from "@/store/user.store";
export default function GamePage() {
  const { card } = deckStore();
  init_game(card);
  console.log(card);

  return <main>Game page</main>;
}
