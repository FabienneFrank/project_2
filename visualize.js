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

    let fischArray = [];
    let koralleArray = [];
    let geisternetzArray = [];
    let plastikArray = [];
    let beifangArray = [];
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

  calculateEntities() {} //Jenny: output prozente aus parameterNetwork abfragen und in anzahl an entities umwandeln, (bsp: 80% plastik = 1 Fisch, 60% plastik = 3 fische), anzahl entities in array speichern (3 Fische -> array[fisch1=new Fisch,fisch2=new Fisch,fisch3=new Fisch])

  diaplayVisuals() {} //zeigt die Oberfläche der Simulation an
}
