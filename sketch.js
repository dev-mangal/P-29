const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,slingshot;
var gameState="onSling";
var score=0;
var bg;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  getBackgroundImg();
  ground=new Ground(320,390,100,10);
  ground2=new Ground(510,290,100,10);
  ground3=new Ground(700,190,100,10);
  
  block1=new Box(290,365,20,40);
  block2=new Box(310,365,20,40);
  block3=new Box(330,365,20,40);
  block4=new Box(350,365,20,40);

  block5=new Box(310,325,20,40);
  block6=new Box(330,325,20,40);

  block7=new Box(320,285,20,40);


  block8=new Box(480,265,20,40);
  block9=new Box(500,265,20,40);
  block10=new Box(520,265,20,40);
  block11=new Box(540,265,20,40);

  block12=new Box(500,225,20,40);
  block13=new Box(520,225,20,40);

  block14=new Box(510,185,20,40);


  block15=new Box(670,165,20,40);
  block16=new Box(690,165,20,40);
  block17=new Box(710,165,20,40);
  block18=new Box(730,165,20,40);

  block19=new Box(690,125,20,40);
  block20=new Box(710,125,20,40);

  block21=new Box(700,85,20,40);

  polygon=Bodies.circle(100,300,15,{density:1.0});
  World.add(world,polygon);

  slingshot=new SlingShot(polygon,{x:100,y:300});
}

function draw() {
  background(255);
  if(bg!==undefined){
  background(bg);  
  }
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();

  fill(255);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(155);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  fill(55);
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

  textSize(20);
  text("Score:"+score,700,350);
  fill("red");
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,15,15);
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon);
     Matter.Body.setPosition(polygon,{x:100,y:300});
     gameState="onSling";
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = 255;
  }
  else{
      bg = 0;
  }
}
