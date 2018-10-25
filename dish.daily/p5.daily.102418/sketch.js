// File: 102418

let pt
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  pt = createVector(width/2, height/2)
  ellipseMode(CENTER)
}


function draw(){
  background(0, 10)
  stroke(255, 50)
  // noFill()
  fill(255, 20)
  push()
  translate(width/2, height/2)
  ellipse(pt.x, pt.y, random(width/40), random(width/40))
  
  pt = p5.Vector.random2D().mult((width/2) * sin(frameCount * 0.01))
  pop()
}
