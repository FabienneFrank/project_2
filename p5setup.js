function setup() {
  let scubaCanvas = createCanvas(windowWidth, windowHeight);
  scubaCanvas.parent("scube");
  frameRate(30);
}

window.setup = setup;

window.addEventListener("resize", function () {
  resizeCanvas(width, height);
  clear();
});

new p5();
var width = 1920;
var height = 1080;
