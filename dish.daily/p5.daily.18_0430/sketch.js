// File: 043018

let n = 0
let dir = 1

function setup() {
  createCanvas(400, 400);
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  background(0, 10)
  stroke(255)
  noFill()
  translate(width / 2, height / 2)
  rotate(n)
  translate(-width / 2, -height / 2)
  rect(width / 2, height / 2, 200, 200)

  n += dir
  if (n > 360) {
    dir *= -1
  }
}
