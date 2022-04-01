//Forces
function mousePressed(){
    reset();
  }
  function reset(){
   for(let i = 0;i < 9; i++){
  //Return a random floating-point number.Takes either 0, 1 or 2 arguments.
     movers[i] = new Mover(random(0.5, 3),40  + i * 70, 0 );
   }
  }
  let Liquid = function(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  };
  Liquid.prototype.contains = function(m){
    let l = m.position;
    return l.x > this.x && l.x < this.x + this.w &&
          l.y > this.y && l.y < this.y + this.h;
  }
  Liquid.prototype.calculateDrag = function(m){
    //Calculates the magnitude (length) of the vector and returns the result as a float
    let speed = m.velocity.mag();
    let dragMagnitude = this.c * speed * speed;
    //velocity is a vector, copy and mult are vector functions
    let dragForce = m.velocity.copy();
    dragForce.mult(-1)  
    //Normalize the vector to length 1 (make it a unit vector)
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }
  Liquid.prototype.display = function(){
    noStroke();
     fill(50);
    rect(this.x,this.y,this.w, this.h)
  }
  function Mover(m,x,y){
    this.mass = m;
    /*Creates a new p5.Vector (the datatype for storing vectors). 
    This provides a two or three dimensional vector,
    specifically a Euclidean (also known as geometric) vector.
    A vector is an entity that has both magnitude and direction.*/
    this.position = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
  
  }
  
  Mover.prototype.applyForce = function(force){
    /*A class to describe a two or three dimensional vector,
     specifically a Euclidean (also known as geometric) vector.*/
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
  //The update method is run in the draw loop
  Mover.prototype.update = function(){
  //add method Adds x, y, and z components to a vector, adds one vector to another, or adds two independent vectors together
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
  }
  Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255,127);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  };
  Mover.prototype.checkEdges = function(){
    if( this.position.y > (height - this.mass * 8 )){
      this.velocity.y *= -0.9;
      this.position.y = (height - this.mass * 8)  
  
    }
  }

  //Particle System--------------------------------------------------
  let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
}

// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
//FLocking................................................