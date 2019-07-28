// File: 083118

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  angleMode(DEGREES)
}


function draw(){
  background(0,10)
  stroke(255)
  noFill()
  push()
  translate(width/2, height/2)
  beginShape()
  for (let i = 0; i < 360; i+=30) {
    let x = (width/2) * cos(i)
    let y = (width/2) * sin(i)
    
    let adjx = i * cos(frameCount)
    let adjy = i * sin(frameCount)
    vertex(x * adjx,y + adjy)
  }
  endShape(CLOSE)
  pop()
}
