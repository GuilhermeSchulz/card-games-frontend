"use client";
import { init_game } from "@/controller/socket.controller";
import Game from "@/phaser/scenes/game";
import { deckStore } from "@/store/user.store";
export default function GamePage() {
  const { card } = deckStore();
  const game = new Game();
  init_game(card);
  console.log(card);
  console.log(game);

  return <main>Game page</main>;
}
