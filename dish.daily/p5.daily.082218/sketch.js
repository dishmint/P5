// File: 082218

let lineCount = 50

let x,y
function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,5)
  x = map(cos(frameCount * 0.01), -1, 1, 0, width)
  y = map(sin(frameCount * 0.01), -1, 1, 0, height)
  for (var i = 1; i <= lineCount; i++) {
    stroke(255/i)
    line((width/i), (height/i), x, y)
  }
}
