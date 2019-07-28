// File: 100618

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  // frameRate(12)
}


function draw(){
  // background(0)
  background(0,10)
  noStroke()
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  translate(-width/2, -height/2)
  for (var i = 0; i < 200; i++) {
    fill(255,15,25)
    let x = random((width/4), width - (width/4))
    let y = random((height/4), height - (height/4))
    ellipse(x,y, 10, 10)
  }
  pop()
}
