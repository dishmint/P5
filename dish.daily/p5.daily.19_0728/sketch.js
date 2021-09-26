let vex

function setup(){
  createCanvas(windowWidth/2,windowWidth/2)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
  ellipseMode(CENTER)
  noCursor()
  angleMode(DEGREES)
  
}

function draw(){
  extern(0, 'white')
  noFill()
  stroke(255, 0, 0)
  
  for (var i = 0; i < 25; i++) {
    translate(width/2, height/2)
    rotate(frameCount)
    ellipse(cos(frameCount * 0.01), sin(frameCount) * height/2, 50, 10)
    translate(-width/2, -height/2)
  }
}

function extern(bgclr, strclr){
  // background(bgclr, 25)
  background(bgclr)
  push()
  stroke(strclr)
  noFill()
  rect(width/2, height/2, width - 2, height - 2)
  pop()
}
