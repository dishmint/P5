// File: 101218

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  ellipseMode(CENTER)
}


function draw(){
  background(0,10)
  // background(0,2)
  let x = cos(frameCount * 0.01)
  let y = sin(frameCount * 0.01)
  translate(width/2, height/2)
  rotate(frameCount * 0.1)
  translate(-width/2, -height/2)
  strokeWeight(4)
  stroke(255, 25, 12)
  line((width/ 4) * x, (height/ 4) * y, width - x, width - y)
}
