//ich bin ein Test
let myFontDefault = loadFont("font/D-DINCondensed.otf");
let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");
export default class Button {
  constructor(x, y, color, hoverColor, lable) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.hoverColor = hoverColor;
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
  scroll() {} //endscreen runde buttons zu Tips scrollen
  hitTest() {}
}
