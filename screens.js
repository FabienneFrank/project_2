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
      "Start",
      color(30, 130, 160, 255),
      "default"
    );
    this.replayButton = new Button(
      this.width / 2,
      this.height / 2 + 75,
      color(251, 84, 82),
      "Replay",
      color(30, 140, 160, 255),
      "default"
    );
    this.scrollDownButton = new Button(
      this.width / 2,
      this.height / 2 + 200,
      color(247, 240, 226),
      "ScrollDown",
      color(30, 150, 160, 255),
      "round"
    );
    this.scrollUpButton = new Button(
      this.width / 2,
      this.height / 2 + 1200,
      color(247, 240, 226),
      "ScrollUp",
      color(30, 160, 160, 255),
      "round"
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
      "Steig in die Rolle eines",
      this.width / 2 - 430,
      this.height / 2 - 50
    );
    text(
      "und finde heraus wie die Welt durch",
      this.width / 2 + 341,
      this.height / 2 - 50
    );
    text(
      "Zusammenarbeit aussehen könnte. Werde Teil der Rettungsmission und erreiche das Ziel 14 der",
      this.width / 2,
      this.height / 2
    );
    text(
      "Das Leben Unterwasser erhalten",
      this.width / 2 + 93,
      this.height / 2 + 50
    );
    fill(251, 84, 82);
    text(
      "global politischen Akteurs",
      this.width / 2 - 90,
      this.height / 2 - 50
    );
    text("Agenda 2030: ", this.width / 2 - 222, this.height / 2 + 50);
    //Start-Button
    this.startButton.interactionarea();
    this.startButton.default();
  } // Jenny
  gameScreen() {
    this.exitPopUp();
    this.visualize.calculateEntities();
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
    this.replayButton.interactionarea();
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
    this.scrollDownButton.interactionarea();
    this.scrollDownButton.scroll();
    //Tipps
    fill(247, 240, 226);
    rect(this.width / 2 - 525, this.height / 2 + 600, 250, 250, 20);
    rect(this.width / 2 - 125, this.height / 2 + 600, 250, 250, 20);
    rect(this.width / 2 + 275, this.height / 2 + 600, 250, 250, 20);
    rect(this.width / 2 - 525, this.height / 2 + 1000, 250, 250, 20);
    rect(this.width / 2 - 125, this.height / 2 + 1000, 250, 250, 20);
    rect(this.width / 2 + 275, this.height / 2 + 1000, 250, 250, 20);
    this.displayTipps();
    //Scroll-Up-Button
    this.scrollUpButton.interactionarea();
    this.scrollUpButton.scroll();
  } // Jenny: Get Score
  exitPopUp() {}
  tutorial() {} //Fabi
  displayTipps() {
    textAlign(CENTER);
    noStroke();
    textFont(myFontBold);
    //Tipp1
    if (
      mouseX > this.width / 2 - 525 &&
      mouseX < this.width / 2 - 275 &&
      mouseY > this.height / 2 + 600 &&
      mouseY < this.height / 2 + 850
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Versuche bei deinem", this.width / 2 - 400, this.height / 2 + 650);
      text("Einkauf auf", this.width / 2 - 400, this.height / 2 + 690);
      text("Fangmethoden und", this.width / 2 - 400, this.height / 2 + 730);
      text("-gebiete zu achten", this.width / 2 - 400, this.height / 2 + 770);
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #1", this.width / 2 - 400, this.height / 2 + 750);
    }
    //Tipp2
    if (
      mouseX > this.width / 2 - 125 &&
      mouseX < this.width / 2 + 125 &&
      mouseY > this.height / 2 + 600 &&
      mouseY < this.height / 2 + 850
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Unterstütze doch", this.width / 2, this.height / 2 + 650);
      text("lieber deinen lokalen", this.width / 2, this.height / 2 + 690);
      text("Fischhändler anstatt", this.width / 2, this.height / 2 + 730);
      text("im Supermarkt deinen", this.width / 2, this.height / 2 + 770);
      text("Fisch zu kaufen", this.width / 2, this.height / 2 + 810);
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #2", this.width / 2, this.height / 2 + 750);
    }
    //Tipp3
    if (
      mouseX > this.width / 2 + 275 &&
      mouseX < this.width / 2 + 525 &&
      mouseY > this.height / 2 + 600 &&
      mouseY < this.height / 2 + 850
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Alternative zu in", this.width / 2 + 400, this.height / 2 + 650);
      text("Fisch enthaltener", this.width / 2 + 400, this.height / 2 + 690);
      text("Omega-3-Fettsäure:", this.width / 2 + 400, this.height / 2 + 730);
      text(" Leinsamen,Rapsöl,", this.width / 2 + 400, this.height / 2 + 770);
      text("Walnüssen o. Algen", this.width / 2 + 400, this.height / 2 + 810);
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #3", this.width / 2 + 400, this.height / 2 + 750);
    }
    //Tipp4
    if (
      mouseX > this.width / 2 - 525 &&
      mouseX < this.width / 2 - 275 &&
      mouseY > this.height / 2 + 1000 &&
      mouseY < this.height / 2 + 1250
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Aquakulturen sind", this.width / 2 - 400, this.height / 2 + 1050);
      text(
        "leider keine bessere",
        this.width / 2 - 400,
        this.height / 2 + 1090
      );
      text("Alternative zu", this.width / 2 - 400, this.height / 2 + 1130);
      text(
        "industrieller Fischerei",
        this.width / 2 - 400,
        this.height / 2 + 1170
      );
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #4", this.width / 2 - 400, this.height / 2 + 1150);
    }
    //Tipp5
    if (
      mouseX > this.width / 2 - 125 &&
      mouseX < this.width / 2 + 125 &&
      mouseY > this.height / 2 + 1000 &&
      mouseY < this.height / 2 + 1250
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Informiere dich beim", this.width / 2, this.height / 2 + 1050);
      text("Kauf eines Fisches", this.width / 2, this.height / 2 + 1090);
      text("über seine Bestände", this.width / 2, this.height / 2 + 1130);
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #5", this.width / 2, this.height / 2 + 1150);
    }
    //Tipp6
    if (
      mouseX > this.width / 2 + 275 &&
      mouseX < this.width / 2 + 525 &&
      mouseY > this.height / 2 + 1000 &&
      mouseY < this.height / 2 + 1250
    ) {
      fill(5, 85, 83);
      textSize(30);
      text("Betrachte doch", this.width / 2 + 400, this.height / 2 + 1050);
      text(
        "deinen Fisch als eine",
        this.width / 2 + 400,
        this.height / 2 + 1090
      );
      text("besondere Mahlzeit", this.width / 2 + 400, this.height / 2 + 1130);
      text("und keine tägliche", this.width / 2 + 400, this.height / 2 + 1170);
      text("Speise", this.width / 2 + 400, this.height / 2 + 1210);
    } else {
      fill(244, 151, 151);
      textSize(70);
      text("Tipp #6", this.width / 2 + 400, this.height / 2 + 1150);
    }
  }
}
