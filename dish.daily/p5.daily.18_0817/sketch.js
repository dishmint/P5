// File: 081718

let x = 0

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
}


function draw(){
  background(0, 25)
  noStroke()
  strokeWeight(3 * cos(x))
  fill('lime')
  rect(width/2, height/2, map(cos(x), -1, 1, 10, width/2),map(sin(x), -1, 1, 10, width/2))
  
  x ++
  
  if (x > width) {
    x = 0
  }
}
