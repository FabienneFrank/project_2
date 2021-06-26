import Visualize from "./visualize.js";
import Button from "./button.js";
let myFontDefault = loadFont("font/D-DINCondensed.otf");
let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");

export default class Screens {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //--------------------------
    this.visualize = new Visualize(this.x, this.y);
    this.startButton = new Button(
      this.width / 2,
      600,
      color(251, 84, 82),
      color(247, 240, 226),
      "Start"
    );
  }
  startScreen() {
    fill(251, 84, 82);
    noStroke();
    textAlign(CENTER);
    textSize(200);
    textFont(myFontBold);
    text("SCUBE", this.width / 2, 250);
    this.startButton.default();
  }
  gameScreen() {}
  endScreen() {}
  exitPopUp() {}
  tutorial() {}
}
