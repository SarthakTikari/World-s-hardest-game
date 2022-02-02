var wall1,wall2,wall3,wall4,wall5,topwall,bottomwall,wall6,wall7,wall8,wall9,wall10,dong,ding1,ding2,ding3,ding4,stpoint,enpoint;

function preload(){
  variable=loadSound("sounds/backgroundmusic.mp3")
}



function setup(){
  createCanvas(700,700)
  variable.play()
  wall1=createSprite(190,120,250,3)
  wall2=createSprite(190,260,250,3)
  wall3=createSprite(67,145,3,50)
  wall4=createSprite(67,235,3,50)
  wall5=createSprite(313,145,3,50)
  wall6=createSprite(313,235,3,50)
  wall7=createSprite(41,170,50,3)
  wall8=createSprite(41,210,50,3)
  wall9=createSprite(337,170,50,3)
  wall10=createSprite(337,210,50,3)
  wall11=createSprite(18,190,3,40)
  wall12=createSprite(361,190,3,40)
  stpoint=createSprite(41,190,45,40)
  enpoint=createSprite(340,190,45,40)
  dong=createSprite(40,190,15,15)
  ding1=createSprite(100,150,10,10)
  ding2=createSprite(150,230,10,10)
  ding3=createSprite(200,150,10,10)
  ding4=createSprite(250,230,10,10)

ding1.velocityY=8
ding2.velocityY=-8
ding3.velocityY=8
ding4.velocityY=-8

deaths=0


}

function draw(){
 
 


background("white")

ding1.shapeColor="red"
ding2.shapeColor="red"
ding3.shapeColor="red"
ding4.shapeColor="red"
dong.shapeColor="green"
stpoint.shapeColor="lightblue"
enpoint.shapeColor="lightblue"
ding1.bounceOff(wall2)
ding1.bounceOff(wall1)
ding2.bounceOff(wall1)
ding2.bounceOff(wall2)
ding3.bounceOff(wall2)
ding3.bounceOff(wall1)
ding4.bounceOff(wall2)
ding4.bounceOff(wall1)
if(keyDown("right")){
  dong.x=dong.x+7
}
if(keyDown("left")){
  dong.x=dong.x-7
}
if(dong.isTouching(ding1) || dong.isTouching(ding2) || dong.isTouching(ding3) || dong.isTouching(ding4)){
  dong.x=40
  deaths++
}
if(dong.isTouching(enpoint)){
  stroke(black)
  noFill()
  textSize(20)
  text("Won The Game!!!",350,350)
}





  drawSprites()
  stroke("red")
  noFill()
  textSize(20)
  text("Deaths: "+deaths,200,100)
}