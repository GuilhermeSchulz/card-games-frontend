import Game from "../scenes/game";

export default class InteractiveHandler {
  constructor(scene: Game) {
    scene.cardPreview = null;
    scene.socket.on("pointerdown", () => {
      scene.socket.emit("dealCards", scene.socket.id);
      scene.dealCards.disableInteractive();
    });
    scene.socket.on("pointerover", () => {
      scene.dealCards.setColor("#ff69b4");
    });
    scene.socket.on("pointerout", () => {
      scene.dealCards.setColor("#00ffff");
    });

    scene.socket.on("pointerover", (event: any, gameObjects: any) => {
      let pointer = scene.input.activePointer;
      if (
        gameObjects[0].type === "Image" &&
        gameObjects[0].data.list.name !== "cardBack"
      ) {
        scene.cardPreview = scene.add
          .image(
            pointer.worldX,
            pointer.worldY,
            gameObjects[0].data.values.sprite
          )
          .setScale(0.5, 0.5);
      }
    });
    scene.socket.on(
      "pointerout",
      (event: any, gameObjects: Phaser.GameObjects.GameObject) => {
        if (
          gameObjects.data.list[0].type === "Image" &&
          gameObjects.data.list[0].data.list.name !== "cardBack"
        ) {
          scene.cardPreview.setVisible(false);
        }
      }
    );
    scene.socket.on(
      "drag",
      (pointer: any, gameObject: any, dragX: any, dragY: any) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
      }
    );
    scene.socket.on("dragstart", (pointer: any, gameObject: any) => {
      gameObject.setTint(0xff69b4);

      scene.children.bringToTop(gameObject);
      scene.cardPreview.setVisible(false);
    });
    scene.socket.on(
      "dragend",
      (pointer: any, gameObject: any, dropped: any) => {
        gameObject.setTint();
        if (!dropped) {
          gameObject.x = gameObject.input.dragStartX;
          gameObject.y = gameObject.input.dragStartY;
        }
      }
    );
    scene.socket.on("drop", (pointer: any, gameObject: any, dropZone: any) => {
      if (
        scene.GameHandler.isMyTurn &&
        scene.GameHandler.gameState === "Ready"
      ) {
        gameObject.x = dropZone.x - 350 + dropZone.data.values.cards * 50;
        gameObject.y = dropZone.y;
        scene.dropZone.data.values.cards++;
        scene.input.setDraggable(gameObject, false);
        scene.socket.emit(
          "cardPlayed",
          gameObject.data.values.name,
          scene.socket.id
        );
      } else {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });
  }
}
