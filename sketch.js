var girl,backgroundImage,girlImage,schoolImage,obstacle1,obstacle2,obstacle3,obstacle4,road,canvas;


function preload(){
backgroundImage = loadImage("bg.jpg");
girlImage = loadAnimation("girl1.png","girl2.png");
schoolImage = loadImage("school.png");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
road = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
road.addImage(backgroundImage);
road.scale = 2;

road.velocityX = -2;

girl = createSprite(100,300);
girl.addAnimation("g",girlImage);
    
    }
    


   
    

    

function draw(){
   background(0);

if(road.x<0){
    road.x = width/2
}
if(keyDown("UP_ARROW")){
    girl.y -=2;
}
if(keyDown("DOWN_ARROW")){
    girl.y +=2;
}
if(keyDown("RIGHT_ARROW")){
    girl.x +=2;
}
spawnObstacles();

drawSprites();
}

function spawnObstacles(){
if(frameCount%150===0){
obstacle1 = createSprite(1100,Math.round(random(300,500)))
obstacle1.velocityX -= 2;
obstacle1.lifetime = 1000;
}
}



