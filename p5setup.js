const WIDTH = 1536;
const HEIGHT = 864;

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

window.setup = setup;
window.addEventListener("resize", function () {
  resizeCanvas(WIDTH, HEIGHT);
  clear();
});

new p5();
var width = WIDTH;
var height = HEIGHT;
