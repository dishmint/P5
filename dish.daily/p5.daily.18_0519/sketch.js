// File: 051918

function setup(){
  createCanvas(400,400)
  pixelDensity(displayDensity())
  background(0)
}


function draw(){
  background(0,10)
  stroke(255)
  let x1 = map(sin(frameCount * 0.01), -1, 1, 0, width)
  let x2 = map(sin(frameCount * 0.01), -1, 1, width, 0)
  line(x1,0,x2, height)


  let y1 = map(sin(frameCount * 0.01), -1, 1, 0, height)
  let y2 = map(sin(frameCount * 0.01), -1, 1, height, 0)
  stroke(255,0,0)
  line(0, y1, width, y2)
}
