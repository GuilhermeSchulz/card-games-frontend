import { Scene } from "phaser";
import { Texture } from "../cardHandler";
import Card from "./cards";
import Game from "@/phaser/scenes/game";

export default class CardBack extends Card {
  constructor(scene: Game) {
    super(scene);
    this.name = "cardBack";
    this.playerCardSprite = Texture.cyan;
    this.opponentCardSprite = Texture.magenta;
  }
}
