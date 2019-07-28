// File: 072718

let x = 0

function setup() {
  createCanvas(400, 400)
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  // background(0, 0)
  background(0, 10)
  
  // STATIC SHAPES
  noFill()
  stroke(255)
  rect(width / 2, height / 2, 50, 50)
  
  line(width / 2 - 25, height / 2 - 25, 0, 0)
  line(width - (width / 2 - 25), height / 2 - 25, 0, 0)
  
  line(width - (width / 2 - 25), height - (height / 2 - 25), width, height)
  line((width / 2 - 25), height - (height / 2 - 25), width, height)
  
  
  // FILLER
  x++
  stroke(255,0,0)
  line(map(cos(x), -1, 1, 0, width), 0, map(cos(x), -1, 1, 0, width),  (map(cos(x), -1, 1, 0, height)))
  
  stroke(0,0,255)
  line(map(sin(x), -1, 1, (width/2 - 25), (width/2 + 25)), height/2 - 25, map(sin(x), -1, 1, (width/2 - 25), (width/2 + 25)), height/2 + 25)
  
  stroke(0,255,0)
  line(map(cos(x), -1, 1, 0, width), map(cos(x), -1, 1, 0, height), map(cos(x), -1, 1, 0, width), height)
}
