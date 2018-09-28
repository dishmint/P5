// File: 092218

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0, 10)
  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255)
  let g = map(cos(frameCount * 0.01), -1, 1, 0, 255)
  let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)
  
  stroke(r,g,b)
  
  line(width/2, 0, width/2, height)
  
  stroke(255)
  line(width /3, 0, width/3, height)
  
  line(width - (width /3), 0, width - (width/3), height)
}
