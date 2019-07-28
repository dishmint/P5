// File: 100818

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,10)
  stroke(255)
  let r = random(0, (width/2))
  push()
  translate(width/2, height/2)
  rotate(frameCount)
  translate(-width/2, -height/2)
  for (var i = 0; i < 10; i++) {
    line(r,
    height/2,
    (r + (width/2)),
    height/2)
  }
  pop()
}
