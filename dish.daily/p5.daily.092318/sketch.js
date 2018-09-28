// File: 092318

let index = 0

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0, 0)
  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255)
  let g = map(cos(frameCount * 0.01), -1, 1, 0, 255)
  let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)
  
  stroke(r,g,b)
  
  line(width/2, 0, width/2, height)
  
  
    noStroke()
    fill(r,g,b)
    ellipse(width /3, index, 2,2)
    ellipse(width - (width /3), index, 2,2)
  
  
  index ++
  
  if(index > height){
    index = 0
  }
  
}
