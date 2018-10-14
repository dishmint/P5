// File: 101418


let spacing

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
  
  spacing = width / 5
}


function draw(){
  background(0, 2)
  push()
  translate(width/2, height/2)
  scale(.5)
  rotate(frameCount * 0.01)
  translate(-width/2, -height/2)
  for (var i = 0; i < width; i += spacing) {
    for (var j = 0; j < height; j += spacing) {
      let r = map(cos(frameCount * 0.01), -1, 1, 0, 255)
      let g = map(i, 0, width, 0, 255)
      let b = map(j, 0, height, 0, 255)
      
      // stroke(r,g,b)
      // line(i,j, spacing, spacing )
      
      fill(r,g,b)
      // fill(r,g,b, 10)
      noStroke()

      ellipse(i,j, spacing, spacing )
      // rect(i,j, spacing, spacing )
    }
  }
  pop()
}
