export default class ParameterNetwork {
  constructor() {
    //Input in Prozenten
    this.subventionen = 20;
    this.sucheNetze = 30;
    this.fangquote = 80;
    this.zeitraum = 80;
    this.schutzzonen = 20;
    this.hafenkontrollen = 50;
    this.antiköder = 10;

    //Output in Prozenten
    this.nachhaltigeMethoden = 10;
    this.schleppnetzfischerei = 80;
    this.geisternetze = 80;
    this.plastik = 80;
    this.beifang = 80;
    this.co2 = 80;
  }
  inputToOutput() {} //Fabi: welche input parameter wirken sich auf welche output parameter aus, was sink und was steigt wenn was geändert wird
  calculateScore() {} //was für ein score von 0% nachhaltigkeit bis 100% nachhaltigkeit wird durch summe aus output parameter erreicht; return score an visualize
  getOutput() {} //methode noch nicht safe. Idee: Alle outputs in einem Array zusammensetzen um ein Array abfragen zu können (in visualize) und nicht jeden output einzeln
}
