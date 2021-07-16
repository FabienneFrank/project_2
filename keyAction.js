import ParameterNetwork from "./parameterNetwork.js";
import ParameterBox from "./parameterBox.js";

export default class KeyAction {
  constructor(x, y, visualize) {
    this.x = x;
    this.y = y;

    this.parameterNetwork = new ParameterNetwork();
    this.parameterBox = new ParameterBox(
      this.x + 200,
      this.y - 350,
      480,
      680,
      visualize
    );

    this.interactedObject = "none"; //boat,nets,port,waterSurface
    this.shownParameterScreen = "choose"; //choose,portControl,period,fishingQuote,subsidies,protectionZone,nets,antiBait
  }

  boat(helper) {
    //display parameterBox boat clicked
    this.parameterBox.background("boat", this.shownParameterScreen, helper);
    this.parameterNetwork.fishingQuote =
      this.parameterBox.clickedFishingQuote * 10;
    this.parameterNetwork.subsidies = this.parameterBox.clickedSubsidies * 10;
  }

  nets(helper) {
    //display parameterBox nets clicked
    this.parameterBox.background("nets", this.shownParameterScreen, helper);
    this.parameterNetwork.nets = this.parameterBox.clickedNets * 10;
    this.parameterNetwork.antiBait = this.parameterBox.clickedAntiBait * 10;
  }

  port(helper) {
    //display parameterBox port clicked
    this.parameterBox.background("port", this.shownParameterScreen, helper);
    this.parameterNetwork.portControl =
      this.parameterBox.clickedPortControl * 10;
    this.parameterNetwork.period = (this.parameterBox.clickedPeriod * 25) / 3;
  }

  waterSurface(helper) {
    //display parameterBox water clicked
    this.parameterBox.background(
      "waterSurface",
      this.shownParameterScreen,
      helper
    );
    this.parameterNetwork.protectionZone =
      this.parameterBox.clickedProtectionZone * 20;
  }

  restart() {
    this.interactedObject = "none";
    this.shownParameterScreen = "choose";
    this.parameterBox.restart();
    this.parameterNetwork.restart();
  }
}
