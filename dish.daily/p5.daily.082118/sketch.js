// File: 082118

let size = 10

function setup(){
  createCanvas(400,400)
  background(0)
}


function draw(){
  background(0,2)
  let bzpt = bezierPoint(size,width/4,width - width/4,width - size,map(sin(frameCount * 0.01), -1, 1, 0, 1))
  
  noStroke()
  
  fill(255)
  // stroke(255)
  // noFill()
  // ellipse(bzpt, map(cos(frameCount * 0.01), -1, 1, size, height - size), size,size)
  ellipse(bzpt, height/2, size,size)
  
  let bzpt2 = bezierPoint(size,width/4,width - width/4,width - size,map(sin(frameCount * 0.01), -1, 1, 1, 0))
  
  fill(255,0,0)
  // stroke(255,0,0)
  // noFill()
  ellipse(bzpt2, map(cos(frameCount * 0.01), -1, 1, size, height - size), size,size)
}
