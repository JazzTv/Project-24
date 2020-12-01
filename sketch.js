
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;

function setup() 
{
	createCanvas(800, 450);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper = new Paper(100,300,25);
	dustbin = new Dustbin (720,390,100,10);
	ground = Bodies.rectangle(width/2,400,width,10,
	{
		isStatic : true
	});
	World.add (world,ground);
}


function draw() 
{
  background(0);
  paper.display();
  dustbin.display();
 push() 
  fill("white");
 rect(ground.position.x,ground.position.y,width,10);
 pop ()
}

function keyPressed(){
	if (keyCode === UP_ARROW ) 
	{
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		                                                         x: 42,
		                                                         y: -13
	                                                          });
	}
  }

