
var score = 0

function preload(){
backgroundImg = loadImage("Background.jfif")
bottleImg= loadImage('bottle steel.jpeg')
plasticbottleImg=loadImage("plastic bootle.jpg")
}

function setup() {
  createCanvas(800,400);
  
  
  stand1 = createSprite (390,300,250,10);

 bottle =createSprite(100, 200, 50, 50);
 bottle.addImage(bottleImg)
 bottle.scale = 0.2

 plasticbottle = createSprite(390,270,50 ,10)
 plasticbottle.addImage(plasticbottleImg)
 plasticbottle.scale = 0.3
 
 plasticbottle2 = createSprite(400,200,50 ,10)
 plasticbottle2.addImage(plasticbottleImg)
 plasticbottle2.scale = 0.3
 
 plasticbottle3 = createSprite(350,270,50 ,10)
 plasticbottle3.addImage(plasticbottleImg)
 plasticbottle3.scale = 0.3
 
 
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  text("press the space button  to change bottles",210,42)
  fill("white")
  
text("score:"+ score,208,60)
}

function keyPressed(){
  if(keyCode === 32){
    plasticbottle.addImage(bottleImg)
    plasticbottle2.addImage(bottleImg)
    plasticbottle3.addImage(bottleImg)
    score=+1

if(score = 3){
text("yay you have saved enviorment",130,34)
GameState= END
}

  }
}