const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1, rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world

	roof = new Roof(400,250,230,20)

	bob1 = new Bob(320,575,30);
	bob2 = new Bob(360,575,30);
	bob3 = new Bob(400,575,30);
	bob4 = new Bob(440,575,30);
	bob5 = new Bob(480,575,30);

	console.log(bob1)


	rope1 = new Rope (bob1.body,roof.body,-110,0)
	rope2 = new Rope (bob2.body,roof.body,-60,0)
	rope3 = new Rope (bob3.body,roof.body,0,0)
	rope4 = new Rope (bob4.body,roof.body,60,0)
	rope5 = new Rope (bob5.body,roof.body,110,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:80,y:0})
	}
}


