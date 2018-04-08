let circleSet
let escelate = 0
let dir = 1
function setup() {
  createCanvas(400, 400)
  background(0)
  pixelDensity(displayDensity())

  circleSet = new Array(20)

}

function draw() {
  // Circles
  // Concentrics

  // background(255, escelate/40)
  background(0, escelate / 40)
  // background(0, 50)
  stroke(255);
  noFill()

  circleSet.fill(0).map((x, i) => x = ellipse(width / 2, height / 2, (circleSet.length * i), (circleSet.length * i)))

  stroke(255,0,0)
  circleSet.fill(0).map((x, i) => x = ellipse((width / 2), (height / 2), (circleSet.length * i) - escelate, (circleSet.length * i) - escelate))

  escelate += dir
  if (escelate > width || escelate > height || escelate < 0) {
    dir *= -1
  }
}
