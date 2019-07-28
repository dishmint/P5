// File: 072018_2

let x = 0
let xDelta

function setup(){
  createCanvas(400,400)
  background(0)
  angleMode(DEGREES)
  rectMode(CENTER)
}


function draw(){
  background(0,0)
  // background(0,10)
  // background(0,15)
  xDelta = bezierPoint(0,width/4,width - width/4,width,sin(x))

  stroke(255,0,0,abs(255 * sin(x)))
  noFill()
  rect(xDelta, height/2, abs(100 * sin(x))+ random(-100,100),abs(100 * sin(x)) + random(-100,100))
  stroke(255,0,0,abs(255 * sin(x)))
  // stroke(0,68,170)
  noFill()
  rect(width - xDelta, height/2, abs(100 * sin(x))+ random(-100,100),abs(100 * sin(x)) + random(-100,100))
  // rect(width - (xDelta + (10 * sin(x))), height/2, abs(100 * sin(x)),abs(100 * sin(x)))


  stroke(0,68,170,abs(255 * sin(x)))
  noFill()
  rect(width/2, height - xDelta, abs(100 * sin(x)) + random(-100,100),abs(100 * sin(x)))
  // rect(width/2, height - (xDelta + (10 * sin(x))), abs(100 * sin(x)),abs(100 * sin(x)))

  stroke(0,0,255,abs(255 * sin(x)))
  noFill()
  rect(width/2, xDelta, abs(100 * sin(x)) + random(-100,100),abs(100 * sin(x)))


  x+= 0.1
}
