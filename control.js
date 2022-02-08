//iteration. Repeating forms with "for"
let y;
let num = 14;

function setup() {
  createCanvas(720, 360);
  background(102);
  noStroke();

  // Draw white bars
  fill(255);
  y = 60;
  for (let i = 0; i < num / 3; i++) {
    rect(50, y, 475, 10);
    y += 20;
  }

  // Gray bars
  fill(51);
  y = 40;
  for (let i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 20;
  }

  // Thin lines
  y = 45;
  fill(0);
  for (let i = 0; i < num - 1; i++) {
    rect(120, y, 40, 1);
    y += 20;
  }
}
//Embedded iteration--repetition in 2 dimensions----------------------------------
function setup() {
    createCanvas(720, 360);
    background(0);
    noStroke();
  
    let gridSize = 35;
  
    for (let x = gridSize; x <= width - gridSize; x += gridSize) {
      for (let y = gridSize; y <= height - gridSize; y += gridSize) {
        noStroke();
        fill(255);
        rect(x - 1, y - 1, 3, 3);
        stroke(255, 50);
        line(x, y, width / 2, height / 2);
      }
    }
  }

  //conditionals 1
  function setup() {
    createCanvas(720, 360);
    background(0);
  
    for (let i = 10; i < width; i += 10) {
      // If 'i' divides by 20 with no remainder draw the first line
      // else draw the second line
      if (i % 20 === 0) {
        stroke(255);
        line(i, 80, i, height / 2);
      } else {
        stroke(153);
        line(i, 20, i, 180);
      }
    }
  }
  //conditionals 2 (plus "else")---------------------------------------------
  function setup() {
    createCanvas(720, 360);
    background(0);
  
    for (let i = 2; i < width - 2; i += 4) {
      // If 'i' divides by 20 with no remainder
      if (i % 20 === 0) {
        stroke(255);
        line(i, 80, i, height / 2);
        // If 'i' divides by 10 with no remainder
      } else if (i % 10 === 0) {
        stroke(153);
        line(i, 20, i, 180);
        // If neither of the above two conditions are met
        // then draw this line
      } else {
        stroke(102);
        line(i, height / 2, i, height - 20);
      }
    }
  }

  //Logical operators.....-------------------------------------
  let test = false;

  function setup() {
    createCanvas(720, 360);
    background(126);
  
    for (let i = 5; i <= height; i += 5) {
      // Logical AND
      stroke(0);
      if (i > 35 && i < 100) {
        line(width / 4, i, width / 2, i);
        test = false;
      }
  
      // Logical OR
      stroke(76);
      if (i <= 35 || i >= 100) {
        line(width / 2, i, width, i);
        test = true;
      }
  
      // Testing if a boolean value is "true"
      // The expression "if(test)" is equivalent to "if(test == true)"
      if (test) {
        stroke(0);
        point(width / 3, i);
      }
  
      // Testing if a boolean value is "false"
      // The expression "if(!test)" is equivalent to "if(test == false)"
      if (!test) {
        stroke(255);
        point(width / 4, i);
      }
    }
  }

  //logical operators 2-------------------------------------
  

//1 coordinate for everything :)
let where = 0; //control boxes' positions

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //similar to slide 4 use of OR, ||
  //to set bg color of canvas
  if ((where < 0) || (where > height)) {
    background("beige");
  } else {
    background("chocolate");
  }

  //similar to slide 4 use of AND, &&
  //to set fill color of box & text
  if (mouseIsPressed && keyIsPressed) {
    fill("cyan");
  } else {
    fill(255);
  }

  //boxL
  rect(where, where, 40);

  //boxR, pad x coordinate for size of box
  rect(width - where - 40, where, 40);

  //Move the boxes
  where = where + 1;

  //Show the value of where the boxes are
  text("where is " + where, 150, 30);

  //testing not, ! and or, || operators
  if (!(key === "q" || key === "Q")) {
    fill("purple");
  } else {
    fill("dodgerBlue");
  }
  //Show the current key value
  text("Did you type a q or Q? " + key, 150, 70);

  //*** Boundary checking ***
  //Is the mouse within rect boundary?
  //left, right, top, bottom
  let withinRect = (mouseX >= 150) &&
    (mouseX <= 150 + 100) &&
    (mouseY >= 300) &&
    (mouseY <= 300 + 40);
  //fill color based on value of withinRect
  if (withinRect) {
    fill("pink");
  } else {
    fill("orange");
  }
  //draw the rect
  rect(150, 300, 100, 40);
  //show withinRect value as label on rect
  fill(0);
  text("withinRect " + withinRect, 160, 320);
}

//boxes restart
function mousePressed() {
  //Reset boxes back up and above the canvas
  where = -50;
}



//conditional Shapes-------------------------------------
function setup() {
    createCanvas(400, 400);
    strokeWeight(3);
    //center squares to match circles
    rectMode(CENTER);
    
    //draw rects to mark far sides
    noStroke();
    fill("beige");
    rect(5, height / 2, 10, height);
    rect(width - 5, height / 2, 10, height);
    fill("orange");
    stroke("brown");
  
  }
  
  function draw() {
    point(mouseX, mouseY);
  
    //if (test) {doThis; }
    //test: mouseX on far left of canvas
    //doThis: draw a circle at mouseY
    if (mouseX < 10) {
      circle(width / 2, mouseY, 20);
    }
  
    //test: mouseX on far right of canvas
    //doThis: draw a square at mouseY
    if (mouseX > width - 10) {
      square(width / 2, mouseY, 20);
    }
  
  }

