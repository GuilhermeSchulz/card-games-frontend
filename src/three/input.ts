/**
 * Manages mouse and keyboard input
 */
type mouse = {
  x: number;
  y: number;
};
export class InputManager {
  /**
   * Last mouse position
   * @type {x: number, y: number}
   */

  mouse: mouse = { x: 0, y: 0 };
  /**
   * True if left mouse button is currently down
   * @type {boolean}
   */
  isLeftMouseDown: boolean | number = false;
  /**
   * True if the middle mouse button is currently down
   * @type {boolean}
   */
  isMiddleMouseDown: boolean | number = false;
  /**
   * True if the right mouse button is currently down
   * @type {boolean}
   */
  isRightMouseDown: boolean | number = false;

  constructor() {
    window.addEventListener(
      "mousedown",

      this.onMouseDown.bind(this),
      false
    );
    window.addEventListener("mouseup", this.onMouseUp.bind(this), false);
    window.addEventListener("mousemove", this.onMouseMove.bind(this), false);
    window.addEventListener(
      "contextmenu",
      (event) => event.preventDefault(),
      false
    );
  }

  /**
   * Event handler for `mousedown` event
   * @param {MouseEvent} event
   */
  onMouseDown(event: any) {
    if (event.button === 0) {
      this.isLeftMouseDown = true;
    }
    if (event.button === 1) {
      this.isMiddleMouseDown = true;
    }
    if (event.button === 2) {
      this.isRightMouseDown = true;
    }
  }

  /**
   * Event handler for `mouseup` event
   * @param {MouseEvent} event
   */
  onMouseUp(event: any) {
    if (event.button === 0) {
      this.isLeftMouseDown = false;
    }
    if (event.button === 1) {
      this.isMiddleMouseDown = false;
    }
    if (event.button === 2) {
      this.isRightMouseDown = false;
    }
  }

  /**
   * Event handler for 'mousemove' event
   * @param {MouseEvent} event
   */
  onMouseMove(event: any) {
    this.isLeftMouseDown = event.buttons & 1;
    this.isRightMouseDown = event.buttons & 2;
    this.isMiddleMouseDown = event.buttons & 4;
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
}
