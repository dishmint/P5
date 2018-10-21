// File: 102118

let env

let gridSpacing = 40
let numBoundaryPoints = 5

function setup(){
  createCanvas(400,400)
  pixelDensity(displayDensity())
  
  env = new Stage(gridSpacing, numBoundaryPoints)
  env.load()
  
  background(0)
}

function draw(){
  background(0, 10)
  
  if (frameCount % 30 === 0) {
    env = new Stage(gridSpacing, numBoundaryPoints)
    env.load()
  }
  
  env.show()
  
}
