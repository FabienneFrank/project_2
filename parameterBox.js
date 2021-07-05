let myFontBold = loadFont("font/D-DINCondensed-Bold.otf");
import { assets } from "./sketch.js";

export default class ParameterBox {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  background(clickedObject) {
    stroke(5, 85, 83);
    strokeWeight(10);
    fill(83, 124, 123);
    rect(this.x, this.y, this.width, this.height - 500, 20, 20, 0, 0);
    fill(247, 240, 226);
    rect(this.x, this.y + 180, this.width, this.height - 180, 0, 0, 20, 20);
    if (
      clickedObject === "hafen" ||
      clickedObject === "boot" ||
      clickedObject === "netz"
    ) {
      this.chooseParameter(clickedObject);
    } else if (clickedObject === "wasser") {
      this.schutzzonen();
    }

    //string mit parameter übergeben und abfragen
    //this.hafenkontrollen();
    //this.zeitraum();
    //this.fangquote();
    //this.subventionen();
    //this.schutzzonen();
    //this.sucheNetze();
    //this.antikoeder();
  }
  chooseParameter(clickedObject) {
    textFont(myFontBold);
    textSize(50);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Welche Änderung", this.x + this.width / 2, this.y + 80);
    text("möchtest du vornehmen?", this.x + this.width / 2, this.y + 140);
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 200, this.y + 220, 400, 200, 20);
    rect(this.x + this.width / 2 - 200, this.y + 440, 400, 200, 20);
    if (clickedObject === "hafen") {
      tint(255, 100);
      image(
        assets.visual.default.hafenkontrolle,
        this.x + this.width / 2 - 75,
        this.y + 240,
        150,
        150
      );
      image(
        assets.visual.default.zeitraum6h,
        this.x + this.width / 2 - 125,
        this.y + 480,
        251,
        120
      );
      textFont(myFontBold);
      textSize(60);
      fill(83, 124, 123);
      textAlign(CENTER);
      noStroke();
      text("Hafenkontrollen", this.x + this.width / 2, this.y + 340);
      text("Zeitraum", this.x + this.width / 2, this.y + 560);
    } else if (clickedObject === "boot") {
      tint(255, 100);
      image(
        assets.visual.default.fangquote,
        this.x + this.width / 2 - 75,
        this.y + 250,
        150,
        150
      );
      image(
        assets.visual.default.subventionen,
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
    } else if (clickedObject === "netz") {
      tint(255, 100);
      image(
        assets.visual.default.fangquote,
        this.x + this.width / 2 - 75,
        this.y + 250,
        150,
        150
      );
      image(
        assets.visual.default.antikoeder,
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
  }
  hafenkontrollen() {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
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
  zeitraum() {
    let zeitraumArray = [
      assets.visual.default.zeitraum1h,
      assets.visual.default.zeitraum2h,
      assets.visual.default.zeitraum3h,
      assets.visual.default.zeitraum4h,
      assets.visual.default.zeitraum5h,
      assets.visual.default.zeitraum6h,
      assets.visual.default.zeitraum7h,
      assets.visual.default.zeitraum8h,
      assets.visual.default.zeitraum9h,
      assets.visual.default.zeitraum10h,
      assets.visual.default.zeitraum11h,
      assets.visual.default.zeitraum12h,
    ];
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Zeitraum zum fischen", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text("Wie lange dürfen die", this.x + this.width / 2, this.y + 220);
    text("Boote fischen?", this.x + this.width / 2, this.y + 250);
    image(
      zeitraumArray[0],
      this.x + this.width / 2 - 160,
      this.y + 370,
      314,
      150
    );
  } //uhr mit clickable zahlen
  fangquote() {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Fangquoten", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text("Fangquoten können Bestände", this.x + this.width / 2, this.y + 220);
    text("am Leben erhalten", this.x + this.width / 2, this.y + 250);
    image(
      assets.visual.default.fangquote,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.fangquote,
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
  } //fische clickable
  subventionen() {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Subventionen", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text(
      "Unterstütze nachhaltige Fischerei",
      this.x + this.width / 2,
      this.y + 220
    );
    text("mit mehr Subventionen", this.x + this.width / 2, this.y + 250);
    image(
      assets.visual.default.subventionen,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.subventionen,
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
  } //geldscheine
  schutzzonen() {
    let schutzzonenArray = [
      assets.visual.default.schutzzonen0,
      assets.visual.active.schutzzonen1,
      assets.visual.active.schutzzonen2,
      assets.visual.active.schutzzonen3,
      assets.visual.active.schutzzonen4,
      assets.visual.active.schutzzonen5,
    ];
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Schutzzonen", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text("Errichte Schutzonen", this.x + this.width / 2, this.y + 220);
    text("um Bestände zu schützen", this.x + this.width / 2, this.y + 250);
    image(
      schutzzonenArray[0],
      this.x + this.width / 2 - 200,
      this.y + 300,
      400,
      290
    );
  } //karte mit clickable
  sucheNetze() {} //lupen clickable
  antikoeder() {
    stroke(83, 124, 123);
    strokeWeight(5);
    noFill();
    rect(this.x + this.width / 2 - 100, this.y + 280, 200, 200, 20);
    textFont(myFontBold);
    textSize(60);
    fill(247, 240, 226);
    textAlign(CENTER);
    noStroke();
    text("Antiköder", this.x + this.width / 2, this.y + 110);
    textSize(30);
    fill(83, 124, 123);
    text(
      "Antiköder können Tiere warnen",
      this.x + this.width / 2,
      this.y + 220
    );
    text("und Beifang verhindern", this.x + this.width / 2, this.y + 250);
    image(
      assets.visual.default.antikoeder,
      this.x + this.width / 2 - 75,
      this.y + 310,
      150,
      150
    );
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < 10; i++) {
      image(
        assets.visual.default.antikoeder,
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
