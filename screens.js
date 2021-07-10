import { assets } from "./sketch.js";
import Visualize from "./visualize.js";
import Button from "./button.js";

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
    this.visualize = new Visualize(this.width / 2, this.height / 2);

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

    this.tutorialButton = new Button(
      this.width - 80,
      this.height - 1100,
      color(247, 240, 226),
      "?",
      color(30, 170, 160, 255),
      "round"
    );

    this.exitButton = new Button(
      this.width / 2,
      this.height / 2,
      color(247, 240, 226),
      "",
      color(30, 180, 160, 255),
      "exitsquare"
    );
    this.homeButton = new Button(
      this.width / 2 + 200,
      this.height / 2,
      color(251, 84, 82),
      "Home",
      color(180, 233, 186, 255),
      "default"
    );
    this.backToGameButton = new Button(
      this.width / 2 - 200,
      this.height / 2,
      color(145, 155, 154),
      "Back to Game",
      color(223, 177, 10, 255),
      "default"
    );
  }

  setup() {
    this.visualize.interactionDictonary();
  }

  startScreen(helper) {
    //Titel
    fill(251, 84, 82);
    noStroke();
    textAlign(CENTER);
    textSize(200);
    textFont(myFontBold);
    text("SCUBE", this.width / 2, this.height / 2 - 300);
    //Einleitungstext
    fill(247, 240, 226);
    textSize(60);
    text(
      "Tauche ein in die Welt von morgen",
      this.width / 2,
      this.height / 2 - 220
    );
    textSize(40);
    text(
      "Schlüpfe in die Rolle eines",
      this.width / 2 - 455,
      this.height / 2 - 100
    );
    text(
      "und erfahre, wie die Meere von morgen",
      this.width / 2 + 360,
      this.height / 2 - 100
    );
    text(
      "aussehen könnten. Werde Teil einer großen Rettungsmission und erreiche das Ziel 14 der",
      this.width / 2,
      this.height / 2 - 50
    );
    text(
      ", um unsere Meere zu erhalten.",
      this.width / 2 + 93,
      this.height / 2
    );
    text(
      "Bereit für einen Tauchgang?",
      this.width / 2 + 10,
      this.height / 2 + 120
    );

    fill(251, 84, 82);
    text(
      "global politischen Akteurs",
      this.width / 2 - 90,
      this.height / 2 - 100
    );
    text("Agenda 2030", this.width / 2 - 205, this.height / 2);
    //Start-Button
    this.startButton.interactionarea();
    this.tutorialButton.interactionarea();

    this.visualize.colorCheck();

    this.startButton.default();
    this.tutorialButton.help();

    this.visualize.checkKey();
    this.visualize.doForKey(helper);
  } // Jenny

  tutorial() {
    noStroke();
    fill(251, 84, 82);
    rect(this.width / 2 - 600, this.height / 2 - 450, 1200, 80, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.width / 2 - 600, this.height / 2 - 370, 1200, 780, 0, 0, 20, 20);
    fill(247, 240, 226);
    textFont(myFontBold);
    textSize(70);
    text("Tutorial", this.width / 2 - 100, this.height / 2 - 390);
    textSize(35);
    fill(5, 85, 83);
    text(
      "Als global politischer Akteur trägst Du große Verantwortung, doch Du weißt noch nicht, wie",
      this.width / 2 - 550,
      this.height / 2 - 280
    );
    text(
      "Du Deine Entscheidungen in die Tat umsetzen kannst? ",
      this.width / 2 - 300,
      this.height / 2 - 240
    );
    text(
      "Keine Panik, um unsere Meere zu retten ist vor allem eines gefragt: Zusammenhalt,",
      this.width / 2 - 500,
      this.height / 2 - 200
    );
    text(
      "deshalb helfen wir Dir gerne!",
      this.width / 2 - 170,
      this.height / 2 - 160
    );
    text(
      "Mit dem Starten der Simulation präsentiert Scube Dir einen Küstenabschnitt.",
      this.width / 2 - 460,
      this.height / 2 - 80
    );
    text(
      "In diesem befinden sich versteckte Parameter, welche Einfluss auf den Küstenabschnitt nehmen.",
      this.width / 2 - 575,
      this.height / 2 - 40
    );
    text(
      "Ob dieser jedoch positiv oder negativ ausfällt, liegt in Deiner Hand.",
      this.width / 2 - 400,
      this.height / 2
    );
    text(
      "Bewegst Du nun Deinen Cursor über den Bildschirm, so kannst Du",
      this.width / 2 - 390,
      this.height / 2 + 40
    );
    text(
      "mithilfe des Farbwechsels alle Parameter entdecken.",
      this.width / 2 - 330,
      this.height / 2 + 80
    );
    text(
      "Beim Rechtsklick auf einen Parameter bekommst Du den jeweiligen Sachverhalt erklärt",
      this.width / 2 - 520,
      this.height / 2 + 160
    );
    text(
      "und kannst Dich für dessen Erhöhung oder Senkung entscheiden.",
      this.width / 2 - 390,
      this.height / 2 + 200
    );
    text(
      "Gemessen werden Deine Entscheidungen mittels der Nachhaltigkeitsskala rechts",
      this.width / 2 - 480,
      this.height / 2 + 240
    );
    text(
      "neben dem Küstenabschnitt.",
      this.width / 2 - 160,
      this.height / 2 + 280
    );
    text(
      "So, nun solltest Du Deiner neuen Rolle aber gewachsen sein, bereit?",
      this.width / 2 - 400,
      this.height / 2 + 360
    );

    fill(251, 84, 82);
    text("versteckte Parameter", this.width / 2 - 290, this.height / 2 - 40);
    text("in Deiner Hand.", this.width / 2 + 213, this.height / 2);
    text("Erhöhung", this.width / 2 - 62, this.height / 2 + 200);
    text("Senkung", this.width / 2 + 114, this.height / 2 + 200);
    text("Nachhaltigkeitsskala", this.width / 2 + 150, this.height / 2 + 240);

    this.exitButton.interactionarea();
    this.exitButton.exit();

    image(
      assets.visual.active.boat,
      1700,
      640,
      this.width - 2400,
      this.height - 1200
    );

    image(
      assets.visual.default.boat,
      700,
      910,
      this.width - 2400,
      this.height - 1200
    );
  } //Fabi

  gameScreen(helper) {
    this.visualize.displayInteractionArea();
    this.visualize.colorCheck();
    this.visualize.displayVisuals(helper);
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
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

  exitPopUp() {
    //background
    noStroke();
    fill(251, 84, 82);
    rect(this.width / 2 - 450, this.height / 2 - 300, 900, 100, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.width / 2 - 450, this.height / 2 - 200, 900, 330, 0, 0, 20, 20);
    //score-Anzeige
    textFont(myFontBold);
    textSize(80);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Score: " + "x", this.width / 2, this.height / 2 - 230);
    //text
    textSize(35);
    fill(5, 85, 83);
    text(
      "Du hast dein Ziel noch nicht ganz erreicht. Möchtest du das",
      this.width / 2,
      this.height / 2 - 130
    );
    text(
      "Spiel wirklich verlassen? Dein Fortschritt wird nicht gespeichert.",
      this.width / 2,
      this.height / 2 - 80
    );
    //home-Button
    this.homeButton.interactionarea();
    this.homeButton.default();
    //back-to-Game-Button
    this.backToGameButton.interactionarea();
    this.backToGameButton.default();
  }

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
