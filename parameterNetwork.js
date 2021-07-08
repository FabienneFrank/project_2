export default class ParameterNetwork {
  constructor() {
    //Input in Prozenten
    this.subsidies = 34;
    this.nets = 34;
    this.fishingQuote = 60;
    this.period = 50;
    this.protectionZone = 50;
    this.portControl = 80;
    this.antiBait = 12;

    //Output in Prozenten
    this.sustainableMethods = 40;
    this.trawling = 35;
    this.ghostNets = 30;

    this.bycatch = 0;

    this.plastic = 80;
    this.co2 = 80;

    this.extraInput = -10;

    this.divideFactor = 5000;
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
