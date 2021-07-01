import { Fisch, Koralle, Geisternetze, Plastik, Beifang } from "./entities.js";
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
    this.eisternetz;
    this.geisternetzArray = [];
    this.plastik;
    this.plastikArray = [];
    this.beifang;
    this.beifangArray = [];
  }

  displayInteractionArea() {} //zeigt alle interactionAreas an

  //checkt Farben an der mausposition und pusht diese als Array [r,g,b,a]
  colorCheck() {
    this.mousePositionColor = get(mouseX, mouseY);
  }

  //muss auserhalb der draw aufgerufen werden, setzt Keys und dazugehörige Farbcodes
  interactionDictonary() {
    this.interactionDict.set("boat", [100, 90, 110, 255]);
    this.interactionDict.set("haus", [100, 80, 120, 255]);
    this.interactionDict.set("startbutton", [30, 130, 160, 255]);
    this.interactionDict.set("replaybutton", [30, 140, 160, 255]);
    this.interactionDict.set("scrolldownbutton", [30, 150, 160, 255]);
    this.interactionDict.set("scrollupbutton", [30, 160, 160, 255]);
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
    this.interactionDict.forEach((value, key) => {
      if (this.compareArrays(this.mousePositionColor, value) === true) {
        this.interactionKey = key;
      }
    });
  }

  doForKey(/*bekommt interactionKey*/) {} //bei welchem Farbcode soll welche Methode in keyAction ausgeführt werden

  calculateEntities() {
    this.fisch =
      this.parameter.plastik * 0.4 +
      this.parameter.beifang * 0.4 +
      this.parameter.co2 * 0.2;
    this.koralle =
      this.parameter.co2 * 0.5 + this.parameter.schleppnetzfischerei * 0.5;
    this.geisternetz = this.parameter.geisternetze;
    this.plastik = this.parameter.plastik;
    this.beifang = this.parameter.beifang;
    //fisch
    if (this.fisch <= 0) {
      for (let i = fischarray.length; i <= 20; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 0 && this.fisch <= 0) {
      for (let i = fischarray.length; i <= 18; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 10 && this.fisch <= 20) {
      for (let i = fischarray.length; i <= 16; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 20 && this.fisch <= 30) {
      for (let i = fischarray.length; i <= 14; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 30 && this.fisch <= 40) {
      for (let i = fischarray.length; i <= 12; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 40 && this.fisch <= 50) {
      for (let i = fischarray.length; i <= 10; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 50 && this.fisch <= 60) {
      for (let i = fischarray.length; i <= 8; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 60 && this.fisch <= 70) {
      for (let i = fischarray.length; i <= 6; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 70 && this.fisch <= 80) {
      for (let i = fischarray.length; i <= 4; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch > 80 && this.fisch < 100) {
      for (let i = fischarray.length; i <= 2; i++) {
        this.fischArray.push(/*fischbild */);
      }
    } else if (this.fisch >= 100) {
      this.fischArray = [];
    }
  } //Jenny: output prozente aus parameterNetwork abfragen und in anzahl an entities umwandeln, (bsp: 80% plastik = 1 Fisch, 60% plastik = 3 fische), anzahl entities in array speichern (3 Fische -> array[fisch1=new Fisch,fisch2=new Fisch,fisch3=new Fisch])

  diaplayVisuals() {} //zeigt die Oberfläche der Simulation an
}
