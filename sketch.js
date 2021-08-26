const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain = 100;
var drops = []
var backgroundImg
function preload() {
  backgroundImg = loadImage("snow2.png")
}

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;



  if (frameCount % 100 === 0) {
    for (var i = 0; i < rain; i++) {
      drops.push(new Snow(random(0, 400), random(0, 400)))
    }
  }


}

function draw() {
  
  background.add("snow2.png")
  
  Engine.update(engine);

  for (var i = 0; i < rain; i++) {
    drops[i].display();
    drops[i].pos();
  }





}


