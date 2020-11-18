
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObj = new roof(600,350,300,20);
	
	bobObj1 = new bob(400,70,20);
	bobObj2 = new bob(400,140,20);
	bobObj3 = new bob(400,210,20);
	bobObj4 = new bob(400,280,20);
	bobObj5 = new bob(400,350,20);

	rope1 = new rope(bobObj1.body,roofObj.body,bobDiameter*2)
	rope2 = new rope(bobObj2.body,roofObj.body,bobDiameter*2)
	rope3 = new rope(bobObj3.body,roofObj.body,bobDiameter*2)
	rope4 = new rope(bobObj4.body,roofObj.body,bobDiameter*2)
	rope5 = new rope(bobObj5.body,roofObj.body,bobDiameter*2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



