import Game from "../scenes/game";

export default class InteractiveHandler {
  constructor(scene: Game) {
    scene.cardPreview = null;
    // scene.DeckHandler.dealCard.on("pointerdown", () => {});
  }
}
