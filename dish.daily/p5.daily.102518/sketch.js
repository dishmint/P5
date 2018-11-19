// File: 102518

let wi

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  wi = 5
}


function draw(){
  background(0, 10)
  noStroke()
  fill(255, 32, 150)
  let x = map(cos(frameCount * 0.01), -1, 1, wi, width - wi)
  let y = map(sin(frameCount * 0.01), -1, 1, wi, height - wi)
  // ellipse(x + cos(frameCount * 125),y + sin(frameCount * 125), wi, wi)
  
  for(let i = 1; i < 5; i++){
    ellipse((x + cos(frameCount * 125))*i,(y + sin(frameCount * 125))*i, wi, wi)
  }
  }
