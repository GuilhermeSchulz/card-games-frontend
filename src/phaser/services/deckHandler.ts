import Game from "../scenes/game";
import Boolean from "./cards/boolean";
import CardBack from "./cards/cardsBack";
import Ping from "./cards/ping";

export default class DeckHandler {
  dealCard: (x: any, y: any, name: string | number, type: any) => any;
  dealCards: any;
  constructor(scene: Game) {
    this.dealCard = (x: any, y: any, name: string | number, type: any) => {
      let cards: any = {
        cardBack: new CardBack(scene),
        boolean: new Boolean(scene),
        ping: new Ping(scene),
      };
      let newCard = cards[name];

      return newCard.render(x, y, type);
    };
  }
}
