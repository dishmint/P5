// File: 090418

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  v1()
  
  // v2()
}


function v1(){
  background(0,10)
  stroke(255)
  noStroke()
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  ellipse(0,0, (width/2) * cos(frameCount * 0.01),width/2)
  pop()
}


function v2() {
  background(0,10)
  noStroke()
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  fill(random(255),0,0)
  
  ellipse(0,0, (width/2) * cos(frameCount * 0.01),(width/2) * sin(frameCount * 0.01))
  pop()
}
