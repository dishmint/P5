// File: 083018
let spacing
let scl

let x = 0

function setup(){
  createCanvas(400,400)
  background(0)
  scl = 10
  spacing = width/scl
  
}


function draw(){
  // background(0,10)
  background(0,4)
  push()
  stroke(255)
  
  if (frameCount % 60 == 0) {
    x += spacing
  }
  
  
  for (var j = 0; j < width; j+=spacing) {
    
    for (var i = 0; i < width; i+=spacing) {
      // TOP
      if ((i > spacing) || (j > (spacing))) {
        stroke(255,0,0)
        line(0 + i,0 + x,spacing + i,spacing + x)
      } else {
        stroke(255)
        line(0 + i,(spacing + j),spacing + i,j)
        
      }
      
      stroke(255)
      line(0 + i,(spacing + j),spacing + i,j)
      
      stroke(255,0,0)
      line(0 + i,(spacing + x),spacing + i,x)
      
    }
  }
  
  
  if (x > (width - spacing)) {
    x = 0
  }
  
  
  pop()
  
  
}
