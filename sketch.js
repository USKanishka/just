var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var ground,world;







function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  
}