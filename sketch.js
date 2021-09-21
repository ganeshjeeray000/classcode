
var backgroundImage, bgImg, car1_img, car2_img, track;
var db;
var form, player, playerCount,game;
var gameState;
var car1,car2;
var cars;
var carImg,car2Img;
var trackImg;
var  allPlayers;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  

  car1Img = loadImage("assets/car1.png");
  car2Img = loadImage("assets/car2.png");
  trackImg = loadImage("assets/track.jpg");





}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw()
 {
  background(backgroundImage);
   
  if(playerCount === 2)
 {
   game.updateState(1);
 }
 
 if(gameState === 1)
{
  game.play();
}


}

  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
