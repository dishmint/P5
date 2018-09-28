// File: 092518

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  // background(0)
  // background(0, 2)
  // background(0, 10)
  translate(width/2, height/2)
  rotate(4.708 * frameCount)
  let x = map(sin(frameCount * 0.01), -1, 1, 10, width/4 - 10)
  let y = map(sin(frameCount * 0.01), -1, 1, 10, height/4 - 10)
  

  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255)
  let g = map(cos(frameCount * 0.01), -1, 1, 0, 255)
  let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)
  
  stroke(255, g, b)
  line(0 + x, 0 + y, 10 + x, 10 + y)
  noStroke()
  fill(255, g, b)
  ellipse(x + 10,y + 10, 5, 5)
  ellipse(x,y, 5, 5)
}
