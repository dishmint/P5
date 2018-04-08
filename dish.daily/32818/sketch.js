// File: 32818

// Explore circle rotation


let change
let dir = 1


function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  ellipseMode(CENTER)
}


function draw(){

  push()
  stroke('tomato')
  ellipse(width/2, height/2, (width/4) - change, height/4)
  pop()

  change ++
  if (change > (3*width/4) || change < width/4) {
    dir *= -1
  }

}
