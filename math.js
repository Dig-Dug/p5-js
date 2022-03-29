//Increment decrement
let a;
let b;
let direction;

function setup() {
  createCanvas(710, 400);
  colorMode(RGB, width);
  a = 0;
  b = width;
  direction = true;
  frameRate(30);
}

function draw() {
  a++;
  if (a > width) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    stroke(a);
  } else {
    stroke(width - a);
  }
  line(a, 0, a, height / 2);

  b--;
  if (b < 0) {
    b = width;
  }
  if (direction == true) {
    stroke(width - b);
  } else {
    stroke(b);
  }
  line(b, height / 2 + 1, b, height);
}

//Operator Precedence--------------------------------------------------
// The highest precedence is at the top of the list and
// the lowest is at the bottom.
// Multiplicative: * / %
// Additive: + -
// Relational: < > <= >=
// Equality: == !=
// Logical AND: &&
// Logical OR: ||
// Assignment: = += -= *= /= %=
function setup() {
    createCanvas(710, 400);
    background(51);
    noFill();
    stroke(51);
  
    stroke(204);
    for (let i = 0; i < width - 20; i += 4) {
      // The 30 is added to 70 and then evaluated
      // if it is greater than the current value of "i"
      // For clarity, write as "if (i > (30 + 70)) {"
      if (i > 30 + 70) {
        line(i, 0, i, 50);
      }
    }
  
    stroke(255);
    // The 2 is multiplied by the 8 and the result is added to the 4
    // For clarity, write as "rect(5 + (2 * 8), 0, 90, 20);"
    rect(4 + 2 * 8, 52, 290, 48);
    rect((4 + 2) * 8, 100, 290, 49);
  
    stroke(153);
    for (let i = 0; i < width; i += 2) {
      // The relational statements are evaluated
      // first, and then the logical AND statements and
      // finally the logical OR. For clarity, write as:
      // "if(((i > 20) && (i < 50)) || ((i > 100) && (i < width-20))) {"
      if ((i > 20 && i < 50) || (i > 100 && i < width - 20)) {
        line(i, 151, i, height - 1);
      }
    }
  }
  //Distance 1D--------------------------------------------------
  let xpos1;
let xpos2;
let xpos3;
let xpos4;
let thin = 8;
let thick = 36;

function setup() {
  createCanvas(710, 400);
  noStroke();
  xpos1 = width / 2;
  xpos2 = width / 2;
  xpos3 = width / 2;
  xpos4 = width / 2;
}

function draw() {
  background(0);

  let mx = mouseX * 0.4 - width / 5.0;

  fill(102);
  rect(xpos2, 0, thick, height / 2);
  fill(204);
  rect(xpos1, 0, thin, height / 2);
  fill(102);
  rect(xpos4, height / 2, thick, height / 2);
  fill(204);
  rect(xpos3, height / 2, thin, height / 2);

  xpos1 += mx / 16;
  xpos2 += mx / 64;
  xpos3 -= mx / 16;
  xpos4 -= mx / 64;

  if (xpos1 < -thin) {
    xpos1 = width;
  }
  if (xpos1 > width) {
    xpos1 = -thin;
  }
  if (xpos2 < -thick) {
    xpos2 = width;
  }
  if (xpos2 > width) {
    xpos2 = -thick;
  }
  if (xpos3 < -thin) {
    xpos3 = width;
  }
  if (xpos3 > width) {
    xpos3 = -thin;
  }
  if (xpos4 < -thick) {
    xpos4 = width;
  }
  if (xpos4 > width) {
    xpos4 = -thick;
  }
}

//Distance 2D------------------------------------

