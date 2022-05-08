const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;

function preload() {
  bg = loadImage("background.png");
  playerImg = loadImage("car.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  car = createSprite(width/2 - 20, 500, 400, 200);
  car.addImage(playerImg);
  car.scale = 0.25;
}

function draw() {
  background(bg);
  Engine.update(engine);

  drawSprites();
}

function keyPressed() {
  if(keyIsDown(38)) {
    car.y = car.y - 10;
  }
}