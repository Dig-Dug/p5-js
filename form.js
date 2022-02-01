//Points and Lines----------------------------------------------------------------------------------------------------------------------
function setup() {
    let d = 280;
    let p1 = d;
    let p2 = p1 + d;
    let p3 = p2 + d;
    let p4 = p3 + d;
  
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(0);
    //noSmooth();
  
    translate(140, 0);
  
    // Draw gray box
    stroke(153);
    line(p3, p3, p2, p3);
    line(p2, p3, p2, p2);
    line(p2, p2, p3, p2);
    line(p3, p2, p3, p3);
  
    // Draw white points
    stroke(255);
    point(p1, p1);
    point(p1, p3);
    point(p2, p4);
    point(p3, p1);
    point(p4, p2);
    point(p4, p4);
  }

  //shape primitives----------------------------------------------------------------------------------------------------------------------
  function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);
    background(0);
    noStroke();
  
    fill(204);
    triangle(18, 18, 18, 360, 81, 360);
  
    fill(102);
    rect(81, 81, 63, 63);
  
    fill(204);
    quad(189, 18, 216, 18, 216, 360, 144, 360);
  
    fill(255);
    ellipse(252, 144, 72, 72);
  
    fill(204);
    triangle(288, 18, 351, 360, 288, 360);
  
    fill(255);
    arc(479, 300, 280, 280, PI, TWO_PI);
  }

  //pie chart----------------------------------------------------------------------------------------------------------------------
  let angles = [30, 10, 45, 35, 60, 38, 75, 67];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop(); // Run once and stop
}

function draw() {
  background(100);
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}
//regular polygon----------------------------------------------------------------------------------------------------------------------
function setup() {
    createCanvas(720, 400);
  }
  
  function draw() {
    background(102);
  
    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    polygon(0, 0, 82, 3);
    pop();
  
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    polygon(0, 0, 80, 20);
    pop();
  
    push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    polygon(0, 0, 70, 7);
    pop();
  }
  
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  //star----------------------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 70, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 80, 100, 40);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//triangle strip
let x;
let y;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
  createCanvas(720, 400);
  background(204);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(204);

  let numPoints = int(map(mouseX, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}

//Bezier
function setup() {
    createCanvas(720, 400);
    stroke(255);
    noFill();
  }
  
  function draw() {
    background(0);
    for (let i = 0; i < 200; i += 20) {
      bezier(
        mouseX - i / 2.0,
        40 + i,
        410,
        20,
        440,
        300,
        240 - i / 16.0,
        300 + i / 8.0
      );
    }
  }

  //3D primitives
  function setup() {
    createCanvas(710, 400, WEBGL);
  }
  
  function draw() {
    background(100);
  
    noStroke();
    fill(50);
    push();
    translate(-275, 175);
    rotateY(1.25);
    rotateX(-0.9);
    box(100);
    pop();
  
    noFill();
    stroke(255);
    push();
    translate(500, height * 0.35, -200);
    sphere(300);
    pop();
  }

  //Trig wheels and pie chart
  function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    angleMode(DEGREES);
  
    //vars for color wheel center point
    let x = width / 2;
    let y = height / 2 + 100;
    colorWheel(x, y, 100); //slide 11
  
    noStroke();
    pieChartPop(200, 100); //slide 12
  }
  
  //**** slide 12 pie chart trig demo 
  function pieChartPop(x, y) {
    let [total, child, young, adult, senior, elder] = [577, 103, 69,
      122, 170, 113
    ];
    let startValue = 0;
    let range = 0;
  
    //child slice
    range = child / total;
    drawSlice("blue", x, y, 200, startValue, startValue + range);
    startValue += range;
    //young slice
    range = young / total;
    drawSlice("orange", x, y, 200, startValue, startValue + range);
    startValue += range;
    //adult slice
    range = adult / total;
    drawSlice("green", x, y, 200, startValue, startValue + range);
    startValue += range;
    //senior slice
    range = senior / total;
    drawSlice("tan", x, y, 200, startValue, startValue + range);
    startValue += range;
    //elder slice
    range = elder / total;
    drawSlice("pink", x, y, 200, startValue, startValue + range);
    startValue += range;
  
  }
  
  /**
   * drawSlice - draw colored arc based on angle percentages. slide 13
   * Adjust angles so that 0% starts at top (actually -90).
   * @param {color} fColor - fill color
   * @param {number} x - center x
   * @param {number} y - center y
   * @param {number} d - diameter
   * @param {float} percent1 - starting percentage
   * @param {float} percent2 - ending percentage
   */
  function drawSlice(fColor, x, y, d, percent1, percent2) {
    fill(fColor);
    arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360);
  }
  
  //**** slide 11 trig demo 
  function colorWheel(x, y, rad) {
    strokeWeight(10);
    strokeCap(SQUARE);
  
    //Iterate 360 degrees of lines, +10deg per turn
    for (let a = 0; a < 360; a += 10) {
      stroke(a, 150, 200); //hue based on a
      //radius is 100, angle is a degrees
      line(x, y, x + rad * cos(a),
        y + rad * sin(a));
    }
  }
