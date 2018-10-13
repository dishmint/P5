// File: 101318

let x1,x2,y1,y2
let spacing

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  x1 = 0
  y1 = 0
  x2 = 10
  y2 = 10
  
  spacing = width / 10
}


function draw(){
  background(0, 2)
  stroke(255, 20, 50)
  
  x1 += 5
  x2 += 5
  
  line(x1, y1, x2, y2)
  
  if (x1 > (width - spacing) || x2 > (width - spacing)) {
    x1 = 0
    x2 = 10
    y1 += 10
    y2 += 10
  }
}
