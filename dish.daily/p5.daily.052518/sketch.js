// File: 052518

function setup(){
  createCanvas(400,400)
  background(0)
  ellipseMode(CENTER)
}


function draw(){
  background(0,5)
  push()
  stroke(255)
  fill(255,0,0)
  let x = map(cos(frameCount * 0.01), -1, 1, 0, 1)
  let y = map(sin(frameCount * 0.01), -1, 1, 0, 1)
  
  let ptx = bezierPoint(10,width/2,width - 10,width/2,x)
  let pty = bezierPoint(10,height/2,height - 10,height/2,y)
  
  ellipse(ptx, pty, 10, 10)
  
  let px = bezierPoint(width/2,10,width/2,width - 10,x)
  let py = bezierPoint(10,height/2,height - 10,height/2,y)
  
  ellipse(px, py, 10, 10)

  pop()
  
  
}
