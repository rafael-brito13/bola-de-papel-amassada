
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options ={
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = createSprite (width/2,670,width,20)
	leftSide = createSprite (700,600,20,120)
	rightSide = createSprite (500,600,20,120)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}

function keyPressed {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(body, position, force)
	}
}


