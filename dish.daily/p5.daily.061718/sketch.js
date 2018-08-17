// File: 061718
let x
let y
let w

let startingWidth
function setup() {
  createCanvas(400, 400)
  background(0)
  rectMode(CENTER)

  // startingWidth = width / 5
  startingWidth = width / 10
  // startingWidth = width / 30
  x = startingWidth
  y = x
  w = x

  frameRate(startingWidth/2.5)
}

function draw() {
  background(0, startingWidth)
  // Have blocks of rectangles pop in and out in sequence
  noStroke()
  let clr = color(255, map(y, w, height - w, (255/startingWidth), 255), map(2*x, 2*w, 2*(width - w), (255/startingWidth), 255))
  
  fill(clr)
  // fill(255)
  rect(x, y, w, w)

  x += w

  if (x > (width - w)) {
    x = startingWidth
    y += w
    if (y > (height - w)) {
      y = startingWidth
    }
  }

}
