// File: 091918
let x,y,c
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  background(0,2)
  x = map(cos(frameCount * 0.01), -1, 1, 10, width - 10)
  y = map(sin(frameCount * 0.01), -1, 1, 10, height - 10)
  c = map(tan(frameCount * 0.01), -1, 1, 10, width - 10)
  
  push()
  stroke('lime')
  strokeWeight(10)
  line(- x,y,x,y)
  pop()
  
  push()
  translate(width/4, height/4)
  noStroke()
  fill('tomato')
  ellipse(x/2, y/2, 10,10)
  pop()

}
