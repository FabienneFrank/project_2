import { assets } from "./sketch.js";
import Button from "./button.js";

let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");

export default class ParameterBox {
  constructor(x, y, width, height, visualize) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visualize = visualize;

    this.periodUP = new Button(
      this.x + this.width / 2,
      this.y + 140,
      color(83, 124, 123),
      "periodUp",
      color(175, 22, 181, 255),
      "round"
    );

    this.periodDOWN = new Button(
      this.x + this.width / 2,
      this.y + 380,
      color(83, 124, 123),
      "periodDown",
      color(18, 44, 22, 255),
      "round"
    );

    this.chosenIndex = 0;
    this.clickedPortControl = 5;
    this.clickedFishingQuote = 8;
    this.clickedSubsidies = 2;
    this.clickedAntiBait = 1;
    this.clickedNets = 3;
    this.clickedPeriod = 8;
    this.clickedProtectionZone = 2;
  }

  background(clickedObject, shownScreen, helper) {
    //background
    stroke(5, 85, 83);
    strokeWeight(10);
    fill(83, 124, 123);
    rect(this.x, this.y, this.width, this.height - 500, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.x, this.y + 180, this.width, this.height - 180, 0, 0, 20, 20);
    //show changable parameters
    if (
      clickedObject === "port" ||
      clickedObject === "boat" ||
      clickedObject === "nets"
    ) {
      if (shownScreen === "choose") {
        this.interactionarea(clickedObject);
        this.visualize.colorCheck();
        this.chooseParameter(clickedObject);
        this.visualize.checkKey();
        this.visualize.doForKey(helper);
      } else if (shownScreen === "fishingQuote") {
        this.fishingQuote(helper);
      } else if (shownScreen === "subsidies") {
        this.subsidies(helper);
      } else if (shownScreen === "portControl") {
        this.portControl(helper);
      } else if (shownScreen === "period") {
        this.period(helper);
      } else if (shownScreen === "nets") {
        this.nets(helper);
      } else if (shownScreen === "antiBait") {
        this.antiBait(helper);
      }
    } else if (clickedObject === "waterSurface") {
      this.protectionZone(helper);
    }
  }

  chooseParameter(clickedObject) {
    //headline
    textFont(myFontBold);
    textSize(50);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Welche Änderung", this.x + this.width / 2, this.y + 80);
    text("möchtest du vornehmen?", this.x + this.width / 2, this.y + 140);
    //boxes to choose
    stroke(83, 124, 123);
    strokeWeight(5);
    fill(247, 240, 226);
    rect(this.x + this.width / 2 - 200, this.y + 220, 400, 200, 20);
    rect(this.x + this.width / 2 - 200, this.y + 440, 400, 200, 20);
    //tinted image
    if (clickedObject === "port") {
      tint(255, 100);
      image(
        assets.visual.default.portControl,
        this.x + this.width / 2 - 75,
        this.y + 240,
        150,
        150
      );
      image(
        assets.visual.default.period6h,
        this.x + this.width / 2 - 125,
        this.y + 480,
        251,
        120
      );
      //text Parameter to choose
      textFont(myFontBold);
      textSize(60);
      fill(83, 124, 123);
      textAlign(CENTER);
      noStroke();
      text("Hafenkontrollen", this.x + this.width / 2, this.y + 340);
      text("Zeitraum", this.x + this.width / 2, this.y + 560);
    } else if (clickedObject === "boat") {
      tint(255, 100);
      image(
        assets.visual.default.fishingQuote,
        this.x + this.width / 2 - 75,
        this.y + 250,
        150,
        150
      );
      image(
        assets.visual.default.subsidies,
        this.x + this.width / 2 - 80,
        this.y + 470,
        150,
        150
      );
      textFont(myFontBold);
      textSize(60);
      fill(83, 124, 123);
      textAlign(CENTER);
      noStroke();
      text("Fangquote", this.x + this.width / 2, this.y + 340);
      text("Subventionen", this.x + this.width / 2, this.y + 560);
    } else if (clickedObject === "nets") {
      tint(255, 100);
      image(
        assets.visual.default.nets,
        this.x + this.width / 2 - 90,
        this.y + 230,
        200,
        180
      );
      image(
        assets.visual.default.antiBait,
        this.x + this.width / 2 - 80,
        this.y + 470,
        150,
        150
      );
      textFont(myFontBold);
      textSize(60);
      fill(83, 124, 123);
      textAlign(CENTER);
      noStroke();
      text("Netzsuche", this.x + this.width / 2, this.y + 340);
      text("Antiköder", this.x + this.width / 2, this.y + 560);
    }
    noTint();
  } //display possibilities for changeable parameters

  portControl(helper) {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Hafenkontrollen", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text("Schütze deinen Hafen vor", this.x + this.width / 2, this.y + 220);
    text("illegaler Fischerei", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.visual.default.portControl,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    //clickable image array
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(assets.interactive.portControl, this.x + 130, this.y + 530, 40, 40);
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.colorCheck();
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.portControl,
        this.x + 130,
        this.y + 530,
        40,
        40
      );
      if (
        mouseX > this.x + 130 &&
        mouseX < this.x + 170 &&
        mouseY > this.y + 530 &&
        mouseY < this.y + 570
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    this.portControlClicked();
    this.chosenIndex = 0;
  }

  period(helper) {
    //picture array stages
    let periodArray = [
      assets.visual.default.period1h,
      assets.visual.default.period2h,
      assets.visual.default.period3h,
      assets.visual.default.period4h,
      assets.visual.default.period5h,
      assets.visual.default.period6h,
      assets.visual.default.period7h,
      assets.visual.default.period8h,
      assets.visual.default.period9h,
      assets.visual.default.period10h,
      assets.visual.default.period11h,
      assets.visual.default.period12h,
    ];
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Zeitraum zum fischen", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text("Wie lange dürfen die", this.x + this.width / 2, this.y + 220);
    text("Boote fischen?", this.x + this.width / 2, this.y + 250);
    //main image

    image(
      periodArray[this.clickedPeriod - 1],
      this.x + this.width / 2 - 160,
      this.y + 370,
      314,
      150
    );
    //periodUP Button

    this.periodUP.interactionarea();
    this.periodDOWN.interactionarea();
    this.visualize.colorCheck();
    this.periodUP.scroll();
    this.periodDOWN.scroll();
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
  }

  fishingQuote(helper) {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Fangquoten", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text("Fangquoten können Bestände", this.x + this.width / 2, this.y + 220);
    text("am Leben erhalten", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.visual.default.fishingQuote,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    //clickable image array
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(assets.interactive.fish, this.x + 130, this.y + 530, 40, 40);
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.colorCheck();

    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.fishingQuote,
        this.x + 130,
        this.y + 530,
        40,
        40
      );
      if (
        mouseX > this.x + 130 &&
        mouseX < this.x + 170 &&
        mouseY > this.y + 530 &&
        mouseY < this.y + 570
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.checkKey();
    this.visualize.doForKey(helper);

    this.fishingQuoteClicked();
    this.chosenIndex = 0;
  }

  subsidies(helper) {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Subventionen", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text(
      "Unterstütze nachhaltige Fischerei",
      this.x + this.width / 2,
      this.y + 220
    );
    text("mit mehr Subventionen", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.visual.default.subsidies,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    //clickable image array
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(assets.interactive.subsidies, this.x + 130, this.y + 530, 40, 40);
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.colorCheck();
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.subsidies,
        this.x + 130,
        this.y + 530,
        40,
        40
      );
      if (
        mouseX > this.x + 130 &&
        mouseX < this.x + 170 &&
        mouseY > this.y + 530 &&
        mouseY < this.y + 570
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    this.subsidiesClicked();
    this.chosenIndex = 0;
  }

  protectionZone(helper) {
    //picture array stages
    let protectionZoneArray = [
      assets.visual.default.protectionZone0,
      assets.visual.active.protectionZone1,
      assets.visual.active.protectionZone2,
      assets.visual.active.protectionZone3,
      assets.visual.active.protectionZone4,
      assets.visual.active.protectionZone5,
    ];
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Schutzzonen", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text("Errichte Schutzonen", this.x + this.width / 2, this.y + 220);
    text("um Bestände zu schützen", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.interactive.protectionZone,
      this.x + this.width / 2 - 200,
      this.y + 300,
      400,
      290
    );
    this.visualize.colorCheck();
    image(
      protectionZoneArray[this.clickedProtectionZone],
      this.x + this.width / 2 - 200,
      this.y + 300,
      400,
      290
    );
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 5; i++) {
      if (
        mouseX > this.x + 100 &&
        mouseX < this.x + 152 &&
        mouseY > this.y + 390 &&
        mouseY < this.y + 550
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 52;
      this.y -= 10;
    }
    this.x = x;
    this.y = y;

    this.visualize.checkKey();
    this.visualize.doForKey(helper);
  }

  nets(helper) {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Gemeldete Netze", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text("Suche das Meer nach", this.x + this.width / 2, this.y + 220);
    text("verlorenen Netzen ab", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.visual.default.nets,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    //clickable image array
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(assets.interactive.nets, this.x + 130, this.y + 530, 40, 40);
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.colorCheck();
    for (let i = 0; i < 10; i++) {
      image(assets.visual.default.nets, this.x + 130, this.y + 530, 40, 40);
      if (
        mouseX > this.x + 130 &&
        mouseX < this.x + 170 &&
        mouseY > this.y + 530 &&
        mouseY < this.y + 570
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    this.netsClicked();
    this.chosenIndex = 0;
  }

  antiBait(helper) {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    //headline
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Antiköder", this.x + this.width / 2, this.y + 110);
    //describtion
    textSize(30);
    fill(83, 124, 123);
    text(
      "Antiköder können Tiere warnen",
      this.x + this.width / 2,
      this.y + 220
    );
    text("und Beifang verhindern", this.x + this.width / 2, this.y + 250);
    //main image
    image(
      assets.visual.default.antiBait,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    //clickable image array
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(assets.interactive.antiBait, this.x + 130, this.y + 530, 40, 40);
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.colorCheck();
    for (let i = 0; i < 10; i++) {
      fill(247, 240, 226);
      ellipse(this.x + 150, this.y + 550, 40);
      image(assets.visual.default.antiBait, this.x + 130, this.y + 530, 40, 40);
      if (
        mouseX > this.x + 130 &&
        mouseX < this.x + 170 &&
        mouseY > this.y + 530 &&
        mouseY < this.y + 570
      ) {
        this.chosenIndex = i + 1;
      }
      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
    this.visualize.checkKey();
    this.visualize.doForKey(helper);
    this.antiBaitClicked();
    this.chosenIndex = 0;
  }

  interactionarea(clickedObject) {
    noStroke();

    if (clickedObject === "boat") {
      fill(223, 99, 93, 255);
      rect(this.x + this.width / 2 - 200, this.y + 220, 400, 200, 20);
      fill(41, 55, 1, 255);
      rect(this.x + this.width / 2 - 200, this.y + 440, 400, 200, 20);
    }
    if (clickedObject === "nets") {
      fill(161, 71, 143, 255);
      rect(this.x + this.width / 2 - 200, this.y + 220, 400, 200, 20);
      fill(114, 59, 65, 255);
      rect(this.x + this.width / 2 - 200, this.y + 440, 400, 200, 20);
    }
    if (clickedObject === "port") {
      fill(24, 95, 235, 255);
      rect(this.x + this.width / 2 - 200, this.y + 220, 400, 200, 20);
      fill(191, 117, 96, 255);
      rect(this.x + this.width / 2 - 200, this.y + 440, 400, 200, 20);
    }
  }

  portControlClicked() {
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.clickedPortControl; i++) {
      image(
        assets.visual.active.portControl,
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

  fishingQuoteClicked() {
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.clickedFishingQuote; i++) {
      image(
        assets.visual.active.fishingQuote,
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

  subsidiesClicked() {
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.clickedSubsidies; i++) {
      image(assets.visual.active.subsidies, this.x + 130, this.y + 530, 40, 40);

      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
  }

  antiBaitClicked() {
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.clickedAntiBait; i++) {
      image(assets.visual.active.antiBait, this.x + 130, this.y + 530, 40, 40);

      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
  }

  netsClicked() {
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.clickedNets; i++) {
      image(assets.visual.active.nets, this.x + 130, this.y + 530, 40, 40);

      this.x += 45;
      if (i === 4) {
        this.y += 50;
        this.x = x;
      }
    }
    this.x = x;
    this.y = y;
  }

  restart() {
    this.chosenIndex = 0;
    this.clickedPortControl = 5;
    this.clickedFishingQuote = 8;
    this.clickedSubsidies = 2;
    this.clickedAntiBait = 1;
    this.clickedNets = 3;
    this.clickedPeriod = 8;
    this.clickedProtectionZone = 2;
  }
}
