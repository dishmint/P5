// File: 052118

function setup(){
  createCanvas(400,400)
  background(0)
  pixelDensity(displayDensity())
}


function draw(){
  background(0,10)
  for (var i = 0; i < 10; i++) {
    push()
    stroke(255/(i+1), (i/10) * 255, i)
    noFill()
    let size = 1
    let ptx = map(cos(frameCount * 0.01) * i, -1, 1, size, width - size)
    let pty = map(sin(frameCount * 0.01), -1, 1, size, height - size)
    
    ellipse(ptx , pty, size, size)
    ellipse(ptx, pty - sin(frameCount * 0.01)*i, size, size)
    pop()
  }

}
