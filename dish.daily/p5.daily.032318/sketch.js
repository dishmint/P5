// File: 032318

let change = 0
let direction = 1
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())

  rectMode(CENTER)
}


function draw(){
  background(0,20)
  // background(0,50)
  push()
  stroke(255,0,0)
  noFill()
  rect(width/2,height/2, width-1,height-1)
  pop()

  push()
  stroke(255)
  noFill()
  rect(width/2,height/2, width-change,height-change)
  pop()
  change += direction
  if (change > width || change < 0 || change > height) {
    direction *= -1
  }
}
