
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 paper = new Paper (200,100)
 ground = new Ground (400,height,800,50)
 box1 = new Box (width-200,height-60,100,10)
 box2 = new Box (width-150,height-90,10,60)
 box3 = new Box (width-250,height-90,10,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed() {
  if(keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:300});
  }
}

