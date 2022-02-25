//Edge Detection-----------------------------------------------------
// this program analyzes every pixel in an image
// in relation to the neighbouring pixels
// to sharpen the image

// to consider all neighboring pixels we use a 3x3 array
// and normalize these values
// kernel is the 3x3 matrix of normalized values
let kernel = [[-1, -1, -1 ], [ -1,  9, -1 ], [-1, -1, -1 ]]; 

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

// setup() runs after preload, once()
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

  for (let x = 1; x < img.width - 1; x++) {
    for (let y = 1; y < img.height - 1; y++) {
      // kernel sum for the current pixel starts as 0
      let sum = 0; 
      
      // kx, ky variables for iterating over the kernel
      // kx, ky have three different values: -1, 0, 1
      for (kx = -1; kx <= 1; kx++) {
        for (ky = -1; ky <= 1; ky++) {
          
          let xpos = x + kx;
          let ypos = y + ky;
          let pos = (y + ky)*img.width + (x + kx);
          // since our image is grayscale, 
          // RGB values are identical
          // we retrieve the red value for this example
          let val = red(img.get(xpos, ypos));
          // accumulate the  kernel sum
          // kernel is a 3x3 matrix
          // kx and ky have values -1, 0, 1
          // if we add 1 to kx and ky, we get 0, 1, 2
          // with that we can use it to iterate over kernel
          // and calculate the accumulated sum
          sum += kernel[ky+1][kx+1] * val;
        }
      }
      
      // set the pixel value of the edgeImg 
      edgeImg.set(x, y, color(sum, sum, sum));
    }
  }
  
  // updatePixels() to write the changes on edgeImg
  edgeImg.updatePixels();
  
  // draw edgeImg at the right of the original image
  image(edgeImg, img.width, 0);
}


//Brightness-----------------------------------------------------
// This program adjusts the brightness 
// of a part of the image by 
// calculating the distance of 
// each pixel to the mouse.
let img;
// preload() runs once, before setup()
// loadImage() needs to occur here instead of setup()
// preload() makes sure image is loaded before anything else occurs
function preload() {
  // load the original image
  img = loadImage("assets/rover_wide.jpg");  
}
// setup() runs after preload, once()
function setup() {
  createCanvas(710, 400);
  pixelDensity(1);
  frameRate(30);
}

function draw() {
    image(img,0,0);
    // Only need to load the pixels[] array once, because we're only
    // manipulating pixels[] inside draw(), not drawing shapes.
    loadPixels();
    // We must also call loadPixels() on the PImage since we are going to read its pixels.
    img.loadPixels();
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++ ) {
        // Calculate the 1D location from a 2D grid
        let loc = (x + y*img.width)*4;
        // Get the R,G,B values from image
        let r,g,b;
        r = img.pixels[loc];
        // g = img.pixels[loc+1];
        // b = img.pixels[loc+2];
        // Calculate an amount to change brightness based on proximity to the mouse
        // The closer the pixel is to the mouse, the lower the value of "distance"
        let maxdist = 50;//dist(0,0,width,height);
        let d = dist(x, y, mouseX, mouseY);
        let adjustbrightness = 255*(maxdist-d)/maxdist;
        r += adjustbrightness;
        // g += adjustbrightness;
        // b += adjustbrightness;
        // Constrain RGB to make sure they are within 0-255 color range
        r = constrain(r, 0, 255);
        // g = constrain(g, 0, 255);
        // b = constrain(b, 0, 255);
        // Make a new color and set pixel in the window
        let pixloc = (y*width + x)*4;
        pixels[pixloc] = r;
        pixels[pixloc+1] = r;
        pixels[pixloc+2] = r;
        pixels[pixloc+3] = 255; // Always have to set alpha
        }
    }
    updatePixels();
}

//Convolution-----------------------------------------------------
 
let img;
let w = 80;

// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
const matrix = [ [ -1, -1, -1 ],
                 [ -1,  9, -1 ],
                 [ -1, -1, -1 ] ]; 

function preload() {
  img = loadImage('assets/moonwalk.jpg');
}

function setup() {
  createCanvas(720, 400);
  img.loadPixels();

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
}

function draw() {
  // We're only going to process a portion of the image
  // so let's set the whole image as the background first
  background(img);

  // Calculate the small rectangle we will process
  const xstart = constrain(mouseX - w/2, 0, img.width);
  const ystart = constrain(mouseY - w/2, 0, img.height);
  const xend = constrain(mouseX + w/2, 0, img.width);
  const yend = constrain(mouseY + w/2, 0, img.height);
  const matrixsize = 3;

  loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < xend; x++) {
    for (let y = ystart; y < yend; y++ ) {
      let c = convolution(x, y, matrix, matrixsize, img);
      
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y*img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);
    }
  }
  updatePixels();
}

function convolution(x, y, matrix, matrixsize, img) {
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++){
    for (let j = 0; j < matrixsize; j++){
      
      // What pixel are we testing
      const xloc = (x + i - offset);
      const yloc = (y + j - offset);
      let loc = (xloc + img.width * yloc) * 4;

      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc, 0 , img.pixels.length - 1);

      // Calculate the convolution
      // retrieve RGB values
      rtotal += (img.pixels[loc]) * matrix[i][j];
      gtotal += (img.pixels[loc + 1]) * matrix[i][j];
      btotal += (img.pixels[loc + 2]) * matrix[i][j];
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  
  // Return the resulting color
  return color(rtotal, gtotal, btotal);
} 


//Copy() method

let draft, ready;
function preload() {
  ready = loadImage("assets/parrot-color.png");
  draft = loadImage("assets/parrot-bw.png");
}
function setup() {
  createCanvas(600, 400);
  noCursor();
  cursor("assets/brush.png", 20, -10);
  image(ready, 0, 0);
  image(draft, 0, 0);
}
function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}
