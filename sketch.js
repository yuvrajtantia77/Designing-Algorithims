var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(600,400,50,80);
  fixedRectangle.shapeColor="green"
  movingRectangle=createSprite(400,200,80,30);
  movingRectangle.shapeColor="green"
}

function draw() {
  background("black");  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.width/2+movingRectangle.width/2){
    movingRectangle.shapeColor="red"
    fixedRectangle.shapeColor="red"
  }
  else{
    movingRectangle.shapeColor="yellow"
    fixedRectangle.shapeColor="yellow"
  }
  drawSprites();
}
