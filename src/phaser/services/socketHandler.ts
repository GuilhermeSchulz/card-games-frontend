import io from "socket.io-client";
import Game from "../scenes/game";

export default class SocketHandler {
  constructor(scene: Game) {
    scene.socket = io("http://localhost:3003");
    scene.socket.on("connect", () => {
      console.log("Connected!");
      scene.socket.emit("dealDeck", scene.socket.id);
    });
    scene.socket.on("firstTurn", () => {
      scene.GameHandler.changeTurn();
    });
    scene.socket.on("changeGameState", (gameState) => {
      scene.GameHandler.changeGameState(gameState);
      if (gameState === "Initializing") {
        scene.DeckHandler.dealCard(1000, 860, "cardBack", "playerCard");
        scene.DeckHandler.dealCard(1000, 135, "cardBack", "opponentCard");
        scene.dealCards.setInteractive();
        scene.dealCards.setColor("#00ffff");
      }
    });
    scene.socket.on("changeTurn", () => {
      scene.GameHandler.changeTurn();
    });

    scene.socket.on("dealCards", (socketId, cards) => {
      if (socketId === scene.socket.id) {
        for (let i in cards) {
          let card = scene.GameHandler.playerHand.push(
            scene.DeckHandler.dealCard(
              155 + +i * 155,
              860,
              cards[i],
              "playerCard"
            )
          );
        }
      } else {
        for (let i in cards) {
          let card = scene.GameHandler.opponentHand.push(
            scene.DeckHandler.dealCard(
              155 + +i * 155,
              135,
              "cardBack",
              "opponentCard"
            )
          );
        }
      }
    });
  }
}
