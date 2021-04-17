var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var player1,player1_running;
var player2,player2_running;
var player3,player3_running;
var pinkgroup, yellowgroup,redgroup;


function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  player1_running = loadAnimation("opponents/opponent1.png");
  player2_running=loadAnimation("opponents/opponent5.png");
  player3_running=loadAnimation("opponents/opponent7.png");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  distance = distance + Math.round(getFrameRate()/50);
  path.velocityX = -(6+2*distance/150);
  pinkCyclist.velocityX= -(6+2*distance/150);
  yellowCyclist.velocityX= -(6+2*distance/150);
  redCyclist.velocityX= -(6+2*distance/150);
  
  
}

function draw() {
  background("white");
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  var select_oppPlayer = Math.round(random(1,3));
  
  if(World.frameCount % 150 == 0){
    if(select_oppPlayer == 1){
      pinkCyclist();
    } else if (select_oppPlayer == 2){
      yellowCyclist();
    } else {
      redCyclist();
    }
    
    
    }
  }
  if(gameState === END){
     
    if(mainCyclist.isTouching(pinkCyclist)){
      pinkCyclist.setEachVelocity(0);
      redCyclist.setEachVelocity(0);
      yellowCyclist.setEachVelocity(0);
      pinkCyclist.destroyEach();
      redCyclist.destroyEach();
      yellowCyclist.destroyEach();
    }
  }
}

function pinkCyclist(){
  player1 = createSprite(110,Math.round(random(50,250),10,10)) ;
  player1.scale = 0.08;
  player1.addAnimation("running",player1_running);
  player1.setLifetime=170;
  player1.velocityX= -2;
}
  function yellowCyclist(){
  player2 = createSprite(100,Math.round(random(250,50),10,10)) ;
  player2.scale = 0.08;
  player2.addAnimation("running",player2_running);
  player2.setLifetime=170;
  player2.velocityX = -2;
  }


  function redCyclist(){
  player3 = createSprite(100,Math.round(random(250,50),10,10)) ;
  player3.scale = 0.08;
  player3.addAnimation("running",player3_running);
  player3.setLifetime=170;
  player3.velocityX = -2;
  }




