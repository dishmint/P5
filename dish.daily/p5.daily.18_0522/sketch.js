// File: 052218

let w
let h

let change = 1
function setup() {
  createCanvas(400, 400)
  background(0)
  pixelDensity(displayDensity())

  rectMode(CENTER)

  w = width - 2
  h = height - 2
}

function draw() {
  background(0,10)
  // background(0, 50)

  w -= change
  h -= change

  for (var i = 0; i < 10; i++) {
    stroke(255, 0, 255)
    noFill()

    rect(width / 2, height / 2, w * (i+1), h*((i + 1)/2))

    if (w < width / 10) {
      w = width - 2
      h = height - 2
    }
  }

}
