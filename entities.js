import { assets } from "./sketch.js";
export class Entities {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class Fish extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {
    image(assets.visual.default.fish2, this.x, this.y, this.width, this.height); //bis zu 20 fische fisch 1
    image(assets.visual.default.fish3, this.x, this.y, this.width, this.height); //bis zu 20 fische fisch 2
  }
  move() {} //schwimmbewegungen der Fische von vorne nach hinten und umdrehen
}

export class Coral extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.coral1colorStages = [
      assets.visual.default.coralStage1,
      assets.visual.default.coralStage2,
      assets.visual.default.coralStage3,
      assets.visual.default.coralStage4,
      assets.visual.default.coralStage5,
    ];
    this.coral2colorStages = [
      assets.visual.default.coral2Stage1,
      assets.visual.default.coral2Stage2,
      assets.visual.default.coral2Stage3,
      assets.visual.default.coral2Stage4,
      assets.visual.default.coral2Stage5,
    ];
    this.stage = 0;
  }
  render() {
    image(
      this.coral1colorStages[this.stage],
      this.x,
      this.y,
      this.width,
      this.height
    );
    image(
      this.coral2colorStages[this.stage],
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

export class Plastic extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.plasticStages = [
      assets.visual.default.plasticStage1,
      assets.visual.default.plasticStage2,
      assets.visual.default.plasticStage3,
      assets.visual.default.plasticStage4,
      assets.visual.default.plasticStage5,
    ];
  }
  render() {
    image(
      this.plasticStages[this.stage],
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

export class Bycatch extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {
    image(
      assets.visual.default.bycatch1,
      this.x,
      this.y,
      this.width,
      this.height
    );
    image(
      assets.visual.default.bycatch2,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  float() {} //floaten auf der Wasseroberfläche oder im Wasser?
}
