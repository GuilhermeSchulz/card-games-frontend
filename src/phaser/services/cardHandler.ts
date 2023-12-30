export default class CardHandler {
  flipCard: (card: Card) => void;
  constructor() {
    this.flipCard = (card) => {
      if (card.data.values.type === "playerCard") {
        if (card.texture === "cyanCardBack") {
          card.setTexture(card.data.values.sprites);
        } else {
          card.setTexture("cyanCardBack");
        }
      } else if (card.data.values.type === "opponentCard") {
        if (card.texture === "magentaCardBack") {
          card.setTexture(card.data.values.sprite);
        } else {
          card.setTexture("magentaCardBack");
        }
      }
    };
  }
}
interface Card {
  setTexture(sprites: any): unknown;
  data: { values: Values };
  texture: Texture;
}
interface Values {
  sprites(sprites: any): unknown;
  sprite(sprite: any): unknown;
  type: "playerCard" | "opponentCard";
}
export enum Texture {
  cyan = "cyanCardBack",
  magenta = "magentaCardBack",
}
