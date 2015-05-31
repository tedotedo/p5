var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  stroke(255,255,255, 102);
}

function drawEllipse(){
noFill()
stroke(255,255,255,28)
ellipse(0,0,120,80);
}

function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
  py = y;
  px = x;
}