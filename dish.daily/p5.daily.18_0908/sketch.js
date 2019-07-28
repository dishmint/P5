// File: 090818

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,10)
  stroke(255)
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  quad(
    map(sin(frameCount * 0.01), -1, 1, 0, width),0,
    0,map(sin(frameCount * 0.01), -1, 1, 0, width),
    map(sin(frameCount * 0.01), -1, 1, 0, width), height,
    width,map(sin(frameCount * 0.01), -1, 1, 0, width)
  )
  pop()
}
