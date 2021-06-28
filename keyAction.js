import ParameterNetwork from "./parameterNetwork.js";

export default class KeyAction {
  constructor() {
    this.parameterNetwork = new ParameterNetwork();
  }
  boot() {
    console.log("hi");
  } //wenn das boot angeklickt wurde: was wird angezeigt (die Kästen siehe Klickdummy), welche Parameter kann man ändern, was ist der neue wert der Parameter
  netz() {}
  hafen() {}
  wasser() {}
}
