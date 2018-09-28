// File: 092818

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
}


function draw(){
  background(0,2)
  
  let fc = map(cos(frameCount * 0.01), -1, 1, width/100, width/2)
  /*
  // Uncomment to see it break in THE most beautiful way
  let fc2 = map(tan(frameCount * 0.01), -1, 1, 0, 20)
   comment out the let statement below
  */
  let fc2 = map(sin(frameCount * 0.01), -1, 1, 0, 20)
  
  push()
  translate(width/2, height/2)
  rotate(frameCount * 0.01)
  translate(-width/2, -height/2)
  stroke(255,0,115)
  noFill()
  rect(width/2, height/2, fc, fc, fc2)
  pop()
}
