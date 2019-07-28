// File: 071718
let x = 0

function setup(){
  createCanvas(400,400)
  background(0)
  rectMode(CENTER)
}

// CELERITY

function draw(){
  x+= 0.01
  
  noStroke()
  fill(map(sin(x), -1, 1, 0, 255))
  rect(width/2, height/2, 50,50)
  
  noFill()
  stroke(map(sin(x), -1, 1, 255,0))
  rect(width/2, height/2, 100,100)
  
  stroke(map(cos(x), -1, 1, 255,0),0,0,map(cos(x), -1, 1, 255,0))
  rect(width/2, height/2, 150,150)
}
