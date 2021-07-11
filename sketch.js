import Screens from "./screens.js";
//import gsap from "./gsap.min.js";
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
    house: "",
    netMain: "",
    fish: "",
    portControl: "",
    subsidies: "",
    antiBait: "",
    nets: "",
    protectionZone: "",
  },
  visual: {
    active: {
      boat: "",
      house: "",
      portControl: "",
      subsidies: "",
      fishingQuote: "",
      protectionZone1: "",
      protectionZone2: "",
      protectionZone3: "",
      protectionZone4: "",
      protectionZone5: "",
      antiBait: "",
      nets: "",
    },
    default: {
      cubeLayer1: "",
      cubeLayer2: "",
      cubeLayer3: "",
      boat: "",
      fish1: "",
      fish2: "",
      fish2Turned: "",
      fish3: "",
      fish3Turned: "",
      house: "",
      bycatch1: "",
      bycatch2: "",
      plasticStage1: "",
      plasticStage2: "",
      plasticStage3: "",
      plasticStage4: "",
      plasticStage5: "",
      coralStage1: "",
      coralStage2: "",
      coralStage3: "",
      coralStage4: "",
      coralStage5: "",
      coral2Stage1: "",
      coral2Stage2: "",
      coral2Stage3: "",
      coral2Stage4: "",
      coral2Stage5: "",
      portControl: "",
      period1h: "",
      period2h: "",
      period3h: "",
      period4h: "",
      period5h: "",
      period6h: "",
      period7h: "",
      period8h: "",
      period9h: "",
      period10h: "",
      period11h: "",
      period12h: "",
      subsidies: "",
      fishingQuote: "",
      protectionZone0: "",
      antiBait: "",
      nets: "",
    },
  },
};
/*-----------------------------------*/

