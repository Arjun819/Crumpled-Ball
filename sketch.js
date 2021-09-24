
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var post1
var post2
var ground

var ball

function setup() {
	createCanvas(800, 610);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Post(400,600,1000,20,"Yellow")
	post1 =new Post(700,550,10,100,"Yellow")
	post2 =new Post(500,550,10,100,"Yellow")

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(50,200,20,ball_options);
  World.add(world,ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);

  Engine.update(engine)

  fill(255)
  ellipse(ball.position.x,ball.position.y,20);

  post1.show()
  post2.show()
  ground.show()

  Engine.update(engine)
  keyPressed()
  drawSprites();
}
function keyPressed(){
  if(keyDown("space") || keyDown("up")){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:25,y:150});
  }
}



