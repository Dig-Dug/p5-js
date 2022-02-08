//variables----------------------------------------------------
function setup() {
    createCanvas(720, 400);
    background(0);
    stroke(153);
    strokeWeight(4);
    strokeCap(SQUARE);
  
    let a = 50;
    let b = 120;
    let c = 180;
  
    line(a, b, a + c, b);
    line(a, b + 10, a + c, b + 10);
    line(a, b + 20, a + c, b + 20);
    line(a, b + 30, a + c, b + 30);
  
    a = a + c;
    b = height - b;
  
    line(a, b, a + c, b);
    line(a, b + 10, a + c, b + 10);
    line(a, b + 20, a + c, b + 20);
    line(a, b + 30, a + c, b + 30);
  
    a = a + c;
    b = height - b;
  
    line(a, b, a + c, b);
    line(a, b + 10, a + c, b + 10);
    line(a, b + 20, a + c, b + 20);
    line(a, b + 30, a + c, b + 30);
  }
//true false
function setup() {
    createCanvas(720, 400);
    background(0);
    stroke(255);
  
    let b = false;
    let d = 20;
    let middle = width / 2;
  
    for (let i = d; i <= width; i += d) {
      b = i < middle;
  
      if (b === true) {
        // Vertical line
        line(i, d, i, height - d);
      }
  
      if (b === false) {
        // Horizontal line
        line(middle, i - middle + d, width - d, i - middle + d);
      }
    }
  }

  //variable scope----------------------------------------------------
  let a = 80; // Create a global variable "a"

function setup() {
  createCanvas(720, 400);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);

  // Use a local variable a in for loop
  for (let a = 120; a < 200; a += 3) {
    line(a, 0, a, height);
  }

  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();

  // Make a call to the custom function drawYetAnotherLine()
  drawYetAnotherLine();
}

function drawAnotherLine() {
  // Create a new variable "a" local to this function
  let a = 320;
  // Draw a line using the local variable "a"
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  // Because no new local variable "a" is set,
  // this line draws using the original global
  // variable "a" which is set to the value 20.
  line(a + 3, 0, a + 3, height);
}

//Numbers----------------------------------------------------
let a = 0; // Create a global variable "a" of type Number
let b = 0; // Create a global variable "b" of type Number

function setup() {
  createCanvas(720, 400);
  stroke(255);
}

function draw() {
  background(0);

  a = a + 1; // Increment a with an integer
  b = b + 0.2; //Increment b with a float
  line(a, 0, a, height / 2);
  line(b, height / 2, b, height);

  if (a > width) {
    a = 0;
  }
  if (b > width) {
    b = 0;
  }
}



