// File: 101518

let x1,y1,x2,y2

let val = 1

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  ellipseMode(CENTER)
  angleMode(DEGREES)
  
  
  x1 = 0
  y1 = 0
  x2 = 0
  y2 = 10
}


function draw(){
  background(0, 10)
  strokeWeight(2)
  push()
  translate(width/2, 0)
  
  if (frameCount % 2 == 0) {
    let angle = 10 * val
    rotate(angle / (frameCount % 90))
    val *= -1
    
    y1 += 10
    y2 += 10
  }
  
  if (y2 > height) {
    y1 = 0
    y2 = 10
  }
  stroke(255)
  line(x1, y1, x2, y2)

  stroke(255, 0, 0, 125)
  
  line(x1 + random(-10, 10), y1 + random(-10, 10), x2 + random(-10, 10), y2 + random(-10, 10))
  pop()
  
}
