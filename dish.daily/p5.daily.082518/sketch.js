// File: 082518

let adjX, adjY
let index = 0
let step = 30

let dir = 1
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  angleMode(DEGREES)
}


function draw(){
  step +=dir
  
  background(0,10)
  adjX = cos(frameCount)
  adjY = cos(frameCount)
  
  stroke(255)
  push()
  translate(width/2,height/2)
  noFill()
  beginShape()
  for(let i = 0; i < 360; i+=step)  {
    let x = (100 * cos(i)) + adjX
    let y = (100 * sin(i)) + adjY
    vertex(x,y)
    ellipse(x*.5,y*.5,1,1)
  }
  endShape(CLOSE)
  pop()
  
  stroke(255,0,0)
  push()
  translate(width/2,height/2)
  noFill()
  beginShape()
  for(let i = 0; i < 360; i+=step)  {
    let x = (-100 * cos(i)) + adjX
    let y = (-100 * sin(i)) + adjY
    vertex(x,y)
    ellipse(x*.5,y*.5,1,1)
  }
  endShape(CLOSE)
  pop()
  
  
  
  if (step > 360) {
    step = 30
  }
}
