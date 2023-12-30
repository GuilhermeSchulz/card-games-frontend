import Game from "../scenes/game";

export default class GameHandler {
  gameState: string;
  isMyTurn: boolean;
  playerDeck: any[];
  opponentDeck: any[];
  playerHand: any[];
  opponentHand: any[];
  changeTurn: () => void;
  changeGameState: (gameState: string) => void;
  constructor(scene: Game) {
    this.gameState = "Initializing";
    this.isMyTurn = false;
    this.playerDeck = [];
    this.opponentDeck = [];
    this.playerHand = [];
    this.opponentHand = [];

    this.changeTurn = () => {
      this.isMyTurn = !this.isMyTurn;
      console.log("isMyturn: " + this.isMyTurn);
    };
    this.changeGameState = (gameState: string) => {
      this.gameState = gameState;
      console.log("GameState: " + this.gameState);
    };
  }
}
