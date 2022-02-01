//Coordinates----------------------------------
function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
  }
  
  function draw() {
    // Set the background to black and turn off the fill color
    background(0);
    noFill();
  
    // The two parameters of the point() method each specify
    // coordinates.
    // The first parameter is the x-coordinate and the second is the Y
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25);
  
    // Coordinates are used for drawing all shapes, not just points.
    // Parameters for different functions are used for different
    // purposes. For example, the first two parameters to line()
    // specify the coordinates of the first endpoint and the second
    // two parameters specify the second endpoint
    stroke(0, 153, 255);
    line(0, height * 0.33, width, height * 0.33);
  
    // By default, the first two parameters to rect() are the
    // coordinates of the upper-left corner and the second pair
    // is the width and height
    stroke(255, 153, 0);
    rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
  }
//width and Height--------------------------------
function setup() {
    createCanvas(720, 400);
  }
  
  function draw() {
    background(127);
    noStroke();
    for (let i = 0; i < height; i += 20) {
      fill(129, 206, 15);
      rect(0, i, width, 10);
      fill(255);
      rect(i, 0, 10, height);
    }
  }

//Setup and Draw---------------------------------
let y = 100;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(720, 400);
  stroke(255); // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
//Loop-------------------------------------------
let y = 100;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(720, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
//Redraw-----------------------------------------
let y;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(720, 400);
  stroke(255);
  noLoop();
  y = height * 0.5;
}

// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0);
  y = y - 4;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {
  redraw();
}

//Functions--------------------------------------
function setup() {
    createCanvas(720, 400);
    background(51);
    noStroke();
    //noLoop();
  }
  
  function draw() {
    drawTarget(width * 0.25, height * 0.4, 200, 4);
    drawTarget(width * 0.5, height * 0.5, 300, 3);
    drawTarget(width * 0.75, height * 0.3, 120, 6);
  }
  
  function drawTarget(xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }

  //Recursion-------------------------------------  
  function setup() {
    createCanvas(720, 560);
    noStroke();
    noLoop();
  }
  
  function draw() {
    drawCircle(width / 2, 280, 6);
  }
  
  function drawCircle(x, radius, level) {
    // 'level' is the variable that terminates the recursion once it reaches 
    // a certain value (here, 1). If a terminating condition is not 
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome! 
    const tt = (126 * level) / 4.0;
    fill(tt);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {  
      // 'level' decreases by 1 at every step and thus makes the terminating condition
      // attainable
      level = level - 1;  
      drawCircle(x - radius / 2, radius / 2, level);
      drawCircle(x + radius / 2, radius / 2, level);
    }
  }
   

  //Create Graphics--------------------------------

let pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}
  