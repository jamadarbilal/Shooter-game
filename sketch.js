const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Visblity;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    g2 = new Ground(800,400,2000,30);
    b = new Box(100,100,30,30);
    g = new Ground(390,260,200,10);
    b1 = new Box(330,235,30,40);
    b2 = new Box(360,235,30,40);
    b3 = new Box(390,235,30,40);
    b4 = new Box(420,235,30,40);
    b5 = new Box(450,235,30,40);
    b6 = new Box(390,195,30,40);
    b7 = new Box(360,195,30,40);
    b8 = new Box(420,195,30,40);
    b9 = new Box(390,155,30,40);

    sling = new SlingShot(b.body,{x:190, y:50});
   
}

function draw(){
  background("pink");
  Engine.update(engine);
  b1.display(); 
  b2.display(); 
  b3.display(); 
  b4.display(); 
  b5.display(); 
  b6.display(); 
  b7.display(); 
  b8.display(); 
  b9.display(); 
  b.display();
  g.display();
  sling.display();
g2.display();
  

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(b.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32 && b.body.speed < 1){       
     
     Matter.Body.setPosition(b.body,{x:200,y:50});
     sling.attach(b.body);
  }
}