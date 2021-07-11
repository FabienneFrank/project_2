import { assets } from "./sketch.js";
import { cube } from "./sketch.js";
export class Entities {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class Fish extends Entities {
  constructor(x, y, width, height, direction, type) {
    super(x, y, width, height);
    this.size = 1;
    this.xWidth = 420;
    this.xMin = cube.x - 200;
    this.direction = direction; //left
    this.type = type;
  }
  render() {
    //image(assets.visual.default.fish2, this.x, this.y, this.width, this.height); //bis zu 20 fische fisch 1

    if (this.direction === "right" && this.type === 3) {
      image(
        assets.visual.default.fish3,
        this.x * this.size,
        this.y * this.size,
        this.width * this.size,
        this.height * this.size
      ); //bis zu 20 fische fisch 2
    } else if (this.direction === "left" && this.type === 3) {
      image(
        assets.visual.default.fish3Turned,
        this.x * this.size,
        this.y * this.size,
        this.width * this.size,
        this.height * this.size
      );
    } else if (this.direction === "right" && this.type === 2) {
      image(
        assets.visual.default.fish2Turned,
        this.x * this.size,
        this.y * this.size,
        this.width + 40 * this.size,
        this.height * this.size
      );
    } else if (this.direction === "left" && this.type === 2) {
      image(
        assets.visual.default.fish2,
        this.x * this.size,
        this.y * this.size,
        this.width + 40 * this.size,
        this.height * this.size
      );
    }
  }
  move() {
    //fill(0, 255, 0);
    //rect(this.xMin, this.yMin, this.xMax, this.yMax);
    if (
      this.x * this.size < this.xMin + this.xWidth * this.size &&
      this.direction === "right"
    ) {
      this.x += 5;
    } else if (this.x * this.size >= this.xMin + this.xWidth * this.size) {
      this.direction = "left";
    }
    if (
      this.x * this.size > this.xMin * this.size &&
      this.direction === "left"
    ) {
      this.x -= 5;
    } else if (this.x * this.size <= this.xMin * this.size) {
      this.direction = "right";
    }
  } //schwimmbewegungen der Fische von vorne nach hinten und umdrehen
}

export class Coral extends Entities {
  constructor(x, y, width, height, type) {
    super(x, y, width, height);
    this.stage = 0;
    this.type = type;
    this.size = 1;
  }
  render(assets) {
    let coral1colorStages = [
      assets.visual.default.coralStage1,
      assets.visual.default.coralStage2,
      assets.visual.default.coralStage3,
      assets.visual.default.coralStage4,
      assets.visual.default.coralStage5,
    ];
    let coral2colorStages = [
      assets.visual.default.coral2Stage1,
      assets.visual.default.coral2Stage2,
      assets.visual.default.coral2Stage3,
      assets.visual.default.coral2Stage4,
      assets.visual.default.coral2Stage5,
    ];
    if (this.type === 1) {
      image(
        coral1colorStages[this.stage],
        this.x * this.size,
        this.y * this.size,
        this.width + 30 * this.size,
        this.height * this.size
      );
    } else if (this.type === 2) {
      image(
        coral2colorStages[this.stage],
        this.x * this.size,
        this.y * this.size,
        this.width + 30 * this.size,
        this.height * this.size
      );
    }

    /*image(
      coral2colorStages[this.stage],
      this.x + 200,
      this.y,
      this.width + 100,
      this.height + 100
    );*/
  }
  changeColor(stage) {
    this.stage = stage;
  } //wenn der CO2 Gehalt steigt sollen die Farben der Koralle abgeschwächt werden (Illustrator verschiedene Farbversionen?)
}

export class Plastic extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.size = 1;
    this.stage = -1;
    this.xMin = cube.x - 200;
    this.xWidth = 170;
    this.direction = "right";
  }
  render(assets) {
    let plasticStages = [
      assets.visual.default.plasticStage1,
      assets.visual.default.plasticStage2,
      assets.visual.default.plasticStage3,
      assets.visual.default.plasticStage4,
      assets.visual.default.plasticStage5,
    ];
    image(
      plasticStages[this.stage],
      this.x * this.size,
      this.y * this.size,
      this.width * this.size,
      this.height * this.size
    );
  }
  changeState(stage) {
    this.stage = stage;
  }
  float() {
    if (this.x < this.xMin + this.xWidth && this.direction === "right") {
      this.x += 1;
    } else if (this.x >= this.xMin + this.xWidth) {
      this.direction = "left";
    }
    if (this.x > this.xMin && this.direction === "left") {
      this.x -= 1;
      if (this.x > this.xMin + this.xWidth / 2) {
        this.y -= 0.5;
      } else {
        this.y += 0.5;
      }
    } else if (this.x <= this.xMin) {
      this.direction = "right";
    }
  } //floaten auf der Wasseroberfläche oder im Wasser?
}

export class Bycatch extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.size = 1;
    this.xMin = cube.x - 170;
    this.xWidth = 300;
    this.direction = "left";
  }
  render() {
    image(
      assets.visual.default.bycatch1,
      this.x * this.size,
      this.y * this.size,
      this.width * this.size,
      this.height * this.size
    );
    /*image(
      assets.visual.default.bycatch2,
      this.x + 40 * this.size,
      this.y + 40 * this.size,
      this.width * this.size,
      this.height * this.size
    );*/
  }
  float() {
    if (this.x < this.xMin + this.xWidth && this.direction === "right") {
      this.x += 1;
    } else if (this.x >= this.xMin + this.xWidth) {
      this.direction = "left";
    }
    if (this.x > this.xMin && this.direction === "left") {
      this.x -= 1;
    } else if (this.x <= this.xMin) {
      this.direction = "right";
    }
  } //floaten auf der Wasseroberfläche oder im Wasser?
}
