// File: 082818

let bx = 50
let dir = 1

let alphamod
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  alphamod = map(sin(frameCount * 0.01), -1, 1, 5, 10)
  background(0, alphamod)
  // background(0,1)
  // background(0,10)
  bx += dir

  
  
  push()
  let xA = cos(frameCount * 0.01)
  let yA = sin(frameCount * 0.01)
  strokeWeight(5)
  
  stroke(255,0,0)
  fill(255,0,0)

  line(
    map(yA, -1, 1, height - 30, 30),
    map(xA, -1, 1, width - 30, 30),
    width/2,
    bx)
  
  line(
    map(yA, -1, 1,30,height - 30),
    map(xA, -1, 1, width - 30, 30),
    width/2,
    bx)
  
  line(
    map(yA, -1, 1,height - 30,30),
    map(xA, -1, 1,30,width - 30),
    width/2,
    map(bx, 0, width, width, 0))
    
  line(
    map(yA, -1, 1,30,height - 30),
    map(xA, -1, 1,30,width - 30),
    width/2,
    map(bx, 0, width, width, 0))
    
  
  
  ellipse(map(xA, -1, 1, 15, width - 15), map(yA, -1, 1, 15,height - 15), 15,15)
  ellipse(map(xA, -1, 1, width - 15, 15), map(yA, -1, 1, height - 15, 15), 15,15)
  pop()
  
  
  push()
  stroke(255)
  fill(255)
  ellipse(width/2, height/2, 30 * yA,30 * yA)
  pop()
  
  
  
  if (bx > width - 45 || bx < 45) {
    dir *= -1
  }
  
}
