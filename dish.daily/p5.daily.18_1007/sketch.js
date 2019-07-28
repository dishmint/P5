// File: 100718

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  translate(width/2, height/2)
  rotate(1.234 * frameCount)
  translate(-width/2, -height/2)
  stroke(255, 150)
  line(0,0, width, height)
  ellipse(width/2,height/4, 10,10)
  ellipse(width/4,height/8, 10,10)
  ellipse(width/2,height/2.5, 10,10)
  
}
