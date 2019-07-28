// File: 091718

let scl

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  scl = width / 10
  
  
}


function draw(){
  background(0,20)
  push()
  noStroke()
  translate(width/2, height/2)
  rotate(4 * frameCount)
  beginShape()
  for (var i = 0; i < width/4; i+= scl) {
    for (var j = 0; j < height/4; j+= scl) {
      vertex(i, j)
    }
  }
  endShape(CLOSE)
  pop()
}
