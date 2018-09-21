// File: 091818

let r,g,b,x,y,x2,y2
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  rectMode(CENTER)
}


function draw(){
  r = map(cos(frameCount * 0.01), -1, 1, random(0,100), random(101,255))
  g = map(sin(frameCount * 0.01), -1, 1, random(0,100), random(101,255))
  b = map(tan(frameCount * 0.01), -1, 1, random(0,100), random(101,255))
  fill(r,g,b, 10)
  rect(width/2, height/2, 50,50)
  
  x = map(cos(frameCount * 0.01), -1, 1, 25, width - 25)
  y = map(sin(frameCount * 0.01), -1, 1, 25, height - 25)
  noStroke()
  fill(255 - r, 255 - g, 255 - b)
  ellipse(x,y,50,50)
  
  x2 = map(cos(frameCount * 0.01), -1, 1,width - 25, 25)
  y2 = map(sin(frameCount * 0.01), -1, 1, height - 25, 25)
  noStroke()
  fill(255 - r, 255 - g, 255 - b)
  ellipse(x2,y2,50,50)
}
