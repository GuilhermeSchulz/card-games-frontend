import * as Phaser from "phaser";

// import {} from "../"
export default class Game extends Phaser.Scene {
  // SocketHandler: SocketHandler = new SocketHandler(this);
  // InteractiveHandler: InteractiveHandler = new InteractiveHandler(this);
  constructor() {
    super({
      key: "Game",
    });
  }
  init() {}
  preload() {
    this.load.image("cyanCardBack", "/assets/CyanCardBack.png");
    this.load.image("magentaCardBack", "/assets/MagentaCardBack.png");
    this.load.image("cyanBoolean", "/assets/Cyan_Boolean3x.png");
    this.load.image("magentaBoolean", "/assets/Magenta_Boolean3x.png");
    this.load.image("cyanPing", "/assets/Cyan_Ping3x.png");
    this.load.image("magentaPing", "/assets/Magenta_Ping3x.png");
  }
  create() {
    const img = document.createElement("img");
    const game = new Phaser.Game();
    const text = new Phaser.Textures.TextureManager(game);
    const texture = new Phaser.Textures.Texture(
      text,
      "background",
      img,
      400,
      600
    );
    this.add.image(0, 0, texture, "magentaPing");

    // this.add.image(0, 0, "cyanPing");
    // this.SocketHandler = new SocketHandler(this);
    // this.InteractiveHandler = new InteractiveHandler(this);
  }
  update() {}
}
