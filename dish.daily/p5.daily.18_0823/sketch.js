// File: 082318
let x = 0

function setup(){
  createCanvas(400,400)
  background(0)
}


function draw(){
  background(0,2)
  let h = height/2 + ((height/4) * sin(frameCount * 0.01))
  noStroke()
  fill(255)
  ellipse(x, h, 10,10)
  
  x++
  if(x > width){
    x = 0
  }
}
