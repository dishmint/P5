// File: 101118

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  ellipseMode(CENTER)
  angleMode(DEGREES)
}


function draw(){
  background(0, 10)
  stroke(255)
  beginShape()
  for (var x = 0; x < width; x++) {
    vertex(x, (height) * cos(x * (frameCount * 0.9)))
  }
  endShape(CLOSE)
  
  
}
