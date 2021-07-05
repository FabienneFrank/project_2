import { Fisch, Koralle, Plastik, Beifang } from "./entities.js";
import KeyAction from "./keyAction.js";
// Samu Farbcode Dictionary

export default class Visualize {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //--------------------------
    this.keyAction = new KeyAction();
    this.interactionDict = new Map();
    //--------------------------
    this.mousePositionColor = [];
    this.interactionKey = "";
    this.parameter = this.keyAction.parameterNetwork;
    this.fisch;
    this.fischArray = [];
    this.koralle;
    this.koralleArray = [];
    for (let i = 0; i < 20; i++) {
      this.koralleArray.push(new Koralle(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
    }
    this.geisternetz;
    this.geisternetzArray = [];
    this.plastik;
    this.plastikTeppich = new Plastik(0, 0, 100, 100);
    this.beifang;
    this.beifangArray = [];
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
    let intKey = "";
    this.interactionDict.forEach((value, key) => {
      if (this.compareArrays(this.mousePositionColor, value) === true) {
        intKey = key;
      }
    });
    this.interactionKey = intKey;
  }

  doForKey(clicked) {
    if (clicked.clicked === true && this.interactionKey === "startbutton") {
      console.log("startClick");
      clicked.clicked = false;
    } else if (this.interactionKey === "startbutton") {
      console.log("startHover");
    }

    if (clicked.clicked === true && this.interactionKey === "tutorialbutton") {
      console.log("tutorialClick");
      clicked.clicked = false;
    } else if (this.interactionKey === "tutorialbutton") {
      console.log("tutorialHover");
    }
  } //bei welchem Farbcode soll welche Methode in keyAction ausgeführt werden

  calculateEntities() {
    this.fisch =
      this.parameter.plastik * 0.4 +
      this.parameter.beifang * 0.4 +
      this.parameter.co2 * 0.2;
    this.koralle =
      this.parameter.co2 * 0.5 + this.parameter.schleppnetzfischerei * 0.5;
    this.plastik =
      this.parameter.plastik * 0.5 + this.parameter.geisternetze * 0.5;
    this.beifang = this.parameter.beifang;
    //fisch
    let fischNumEntities = 20;

    for (let j = 0; j <= 100; j += 10) {
      if (this.fisch === 0 || (this.fisch > j && this.fisch <= j + 10)) {
        for (let i = this.fischArray.length; i < fischNumEntities; i++) {
          this.fischArray.push(new Fisch(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
        }
      } else if (this.fisch === 100) {
        this.fischArray = [];
      }
      fischNumEntities -= 2;
    }
    fischNumEntities = 20;

    //koralle

    for (let j = 0; j <= 100; j += 20) {
      if (this.koralle === 0 || j < 20) {
        for (let i = 0; i < this.koralleArray.length; i++) {
          this.koralleArray[i].changeColor(1);
        }
      } else if (this.koralle > j && this.koralle <= j + 20) {
        for (let i = 0; i < this.koralleArray.length; i++) {
          this.koralleArray[i].changeColor(j / 4 / 5 + 1);
        }
      } else if (this.koralle === 100) {
        for (let i = 0; i < this.koralleArray.length; i++) {
          this.koralleArray[i].changeColor(5);
        }
      }
    }
    //plastik
    for (let j = 0; j <= 100; j += 20) {
      if (this.plastik === 0) {
        //display no array
      } else if (this.plastik > 0 && this.plastik <= 20) {
        this.plastikTeppich.changeState(1);
      } else if (this.plastik > 20 && this.plastik <= 40) {
        this.plastikTeppich.changeState(2);
      } else if (this.plastik > 40 && this.plastik <= 60) {
        this.plastikTeppich.changeState(3);
      } else if (this.plastik > 60 && this.plastik <= 80) {
        this.plastikTeppich.changeState(4);
      } else if (this.plastik > 80 && this.plastik <= 100) {
        this.plastikTeppich.changeState(5);
      }
    }
    //beifang
    let beifangNumEntities = 20;
    for (let j = 0; j <= 100; j += 10) {
      if (this.beifang === 0 || (this.beifang > j && this.beifang <= j + 10)) {
        for (let i = this.beifangArray.length; i < beifangNumEntities; i++) {
          this.beifangArray.push(new Beifang(0, 0, 100, 100)); //x,y,width,height muss noch angepasst werden
        }
      } else if (this.beifang === 100) {
        this.beifangArray = [];
      }
      beifangNumEntities -= 2;
    }
    beifangNumEntities = 20;
  } //Jenny: output prozente aus parameterNetwork abfragen und in anzahl an entities umwandeln, (bsp: 80% plastik = 1 Fisch, 60% plastik = 3 fische), anzahl entities in array speichern (3 Fische -> array[fisch1=new Fisch,fisch2=new Fisch,fisch3=new Fisch])

  displayVisuals() {} //zeigt die Oberfläche der Simulation an
}
