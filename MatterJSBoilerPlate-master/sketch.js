
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground
var Start=0;
var Play=1;
var Gamestate=Start
function preload()
{
	backIMG=loadImage("bg.jpg")
	back2IMG=loadImage("bg2.jpg")
	boyImg=loadImage("boy.png")
	treeImg=loadImage("tree.png")
	basketImg=loadImage("basket.png")
}

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height-3,1200,60);
	mango1 = new Mango(900,350,70,70);
	mango2 = new Mango(1000,300,70,70);
	mango3 = new Mango(1000,200,70,70);
	mango4 = new Mango(900,470,70,70);
	mango5 = new Mango(1120,350,70,70);
	mango6 = new Mango(1120,250,70,70);
	mango7 = new Mango(1040,100,70,70);
	mango8 = new Mango(900,200,70,70);
	mango9 = new Mango(810,280,70,70);
	rock = new Stone(170,510,40);
	slingshot = new SlingShot(rock.body,{x:170, y:510});


	boy=createSprite(240, 560, 70,70);
	boy.addImage(boyImg)
	boy.scale=0.6
	boy.visible=false


    tree=createSprite(1000, 360, 70,70);
	tree.addImage(treeImg)
	tree.scale=1.29
	tree.visible=false

	basket=createSprite(450, 545, 70,70);
	basket.addImage(basketImg)
	basket.scale=0.2
    basket.visible=false

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);

if(Gamestate===Start)
{
	background(back2IMG);
	basket.visible=true
	textSize(97)
	fill("red");
	textFont("freestyle script");
	text("Press 'Enter to Start",350,680)
	textSize(97)
	fill("black");
	textFont("Algerian");
	text("Plucking Mangoes",200,130)
	drawSprites()
}

if(keyCode===ENTER)
    {
        Gamestate=Play
		basket.visible=false
 
    }

  if (Gamestate===Play)
  {
  background(backIMG);
  textSize(50)
  fill("yellow");
  textFont("Baskerville Old Face");
  text("Press 'Space' to get one more chance",50,70)
  drawSprites();
  boy.visible=true
  tree.visible=true

  ground.display();
  //tree.display();
  
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  rock.display()
  //boy.display();
  slingshot.display();    
 

detectollision(rock,mango1)
detectollision(rock,mango2)
detectollision(rock,mango3)
detectollision(rock,mango4)
detectollision(rock,mango5)
detectollision(rock,mango6)
detectollision(rock,mango7)
detectollision(rock,mango8)
detectollision(rock,mango9)
  }
}

function mouseDragged()
    {
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY}); 

    }

function mouseReleased()
    { 
    slingshot.fly(); 

    }

function detectollision(rock,mango)
	{
	    mangoBodyPosition=mango.body.position
		rockBodyPosition=rock.body.position
		
		var distance =dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	    if(distance<=mango.r+rock.r)
	    {
	    Matter.Body.setStatic(mango.body,false)
	    }
		
	}	
	

function keyPressed()
	{
	if(keyCode===32)
	{
	Matter.Body.setPosition(rock.body,{x:170,y:520})
	//slingshot.attach(rock.body)
	slingshot = new SlingShot(rock.body,{x:170, y:510});
	}
	}