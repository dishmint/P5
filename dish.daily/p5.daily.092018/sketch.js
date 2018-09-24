// File: 092018

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  
}


function draw(){
  background(0, 0, 230,1)
  strokeWeight(5)
  push()
  noFill()
  translate(width/2, height/2)
  rotate( (-frameCount * .01))
  stroke(255,0,25)
  line(width/16, height/16, -width/16, -height/16);
  pop()
  
  push()
  noFill()
  stroke(255,0,25)
  translate(width/2, height/2)
  rotate( (-frameCount * .01))
  line((width/8) + 25, (height/8) + 25, (width/2), (height/2));

  ellipse(width/8, height/8, 50, 50);
  noStroke()
  fill(255,10)
  ellipse(width/8, height/8, 25, 25);
  stroke(0)
  line(width/8, height/8, 50, 50);
  pop()
  
  
}
