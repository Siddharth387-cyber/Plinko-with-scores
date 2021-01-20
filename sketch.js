const Engine = Matter.engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
  createCanvas(700,700);
  engine=Engine.create();
  world=Engine.create();
  ground=new Ground(width/2,height,width,20);


  for(var k=0;k<width;k=k+80){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10, divisions));
  }
  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=50;j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}