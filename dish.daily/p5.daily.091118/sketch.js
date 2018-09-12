// File: 091118

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,5)
  stroke(255,0,0)
  strokeWeight(5)
  noFill()
  push()
  translate(width/2, height/2)
  rotate(frameCount * 0.01)
  let x = map(cos(frameCount * 0.01), -1, 1, 0, width/5)
  let y = map(sin(frameCount * 0.01), -1, 1, 0, height/5)
  arc(x,y, width/2, height/2, 0 + x, HALF_PI + y, CHORD)
  pop()
  
}
