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

let resizeEndScreenCanvas = true;
let helper = {
  clicked: false,
  screenState: "start", // "start","tutorial","game","end"
};
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
      subventionen: "",
      fangquote: "",
      schutzzonen1: "",
      schutzzonen2: "",
      schutzzonen3: "",
      schutzzonen4: "",
      schutzzonen5: "",
      antikoeder: "",
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
      zeitraum1h: "",
      zeitraum2h: "",
      zeitraum3h: "",
      zeitraum4h: "",
      zeitraum5h: "",
      zeitraum6h: "",
      zeitraum7h: "",
      zeitraum8h: "",
      zeitraum9h: "",
      zeitraum10h: "",
      zeitraum11h: "",
      zeitraum12h: "",
      subventionen: "",
      fangquote: "",
      schutzzonen0: "",
      antikoeder: "",
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
  assets.visual.active.subventionen = loadImage(
    "assets/subventionenClicked.png"
  );
  assets.visual.active.fangquote = loadImage("assets/fangquoteClicked.png");
  assets.visual.active.schutzzonen1 = loadImage("assets/schutzzonen1.png");
  assets.visual.active.schutzzonen2 = loadImage("assets/schutzzonen2.png");
  assets.visual.active.schutzzonen3 = loadImage("assets/schutzzonen3.png");
  assets.visual.active.schutzzonen4 = loadImage("assets/schutzzonen4.png");
  assets.visual.active.schutzzonen5 = loadImage("assets/schutzzonen5.png");
  assets.visual.active.antikoeder = loadImage("assets/antikoederClicked.png");

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
  assets.visual.default.zeitraum1h = loadImage("assets/zeitraum1h.png");
  assets.visual.default.zeitraum2h = loadImage("assets/zeitraum2h.png");
  assets.visual.default.zeitraum3h = loadImage("assets/zeitraum3h.png");
  assets.visual.default.zeitraum4h = loadImage("assets/zeitraum4h.png");
  assets.visual.default.zeitraum5h = loadImage("assets/zeitraum5h.png");
  assets.visual.default.zeitraum6h = loadImage("assets/zeitraum6h.png");
  assets.visual.default.zeitraum7h = loadImage("assets/zeitraum7h.png");
  assets.visual.default.zeitraum8h = loadImage("assets/zeitraum8h.png");
  assets.visual.default.zeitraum9h = loadImage("assets/zeitraum9h.png");
  assets.visual.default.zeitraum10h = loadImage("assets/zeitraum10h.png");
  assets.visual.default.zeitraum11h = loadImage("assets/zeitraum11h.png");
  assets.visual.default.zeitraum12h = loadImage("assets/zeitraum12h.png");
  assets.visual.default.subventionen = loadImage("assets/subventionen.png");
  assets.visual.default.fangquote = loadImage("assets/fangquote.png");
  assets.visual.default.schutzzonen0 = loadImage("assets/schutzzonen0.png");
  assets.visual.default.antikoeder = loadImage("assets/antikoeder.png");

  assets.interactive.boat = loadImage("assets/interaktionsBoot.png"); //(100,90,110,255) rgba des interaktions Bereichs
  assets.interactive.haus = loadImage("assets/interaktionsHaus.png"); //(100,80,120,255) rgba des interaktions Bereichs
}

let screen = new Screens(width, height);

screen.setup();

function draw() {
  background(5, 85, 83);
  if (helper.screenState === "start") {
    screen.startScreen(helper);
  } else if (helper.screenState === "tutorial") {
    screen.tutorial();
  } else if (helper.screenState === "game") {
    screen.gameScreen();
  } else if (helper.screenState === "end") {
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
  helper.clicked = true;
  /*if (state === "start" && interactionarea.round === true) {
    state = "tutorial";
  }
  if (state === "tutorial" && interactionarea.exitsquare === true) {
    state = "start";
  }*/
}
