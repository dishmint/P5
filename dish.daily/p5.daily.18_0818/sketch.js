// File: 081818

let x = 0

let multiplier = 10

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  background(0,multiplier)
  
  push()
  
  stroke(255)
  for (let i = 1; i <= x; i++) {
    noFill()
    ellipse(width/2, height/2, multiplier * i, multiplier * i)
  }
  pop()
  
  x ++
  
  if (multiplier * x > width) {
    x = 0
  }
  
}
