//Hue------------------------------------------------------
const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

//saturation------------------------------------------------------
const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, width, height, 100);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

//Brightness------------------------------------------------------
let img;

function preload() {
  img = loadImage('assets/moonwalk.jpg');
}

function setup() {
  createCanvas(720, 200);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      // Calculate the 1D location from a 2D grid
      let loc = (x + y * img.width) * 4;
      // Get the R,G,B values from image
      let r, g, b;
      r = img.pixels[loc];
      // Calculate an amount to change brightness based on proximity to the mouse
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}
//color variables------------------------------------------------------
  


