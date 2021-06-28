//ich bin ein Test
let myFontDefault = loadFont("font/D-DINCondensed.otf");
let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");
export default class Button {
  constructor(x, y, color, lable) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lable = lable;
  }
  default() {
    //default
    noFill();
    stroke(this.color);
    strokeWeight(5);
    rect(this.x - 150, this.y, 300, 80, 20);
    fill(this.color);
    noStroke();
    textSize(60);
    textFont(myFontBold);
    text(this.lable, this.x, this.y + 60);
  } // start, replay, home, back to game
  exit() {} //exit pfeil
  scroll() {
    noFill();
    strokeWeight(5);
    stroke(this.color);
    ellipse(this.x, this.y + 180, 50, 50);
    line(this.x - 10, this.y + 175, this.x, this.y + 185);
    line(this.x + 10, this.y + 175, this.x, this.y + 185);
    rect(this.x, this.y + 300, 600, 600);
  } //endscreen runde buttons zu Tips scrollen
  hitTest() {
    if (this.lable === "Start" || this.lable === "Replay") {
      if (
        mouseX > this.x - 150 &&
        mouseX < this.x + 150 &&
        mouseY > this.y &&
        mouseY < this.y + 80
      ) {
        fill(83, 124, 123);
        this.color = color(247, 240, 226);
        rect(this.x - 150, this.y, 300, 80, 20);
        return true;
      } else {
        noFill();
        this.color = color(251, 84, 82);
        rect(this.x - 150, this.y, 300, 80, 20);
        return false;
      }
    }
  }
}
