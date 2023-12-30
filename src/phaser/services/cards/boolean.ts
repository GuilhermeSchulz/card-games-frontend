import { Scene } from "phaser";
import Card from "./cards";
import { Texture } from "../cardHandler";
import Game from "@/phaser/scenes/game";

export default class Boolean extends Card {
  constructor(scene: Game) {
    super(scene);
    this.name = "boolean";
    this.playerCardSprite = Texture.cyan;
    this.opponentCardSprite = Texture.magenta;
  }
}
