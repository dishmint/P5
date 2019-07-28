// File: 090718

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  // background(0,2)
  background(0,1)
  stroke(255)
  push()
  translate(width/2, height/2)
  // rotate(5*frameCount)
  // rotate(4*frameCount)
  // rotate(3*frameCount)
  rotate(2*frameCount)
  let x1 = map(cos(frameCount * 0.01), -1, 1, 0, width)
  let y1 = map(sin(frameCount * 0.01), -1, 1, 0, height)
  let x2 = map(cos(frameCount * 0.01), -1, 1, 0, width)
  let y2 = map(sin(frameCount * 0.01), -1, 1, 0, height)
  let x3 = map(cos(frameCount * 0.01), -1, 1, 0, width)
  let y3 = map(sin(frameCount * 0.01), -1, 1, 0, height)
  let x4 = map(cos(frameCount * 0.01), -1, 1, 0, width)
  let y4 = map(sin(frameCount * 0.01), -1, 1, 0, height)
  
  quad(
    x1/3,y1/3,
    x2/3,y2/3,
    x3/3,y3/3,
    x4/3,y4/3)

  quad(
    x1/10,y1/10,
    x2/10,y2/10,
    x3/10,y3/10,
    x4/10,y4/10)
    
  pop()
  }
