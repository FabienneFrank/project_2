// Samu Entities Bilder

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
  render() {}
  move() {} //schwimmbewegungen der Fische von vorne nach hinten und umdrehen
}

export class Koralle extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {}
  changeColor() {} //wenn der CO2 Gehalt steigt sollen die Fraben der Koralle abgeschwächt werden (Illustrator verschiedene Farbversionen?)
}

export class Geisternetze extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {}
}

export class Plastik extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {}
  float() {} //floaten auf der Wasseroberfläche oder im Wasser?
}

export class Beifang extends Entities {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  render() {}
  float() {} //floaten auf der Wasseroberfläche oder im Wasser?
}
