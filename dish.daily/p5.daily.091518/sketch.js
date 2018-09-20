// File: 091518

let ellipseDiameter

let numThings

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  // angleMode(DEGREES)
  ellipseDiameter = 10
  numThings = 100
  
}


function draw(){
  background(0,5)

  let t = map(sin(frameCount * 0.01), -1, 1, 0, 1)


  push()
  translate(width/2, height/2)
  rotate(3 * frameCount)
  for (var i = 1; i <= numThings; i++) {
    push()
    let x = bezierPoint(ellipseDiameter, ellipseDiameter * i,(width - ellipseDiameter), (width - ellipseDiameter), t)
    
    let y = bezierPoint(ellipseDiameter, ellipseDiameter * i,(height - ellipseDiameter) * -(i/height), (height - ellipseDiameter), t)
  
    noStroke()
    fill(255)
    // ellipse(x,y,2 * ellipseDiameter,ellipseDiameter)
    pop()
    push()
    let x2 = bezierPoint(ellipseDiameter, ellipseDiameter * i,(width - ellipseDiameter), (width - ellipseDiameter), 1 - t)
    
    let y2 = bezierPoint(ellipseDiameter, ellipseDiameter * i,(height - ellipseDiameter) * -(i/height), (height - ellipseDiameter), 1 - t)
    
    stroke(255,10)
    line(x2,y2,2 * ellipseDiameter,ellipseDiameter)
    noStroke()
    fill(255)
    // ellipse(x2,y2,2 * ellipseDiameter,ellipseDiameter)
    

    pop()
    
    
    
  }
  for (var i = 1; i <= numThings; i++) {
    push()
    let x3 = bezierPoint(
      ellipseDiameter * i,
      ellipseDiameter,
      (width - ellipseDiameter),
      (width - ellipseDiameter), t)
    
    let y3 = bezierPoint(
      ellipseDiameter * i,
      ellipseDiameter,
      (height - ellipseDiameter),
      (height - ellipseDiameter) * -(i/height), t)
  
    pop()
    push()
    let x4 = bezierPoint(ellipseDiameter * i,
    ellipseDiameter,
    (width - ellipseDiameter),
    (width - ellipseDiameter), 1 - t)
    
    let y4 = bezierPoint(ellipseDiameter * i,
    ellipseDiameter,
    (height - ellipseDiameter),
    (height - ellipseDiameter) * -(i/height), 1 - t)

    noStroke()
    stroke(0,0,0,10)
    line(x3,y3,2 * ellipseDiameter,ellipseDiameter/4)
    pop()

    
    
  }

  pop()
}
