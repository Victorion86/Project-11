var jaxxon, jaxxonImage, road, roadImage

function preload(){
  //pre-load images

  jaxxonImage = loadAnimation("Runner-1.png", "Runner-2.png");

  roadImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  road = createSprite(200, 200); 
  road.addImage(roadImage);
  road.velocityY = 4;

  jaxxon = createSprite(150, 340, 40, 40); 
  jaxxon.scale = 0.1;
  jaxxon.addAnimation("moving jaxxon", jaxxonImage);
}

function draw() {
  background(0);

  jaxxon.x = World.mouseX;

  if(road.y > 400) {

    road.y = road.height/2

  }

  drawSprites();
}
