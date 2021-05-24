var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="red"
  movingRect=createSprite(1000, 200, 80, 30);
  movingRect.shapeColor="red";
 fixedRect.debug=true;
 movingRect.debug=true;
movingRect.velocityX=-5;
fixedRect.velocityX=5;

}

function draw() {
  background(255,255,255);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
movingRect.velocityX=movingRect.velocityX*-1;
fixedRect.velocityX=fixedRect.velocityX*-1;

}

  /*if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
fixedRect.shapeColor="yellow";
movingRect.shapeColor="yellow"
}
  else{
    fixedRect.shapeColor="red";
movingRect.shapeColor="red"
  }*/
  drawSprites();
}