//lädt alle assets vor
function preload() {
  assets.visual.active.boat = loadImage("assets/origamiBootRot.png");
  assets.visual.active.house = loadImage("assets/origamiHausRot.png");
  assets.visual.active.portControl = loadImage(
    "assets/hafenkontrollenClicked.png"
  );
  assets.visual.active.subsidies = loadImage("assets/subventionenClicked.png");
  assets.visual.active.fishingQuote = loadImage("assets/fangquoteClicked.png");
  assets.visual.active.protectionZone1 = loadImage("assets/schutzzonen1.png");
  assets.visual.active.protectionZone2 = loadImage("assets/schutzzonen2.png");
  assets.visual.active.protectionZone3 = loadImage("assets/schutzzonen3.png");
  assets.visual.active.protectionZone4 = loadImage("assets/schutzzonen4.png");
  assets.visual.active.protectionZone5 = loadImage("assets/schutzzonen5.png");
  assets.visual.active.antiBait = loadImage("assets/antikoederClicked.png");
  assets.visual.active.nets = loadImage("assets/netzClicked.png");

  assets.visual.default.cubeLayer1 = loadImage("assets/cubeLayer1.png");
  assets.visual.default.cubeLayer2 = loadImage("assets/cubeLayer2.png");
  assets.visual.default.cubeLayer3 = loadImage("assets/cubeLayer3.png");
  assets.visual.default.boat = loadImage("assets/origamiBootGrün.png");
  assets.visual.default.fish1 = loadImage("assets/origamiFisch1Grün.png");
  assets.visual.default.fish2 = loadImage("assets/origamiFisch2Grün.png");
  assets.visual.default.fish2Turned = loadImage(
    "assets/origamiFisch2GrünTurned.png"
  );
  assets.visual.default.fish3 = loadImage("assets/origamiFisch3Grün.png");
  assets.visual.default.fish3Turned = loadImage(
    "assets/origamiFisch3GrünGespiegelt.png"
  );
  assets.visual.default.house = loadImage("assets/origamiHausGrün.png");
  assets.visual.default.bycatch1 = loadImage("assets/origamibeifang1.png");
  assets.visual.default.bycatch2 = loadImage("assets/origamibeifang2.png");
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
  assets.visual.default.coralStage1 = loadImage(
    "assets/origamikorallestage1.png"
  );
  assets.visual.default.coralStage2 = loadImage(
    "assets/origamikorallestage2.png"
  );
  assets.visual.default.coralStage3 = loadImage(
    "assets/origamikorallestage3.png"
  );
  assets.visual.default.coralStage4 = loadImage(
    "assets/origamikorallestage4.png"
  );
  assets.visual.default.coralStage5 = loadImage(
    "assets/origamikorallestage5.png"
  );
  assets.visual.default.coral2Stage1 = loadImage(
    "assets/origamikoralle2stage1.png"
  );
  assets.visual.default.coral2Stage2 = loadImage(
    "assets/origamikoralle2stage2.png"
  );
  assets.visual.default.coral2Stage3 = loadImage(
    "assets/origamikoralle2stage3.png"
  );
  assets.visual.default.coral2Stage4 = loadImage(
    "assets/origamikoralle2stage4.png"
  );
  assets.visual.default.coral2Stage5 = loadImage(
    "assets/origamikoralle2stage5.png"
  );
  assets.visual.default.portControl = loadImage(
    "assets/hafenkontrollenDefault.png"
  );
  assets.visual.default.period1h = loadImage("assets/zeitraum1h.png");
  assets.visual.default.period2h = loadImage("assets/zeitraum2h.png");
  assets.visual.default.period3h = loadImage("assets/zeitraum3h.png");
  assets.visual.default.period4h = loadImage("assets/zeitraum4h.png");
  assets.visual.default.period5h = loadImage("assets/zeitraum5h.png");
  assets.visual.default.period6h = loadImage("assets/zeitraum6h.png");
  assets.visual.default.period7h = loadImage("assets/zeitraum7h.png");
  assets.visual.default.period8h = loadImage("assets/zeitraum8h.png");
  assets.visual.default.period9h = loadImage("assets/zeitraum9h.png");
  assets.visual.default.period10h = loadImage("assets/zeitraum10h.png");
  assets.visual.default.period11h = loadImage("assets/zeitraum11h.png");
  assets.visual.default.period12h = loadImage("assets/zeitraum12h.png");
  assets.visual.default.subsidies = loadImage("assets/subventionen.png");
  assets.visual.default.fishingQuote = loadImage("assets/fangquote.png");
  assets.visual.default.protectionZone0 = loadImage("assets/schutzzonen0.png");
  assets.visual.default.antiBait = loadImage("assets/antikoeder.png");
  assets.visual.default.nets = loadImage("assets/netz.png");

  assets.interactive.boat = loadImage("assets/interaktionsBoot.png"); //(100,90,110,255) rgba des interaktions Bereichs
  assets.interactive.house = loadImage("assets/interaktionsHaus.png"); //(100,80,120,255) rgba des interaktions Bereichs
  assets.interactive.netMain = loadImage("assets/netzMainInteraction.png"); //(189,109,171,255)
  assets.interactive.fish = loadImage("assets/fischInteraction.png"); //(207,203,219,255)
  assets.interactive.portControl = loadImage(
    "assets/hafenkontrollenInteraction.png"
  ); //(164,158,163,255)
  assets.interactive.subsidies = loadImage(
    "assets/subventionenInteraction.png"
  ); //(57,19,242,255)
  assets.interactive.antiBait = loadImage("assets/antikoederInteraction.png"); //(112,101,33,255)
  assets.interactive.nets = loadImage("assets/netzInteraction.png"); //(22, 88, 111, 255)
  assets.interactive.protectionZone = loadImage(
    "assets/schutzzonenInteraction.png"
  ); //(68, 57, 10, 255)
}

export let cube = {
  x: width / 2,
  y: 470,
  size: 1,
};

let screen = new Screens(width, height);

screen.setup();

function draw() {
  background(5, 85, 83);
  if (helper.screenState === "start") {
    screen.startScreen(helper);
  } else if (helper.screenState === "tutorial") {
    screen.tutorial(helper);
  } else if (
    helper.screenState === "game" ||
    helper.screenState === "exitPopUp"
  ) {
    screen.gameScreen(helper);
  } else if (helper.screenState === "end") {
    if (resizeEndScreenCanvas) {
      endscreenResize();
    }
    screen.endScreen(helper);
  }
}
function endscreenResize() {
  resizeCanvas(width, height * 2, true);
  resizeEndScreenCanvas = false;
}
function mouseClicked() {
  helper.clicked = true;
}
