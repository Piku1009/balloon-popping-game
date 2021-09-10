const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var pinkBalloon = [];
var boy;
function preload(){
  boy=loadImage("boy.png");
}
function setup(){
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,390,800,20);
  stoneObj=new Stone(420,290,30); 
  launcherObject=new SlingShot(stoneObj.body,{x:420,y:290})
  balloon1 = new Balloon(100,100,10);
  balloon2 = new Balloon(200,100,10);
  balloon3 = new Balloon(300,100,10);
  balloon4 = new Balloon(400,100,10);
  balloon5 = new Balloon(500,100,10);
  balloon6 = new Balloon(600,100,10);
  balloon7 = new Balloon(700,100,10);
  


  Engine.run(engine);
}

function draw() {
  background("white");  
  Engine.update(engine);
  
  text("press space to throw again",40,20);
  
  ground.show();
  image(boy ,400,240,100,200);
  
  stoneObj.display();
  launcherObject.display();
  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  
  detectollision(stoneObj,balloon1);
  detectollision(stoneObj,balloon2);
  detectollision(stoneObj,balloon3);
  detectollision(stoneObj,balloon4);
  detectollision(stoneObj,balloon5);
  detectollision(stoneObj,balloon6);
  detectollision(stoneObj,balloon7);

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
launcherObject.fly();
 //  distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}


  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
      Matter.Body.setPosition(lmango.body, {x:3000,y:20});
    }

  }
  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(stoneObj.body, {x:420, y:290}) 
      launcherObject.attach(stoneObj.body);
    }
    }