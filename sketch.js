var monkey , monkey_running;
var banana , bananaImage, obstacle, obstacleImage;
var gound;

var FoodGroup, obstacleGroup;

var survivalTime = 0;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}


function setup() {
  createCanvas(600,400);
  
  ground = createSprite(100, 300 ,1200,10);
  ground.visible = true;
    
  monkey = createSprite(100, 250, 20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.4/3;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  //Background colour
  background("white");
    
  //monkey collision with invisible ground
  monkey.collide(ground);
  
  //Jump command
  if (keyDown("space") && monkey.y > 100){
    monkey.velocityY = -12;
}
  
  //Monkey velocity
  monkey.velocityY = monkey.velocityY + 0.9;
  
  //Ground movement
  if (ground.x < 0){
    ground.x = ground.x / 2;
}
  
  if (foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
}
  
  //Ground velocity
  ground.velocityX = -2 
      
  //SurvivalTime
  stroke("white");
  textSize = 20;
  fill("black");
  text("SurvivalTime: " + survivalTime, 50, 50);
  survivalTime = Math.round(frameCount/frameRate());
  
  food();
  
  Obstacle();

  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,200,20,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    
    banana.velocityX = -7; 
    banana.y = Math.round(random(10,170));
    
    banana.lifeTime = 200;
    
    foodGroup.add(banana);
  }
}

function Obstacle(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(620,200,40,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.y = 260;
    
    obstacle.velocityX = -7; 
    
    obstacle.lifeTime = 200;
    obstacleGroup.add(obstacle);
  }
}