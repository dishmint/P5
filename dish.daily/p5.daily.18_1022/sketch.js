// File: 102218

let x,y,w,h

let speed

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  x = 0
  y = width/2
  w = 0
  h = 0
}


function draw(){
  background(0,2)
  w = map(x, 0, width, 5, 50)
  h = map(x, 0, width, 5, 50)
  
  speed = map(x, 0, width, 1, 0.5)
  let r = map(w, 5, 50, 0, 255)
  let g = map(w, 5, 50, 255, 0)
  stroke(r, g, 0)
  fill(r, g, 0)
  ellipse(x, y, w, h)
  
  x += speed
  if (x > width) {
    x = 0
  }
}
