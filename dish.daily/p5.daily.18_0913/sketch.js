// File: 091318

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  if (frameCount % 60 == 0) {
    background(0)
  } else {
    background(0,50)
  }
  
  push()
  translate(width/2,height/2)
  let bPt = bezierPoint(0, (height/8) * sin(frameCount * 0.01), (height/8) * sin(frameCount * 0.01), height/2, cos(frameCount * 0.01))
  rotate(frameCount/3)
  stroke(255)
  beginShape()
  vertex(0, 0)
  vertex(width/2, bPt)
  vertex(bPt, width/2)
  endShape(CLOSE)
  pop()
}
