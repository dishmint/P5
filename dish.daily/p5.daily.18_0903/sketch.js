// File: 090318

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
}


function draw(){
  background(0, 10)
  stroke(255)
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  line(0,0, (width/2) * (cos(frameCount * 0.01)), (width/2) * sin(cos(frameCount * 0.01)))
  stroke(255,0,0)
  line(0,0, (width/4) * (cos(frameCount * 0.01)), (width/4) * sin(cos(frameCount * 0.01)))
  pop()
}
