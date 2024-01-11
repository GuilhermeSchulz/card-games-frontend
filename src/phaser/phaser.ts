import * as Phaser from "phaser";
import Game from "./scenes/game";

let config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1200,
    height: 1000,
  },
  scene: [Game],
};

export const game: Phaser.Game = new Phaser.Game(config);
