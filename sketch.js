const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var boy, boyImage;
var tree, treeImage;
var ground;
var stone, stoneImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7, stand8, stand9, stand10;
var mangoImage;
var launcher;
var lmango, lstone;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 653.2);

	engine = Engine.create();
	world = engine.world;

	var boyOptions = {
		isStatic: true,
	}

	var treeOptions = {
		isStatic: true,
            restitution: 0.8,
            density: 2.0,
	}

	//Create the Bodies Here.
	boy = Bodies.rectangle(250, 550, 10, 10, boyOptions);
	World.add(world, boy);

	boyImage = loadImage("Plucking mangoes/boy.png");
	treeImage = loadImage("Plucking mangoes/tree.png");

	ground = new Ground(600, 625, 1550, 20);

	tree = Bodies.rectangle(900, 380, 10, 10, treeOptions);
	World.add(world, tree);

	stone = new Stone(170, 500, 50, 50);

	

	mango1 = new Mango(820, 360, 70, 70);
	mango2 = new Mango(825, 250, 70, 70);
	mango3 = new Mango(910, 350, 70, 70);
	mango4 = new Mango(975, 200, 70, 70);
	mango5 = new Mango(920, 280, 70, 70);
	mango6 = new Mango(1030, 350, 70, 70);
	mango7 = new Mango(975, 200, 70, 70);
	mango8 = new Mango(1000, 280, 70, 70);
	mango9 = new Mango(750, 300, 70, 70);
	mango10 = new Mango(900, 180, 70, 70);

	stand1 = new Stand(805, 395, 40, 3);
	stand2 = new Stand(810, 285, 40, 3);
	stand3 = new Stand(894, 385, 40, 3);
	stand4 = new Stand(960, 235, 40, 3);
	stand5 = new Stand(905, 315, 40, 3);
	stand6 = new Stand(1015, 385, 40, 3);
	stand7 = new Stand(960, 235, 40, 3);
	stand8 = new Stand(985, 315, 40, 3);
	stand9 = new Stand(735, 335, 40, 3);
	stand10 = new Stand(885, 215, 40, 3);




	launcher = new Launcher(stone.body, {x: 177, y: 490});

	Engine.run(engine);
  
}


function draw() {
  background(90);
  Engine.update(engine);

  imageMode(CENTER);
  image(boyImage, boy.position.x, boy.position.y, 250, 250);

  imageMode(CENTER);
  image(treeImage, tree.position.x, tree.position.y, 400, 500)

  ground.display();


  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  /*stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();
  stand7.display();
  stand8.display();
  stand9.display();
  stand10.display();*/
  

  launcher.display();

  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
    launcher.fly();
}