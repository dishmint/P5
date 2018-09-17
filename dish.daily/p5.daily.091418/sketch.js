// File: 091418
let positions = []
let scl
let w, h
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
  w = width/3
  h = height/3
  
  scl = w/10
  
  for(let i = scl; i < w; i += scl){
    for(let j = scl; j < h; j += scl){
      let vec = createVector(i, j)
      positions.push(vec)
    }
  }
  
  
}


function draw(){
  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255)
  let g = map(cos(frameCount * 0.01), -1, 1, 0, 255)
  let b = map(tan(frameCount * 0.01), -1, 1, 0, 255)
  background(255 - r,255 - g,255 - b, 5)
  // background(255 - r,255 - g,255 - b, 2)
  
  push()
  noStroke()
  translate(width/2, height/2)
  for (let pos of positions) {
    // rotate(frameCount * 0.001)
    rotate(frameCount * 0.005)
    // rotate(frameCount * 0.0001)
    fill(r, g, b)
    ellipse(pos.x, pos.y, scl/3, scl/3)
  }
  pop()
}
