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

let screenState = "tutorial"; // "start","tutorial","game","end"
let resizeEndScreenCanvas = true;
export let assets = {
  interactive: {
    boat: "",
    haus: "",
  },
  visual: {
    active: {
      boat: "",
      haus: "",
      hafenkontrolle: "",
    },
    default: {
      boat: "",
      fish1: "",
      fish2: "",
      fish3: "",
      haus: "",
      beifang1: "",
      beifang2: "",
      plasticStage1: "",
      plasticStage2: "",
      plasticStage3: "",
      plasticStage4: "",
      plasticStage5: "",
      koralleStage1: "",
      koralleStage2: "",
      koralleStage3: "",
      koralleStage4: "",
      koralleStage5: "",
      koralle2Stage1: "",
      koralle2Stage2: "",
      koralle2Stage3: "",
      koralle2Stage4: "",
      koralle2Stage5: "",
      hafenkontrolle: "",
    },
  },
};
/*-----------------------------------*/

//lädt alle assets vor
function preload() {
  assets.visual.active.boat = loadImage("assets/origamiBootRot.png");
  assets.visual.active.haus = loadImage("assets/origamiHausRot.png");
  assets.visual.active.hafenkontrolle = loadImage(
    "assets/hafenkontrollenClicked.png"
  );

  assets.visual.default.boat = loadImage("assets/origamiBootGrün.png");
  assets.visual.default.fish1 = loadImage("assets/origamiFisch1Grün.png");
  assets.visual.default.fish2 = loadImage("assets/origamiFisch2Grün.png");
  assets.visual.default.fish3 = loadImage("assets/origamiFisch3Grün.png");
  assets.visual.default.haus = loadImage("assets/origamiHausGrün.png");
  assets.visual.default.beifang1 = loadImage("assets/origamibeifang1.png");
  assets.visual.default.beifang2 = loadImage("assets/origamibeifang2.png");
  assets.visual.default.plasticStage1 = loadImage(
    "assets/origamiplasticstage1.png"
  );
  assets.visual.default.plasticStage2 = loadImage(
    "assets/origamiplasticstage2.png"
  );
  assets.visual.default.plasticStage3 = loadImage(
    "assets/origamiplasticstage3.png"
  );
  assets.visual.default.plasticStage4 = loadImage(
    "assets/origamiplasticstage4.png"
  );
  assets.visual.default.plasticStage5 = loadImage(
    "assets/origamiplasticstage5.png"
  );
  assets.visual.default.koralleStage1 = loadImage(
    "assets/origamikorallestage1.png"
  );
  assets.visual.default.koralleStage2 = loadImage(
    "assets/origamikorallestage2.png"
  );
  assets.visual.default.koralleStage3 = loadImage(
    "assets/origamikorallestage3.png"
  );
  assets.visual.default.koralleStage4 = loadImage(
    "assets/origamikorallestage4.png"
  );
  assets.visual.default.koralleStage5 = loadImage(
    "assets/origamikorallestage5.png"
  );
  assets.visual.default.koralle2Stage1 = loadImage(
    "assets/origamikoralle2stage1.png"
  );
  assets.visual.default.koralle2Stage2 = loadImage(
    "assets/origamikoralle2stage2.png"
  );
  assets.visual.default.koralle2Stage3 = loadImage(
    "assets/origamikoralle2stage3.png"
  );
  assets.visual.default.koralle2Stage4 = loadImage(
    "assets/origamikoralle2stage4.png"
  );
  assets.visual.default.koralle2Stage5 = loadImage(
    "assets/origamikoralle2stage5.png"
  );
  assets.visual.default.hafenkontrolle = loadImage(
    "assets/hafenkontrollenDefault.png"
  );

  assets.interactive.boat = loadImage("assets/interaktionsBoot.png"); //(100,90,110,255) rgba des interaktions Bereichs
  assets.interactive.haus = loadImage("assets/interaktionsHaus.png"); //(100,80,120,255) rgba des interaktions Bereichs
}
let screen = new Screens(width, height);
function draw() {
  background(5, 85, 83);
  if (screenState === "start") {
    screen.startScreen();
  } else if (screenState === "tutorial") {
    screen.tutorial();
  } else if (screenState === "game") {
    screen.gameScreen();
  } else if (screenState === "end") {
    if (resizeEndScreenCanvas) {
      endscreenResize();
    }
    screen.endScreen();
  }
}
function endscreenResize() {
  resizeCanvas(width, height * 2, true);
  resizeEndScreenCanvas = false;
}
function mouseClicked() {
  /*if (state === "start" && interactionarea.round === true) {
    state = "tutorial";
  }
  if (state === "tutorial" && interactionarea.exitsquare === true) {
    state = "start";
  }*/
}