let max_distance;
function setup(){
  createCanvas(710,400)
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw(){
background(0);

  for(let i = 0; i <= width; i+= 20){
    for(let j = 0; j <= height; j+= 20){
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 66;
ellipse(i,j, size, size);
    }
  }
}

//Sine---------------------------------------------
let diameter;
let angle = 0;

function setup() {
  createCanvas(710, 400);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background(0);

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

  ellipse(0, height / 2, d1, d1);
  ellipse(width / 2, height / 2, d2, d2);
  ellipse(width, height / 2, d3, d3);

  angle += 0.02;
}
//Sine Cosine----------------------------------------
let angle1 = 0;
let angle2 = 0;
let scalar = 70;

function setup() {
  createCanvas(710, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);

  let ang1 = radians(angle1);
  let ang2 = radians(angle2);

  let x1 = width / 2 + scalar * cos(ang1);
  let x2 = width / 2 + scalar * cos(ang2);

  let y1 = height / 2 + scalar * sin(ang1);
  let y2 = height / 2 + scalar * sin(ang2);

  fill(255);
  rect(width * 0.5, height * 0.5, 140, 140);

  fill(0, 102, 153);
  ellipse(x1, height * 0.5 - 120, scalar, scalar);
  ellipse(x2, height * 0.5 + 120, scalar, scalar);

  fill(255, 204, 0);
  ellipse(width * 0.5 - 120, y1, scalar, scalar);
  ellipse(width * 0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3;
}
//Sine wave------------------------------------

let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(710, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}
//Additive Wave--------------------------------------
let xspacing = 8; // Distance between each horizontal location
let w; // Width of entire wave
let maxwaves = 4; // total # of waves to add together

let theta = 0.0;
let amplitude = new Array(maxwaves); // Height of wave
// Value for incrementing X, to be calculated
// as a function of period and xspacing
let dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
let yvalues;

function setup() {
  createCanvas(710, 400);
  frameRate(30);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;

  for (let i = 0; i < maxwaves; i++) {
    amplitude[i] = random(10, 30);
    let period = random(100, 300); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values
  // for 'angular velocity' here
  theta += 0.02;

  // Set all height values to zero
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }

  // Accumulate wave height values
  for (let j = 0; j < maxwaves; j++) {
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0) yvalues[i] += sin(x) * amplitude[j];
      else yvalues[i] += cos(x) * amplitude[j];
      x += dx[j];
    }
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(255, 50);
  ellipseMode(CENTER);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, width / 2 + yvalues[x], 16, 16);
  }
}
//PolarToCartesian..........................................
let r;

// Angle and angular velocity, accleration
let theta;
let theta_vel;
let theta_acc;

function setup() {
  createCanvas(710, 400);

  // Initialize all values
  r = height * 0.45;
  theta = 0;
  theta_vel = 0;
  theta_acc = 0.0001;
}

function draw() {
  background(0);

  // Translate the origin point to the center of the screen
  translate(width / 2, height / 2);

  // Convert polar to cartesian
  let x = r * cos(theta);
  let y = r * sin(theta);

  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x, y, 32, 32);

  // Apply acceleration and velocity to angle
  // (r remains static in this example)
  theta_vel += theta_acc;
  theta += theta_vel;
}

//Arctangent---------------------------------------------
let e1, e2, e3;

function setup() {
  createCanvas(720, 400);
  noStroke();
  e1 = new Eye(250, 16, 120);
  e2 = new Eye(164, 185, 80);
  e3 = new Eye(420, 230, 220);
}

function draw() {
  background(102);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(153, 204, 0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

//Linear interpolation--------------------------------------------


let x = 0;
let y = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(51);

  // lerp() calculates a number between two numbers at a specific increment.
  // The amt parameter is the amount to interpolate between the two values
  // where 0.0 equal to the first point, 0.1 is very near the first point, 0.5
  // is half-way in between, etc.

  // Here we are moving 5% of the way to the mouse location each frame
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);

  fill(255);
  stroke(255);
  ellipse(x, y, 66, 66);
}
//Double Random.............................................
let totalPts = 300;
let steps = totalPts + 1;

function setup() {
  createCanvas(710, 400);
  stroke(255);
  frameRate(1);
}

function draw() {
  background(0);
  let rand = 0;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-5, 5);
  }
}

//Random-----------------------------------------------------
function setup() {
  createCanvas(710, 400);
  background(0);
  strokeWeight(20);
  frameRate(2);
}

function draw() {
  for (let i = 0; i < width; i++) {
    let r = random(255);
    stroke(r);
    line(i, 0, i, height);
  }
}
