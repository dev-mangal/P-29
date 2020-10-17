const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground=new Ground(320,390,50,10);
}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,700,300);
  drawSprites();
}