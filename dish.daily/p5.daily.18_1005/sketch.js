// File: 100518

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,2)
  stroke(255, 25)
  // stroke(255)
  // stroke(255, 10)
  noFill()
  
  push()
  translate(width/2, height/2)
  rotate( .01 * frameCount)
  scale(.8)
  translate(-width/2, -height/2)
  beginShape()
  vertex(width/9,height/9)
  vertex(width/3.5,height/4.7)
  vertex(width/2.26,height/4.7)
  vertex(width/9.25,height/2.37)
  vertex(width - width/9,width - height/9)
  vertex(width - width/3.5,width - height/4.7)
  vertex(width - width/2.26,width - height/4.7)
  vertex(width - width/9.25,width - height/2.37)
  endShape(CLOSE)
  stroke(255,12)
  line(width/2, 0, width/2, height)
  pop()
}
