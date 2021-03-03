
var gameState=0;
var contestantCount;
var database;

var allPlayers;
//var question;
//var contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz1 = new quiz();
  quiz1.getState();
  quiz1.start();
}


function draw(){
  background("pink");

  
}
