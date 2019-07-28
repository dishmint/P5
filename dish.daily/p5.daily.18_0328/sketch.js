// File: 032818

// Explore circle rotation


let change = 0
let dir = 1


function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){
  push()
  stroke('tomato')
  noFill()
  ellipse(width/2, height/2, (width/4) - change, height/4)
  pop()
  
  change ++
  if (change > (width - (width / 4)) || change < width/4) {
    dir *= -1
  }
  
}
