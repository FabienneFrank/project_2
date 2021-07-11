export default class ParameterNetwork {
  constructor() {
    //Input in Prozenten

    this.subsidies = 20;
    this.nets = 20;
    this.fishingQuote = 80;
    this.period = 80;
    this.protectionZone = 20;
    this.portControl = 50;
    this.antiBait = 10;

    //Output in Prozenten
    this.sustainableMethods = 20;
    this.trawling = 80;
    this.ghostNets = 80;

    this.bycatch = 80;

    this.plastic = 80;
    this.co2 = 80;

    this.extraInput = -10;

    this.divideFactor = 3000;
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
  } //Samu: welche input parameter wirken sich auf welche output parameter aus, was sink und was steigt wenn was geändert wird

  testDisplay() {
    console.log("ghostNets: " + this.ghostNets);
    console.log("trawling: " + this.trawling);
    console.log("sustainableMethods: " + this.sustainableMethods);
    console.log("bycatch: " + this.bycatch);
  }

  calculateScore() {} //was für ein score von 0% nachhaltigkeit bis 100% nachhaltigkeit wird durch summe aus output parameter erreicht; return score an visualize
  getOutput() {} //methode noch nicht safe. Idee: Alle outputs in einem Array zusammensetzen um ein Array abfragen zu können (in visualize) und nicht jeden output einzeln
}
