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
  
function setup() {
    createCanvas(710, 400);
    noStroke();
    background(51, 0, 0);
  
    let inside = color(204, 102, 0);
    let middle = color(204, 153, 0);
    let outside = color(153, 51, 0);
  
    // These statements are equivalent to the statements above.
    // Programmers may use the format they prefer.
    //let inside = color('#CC6600');
    //let middle = color('#CC9900');
    //let outside = color('#993300');
  
    push();
    translate(80, 80);
    fill(outside);
    rect(0, 0, 200, 200);
    fill(middle);
    rect(40, 60, 120, 120);
    fill(inside);
    rect(60, 90, 80, 80);
    pop();
  
    push();
    translate(360, 80);
    fill(inside);
    rect(0, 0, 200, 200);
    fill(outside);
    rect(40, 60, 120, 120);
    fill(middle);
    rect(60, 90, 80, 80);
    pop();
  }
  
//Relativity------------------------------------------------------

let a, b, c, d, e;

function setup() {
  createCanvas(710, 400);
  noStroke();
  a = color(165, 167, 20);
  b = color(77, 86, 59);
  c = color(42, 106, 105);
  d = color(165, 89, 20);
  e = color(146, 150, 127);
  noLoop(); // Draw only one time
}

function draw() {
  drawBand(a, b, c, d, e, 0, width / 128);
  drawBand(c, a, d, b, e, height / 2, width / 128);
}

function drawBand(v, w, x, y, z, ypos, barWidth) {
  let num = 5;
  let colorOrder = [v, w, x, y, z];
  for (let i = 0; i < width; i += barWidth * num) {
    for (let j = 0; j < num; j++) {
      fill(colorOrder[j]);
      rect(i + j * barWidth, ypos, barWidth, height / 2);
    }
  }
}

//Linear Gradient------------------------------------------------------
// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(710, 400);

  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
 setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  // Foreground
 setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
 setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
//Radial Gradient------------------------------------------------------
let dim;

function setup() {
  createCanvas(710, 400);
  dim = width / 2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

//Lerp Color------------------------------------------------------

function setup() {
    createCanvas(720, 400);
    background(255);
    noStroke();
  }
  
  function draw() {
    background(255);
    from = color(255, 0, 0, 0.2 * 255);
    to = color(0, 0, 255, 0.2 * 255);
    c1 = lerpColor(from, to, 0.33);
    c2 = lerpColor(from, to, 0.66);
    for (let i = 0; i < 15; i++) {
      fill(from);
      quad(
        random(-40, 220), random(height),
        random(-40, 220), random(height),
        random(-40, 220), random(height),
        random(-40, 220), random(height)
      );
      fill(c1);
      quad(
        random(140, 380), random(height),
        random(140, 380), random(height),
        random(140, 380), random(height),
        random(140, 380), random(height)
      );
      fill(c2);
      quad(
        random(320, 580), random(height),
        random(320, 580), random(height),
        random(320, 580), random(height),
        random(320, 580), random(height)
      );
      fill(to);
      quad(
        random(500, 760), random(height),
        random(500, 760), random(height),
        random(500, 760), random(height),
        random(500, 760), random(height)
      );
    }
    frameRate(5);
  }
  