//array
/**An array is a list of data. Each piece of data in an array is identified by an index number representing its position in the array. Arrays are zero based, which means that the first element in the array is [0], the second element is [1], and so on. In this example, an array named "coswave" is created and filled with the cosine values. This data is displayed three separate ways on the screen. */
let coswave = [];

function setup() {
  createCanvas(720, 360);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  noLoop();
}

function draw() {
  let y1 = 0;
  let y2 = height / 3;
  for (let i = 0; i < width; i += 3) {
    stroke(coswave[i] * 255);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (let i = 0; i < width; i += 3) {
    stroke((coswave[i] * 255) / 4);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = height;
  for (let i = 0; i < width; i += 3) {
    stroke(255 - coswave[i] * 255);
    line(i, y1, i, y2);
  }
}
//Array 2D.-------------------------------
//good for storing images, here dots are colored according to its distance from 
//the center

let distances = [];
let maxDistance;
let spacer;

function setup() {
  createCanvas(720, 360);
  maxDistance = dist(width / 2, height / 2, width, height);
  for (let x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (let y = 0; y < height; y++) {
      let distance = dist(width / 2, height / 2, x, y);
      distances[x][y] = (distance / maxDistance) * 255;
    }
  }
  spacer = 10;
  noLoop(); // Run once and stop
}

function draw() {
  background(0);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer / 2, y + spacer / 2);
    }
  }
}

//array objects-syntax for arrays of custom objects---------
class Module {
    constructor(xOff, yOff, x, y, speed, unit) {
      this.xOff = xOff;
      this.yOff = yOff;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.unit = unit;
      this.xDir = 1;
      this.yDir = 1;
    }
  
    // Custom method for updating the variables
    update() {
      this.x = this.x + this.speed * this.xDir;
      if (this.x >= this.unit || this.x <= 0) {
        this.xDir *= -1;
        this.x = this.x + 1 * this.xDir;
        this.y = this.y + 1 * this.yDir;
      }
      if (this.y >= this.unit || this.y <= 0) {
        this.yDir *= -1;
        this.y = this.y + 1 * this.yDir;
      }
    }
  
    // Custom method for drawing the object
    draw() {
      fill(255);
      ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6);
    }
  }
  
  let unit = 40;
  let count;
  let mods = [];
  
  function setup() {
    createCanvas(720, 360);
    noStroke();
    let wideCount = width / unit;
    let highCount = height / unit;
    count = wideCount * highCount;
  
    let index = 0;
    for (let y = 0; y < highCount; y++) {
      for (let x = 0; x < wideCount; x++) {
        mods[index++] = new Module(
          x * unit,
          y * unit,
          unit / 2,
          unit / 2,
          random(0.05, 0.8),
          unit
        );
      }
    }
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < count; i++) {
      mods[i].update();
      mods[i].draw();
    }
  }

  /**Walk Over 2dArray
contributed by Prof WM Harris, How to display 2D array contents on the canvas using regular for and for-of loops in multiple different ways.
A function is created for the canvas, the 2D array (Friend Array) is initialized and walked over using nested loops in different ways. Variables x and y are used to place the array item on the canvas in the form of 2D array. The final nested loop is used to initialize 2D array (Fish Array) with random Integers (fish ages). */
//"use strict"; //catch some common coding errors


/**
 * setup :
 */
 function setup() {
    createCanvas(400, 600);
    //create 2D array, slide 4
    let friendArray = [
      ["Nona", "mac & cheese", "orange", "Eid al-fitr"],
      ["Marylin", "ice cream", "blue", "Halloween"],
      ["Rashaad", "garbage plates", "turquoise", "Christmas"],
      ["Ava", "sushi", "pink", "Newiuou Years"]
    ];
    friendArray.push(["Xavier", "Louisiana creole", "red", "their birthday"]);
  
    //walking 2D array, slide 6
    let y = 20; // Start row based on text size of 20
    for (let f = 0; f < friendArray.length; f++) { // outer array
      let x = 10; // Start item in this row
      for (let t = 0; t < friendArray[f].length; t++) { //inner
        text(friendArray[f][t], x, y);
        x += textWidth(friendArray[f][t]) + 20; //place next item
      }
      y += 28; // place next row
    }
  
    //walking 2D array, variation on slide 6
    //with embedded arithmetic for y
    //
    for (let f = 0; f < friendArray.length; f++) { // outer array
      let x = 10; // Start item in this row
      for (let t = 0; t < friendArray[f].length; t++) { //inner
        //y is v-padding + LCV * v-spacing
        text(friendArray[f][t], x, 200 + f * 28);
        x += textWidth(friendArray[f][t]) + 20; //place next item
      }
    }
  
    //walking 2D array, slide 7
    //need to use x and y variables to manage canvas placement
    y = 400;
    for (let friend of friendArray) {
      let x = 10; // Start item in this row
      console.log("x and y", x, y);
      console.log("friend:", friend);
      for (let item of friend) {
        console.log("item & x:", item, x);
        text(item, x, y);
        x += textWidth(item) + 20; //place next item
      }
      y += 28; // place next row 
    }
  
    //slide 9, creating 2D array: schools of fish ages
    console.log("\n *** Fish ages in 2D ***");
    const schools = [];
    //4 schools of fish
    for (let t = 0; t < 4; t++) {
      schools[t] = []; //initialize this school 
      console.log("schools[t]?", t, schools[t]);
  
      // Add 10 randomized ages to the array
      for (let a = 0; a < 10; a++) {
        schools[t].push(round(random(1, 5)));
      }
    }
    console.log(schools);
  }

