function setup() {
  createCanvas(1536, 864);
}

window.setup = setup;
window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
