import { Scene } from "phaser";
import { Texture } from "../cardHandler";
import Game from "@/phaser/scenes/game";

export default class Card {
  render: (x: any, y: any, type: any) => void;
  playerCardSprite: Texture = Texture.cyan;
  opponentCardSprite: Texture = Texture.magenta;
  name: string = "";
  constructor(scene: Game) {
    this.render = (x, y, type) => {
      let sprite;
      if (type === "playerCard") {
        sprite = this.playerCardSprite;
      } else {
        sprite = this.opponentCardSprite;
      }
      let card = scene.add
        .image(x, y, sprite)
        .setScale(0.25, 0.25)
        .setInteractive()
        .setData({
          name: this.name,
          type: type,
          sprite: sprite,
        });
      if (type === "playerCard") {
        scene.input.setDraggable(card);
      }
      return card;
    };
  }
}
