import { Fisch, Koralle, Geisternetze, Plastik, Beifang } from "./entities.js";
import KeyAction from "./keyAction.js";

export default class Visualize {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //--------------------------
    this.keyAction = new KeyAction();
    //--------------------------
    let fischArray = [];
    let koralleArray = [];
    let geisternetzArray = [];
    let plastikArray = [];
    let beifangArray = [];
  }
  displayAll() {} //displayAllAreas, displayAllEntities, cube
  displayAllAreas() {} //click areas (boot,netz,hafen,wasseroberfläche)
  displayAllEntities() {} //arrays auslesen und rendern
  displayParameterBox() {} //anzeige in der man die parameter ändern kann. get farbcode from checkKey
  calculateEntities() {} //output prozente aus parameterNetwork abfragen und in anzahl an entities umwandeln, (bsp: 80% plastik = 1 Fisch, 60% plastik = 3 fische), anzahl entities in array speichern (3 Fische -> array[fisch1=new Fisch,fisch2=new Fisch,fisch3=new Fisch])
  checkKey() {} //if clicked check ob und welcher farbcode dahinter steckt; return Farbcode
  doForKey(/*bekommt Farbcode*/) {} //bei welchem Farbcode soll welche Methode in keyAction ausgeführt werden
}
