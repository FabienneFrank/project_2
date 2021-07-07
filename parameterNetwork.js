export default class ParameterNetwork {
  constructor() {
    //Input in Prozenten
    this.subsidies = 20;
    this.nets = 30;
    this.fishingQuote = 80;
    this.period = 80;
    this.protectionZone = 20;
    this.portControl = 50;
    this.antiBait = 10;

    //Output in Prozenten
    this.sustainableMethods = 10;
    this.trawling = 80;
    this.ghostNets = 80;
    this.plastic = 80;
    this.bycatch = 80;
    this.co2 = 80;
  }

  inputToOutput() {} //Fabi: welche input parameter wirken sich auf welche output parameter aus, was sink und was steigt wenn was geändert wird

  calculateScore() {} //was für ein score von 0% nachhaltigkeit bis 100% nachhaltigkeit wird durch summe aus output parameter erreicht; return score an visualize
  getOutput() {} //methode noch nicht safe. Idee: Alle outputs in einem Array zusammensetzen um ein Array abfragen zu können (in visualize) und nicht jeden output einzeln
}
