// File: 100218

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0, 2)
  let y = random(0, height)
  stroke('red')
  line(0, y, width, y)
}
