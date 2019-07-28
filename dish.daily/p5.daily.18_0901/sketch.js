// File: 090118
let scl = 20
let spacing
let stepY
let lweight

let stepX
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  spacing = width / scl
  
  stepY = height - 1
  lweight = 5
  stepX = lweight
  
}


function draw(){
  
  background(0,2)
  if (frameCount % 1 == 0) {
    stepY -= spacing
    stepX += (spacing + lweight)
    if ((stepX) > (width + spacing) - lweight ) {
      stepX = lweight
    }
  }
  push()
  stroke(255)
  strokeWeight(lweight)
  line(stepX, stepY - lweight , spacing + stepX, stepY - lweight)
  
  pop()
  
  if (stepY < spacing) {
    stepY = height - 1
  }
}
