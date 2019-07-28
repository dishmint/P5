// File: 092918

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
}


function draw(){
let r = map(cos(frameCount * 0.01), -1, 1, 0, 255)
let g = map(sin(frameCount * 0.01), -1, 1, 0, 255)
let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)

background(0,2)
// background(r,g,b,2)

noFill()
stroke(255 - r,255 - g,255 - b)
strokeWeight(5)
for (var i = 0; i < 10; i++) {
  push()
  translate(width/2, height/2)
  rotate(frameCount * 0.01 * (i + .5))
  translate(-width/2, -height/2)
  rect(width/2, height/2, (i + 1) * (width / 15), (i + 1) * (height / 15))
  pop()
}
}
