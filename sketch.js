
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "launched";
var score = 0;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(390,350,250,20);
	ground2 = new Ground(760,200,200,20);
	ground3 = new Ground(500,490,1000,20);
	
	block1 = new Block(300,220,30,40);
	block2 = new Block(330,220,30,40);
	block3 = new Block(360,220,30,40);
	block4 = new Block(390,220,30,40);
	block5 = new Block(420,220,30,40);
	block6 = new Block(450,220,30,40);
	block7 = new Block(480,220,30,40);

	block8 = new Block(330,180,30,40);
	block9 = new Block(360,180,30,40);
	block10 = new Block(390,180,30,40);
	block11 = new Block(420,180,30,40);
	block12 = new Block(450,180,30,40);

	block13 = new Block(360,140,30,40);
	block14 = new Block(390,140,30,40);
	block15 = new Block(420,140,30,40);

	block16 = new Block(390,100,30,40);
	
	block17 = new Block(700,150,30,40);
	block18 = new Block(730,150,30,40);
	block19 = new Block(760,150,30,40);
	block20 = new Block(790,150,30,40);
	block21 = new Block(820,150,30,40);

	block22 = new Block(730,110,30,40);
	block23 = new Block(760,110,30,40);
	block24 = new Block(790,110,30,40);

	block25 = new Block(760,70,30,40);

	polygon = new Polygon(100,320,70,70);

	slingshot = new slingShot(polygon.body,{x:100,y:250})
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  textSize(20);
  text("Score: "+score,750,40);

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  slingshot.display();
  polygon.display();

  drawSprites();
 }

 function mouseDragged(){
	Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
 }

 function mouseReleased(){
	 slingshot.fly();
	 gameState = "launched";
 }

 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:100,y:320})
        slingshot.attach(polygon.body);        
    }
}

async function getTime (){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")   
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if (hour>06 && hour<18){
     background(255)
    }
    else {
        background(0)
    }
  }