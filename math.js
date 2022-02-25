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


