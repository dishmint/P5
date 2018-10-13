// File: 100918

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
}


function draw(){
  background(0,50)

  let r = random(0, (width/2))
  push()
  translate(width/2, height/2)
  rotate(5 * frameCount)
  translate(-width/2, -height/2)
  
  beginShape()
  for (var i = 0; i < 10; i++) {
    stroke(255)
    strokeWeight(4)
    line(r,height/2,(r + (width/2)),height/2)
    stroke(0, 10)
    strokeWeight(4)

    rect(width/2, height/2, 50, 50)
  }
  endShape(CLOSE)
  pop()
}
