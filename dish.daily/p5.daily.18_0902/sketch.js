// File: 090218

let spacing
let scl

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  rectMode(CENTER)
  angleMode(DEGREES)
  
  scl = 10
  spacing = width/scl
}


function draw(){
  background(0,5)
  
  for (var i = 0; i < width; i+=spacing) {
    push()
    translate(width/2, height/2)
    noFill()
    strokeWeight(5)
    rect(0, 0, i,i)
    rotate(frameCount)
    stroke(255)
    strokeWeight(2)
    ellipse(0 + 10 * cos(i), 0 + 10 * sin(i), i,i)
    pop()
  }
}
