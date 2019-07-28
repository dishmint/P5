// File: 102318

function setup(){
  createCanvas(400,400);
  background(0);
  pixelDensity(displayDensity());
  
}


function draw(){
  background(0,5);
  push();
  translate(width/2, height/2);
  rotate(0.05 * frameCount);
  translate(-width/2, -height/2);
  
  noStroke();
  fill(255, 0, 135);
  text("W . O . L . F . R . A . M", width/2, height/2);
  pop();
}
