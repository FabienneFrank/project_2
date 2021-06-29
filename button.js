//ich bin ein Test
let myFontDefault = loadFont("font/D-DINCondensed.otf");
let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");
export default class Button {
  constructor(x, y, color, lable, interactioncolor, type) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.lable = lable;
    this.interactioncolor = interactioncolor;
    this.type = type;
  }
  default() {
    //default
    fill(5, 85, 83);
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
    fill(5, 85, 83);
    strokeWeight(5);
    stroke(this.color);
    ellipse(this.x, this.y + 180, 50);
    if (this.lable === "ScrollDown") {
      line(this.x - 10, this.y + 175, this.x, this.y + 185);
      line(this.x + 10, this.y + 175, this.x, this.y + 185);
    }
    if (this.lable === "ScrollUp") {
      line(this.x - 10, this.y + 185, this.x, this.y + 175);
      line(this.x + 10, this.y + 185, this.x, this.y + 175);
    }
  } //endscreen runde buttons zu Tips scrollen
  interactionarea() {
    if (this.type === "default") {
      fill(this.interactioncolor);
      rect(this.x - 150, this.y, 300, 80, 20);
    } else if (this.type === "round") {
      fill(this.interactioncolor);
      ellipse(this.x, this.y + 180, 50);
    } else if (this.type === "square") {
    }
    return this.interactioncolor;
  }
}
