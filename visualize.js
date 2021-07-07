import { Fish, Coral, Plastic, Bycatch } from "./entities.js";
import KeyAction from "./keyAction.js";
// Samu Farbcode Dictionary

export default class Visualize {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //--------------------------
    this.keyAction = new KeyAction(this.x, this.y, this);
    this.interactionDict = new Map();
    //--------------------------
    this.mousePositionColor = [];
    this.interactionKey = "";
    this.parameter = this.keyAction.parameterNetwork;
    this.fish;
    this.fishArray = [];
    this.coral;
    this.coralArray = [];
    for (let i = 0; i < 20; i++) {
      this.coralArray.push(new Coral(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
    }
    this.ghostNets;
    this.ghostNetsArray = [];
    this.plastic;
    this.plasticTeppich = new Plastic(0, 0, 100, 100);
    this.bycatch;
    this.bycatchArray = [];
    this.hover = false;
    this.click = false;
  }

  displayInteractionArea() {} //zeigt alle interactionAreas an

  //checkt Farben an der mausposition und pusht diese als Array [r,g,b,a]
  colorCheck() {
    this.mousePositionColor = get(mouseX, mouseY); //array
  }

  //muss auserhalb der draw aufgerufen werden, setzt Keys und dazugehörige Farbcodes
  interactionDictonary() {
    this.interactionDict.set("boat", [100, 90, 110, 255]);
    this.interactionDict.set("haus", [100, 80, 120, 255]);
    this.interactionDict.set("startbutton", [30, 130, 160, 255]);
    this.interactionDict.set("replaybutton", [30, 140, 160, 255]);
    this.interactionDict.set("scrolldownbutton", [30, 150, 160, 255]);
    this.interactionDict.set("scrollupbutton", [30, 160, 160, 255]);
    this.interactionDict.set("tutorialbutton", [30, 170, 160, 255]);
    this.interactionDict.set("backbutton", [30, 180, 160, 255]);
    this.interactionDict.set("homebutton", [180, 233, 186, 255]);
    this.interactionDict.set("backtogamebutton", [223, 177, 10, 255]);
    this.interactionDict.set("chooseParameterFishingQuote", [223, 99, 93, 255]);
    this.interactionDict.set("chooseParameterSubsidies", [41, 55, 1, 255]);
    this.interactionDict.set("chooseParameterPortControl", [24, 95, 235, 255]);
    this.interactionDict.set("chooseParameterPeriod", [191, 117, 96, 255]);
    this.interactionDict.set("chooseParameterNets", [161, 71, 143, 255]);
    this.interactionDict.set("chooseParameterAntiBait", [114, 59, 65, 255]);
    this.interactionDict.set("chooseParameterProtectionZone", [
      158,
      148,
      210,
      255,
    ]);
    this.interactionDict.set("changeFangquote", [207, 203, 219, 255]);
    this.interactionDict.set("changePortControl", [164, 158, 163, 255]);
    this.interactionDict.set("changeSubsidies", [57, 19, 242, 255]);
    this.interactionDict.set("changeAntiBait", [112, 101, 33, 255]);
    this.interactionDict.set("changeNets", [22, 88, 111, 255]);
    this.interactionDict.set("changeProtectionZone", [68, 57, 10, 255]);
    this.interactionDict.set("periodUpButton", [175, 22, 181, 255]);
    this.interactionDict.set("periodDownButton", [18, 44, 22, 255]);
  }

  //vergleicht zwei Arrays
  compareArrays(array1, array2) {
    for (let i = 0; i <= array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }

  //Checkt ob ein farbcode gerade angesprochen wird, wenn ja: interactionKey gesetzt
  checkKey() {
    let intKey;
    this.interactionDict.forEach((value, key) => {
      if (this.compareArrays(this.mousePositionColor, value) === true) {
        intKey = key;
      }
    });
    this.interactionKey = intKey;
  }

  doForKey(helper) {
    // erste if schleife alle click events, alles danach hover events
    if (helper.clicked === true) {
      if (this.interactionKey === "startbutton") {
        console.log("startClick");
      } else if (this.interactionKey === "tutorialbutton") {
        console.log("tutorialClick");
      } else if (this.interactionKey === "chooseParameterFishingQuote") {
        this.keyAction.shownParameterScreen = "fishingQuote";
      } else if (this.interactionKey === "chooseParameterSubsidies") {
        this.keyAction.shownParameterScreen = "subsidies";
      } else if (this.interactionKey === "chooseParameterPortControl") {
        this.keyAction.shownParameterScreen = "portControl";
      } else if (this.interactionKey === "chooseParameterPeriod") {
        this.keyAction.shownParameterScreen = "period";
      } else if (this.interactionKey === "chooseParameterNets") {
        this.keyAction.shownParameterScreen = "nets";
      } else if (this.interactionKey === "chooseParameterAntiBait") {
        this.keyAction.shownParameterScreen = "antiBait";
      } else if (this.interactionKey === "chooseParameterProtectionZone") {
        this.keyAction.shownParameterScreen = "protectionZone";
      } else if (this.interactionKey === "changeFangquote") {

        if (
          this.keyAction.parameterBox.clickedFishingQuote ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedFishingQuote > 0
        ) {
          this.keyAction.parameterBox.clickedFishingQuote -= 1;
        } else {
          this.keyAction.parameterBox.clickedFishingQuote = this.keyAction.parameterBox.chosenIndex;
        }
      } else if (this.interactionKey === "changePortControl") {
        if (
          this.keyAction.parameterBox.clickedPortControl ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedPortControl > 0
        ) {
          this.keyAction.parameterBox.clickedPortControl -= 1;
        } else {
          this.keyAction.parameterBox.clickedPortControl = this.keyAction.parameterBox.chosenIndex;
        }
      } else if (this.interactionKey === "changeSubsidies") {
        if (
          this.keyAction.parameterBox.clickedSubsidies ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedSubsidies > 0
        ) {
          this.keyAction.parameterBox.clickedSubsidies -= 1;
        } else {
          this.keyAction.parameterBox.clickedSubsidies = this.keyAction.parameterBox.chosenIndex;
        }
      } else if (this.interactionKey === "changeAntiBait") {
        if (
          this.keyAction.parameterBox.clickedAntiBait ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedAntiBait > 0
        ) {
          this.keyAction.parameterBox.clickedAntiBait -= 1;
        } else {
          this.keyAction.parameterBox.clickedAntiBait = this.keyAction.parameterBox.chosenIndex;
        }
      } else if (this.interactionKey === "changeNets") {
        if (
          this.keyAction.parameterBox.clickedNets ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedNets > 0
        ) {
          this.keyAction.parameterBox.clickedNets -= 1;
        } else {
          this.keyAction.parameterBox.clickedNets = this.keyAction.parameterBox.chosenIndex;
        }
      } else if (this.interactionKey === "changeProtectionZone") {
        if (
          this.keyAction.parameterBox.clickedProtectionZone ===
            this.keyAction.parameterBox.chosenIndex &&
          this.keyAction.parameterBox.clickedProtectionZone > 0
        ) {
          this.keyAction.parameterBox.clickedProtectionZone -= 1;
        } else {
          this.keyAction.parameterBox.clickedProtectionZone = this.keyAction.parameterBox.chosenIndex;
        }

      } else if (this.interactionKey === "periodUpButton") {
        if (this.keyAction.parameterBox.clickedPeriod < 11) {
          this.keyAction.parameterBox.clickedPeriod += 1;
        } else {
          this.keyAction.parameterBox.clickedPeriod = 11;
        }
      } else if (this.interactionKey === "periodDownButton") {
        if (this.keyAction.parameterBox.clickedPeriod > 0) {
          this.keyAction.parameterBox.clickedPeriod -= 1;
        } else {
          this.keyAction.parameterBox.clickedPeriod = 0;
        }
      }
      helper.clicked = false;
    } else if (this.interactionKey === "startbutton") {
      console.log("startHover");
    } else if (this.interactionKey === "tutorialbutton") {
      console.log("tutorialHover");
    }
  } //bei welchem Farbcode soll welche Methode in keyAction ausgeführt werden

  calculateEntities() {
    this.fish =
      this.parameter.plastic * 0.4 +
      this.parameter.bycatch * 0.4 +
      this.parameter.co2 * 0.2;
    this.coral = this.parameter.co2 * 0.5 + this.parameter.trawling * 0.5;
    this.plastic =
      this.parameter.plastic * 0.5 + this.parameter.ghostNets * 0.5;
    this.bycatch = this.parameter.bycatch;
    //fish
    let fishNumEntities = 20;

    for (let j = 0; j <= 100; j += 10) {
      if (this.fish === 0 || (this.fish > j && this.fish <= j + 10)) {
        for (let i = this.fishArray.length; i < fishNumEntities; i++) {
          this.fishArray.push(new Fish(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
        }
      } else if (this.fish === 100) {
        this.fishArray = [];
      }
      fishNumEntities -= 2;
    }
    fishNumEntities = 20;

    //coral

    for (let j = 0; j <= 100; j += 20) {
      if (this.coral === 0 || j < 20) {
        for (let i = 0; i < this.coralArray.length; i++) {
          this.coralArray[i].changeColor(1);
        }
      } else if (this.coral > j && this.coral <= j + 20) {
        for (let i = 0; i < this.coralArray.length; i++) {
          this.coralArray[i].changeColor(j / 4 / 5 + 1);
        }
      } else if (this.coral === 100) {
        for (let i = 0; i < this.coralArray.length; i++) {
          this.coralArray[i].changeColor(5);
        }
      }
    }
    //plastic
    for (let j = 0; j <= 100; j += 20) {
      if (this.plastic === 0) {
        //display no array
      } else if (this.plastic > 0 && this.plastic <= 20) {
        this.plasticTeppich.changeState(1);
      } else if (this.plastic > 20 && this.plastic <= 40) {
        this.plasticTeppich.changeState(2);
      } else if (this.plastic > 40 && this.plastic <= 60) {
        this.plasticTeppich.changeState(3);
      } else if (this.plastic > 60 && this.plastic <= 80) {
        this.plasticTeppich.changeState(4);
      } else if (this.plastic > 80 && this.plastic <= 100) {
        this.plasticTeppich.changeState(5);
      }
    }
    //bycatch
    let bycatchNumEntities = 20;
    for (let j = 0; j <= 100; j += 10) {
      if (this.bycatch === 0 || (this.bycatch > j && this.bycatch <= j + 10)) {
        for (let i = this.bycatchArray.length; i < bycatchNumEntities; i++) {
          this.bycatchArray.push(new Bycatch(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
        }
      } else if (this.bycatch === 100) {
        this.bycatchArray = [];
      }
      bycatchNumEntities -= 2;
    }
    bycatchNumEntities = 20;
  } //Jenny: output prozente aus parameterNetwork abfragen und in anzahl an entities umwandeln, (bsp: 80% plastik = 1 Fisch, 60% plastik = 3 fische), anzahl entities in array speichern (3 Fische -> array[fisch1=new Fisch,fisch2=new Fisch,fisch3=new Fisch])

  displayVisuals(helper) {
    //this.keyAction.boat(helper);
    //this.keyAction.nets(helper);
    //this.keyAction.port(helper);
    //this.keyAction.waterSurface(helper);
  } //zeigt die Oberfläche der Simulation an
}
