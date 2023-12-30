import { Scene } from "phaser";
import { Texture } from "../cardHandler";
import Card from "./cards";
import Game from "@/phaser/scenes/game";

export default class Boolean extends Card {
  constructor(scene: Game) {
    super(scene);
    this.name = "ping";
    this.playerCardSprite = Texture.cyan;
    this.opponentCardSprite = Texture.magenta;
  }
}
