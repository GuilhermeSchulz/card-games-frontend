"use client";
import { init_game, my_id_send } from "@/controller/socket.controller";
import Game from "@/phaser/scenes/game";
import { deckStore, userStore } from "@/store/user.store";
import { useEffect } from "react";
export default function GamePage() {
  const { card } = deckStore();
  const { id } = userStore();
  const game = new Game();
  init_game(card);
  useEffect(() => {
    setTimeout(() => {
      my_id_send(id);
      game.create();
    }, 3000);
  }, []);
  console.log(card);
  console.log(game);

  return <main>Game page</main>;
}
