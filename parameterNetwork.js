export default class ParameterNetwork {
  constructor() {
    //Input
    this.subsidies = 20;
    this.nets = 20;
    this.fishingQuote = 80;
    this.period = 80;
    this.protectionZone = 20;
    this.portControl = 50;
    this.antiBait = 10;

    //Output
    this.sustainableMethods = 20;
    this.trawling = 80;
    this.ghostNets = 80;

    this.bycatch = 80;

    this.plastic = 80;
    this.co2 = 80;

    this.extraInput = -10;

    this.divideFactor = 4000;
    this.score = 0;
    this.trendArray = [0, 0, 0];
    this.moved = false;
    this.displayScale = 1;
    this.displayTranslation = 0;
    this.winCounter = 0;
    this.loseCounter = 0;

    this.winEnd = false;
    this.loseEnd = false;
  }

  inputToOutput() {
    this.sustainableMethods += this.subsidies / this.divideFactor;
    this.sustainableMethods -= this.ghostNets / this.divideFactor;

    this.ghostNets -= this.nets / this.divideFactor;
    this.ghostNets += this.trawling / this.divideFactor;

    this.trawling += this.fishingQuote / this.divideFactor;
    this.trawling += this.period / this.divideFactor;
    this.trawling -= this.protectionZone / this.divideFactor;
    this.trawling -= this.portControl / this.divideFactor;
    this.trawling += this.sustainableMethods / this.divideFactor / 2;

    this.bycatch = this.trawling / 2 + this.ghostNets / 3;
    this.bycatch -= this.extraInput / this.divideFactor;

    this.plastic = this.ghostNets;
    this.co2 = this.trawling;

    if (this.sustainableMethods <= 0) {
      this.sustainableMethods = 0;
    } else if (this.sustainableMethods >= 100) {
      this.sustainableMethods = 100;
    }
    if (this.trawling <= 0) {
      this.trawling = 0;
    } else if (this.trawling >= 100) {
      this.trawling = 100;
    }
    if (this.ghostNets <= 0) {
      this.ghostNets = 0;
    } else if (this.ghostNets >= 100) {
      this.ghostNets = 100;
    }
    if (this.bycatch <= 0) {
      this.bycatch = 0;
    } else if (this.bycatch >= 100) {
      this.bycatch = 100;
    }
    if (this.plastic <= 0) {
      this.plastic = 0;
    } else if (this.plastic >= 100) {
      this.plastic = 100;
    }
    if (this.co2 <= 0) {
      this.co2 = 0;
    } else if (this.co2 >= 100) {
      this.co2 = 100;
    }
  } //calculations, input to output

  testDisplay() {
    console.log("ghostNets: " + this.ghostNets);
    console.log("trawling: " + this.trawling);
    console.log("sustainableMethods: " + this.sustainableMethods);
    console.log("bycatch: " + this.bycatch);
    console.log("score: " + this.score);
  } // for debugging

  calculateTrend(inputVariable, ifPositiv, forTrend) {
    let average;
    let difference;

    if (this.trendArray.length > 9) {
      this.trendArray.pop();
    }

    average =
      this.trendArray.reduce(function (a, b) {
        return a + b;
      }, 0) / this.trendArray.length;

    this.trendArray.unshift(inputVariable);

    if (forTrend === true) {
      if (ifPositiv === true) {
        return (difference = inputVariable - average);
      } else {
        return (difference = average - inputVariable);
      }
    }

    if (average > inputVariable && ifPositiv === false) {
      difference = average - inputVariable;
      this.score += difference;
    } else if (average < inputVariable && ifPositiv === false) {
      difference = inputVariable - average;
      this.score -= difference;
    }
    if (average > inputVariable && ifPositiv === true) {
      difference = average - inputVariable;
      this.score -= difference;
    } else if (average < inputVariable && ifPositiv === true) {
      difference = inputVariable - average;
      this.score += difference;
    }
  } //checks if the value of the inputVariable rises or falls

  calculateScore() {
    this.calculateTrend(this.sustainableMethods, true);
    this.calculateTrend(this.trawling, false);
    this.calculateTrend(this.ghostNets, false);
    this.calculateTrend(this.bycatch, false);
    this.calculateTrend(this.plastic, false);
    this.calculateTrend(this.co2, false);
    this.score /= 4;
  }

  move() {
    if (this.moved === true) {
      this.displayScale = 0.7;
      this.displayTranslation = -400;
    } else {
      this.displayScale = 1;
      this.displayTranslation = 0;
    }
  }

  winOrLose() {
    if (this.score >= 0) {
      this.loseCounter = 0;
      this.winCounter += 1 / 30;
    } else {
      this.winCounter = 0;
      this.loseCounter += 1 / 30;
    }
    if (this.winCounter >= 90) {
      this.winEnd = true;
    } else if (this.loseCounter >= 240) {
      this.loseEnd = true;
    }
  }

  display() {
    this.move();
    this.winOrLose();
    push();
    fill(251, 84, 82);
    noStroke();
    textSize(40);
    textAlign(RIGHT);
    translate(width / 2 + this.displayTranslation, height / 2);
    scale(this.displayScale);
    text("Trend: " + round(this.score), -460, -210);
    textSize(30);
    text("Trends:", -460, -140);
    textSize(25);

    text("Nachhaltige Fischereimethoden:", -460, -100);
    if (this.calculateTrend(this.sustainableMethods, true, true) >= 0) {
      fill(247, 240, 226);
    }
    rect(
      -540,
      -80,
      this.calculateTrend(this.sustainableMethods, true, true),
      10
    );

    fill(251, 84, 82);
    text("Schleppnetzfischerrei:", -460, -40);
    if (this.calculateTrend(this.trawling, true, true) <= 0) {
      fill(247, 240, 226);
    }
    rect(-540, -20, this.calculateTrend(this.trawling, false, true), 10);

    fill(251, 84, 82);
    text("Geister Netze:", -460, 20);
    if (this.calculateTrend(this.ghostNets, true, true) <= 0) {
      fill(247, 240, 226);
    }
    rect(-540, 40, this.calculateTrend(this.ghostNets, false, true), 10);

    fill(251, 84, 82);
    text("Beifang:", -460, 80);
    if (this.calculateTrend(this.bycatch, true, true) <= 0) {
      fill(247, 240, 226);
    }
    rect(-540, 100, this.calculateTrend(this.bycatch, false, true), 10);

    fill(251, 84, 82);
    text("Plastikverschmutzung:", -460, 140);
    if (this.calculateTrend(this.plastic, true, true) <= 0) {
      fill(247, 240, 226);
    }
    rect(-540, 160, this.calculateTrend(this.plastic, false, true), 10);

    fill(251, 84, 82);
    text("Freigesetztes CO2", -460, 200);
    if (this.calculateTrend(this.co2, true, true) <= 0) {
      fill(247, 240, 226);
    }
    rect(-540, 220, this.calculateTrend(this.co2, false, true), 10);
    pop();
  }

  restart() {
    //Input
    this.subsidies = 20;
    this.nets = 20;
    this.fishingQuote = 80;
    this.period = 80;
    this.protectionZone = 20;
    this.portControl = 50;
    this.antiBait = 10;

    //Output
    this.sustainableMethods = 20;
    this.trawling = 80;
    this.ghostNets = 80;

    this.bycatch = 80;

    this.plastic = 80;
    this.co2 = 80;

    this.extraInput = -10;

    this.score = 0;
    this.trendArray = [0, 0, 0];

    this.moved = false;
    this.displayScale = 1;
    this.displayTranslation = 0;

    this.winCounter = 0;
    this.loseCounter = 0;

    this.winEnd = false;
    this.loseEnd = false;
  }
}
