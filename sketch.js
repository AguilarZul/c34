const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;

function preload(){
  backgroundImg = loadImage("background.png");
  fruit=loadImage("melon.png");
  //6° Muestra la imagen de la canasta
  g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge1:
  //1° crea el cuerpo ball - pelota usando un circulo
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//challenge 2
//2° encuentra los parametros que deben introducirse al constructor
  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

// sentrar la imagen en el tamaño de el objeto
  imageMode(CENTER)
// creando objeto y especificando sus atributos
  image(fruit ,ball.position.x,ball.position.y,40,40);
// creando la imagen de la canasta
  image(g,450,270)

  slingShot.display();
}
//3° declara el valos de set position
// para hacer que la fruta se mueva
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
//4° crea una funcion para mouseRelease()
function mouseReleased(){
  slingShot.fly();

}
