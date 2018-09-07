// File: 090618
let w
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  angleMode(DEGREES)
  
  w = width / 5
}


function draw(){
  
  background(0,2)
  stroke(255,0,0)
  noFill()
  push()
  translate(width/2, height/2)
  rotate(360 * cos(frameCount))
  line(0,0, w, w)
  rotate(-1 * 360 * cos(frameCount))
  rotate(360 * sin(frameCount))
  line(0,0, w, w)
  pop()
  
}
