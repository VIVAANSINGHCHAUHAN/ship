var sea 
var ship

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(1200,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -2;

  ship = createSprite(400,250);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  if(sea.x< 0){
    sea.x = sea.width/2;
  }
  drawSprites()
}