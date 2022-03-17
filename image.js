//load and display image
let img; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('assets/moonwalk.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}


//background image--------------------------------------------
let bg;
let y = -80;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/moonwalk.jpg');
  createCanvas(720, 400);
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}

//transparency-----------------------------------------------
let img;
let offset = 0;
let easing = 0.05;

function setup() {
  createCanvas(720, 400);
  img = loadImage('assets/moonwalk.jpg'); // Load an image into the program
}

function draw() {
  image(img, 0, 0); // Display at full opacity
  let dx = mouseX - img.width / 2 - offset;
  offset += dx * easing;
  tint(255, 127); // Display at half opacity
  image(img, offset, 0);
}


//Alpha mask----------------------------------------------
let img;
let imgMask;

function preload() {
  img = loadImage('assets/moonwalk.jpg');
  imgMask = loadImage('assets/mask.png');
}

function setup() {
  createCanvas(720, 400);
  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 13);
  image(img, width / 5, height / 2);
  image(img, mouseX, mouseY);
}

//Create Image---------------------------------------------
let img; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = createImage(230, 230);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let a = map(y, 0, img.height, 255, 0);
      img.set(x, y, [0, 153, 204, a]);
    }
  }
  img.updatePixels();
}

function draw() {
  background(0);
  image(img, 90, 80);
  image(img, mouseX - img.width / 2, mouseY - img.height / 2);
}

//Pointillism----------------------------------------------
let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('assets/moonwalk.jpg');
}

function setup() {
  createCanvas(720, 400);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}

//Blur-----------------------------------------------------
// to consider all neighboring pixels we use a 3x3 array
// and normalize these values
// v is the normalized value
let v = 1.0 / 9.0;
// kernel is the 3x3 matrix of normalized values
let kernel = [[ v, v, v ], [ v, v, v ], [ v, v, v ]]; 

// preload() runs once, before setup()
// loadImage() needs to occur here instead of setup()
// if loadImage() is called in setup(), the image won't appear 
// since noLoop() restricts draw() to execute only once
// (one execution of draw() is not enough time for the image to load),
// preload() makes sure image is loaded before anything else occurs
function preload() {
  // load the original image
  img = loadImage("assets/rover.png"); 
}

// setup() runs once after preload
function setup() {
  // create canvas
  createCanvas(710, 400);
  // noLoop() makes draw() run only once, not in a loop
  noLoop();
}


// draw() runs after setup(), normally on a loop
// in this case it runs only once, because of noDraw()
function draw() {
  // place the original image on the upper left corner
  image(img, 0, 0);

  // create a new image, same dimensions as img
  edgeImg = createImage(img.width, img.height);

  // load its pixels
  edgeImg.loadPixels();
  
  // two for() loops, to iterate in x axis and y axis
  // since the kernel assumes that the pixel
  // has pixels above, under, left, and right
  // we need to skip the first and last column and row
  // x then goes from 1 to width - 1
  // y then goes from 1 to height - 1
  for (let x = 1; x < img.width; x++) {
    for (let y = 1; y < img.height; y++) {
      // kernel sum for the current pixel starts as 0
      let sum = 0; 

      // kx, ky variables for iterating over the kernel
      // kx, ky have three different values: -1, 0, 1
      for (kx = -1; kx <= 1; kx++) {
        for (ky = -1; ky <= 1; ky++) {
          let xpos = x + kx;
          let ypos = y + ky;
          
          // since our image is grayscale, 
          // RGB values are identical
          // we retrieve the red value for this example 
          // (green and blue work as well)
          let val = red(img.get(xpos, ypos));

          // accumulate the  kernel sum
          // kernel is a 3x3 matrix
          // kx and ky have values -1, 0, 1
          // if we add 1 to kx and ky, we get 0, 1, 2
          // with that we can use it to iterate over kernel
          // and calculate the accumulated sum
          sum += kernel[kx+1][ky+1] * val;
        }
      }

      // set the value of the edgeImg pixel to the kernel sum
      edgeImg.set(x, y, color(sum));
    }
  }
  // updatePixels() to write the changes on edgeImg
  edgeImg.updatePixels();
  
  // draw edgeImg at the right of the original image
  image(edgeImg, img.width, 0);
}



