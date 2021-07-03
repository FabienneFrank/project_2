import { assets } from "./sketch.js";
export class Entities {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class Fisch extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {
    image(assets.visual.default.fish2, this.x, this.y, this.width, this.height); //bis zu 20 fische fisch 1
    image(assets.visual.default.fish3, this.x, this.y, this.width, this.height); //bis zu 20 fische fisch 2
  }
  move() {} //schwimmbewegungen der Fische von vorne nach hinten und umdrehen
}

export class Koralle extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.Koralle1colorStages = [
      assets.visual.default.koralleStage1,
      assets.visual.default.koralleStage2,
      assets.visual.default.koralleStage3,
      assets.visual.default.koralleStage4,
      assets.visual.default.koralleStage5,
    ];
    this.Koralle2colorStages = [
      assets.visual.default.koralle2Stage1,
      assets.visual.default.koralle2Stage2,
      assets.visual.default.koralle2Stage3,
      assets.visual.default.koralle2Stage4,
      assets.visual.default.koralle2Stage5,
    ];
    this.stage = 0;
  }
  render() {
    image(
      this.Koralle1colorStages[this.stage],
      this.x,
      this.y,
      this.width,
      this.height
    );
    image(
      this.Koralle2colorStages[this.stage],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  changeColor(stage) {
    this.stage = stage;
  } //wenn der CO2 Gehalt steigt sollen die Farben der Koralle abgeschwächt werden (Illustrator verschiedene Farbversionen?)
}

export class Plastik extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.plastikStages = [
      assets.visual.default.plasticStage1,
      assets.visual.default.plasticStage2,
      assets.visual.default.plasticStage3,
      assets.visual.default.plasticStage4,
      assets.visual.default.plasticStage5,
    ];
  }
  render() {
    image(
      this.plastikStages[this.stage],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  changeState(stage) {
    this.stage = stage;
  }
  float() {} //floaten auf der Wasseroberfläche oder im Wasser?
}

export class Beifang extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {
    image(
      assets.visual.default.beifang1,
      this.x,
      this.y,
      this.width,
      this.height
    );
    image(
      assets.visual.default.beifang2,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  float() {} //floaten auf der Wasseroberfläche oder im Wasser?
}
