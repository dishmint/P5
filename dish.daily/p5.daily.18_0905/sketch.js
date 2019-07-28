// File: 090518

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  background(0)
  
  
  stroke(255,0,0)
  strokeWeight(abs(10 * cos(frameCount * 0.1)))
  noFill()
  push()
  translate(width/2, height/2)
  rotate(-frameCount)
  ellipse(0,0, (width/2) * cos(frameCount * 0.01),(width/2))
  pop()
  
}
