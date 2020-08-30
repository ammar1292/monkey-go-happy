var monkey,banana,bg,bg1;
var b,ob,obstaclegroup,m;
var score;
//var ball,img,paddle,paddle;

function preload(){

  bg1=loadImage("jungle.jpg");
  b=loadImage("banana.png");
  ob=loadImage("stone.png");
  m=loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
}
function setup() {
  createCanvas(400, 400);
  
monkey=createSprite(200,200,10,10);
 monkey.addAnimation(m);
  
  
  bg=createSprite(350,200,10,50);
  bg.addImage(bg1);
  
 // b=createSprite(350,200,10,50);
 
}

function draw() {
  
  background(220);
}