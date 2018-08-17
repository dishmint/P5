// File: 032518

let change = 0
let dir = 1

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())

  rectMode(CENTER)
}


function draw(){
  background(0)

  push()
  rect(width/2, height/2, width/4, height/4)
  pop()

  stroke(255)
  line(width/4, height/2, width - width/4, height/2)

  push()
  stroke('tomato')
  line(width/4, height/2 - change, width - width/4, height/2)
  pop()
  change += dir
  if (change > height || change < 0) {
    dir *= -1
  }
}
