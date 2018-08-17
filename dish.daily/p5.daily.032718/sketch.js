// File: 032718

// Today's daily is all about line rotation

let leftLim
let rightLim

let angle = 0

function setup() {
  createCanvas(400, 400)
  background(0)
  pixelDensity(displayDensity())

  angleMode(DEGREES)
  leftLim = width / 4
  rightLim = width - leftLim
}

function draw() {
  background(0, 20)
  angle++


  push()
  stroke(255)
  translate(width / 2, height / 2)
  rotate(angle % 360)
  translate(-width / 2, -height / 2)
  line(leftLim, height / 2, rightLim, height / 2)
  pop()

  push()
  stroke('tomato')
  translate(width / 2, height / 2)
  rotate(-angle % 360)
  translate(-width / 2, -height / 2)
  line(leftLim, height / 2, rightLim, height / 2)
  pop()
}
