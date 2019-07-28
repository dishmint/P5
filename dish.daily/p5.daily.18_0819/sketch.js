// File: 081918

let r, g, z

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  // background(0)
  background(0,10)
  r = map(cos(frameCount * 0.01), -1, 1, 0, 255);
  g = map(sin(frameCount * 0.01), -1, 1, 0, 255);
  z = map(cos(frameCount * 0.01), -1, 1, 0, width);
  
  stroke(255)
  fill(r,g)
  ellipse(width/2, height/2, z, z)
}
