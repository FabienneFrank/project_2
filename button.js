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
    if (this.lable === "Start" || this.lable === "Replay") {
      fill(5, 85, 83);
    } else if (this.lable === "Home" || this.lable === "Back to Game") {
      fill(247, 240, 226);
    }

    stroke(this.color);
    strokeWeight(5);
    rect(this.x - 150, this.y, 300, 80, 20);
    fill(this.color);
    noStroke();
    textSize(60);
    textFont(myFontBold);
    text(this.lable, this.x, this.y + 60);
  } // start, replay, home, back to game

  exit() {
    stroke(this.color);
    strokeWeight(4);
    fill(251, 84, 82);
    rect(this.x - 580, this.y - 445, 80, 65, 8);
    strokeWeight(6);
    line(this.x - 560, this.y - 410, this.x - 520, this.y - 410); //line middle
    line(this.x - 560, this.y - 410, this.x - 540, this.y - 427); //line top
    line(this.x - 560, this.y - 410, this.x - 540, this.y - 393); //line bottom
  } //exit arrow

  help() {
    //tutorial
    fill(5, 85, 83);
    strokeWeight(3);
    stroke(this.color);
    ellipse(this.x, this.y + 180, 50);
    textSize(40);
    textFont(myFontBold);
    text(this.lable, this.x, this.y + 195);
  } //start screen to tutorial

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
    } else if (this.type === "exitsquare") {
      fill(this.interactioncolor);
      rect(this.x - 580, this.y - 445, 80, 65, 8);
    }
  }
}
