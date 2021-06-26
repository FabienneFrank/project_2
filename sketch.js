import Screens from "./screens.js";
/* 
petrol: rgb(5, 85, 83)
weniger petrol: rgb(83, 124, 123)
noch weniger petrol: rgb(145, 155, 154)
creme: rgb(247, 240, 226)
viel weniger rot: rgb(244, 151, 151)
bisschen mehr rot: rgb(255, 127, 127)
rot: rgb(251, 84, 82)
*/
/*-----------------------------------*/

window.draw = draw;
let screen = new Screens(0, 0, 1536, 864);
let screenState = "start"; // "start","game","end"

/*-----------------------------------*/
function draw() {
  background(5, 85, 83);
  if (screenState === "start") {
    screen.startScreen();
  } else if (screenState === "game") {
    screen.gameScreen();
  } else if (screenState === "end") {
    screen.endScreen();
  }
}
