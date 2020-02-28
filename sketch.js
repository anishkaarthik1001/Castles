const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;

var LandO;

function setup() {
 var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  wall2 = new Wall(300,300,50,50);
    wall1 = new Wall(200,300,50,50);
    wall3 = new Wall(250,360,150,150);
    LandO = new Land(200,400,800,40);
    wall4 = new Wall(145,300,50,150);
    wall5 = new Wall(344,300,50,150);
    wall6 = new Wall(120,300,50,200);
    wall7 = new Wall(366,300,50,200);
    wall8 = new Wall(100,200,70,70);
    wall9 = new Wall(388,200,70,70);
}

function draw() {
  background(0);  
  Engine.update(engine);
    wall1.display();
   wall2.display();
   LandO.display();
   wall3.display();
   wall4.display();
   wall5.display();
   wall6.display();
   wall7.display();
   wall8.display();
   wall9.display();
   drawSprites();
};