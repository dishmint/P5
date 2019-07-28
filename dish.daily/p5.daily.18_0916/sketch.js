// File: 091618

let ellipseDiameter

let numThings

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  ellipseDiameter = 10
  numThings = 100
  
}


function draw(){
  background(0,2)
  // background(0,5)

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
    ellipse(x,y,2 * ellipseDiameter,ellipseDiameter)
    pop()
    push()
    let x2 = bezierPoint(ellipseDiameter, ellipseDiameter * i,(width - ellipseDiameter), (width - ellipseDiameter), 1 - t)
    
    let y2 = bezierPoint(ellipseDiameter, ellipseDiameter * i,(height - ellipseDiameter) * -(i/height), (height - ellipseDiameter), 1 - t)
    
    // stroke(255,10)
    noStroke()
    fill(255)
    ellipse(x2,y2,2 * ellipseDiameter,ellipseDiameter)
    

    pop()
    
    
    
  }


  pop()
}
