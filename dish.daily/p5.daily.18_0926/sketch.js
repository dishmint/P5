// File: 092618

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  rectMode(CENTER)

}


function draw(){
  background(0,2)
  
  let t = map(cos(frameCount * 0.01), -1, 1, 0, 1)
  
  push()
  translate(width/2, height/2)
  rotate((frameCount * 0.01))
  translate(-width/2, -height/2)
  stroke(255,0,135)
  strokeWeight(2.5)
  noFill()
  rect(width/2, height/2, width/4, height/4)
  pop()
  
  push()
  translate(width/2, height/2)
  rotate((frameCount * 0.01))
  scale(.5)
  noStroke()
  fill(255)
  let bzptx = bezierPoint((width/2) - (width/8),width/2,width/2,(width/2) - (width/8), t)
  let bzpty = bezierPoint((height/2) - (height/8),height/2,height/2,(height/2) + (height/8), t)
  
  ellipse(bzptx, bzpty, 5, 5)
  ellipse(bzpty, bzptx, 5, 5)
  stroke(255)
  line(bzpty, bzptx, bzptx, bzpty)
  ellipse(width - bzptx, width - bzpty, 5, 5)
  ellipse(height - bzpty, height - bzptx, 5, 5)
  stroke(255)
  line(width - bzpty, height - bzptx, width - bzptx, height - bzpty)
  
  line(bzptx, height - bzpty, width - bzptx, bzpty)
  ellipse(width - bzptx, bzpty, 5, 5)
  ellipse(bzptx, height - bzpty, 5, 5)

  line(width - bzptx, height - bzpty, bzptx, bzpty)
  ellipse(bzptx, bzpty, 5, 5)
  ellipse(width - bzptx, height - bzpty, 5, 5)
  
  pop()
}
