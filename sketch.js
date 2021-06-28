import Screens from "./screens.js";
/* 
default: rgb(5, 85, 83)
weniger default: rgb(83, 124, 123)
noch weniger default: rgb(145, 155, 154)
creme: rgb(247, 240, 226)
viel weniger rot: rgb(244, 151, 151)
bisschen mehr rot: rgb(255, 127, 127)
rot: rgb(251, 84, 82)
*/
/*-----------------------------------*/

window.draw = draw;
window.mouseClicked = mouseClicked;
window.preload = preload;

let screen = new Screens(0, 0, width, height);
let screenState = "start"; // "start","game","end"
let assets = {
  interactive: {
    boat:'',
    haus:'',
  },
  visual: {
    active: {
      alga: '',
      boat:'',
      fish1:'',
      fish2:'',
      fish3:'',
      haus:'',
    },
    default: {
      alga:'',
      boat:'',
      fish1:'',
      fish2:'',
      fish3:'',
      haus:'',
      coral:'',
    },
  },
}
/*-----------------------------------*/

//lädt alle assets vor 
function preload(){
  assets.visual.active.alga = loadImage('assets/origamiAlgeRot.png');
  assets.visual.active.boat = loadImage('assets/origamiBootRot.png');
  assets.visual.active.fish1 = loadImage('assets/origamiFisch1Rot.png');
  assets.visual.active.fish2 = loadImage('assets/origamiFisch2Rot.png');
  assets.visual.active.fish3 = loadImage('assets/origamiFisch3Rot.png');
  assets.visual.active.haus = loadImage('assets/origamiHausRot.png');

  assets.visual.default.alga = loadImage('assets/origamiAlgeGrün.png');
  assets.visual.default.boat = loadImage('assets/origamiBootGrün.png');
  assets.visual.default.fish1 = loadImage('assets/origamiFisch1Grün.png');
  assets.visual.default.fish2 = loadImage('assets/origamiFisch2Grün.png');
  assets.visual.default.fish3 = loadImage('assets/origamiFisch3Grün.png');
  assets.visual.default.haus = loadImage('assets/origamiHausGrün.png');
  assets.visual.default.coral = loadImage('assets/origamiKoralleGrün.png');

  assets.interactive.boat = loadImage('assets/interaktionsBoot.png'); //(100,90,110,255) rgba des interaktions Bereichs
  assets.interactive.haus = loadImage('assets/interaktionsHaus.png'); //(100,80,120,255) rgba des interaktions Bereichs
}

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

function mouseClicked() {}
