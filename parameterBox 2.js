let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");
import { assets } from "./sketch.js";

export default class ParameterBox {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  background() {
    stroke(5, 85, 83);
    strokeWeight(10);
    fill(83, 124, 123);
    rect(this.x, this.y, this.width, this.height - 500, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.x, this.y + 180, this.width, this.height - 180, 0, 0, 20, 20);
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //string mit parameter übergeben und abfragen
    this.hafenkontrollen();
  }
  hafenkontrollen() {
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Hafenkontrollen", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text("Schütze deinen Hafen vor", this.x + this.width / 2, this.y + 220);
    text("illegaler Fischerei", this.x + this.width / 2, this.y + 250);
    image(
      assets.visual.default.hafenkontrolle,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.hafenkontrolle,
        this.x + 130,
        this.y + 530,
        40,
        40
      );
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
  }
}
