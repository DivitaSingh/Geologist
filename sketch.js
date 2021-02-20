
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload(){
	hammerImg=loadImage("hammer.png");
	bannerImg=loadImage("banner.png");
}

function setup(){
    var canvas = createCanvas(1535,750);
    engine = Engine.create();
    world = engine.world;

	engine = Engine.create();
	world = engine.world;

	banner=createSprite(767.5,200,20,20);
	banner.addImage(bannerImg);

	hammer = new Hammer(100,100);
	stone = new Stone(720,700,70,70);
	rubber = new Rubber(220,700);
	sand1 = new Sand(320,700);
	sand2 = new Sand(370,700);
	sand3 = new Sand(395,700);
	sand4 = new Sand(420,700);
	sand5 = new Sand(440,700);
	sand6 = new Sand(470,700);
    iron = new Iron(620,700);

	console.log(stone.y);
	var options={
		isStatic:true
	  }
	  ground=Bodies.rectangle(750,750,2000,20,options);
	  World.add(world,ground)  
	  console.log(ground);
	 
	  
	  man=createSprite(1500,375,20,20);
	  man.addImage(hammerImg);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("peachPuff");
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();

  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,2000,20);
 man.x=mouseX;
 man.y=mouseY 
 ground.shapeColor=color(90,46,1);
  drawSprites();
 
}



