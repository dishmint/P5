// File: 091018

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  // angleMode(DEGREES)
}


function draw(){
  background(0,2)
  push()
  angleMode(RADIANS)
  translate(width/2, height/2)
  rotate(50 * frameCount)
  let normSin = map(sin(frameCount * 0.01), -1, 1, 0, 1)
  let x1 = bezierPoint(0,0,0,0,normSin)
  let y1 = bezierPoint(0,height/4, height/4, height/2, normSin)
  let x2 = bezierPoint(width,width,width,width, normSin)
  let y2 = bezierPoint(0,height/4, height/4, height/2, normSin)
  
  stroke(255,0,0)
  beginShape()
  vertex(x1/4, y1/4)
  vertex(x2/4, y2/4)
  endShape()
  pop()
}
