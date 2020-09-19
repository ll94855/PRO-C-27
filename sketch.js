const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,rope1, input;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
  	input = createInput();
  	input.position(20, 30);



	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	roof1 = new roof(400,150,600,20);

	bob1 = new bob(200,350);
	rope1 = new Rope(bob1.body,roof1.body,-200,2);
	bob2 = new bob(300,350);
	rope2 = new Rope(bob2.body,roof1.body,-100,2);
	bob3 = new bob(400,350);
	rope3 = new Rope(bob3.body,roof1.body,0,2);
	bob4 = new bob(500,350);
	rope4 = new Rope(bob4.body,roof1.body,100,2);
	bob5 = new bob(600,350);
	rope5 = new Rope(bob5.body,roof1.body,200,2);

	
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill("black")
  text("I dont know why this isn't working. Please enter why and send screenshot of your answer(PS use left and right buttons to control bobs).", 20, 20);

  drawSprites();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  force();

  answer();

}
function force()
{
	if(keyIsDown(LEFT_ARROW))
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
	}

	if(keyIsDown(RIGHT_ARROW))
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:0});
	}
}
function answer()
{
	var reason = input.value();
	
	fill("black");
	text(reason, 0, 600);
}
