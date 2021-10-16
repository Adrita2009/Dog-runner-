var dog_running, dog_running_pic, ground1, ground2
var score = 0
var obstacles, obstaclesG
var PLAY = 0
var END = 1
var gameState = PLAY




function preload() {

  dog_running_pic = loadAnimation("dog1.png","dog2.png","dog3.png")

  obstacle1 = loadImage("Obstacle1.png");
  obstacle2 = loadImage("Obstacle2.png");
  obstacle3 = loadImage("Obstacle3.png");
  obstacle4 = loadImage("Obstacle4.png");
  obstacle5 = loadImage("Obstacle5.png");
  obstacle6 = loadImage("Obstacle6.png");
  obstacle7 = loadImage("Obstacle7.png");
  obstacle8 = loadImage("Obstacle8.png");
  obstacle9 = loadImage("Obstacle9.png");
  obstacle10 = loadImage("Obstacle10.png");
  obstacle11 = loadImage("Obstacle11.png");
}


function setup() {
  createCanvas(800,400);
  dog = createSprite(100, 300, 50, 50);
  dog.addAnimation("dog_running",dog_running_pic)
  dog.scale = 0.5

  obstaclesG = createGroup();

  ground1 = createSprite(0,350,800,10)
  ground2 = createSprite(800,350,800,10)

  dog.setCollider("rectangle",0,0,320,200);
  dog.debug = true


}

function draw() {
  background(211,211,211); 
  
  obstaclesG.velocityX = -6


  if(gameState === PLAY) {




    spawnObstacles()
  }

  drawSprites();



  
}


function spawnObstacles() {
  var rand = Math.round(random(1,11))
  switch(rand) {
    case 1: obstacles.addImage(obstacle1);
            break;
    case 2: obstacles.addImage(obstacle2);
            break;
    case 3: obstacles.addImage(obstacle3);
            break;
    case 4: obstacles.addImage(obstacle4);
            break;
    case 5: obstacles.addImage(obstacle5);
            break;
    case 6: obstacles.addImage(obstacle6);
            break;
    case 7: obstacles.addImage(obstacle7);
            break;
    case 8: obstacles.addImage(obstacle8);
            break;
    case 9: obstacles.addImage(obstacle9);
            break;
    case 10: obstacles.addImage(obstacle10);
            break;
    case 11: obstacles.addImage(obstacle11);
            break;
    case 12: obstacles.addImage(obstacle12);
            break;
    default: break;
  }
  
}