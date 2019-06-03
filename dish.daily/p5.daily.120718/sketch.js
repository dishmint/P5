// File: 120718

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  background(0,10)
  translate(width/2, height/2)
  rotate(frameCount * 0.01)
  translate(-width/2, -height/2)
  stroke(255, 16, 39, 150)
  let something = map(sin(frameCount * 0.01), -1, 1, 1, 10)
  strokeWeight(something)
  line(0,0, width, height)
  
  stroke(255, 16, 39, 50)
  line(width,0, 0, height)
  
  noStroke()
  fill(map(something, 1, 10, 0, 255))
  ellipse(width/2, height/2, 50, 50)
}
