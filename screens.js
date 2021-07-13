import { assets } from "./sketch.js";
import Visualize from "./visualize.js";
import Button from "./button.js";

let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");

export default class Screens {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    //--------------------------
    this.motivationtext = [
      "Das Ziel zu erreichen ist schwer aber ich sehe Du gibst dein Bestes!",
      "Super gemacht! Du hast das Ziel erreicht, weiter so!",
    ];
    //--------------------------
    this.visualize = new Visualize(this.width / 2, this.height / 2);

    this.startButton = new Button(
      this.width / 2,
      650,
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
      -120,
      color(247, 240, 226),
      "?",
      color(30, 170, 160, 255),
      "round"
    );

    this.exitTutorialButton = new Button(
      this.width / 2 - 580,
      70,
      color(247, 240, 226),
      "tutorial",
      color(30, 180, 160, 255),
      "square"
    );
    this.exitGameButton = new Button(
      50,
      50,
      color(247, 240, 226),
      "game",
      color(115, 144, 107, 255),
      "square"
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
    text("SCUBE", this.width / 2, 180);
    //Einleitungstext
    fill(247, 240, 226);
    textSize(60);
    text("Tauche ein in die Welt von morgen", this.width / 2, 260);
    textSize(40);
    text("Schlüpfe in die Rolle eines", this.width / 2 - 455, 390);
    text("und erfahre, wie die Meere von morgen", this.width / 2 + 360, 390);
    text(
      "aussehen könnten. Werde Teil einer großen Rettungsmission und erreiche das Ziel 14 der",
      this.width / 2,
      440
    );
    text(", um unsere Meere zu erhalten.", this.width / 2 + 93, 490);
    text("Bereit für einen Tauchgang?", this.width / 2 + 10, 610);

    fill(251, 84, 82);
    text("global politischen Akteurs", this.width / 2 - 90, 390);
    text("Agenda 2030", this.width / 2 - 205, 490);
    //Start-Button und Tutorial-Button
    this.startButton.interactionarea();
    this.tutorialButton.interactionarea();

    this.visualize.colorCheck();

    this.startButton.default();
    this.tutorialButton.help();

    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    this.visualize.restart();
  } // Jenny

  tutorial(helper) {
    noStroke();
    fill(251, 84, 82);
    rect(this.width / 2 - 600, 50, 1200, 120, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.width / 2 - 600, 170, 1200, 700, 0, 0, 20, 20);
    fill(247, 240, 226);
    textFont(myFontBold);
    textAlign(CENTER);
    textSize(70);
    text("Tutorial", this.width / 2, 140);
    textSize(35);
    fill(5, 85, 83);
    text(
      "Als global politischer Akteur trägst Du große Verantwortung, doch Du weißt noch nicht, wie",
      this.width / 2,
      220
    );
    text(
      "Du Deine Entscheidungen in die Tat umsetzen kannst? ",
      this.width / 2,
      260
    );
    text(
      "Keine Panik, um unsere Meere zu retten ist vor allem eines gefragt: Zusammenhalt,",
      this.width / 2,
      300
    );
    text("deshalb helfen wir Dir gerne!", this.width / 2, 340);
    text(
      "Mit dem Starten der Simulation präsentiert Scube Dir einen Küstenabschnitt.",
      this.width / 2,
      420
    );
    text(
      "In diesem befinden sich versteckte Parameter, welche Einfluss auf den Küstenabschnitt nehmen.",
      this.width / 2,
      460
    );
    text(
      "Ob dieser jedoch positiv oder negativ ausfällt, liegt in Deiner Hand.",
      this.width / 2,
      500
    );
    text(
      "Bewegst Du nun Deinen Cursor über den Bildschirm, so kannst Du",
      this.width / 2,
      540
    );
    text(
      "mithilfe des Farbwechsels alle Parameter entdecken.",
      this.width / 2,
      580
    );
    text(
      "Beim Rechtsklick auf einen Parameter bekommst Du den jeweiligen Sachverhalt erklärt",
      this.width / 2,
      620
    );
    text(
      "und kannst Dich für dessen Erhöhung oder Senkung entscheiden.",
      this.width / 2,
      660
    );
    text(
      "Gemessen werden Deine Entscheidungen mittels der Nachhaltigkeitsskala rechts",
      this.width / 2,
      700
    );
    text("neben dem Küstenabschnitt.", this.width / 2, 740);
    text(
      "So, nun solltest Du Deiner neuen Rolle aber gewachsen sein, bereit?",
      this.width / 2,
      820
    );

    fill(251, 84, 82);
    text("versteckte Parameter", this.width / 2 - 159, 460);
    text("in Deiner Hand.", this.width / 2 + 307, 500);
    text("Erhöhung", this.width / 2 + 1, 660);
    text("Senkung", this.width / 2 + 173, 660);
    text("Nachhaltigkeitsskala", this.width / 2 + 273, 700);

    this.exitTutorialButton.interactionarea();
    this.visualize.colorCheck();
    this.exitTutorialButton.exit();
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    image(assets.visual.active.boat, this.width / 2 + 400, 480, 176.24, 93.2);

    image(assets.visual.default.boat, this.width / 2 - 580, 720, 176.24, 93.2);
  } //Fabi

  gameScreen(helper) {
    this.visualize.displayInteractionArea();
    if (this.visualize.keyAction.interactedObject === "none") {
      this.exitGameButton.interactionarea();
    }

    this.visualize.colorCheck();
    this.visualize.displayVisuals(helper);
    if (this.visualize.keyAction.interactedObject === "none") {
      this.exitGameButton.exit();
    }

    if (helper.screenState === "exitPopUp") {
      this.exitPopUp(helper);
    }
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
  }

  endScreen(helper) {
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
    text(
      "Score: " + round(this.visualize.keyAction.parameterNetwork.score),
      this.width / 2,
      this.height / 2 - 390
    );
    //Replay-Button
    this.replayButton.interactionarea();
    this.scrollUpButton.interactionarea();
    this.scrollDownButton.interactionarea();
    this.visualize.colorCheck();
    this.replayButton.default();
    this.scrollUpButton.scroll();
    this.scrollDownButton.scroll();
    console.log(this.visualize.interactionKey);
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    //Motivationstext
    fill(247, 240, 226);
    textSize(40);
    push();
    noStroke();
    if (this.visualize.keyAction.parameterNetwork.loseEnd) {
      text(this.motivationtext[0], this.width / 2, this.height / 2 + 250);
    } else if (this.visualize.keyAction.parameterNetwork.winEnd) {
      text(this.motivationtext[1], this.width / 2, this.height / 2 + 250);
    }
    pop();
    //Scroll-Down-Button

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
  } // Jenny: Get Score

  exitPopUp(helper) {
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
    text(
      "Score: " + round(this.visualize.keyAction.parameterNetwork.score),
      this.width / 2,
      this.height / 2 - 230
    );
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
    //home-Button & back-to-Game-Button
    this.homeButton.interactionarea();
    this.backToGameButton.interactionarea();
    this.visualize.colorCheck();
    this.homeButton.default();
    this.backToGameButton.default();
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
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
