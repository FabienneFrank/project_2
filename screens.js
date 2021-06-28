import Visualize from "./visualize.js";
import Button from "./button.js";
let myFontDefault = loadFont("font/D-DINCondensed.otf");
let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");

export default class Screens {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    //--------------------------
    this.motivationstext = [
      "Das Ziel zu erreichen ist schwer aber ich sehe Du gibst dein Bestes!",
      "Super gemacht! Das Ziel ist erreicht, aber kannst du das Ziel auch übertreffen?",
      "WOW das lief ja fantastisch!",
    ];
    //--------------------------
    this.visualize = new Visualize(this.x, this.y);
    this.startButton = new Button(
      this.width / 2,
      (this.height * 2) / 3,
      color(251, 84, 82),
      "Start"
    );
    this.replayButton = new Button(
      this.width / 2,
      this.height / 2 + 75,
      color(251, 84, 82),
      "Replay"
    );
    this.scrollDownButton = new Button(
      this.width / 2,
      this.height / 2 + 200,
      color(247, 240, 226),
      "ScrollDown"
    );
  }
  startScreen() {
    //Titel
    fill(251, 84, 82);
    noStroke();
    textAlign(CENTER);
    textSize(200);
    textFont(myFontBold);
    text("SCUBE", this.width / 2, 250);
    //Einleitungstext
    fill(247, 240, 226);
    textSize(40);
    text(
      "Tauche ein in die Welt von Morgen",
      this.width / 2,
      this.height / 2 - 100
    );
    text(
      "Steig in die Rolle eines global politischen Akteurs und finde heraus wie die Welt durch",
      this.width / 2,
      this.height / 2 - 50
    );
    text(
      "Zusammenarbeit aussehen könnte. Werde Teil der Rettungsmission und erreiche das Ziel 14 der",
      this.width / 2,
      this.height / 2
    );
    text(
      "Agenda 2030: Das Leben Unterwasser erhalten",
      this.width / 2,
      this.height / 2 + 50
    );
    //Start-Button
    if (this.startButton.hitTest()) {
      //change Screen
    }
    this.startButton.default();
  } // Jenny
  gameScreen() {
    this.exitPopUp();
  }
  endScreen() {
    //Scoreboard
    stroke(5, 85, 83);
    strokeWeight(5);
    fill(251, 84, 82);
    rect(this.width / 2 - 450, this.height / 2 - 450, 900, 80, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.width / 2 - 450, this.height / 2 - 370, 900, 380, 0, 0, 20, 20);
    noStroke();
    textFont(myFontBold);
    textSize(60);
    textAlign(CENTER);
    text("Score: " + "x", this.width / 2, this.height / 2 - 390);
    //Replay-Button
    if (this.replayButton.hitTest()) {
      //change Screen
    }
    this.replayButton.default();
    //Motivationstext
    fill(247, 240, 226);
    textSize(40);
    if (this.visualize.keyAction.parameterNetwork.calculateScore() <= -100) {
      text(this.motivationstext[0], this.width / 2, this.height / 2 + 250);
    } else if (
      this.visualize.keyAction.parameterNetwork.calculateScore() <= 800
    ) {
      text(this.motivationstext[1], this.width / 2, this.height / 2 + 250);
    } else if (
      this.visualize.keyAction.parameterNetwork.calculateScore() > 800
    ) {
      text(this.motivationstext[2], this.width / 2, this.height / 2 + 250);
    }
    //Scroll-Down-Button
    this.scrollDownButton.hitTest();
    this.scrollDownButton.scroll();
  } // Jenny: Get Score
  exitPopUp() {}
  tutorial() {} //Fabi
}
