var dustbin,dustbin2,dustbin3;
var paperball, ground;
var paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	dustbin = new Dustbin(1000-29, 480, 200, 20)
    dustbin2 = new Dustbin(1070, 440, 20,100)
	dustbin3 = new Dustbin(880, 440, 20,100)
	ground = new Dustbin(650,500,width,20)
	paperball = new Paper(100,200,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  paperball.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}
}



