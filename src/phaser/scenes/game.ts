import { Socket, io } from "socket.io-client";
import CardHandler from "../services/cardHandler";
import DeckHandler from "../services/deckHandler";
import GameHandler from "../services/gameHandler";
// import {} from "../"
export default class Game extends Phaser.Scene {
  cardHandler: CardHandler = new CardHandler();
  DeckHandler: DeckHandler = new DeckHandler(this);
  GameHandler: GameHandler = new GameHandler(this);
  cardPreview: any;
  socket: Socket = io("http://localhost:3003");
  dealCards: any;

  constructor() {
    super({
      key: "Game",
    });
  }
  preload() {
    this.load.image("cyanCardBack", "../assets/CyanCardBack.png");
    this.load.image("magentaCardBack", "../assets/MagentaCardBack.png");
    this.load.image("cyanBoolean", "../assets/Cyan_Boolean3x.png");
    this.load.image("magentaBoolean", "../assets/Magenta_Boolean3x.png");
    this.load.image("cyanPing", "../assets/Cyan_Ping3x.png");
    this.load.image("magentaPing", "../assets/Magenta_Ping3x.png");
  }
  create() {
    this.cardHandler = new CardHandler();
    this.DeckHandler = new DeckHandler(this);
    this.GameHandler = new GameHandler(this);
    // this.SocketHandler = new SocketHandler(this);
    // this.UIHandler = new UIHandler(this);
    // this.UIHandler.buildUI();
    // this.InteractiveHandler = new InteractiveHandler(this);
  }
  update() {}
}
